import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnimationService, AnimationBuilder } from 'css-animator';

import template from './landing.html';
import mainStyle from './landing.css';

@Component({
  selector: 'landing',
  host: {
    'hidden': 'true'
  },
  template: template,
  styles: [
    mainStyle
  ]
})
export class LandingComponent implements OnInit, AfterViewInit {

  public submitted = false;

  private _animator: AnimationBuilder;

  constructor(
    private _elementRef: ElementRef,
    private router: Router,
    animationService: AnimationService) {
    this._animator = animationService.builder();
  }

  public ngOnInit() {
  }

  public ngAfterViewInit() {
    this._animator
      .setType('fadeInUp')
      .setDelay(150)
      .setDuration(700)
      .show(this._elementRef.nativeElement);
  }

  public startQuiz() {
    if (this.submitted) {
      return;
    }

    this.submitted = true;

    this._animator
      .setType('fadeOutDown')
      .setDelay(350)
      .setDuration(600)
      .hide(this._elementRef.nativeElement.firstChild)
      .then(() => {
        this.router.navigate(['/quiz']);
      });
  }

}

export default LandingComponent;
