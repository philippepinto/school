import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnimatesDirective } from 'css-animator';

import { Unsubscriber } from 'app/components';
import { QuestionService } from 'app/services';
import { Question } from 'app/models/question';

import template from './quiz.html';
import mainStyle from './quiz.css';

@Component({
  selector: 'quiz',
  template: template,
  styles: [
    mainStyle
  ],
  providers: [
    QuestionService
  ]
})
export class QuizComponent extends Unsubscriber implements OnInit {

  private _questions: Question[] = [];
  private _ready: boolean = false;

  constructor(
    private _router: Router,
    private _questionService: QuestionService
  ) {
    super();

    let onReady = this.questionService
      .onReady
      .subscribe(() => {
        this._ready = true;
        this.questionService.activateQuestion(1);
      });

      let onRefresh = this.questionService
      .onRefresh
      .subscribe(() => {
        this._questions = this.questionService.questions;
        this._ready = true;
      });

    this.subscriptions.push(onReady);
    this.subscriptions.push(onRefresh);
  }

  public ngOnInit() {
    this.questionService
      .init(1)
      .subscribe((questions) => {
        this._questions = this.questionService.questions;
      });
  }

  public trackByQuestion(question: Question) {
    return question.id;
  }

  public onGoHome(navAnimatesDirective: AnimatesDirective) {
    setTimeout(() => {
      this._router.navigate(['/']);
    }, 1000);

    this.questionService.close();
  }

  public onRefresh(navAnimatesDirective: AnimatesDirective) {
    this.questionService.close();

    setTimeout(() => {
      this._ready = false;
      setTimeout(() => {
        this.questionService.refresh();
      });
    }, 700);
  }

  public onClose(navAnimatesDirective: AnimatesDirective) {
    this.onGoHome(navAnimatesDirective);
  }

  get questions() {
    return this._questions;
  }

  get ready() {
    return this._ready;
  }

  get questionService() {
    return this._questionService;
  }

}

export default QuizComponent;
