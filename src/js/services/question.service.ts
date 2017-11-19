import Rx from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable, EventEmitter, isDevMode } from '@angular/core';
import { Http, Response } from '@angular/http';

import { scrollTo } from 'app/helpers';

import Question from 'app/models/question';

@Injectable()
export class QuestionService {

  private _scrollDuration = 100;
  private _onReady = new EventEmitter<void>();
  private _onActivateQuestion = new EventEmitter<number>();
  private _onCompleted = new EventEmitter<void>();
  private _onClose = new EventEmitter<void>();
  private _onRefresh = new EventEmitter<void>();

  private _numberOfQuestions: number;
  private _progress: number;

  private _questionsData: Rx.Observable<Question[]>;
  private _questions: Question[];

  private _mockUrl = 'assets/mock/questions2.json';

  constructor(private http: Http) {
  }

  public init(numberOfQuestions: number): Rx.Observable<Question[]> {
    this._numberOfQuestions = numberOfQuestions;
    return this.loadQuestions();
  }

  public ready() {
    scrollTo(document.body, 0, this._scrollDuration).then(() => {
      this._onReady.emit();
    });
  }

  public close() {
    scrollTo(document.body, 0, this._scrollDuration).then(() => {
      this.onClose.emit();
    });
  }

  public refresh() {
    this._progress = 0;
    this._questions = [];

    this.init(this._numberOfQuestions)
      .first()
      .subscribe((questions: Question[]) => {
        scrollTo(document.body, 0, this._scrollDuration).then(() => {
          this.onRefresh.emit();
        });
      });
  }

  public activateQuestion(questionNumber: number) {
    scrollTo(document.body, 0, this._scrollDuration).then(() => {
      this._onActivateQuestion.emit(questionNumber);
    });
  }

  public completed() {
    scrollTo(document.body, 0, this._scrollDuration).then(() => {
      this._onCompleted.emit();
    });
  }

  public progress() {
    return this.calculateProgress();
  }

  get onReady() {
    return this._onReady;
  }

  get onActivateQuestion() {
    return this._onActivateQuestion;
  }

  get onCompleted() {
    return this._onCompleted;
  }

  get onClose() {
    return this._onClose;
  }

  get onRefresh() {
    return this._onRefresh;
  }

  private calculateProgress() {
    let count = 0;

    for (let question of this.questions) {
      if (question.status.answered) {
        count++;
      }
    }

    return (count / this.totalQuestions) * 100;
  }

  get totalQuestions(): number {
    return this.questions.length;
  }

  get questions(): Question[] {
    return this._questions;
  }

  private loadQuestions(): Rx.Observable<Question[]> {
    const base: Question[] = [
      { id: 1, title: 'Votre définition du bonheur ?', description: 'testdes',
          'status':
          { answered: false, answer: '...'}},
          { id: 2, title: 'Comment décririez-vous votre enfance ?', description: 'testdes',
          'status':
          { answered: false, answer: '...'}}
       ];

      this._questions = base;

      return Rx.Observable.of(this._questions);
  }

    /*return this.http.get('app/heroes.json')
      .map((res: Response) => res.json());

    // return [
    //   { 'id': 11, 'name': 'Chewbacca' },
    //   { 'id': 12, 'name': 'Rey' },
    //   { 'id': 13, 'name': 'Finn (FN2187)' },
    //   { 'id': 14, 'name': 'Han Solo' },
    //   { 'id': 15, 'name': 'Leia Organa' }
    // ];*/

  private loadMockQuestions(): Rx.Observable<Question[]> {
    let requestUrl = this._mockUrl;

    return this.http.get(requestUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json() || {};
  }

  private handleError(error: any) {
    let errMsg = error.message || 'Error loading questions2.';
    console.error(errMsg);
    return Rx.Observable.throw(errMsg);
  }
}

export default QuestionService;
