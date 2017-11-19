import IScroll from 'iscroll';
import { AfterContentInit, Component, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

import { Unsubscriber } from 'app/components';
import { QuestionService } from 'app/services';

import template from './quiz-status.html';
import mainStyle from './quiz-status.css';

@Component({
  selector: 'quiz-status',
  template: template,
  styles: [
    mainStyle
  ]
})
export class QuizStatusComponent extends Unsubscriber implements AfterContentInit, OnDestroy {

  @Output() public modalActions = new EventEmitter<string | MaterializeAction>();

  private _players: any = [];
  private _modal: HTMLElement = null;
  private _scroll: IScroll = null;

  constructor(private _questionService: QuestionService, private _elementRef: ElementRef) {
    super();
  }

  public ngAfterContentInit() {
    this._modal = this._elementRef
      .nativeElement
      .querySelector('#status');

    this._scroll = new IScroll(this._modal, {
      deceleration: 0.005,
      mouseWheel: true,
      mouseWheelSpeed: 10,
      probeType: 2,
      tap: false,
      click: true
    });

    let onActivateQuestion = this._questionService
    .onActivateQuestion
    .subscribe(() => {
      this.refreshScroll();
    });

    let onCompleted = this._questionService
    .onCompleted
    .subscribe(() => {
      this.refreshScroll();
    });

    this.subscriptions.push(onActivateQuestion);
    this.subscriptions.push(onCompleted);
  }

  public ngOnDestroy() {
    if (this._scroll) {
      this._scroll.destroy();
      this._scroll = null;
    }
  }

  public refreshScroll() {
    this._modal.style.display = 'initial';
    setTimeout(() => {
      this._modal.style.display = 'hidden';
      this._scroll.refresh();
    });
  }

  public openModal() {
    this.modalActions.emit({ action: 'modal', params: ['open'] });
  }

  public closeModal() {
    this.modalActions.emit({ action: 'modal', params: ['close'] });
  }

  public stopAllPlayers() {
    for (let p of this._players) {
      this.stopPlayback(p.player);
    }
  }

  public stopPlayback(player: HTMLAudioElement) {
    let p = this.getPlayer(player);

    p.isPlaying = false;
    player.currentTime = 0;
    player.pause();
  }

  public startPlayback(player: HTMLAudioElement) {
    let p = this.getPlayer(player);
    this.stopAllPlayers();

    p.isPlaying = true;
    player.currentTime = 0;
    player.play();
  }

  public togglePlayback(player: HTMLAudioElement) {
    if (player.ended || player.paused) {
      this.startPlayback(player);
      return;
    }

    this.stopPlayback(player);
  }

  public isAudioPlaying(player: HTMLAudioElement) {
    let p = this.getPlayer(player);

    if (p.isPlaying) {
      return true;
    }

    return false;
  }

  public getPlayer(player: HTMLAudioElement) {
    for (let p of this._players) {
      if (p.player === player) {
        return p;
      }
    }

    let entry = { player: player };
    this._players.push(entry);

    return entry;
  }

  get questionService() {
    return this._questionService;
  }

}

export default QuizStatusComponent;
