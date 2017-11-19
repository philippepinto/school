import Rx from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/take';

import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

import { AnimationService, AnimationBuilder } from 'css-animator';
import { Unsubscriber } from 'app/components';
import { QuestionService } from 'app/services';

import Question from 'app/models/question';

import template from './quiz-card.html';
import mainStyle from './quiz-card.css';


@Component({
  selector: 'quiz-card',
  template: template,
  styles: [
    mainStyle
  ]
})
export class QuizCardComponent extends Unsubscriber implements OnInit {
  @Input() public question: Question; // Should be of type Question
  @Output() public showNextButton = new EventEmitter();
  @Output() public hideNextButton = new EventEmitter();

  private _animator: AnimationBuilder;

  private _active: boolean = false;
  private _markedAnswer: number = -1;
  private _countdown = 10;
  private _nextTimeout: any = null;

  constructor(private _elementRef: ElementRef, private _questionService: QuestionService, animationService: AnimationService) {
    super();
    this._animator = animationService.builder().setDuration(600);
    this.subscribeToActivate();
    this.subscribeToClose();
  }

  public ngOnInit() {
    if (this.question.id === this._questionService.totalQuestions) {
      setTimeout(() => {
        this._questionService.ready();
      }, 100);
    }
  }

  public answerClicked(index: number, checked: boolean) {
    if (!checked) {
      this._markedAnswer = -1;
      this.hideNextButton.next();
      return;
    }

    this.showNextButton.next();
    this._markedAnswer = index;
  }

  public nextQuestion(button: HTMLElement) {
    if (this._nextTimeout !== null) {
      clearTimeout(this._nextTimeout);
    }

    if (!this.hasMarkedAnswer) {
      return;
    }

    this.questionService.questions.find(x => x.id === this.question.id).status.answered = true;
    this.questionService.questions.find(x => x.id === this.question.id).status.answer = this.question.status.answer;
        this._nextTimeout = setTimeout(() => {
      this._questionService.activateQuestion(this.question.id + 1);
      this._nextTimeout = null;
    }, 400);
  }

  get hasMarkedAnswer() {
    return this._markedAnswer > -1;
  }

  get markedAnswer() {
    return this._markedAnswer;
  }

  get active() {
    return this._active;
  }

  get countdown() {
    return this._countdown;
  }

  get questionService() {
    return this._questionService;
  }

  private subscribeToActivate() {
    let subscription = this._questionService
      .onActivateQuestion.subscribe((questionNumber: number) => {
        if (questionNumber === this.question.id) {
          this.activateQuestion();
        } else if (this.active) {
          this.deactivateQuestion();
        }
      });

    this.subscriptions.push(subscription);
  }

  private subscribeToClose() {
    let subscription = this._questionService
      .onClose
      .subscribe((questionNumber: number) => {
        if (this._active) {
          this._animator
            .setType('fadeOutDown')
            .setDuration(600)
            .hide(this._elementRef.nativeElement);
        }
      });

    this.subscriptions.push(subscription);
  }

  private activateQuestion() {
    this._active = true;
    this._animator.setType('fadeInRight').setDelay(200);

    if (this.question.id === 1) {
      this._animator.setType('fadeInUp');
    }

    this._animator.show(this._elementRef.nativeElement);
  }

  private deactivateQuestion() {
    this._animator.setType('fadeOutLeft').setDelay(0).setDuration(600);

    /*this.question.status.selectedAnswer = this._markedAnswer;
    this.question.status.wasCorrect = this.answerIsCorrect();*/

    if (this.question.id === this._questionService.totalQuestions) {
      this._animator.setType('fadeOutDown');
      this._questionService.completed();
    }

    this._animator.hide(this._elementRef.nativeElement);
    this._active = false;
  }

  private onKey(value: string) {
    this.question.status.answer = value;
  }

}

export default QuizCardComponent;
