import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppRoutes } from 'app/routes';
import { AppErrorHandler } from 'app/facades';

import { AnimatorModule } from 'css-animator';
import { MaterializeModule } from 'angular2-materialize';

import {
  AppComponent,
  LandingComponent,
  QuizComponent,
  QuizCardComponent,
  QuizDoneComponent,
  QuizNavComponent,
  QuizStatusComponent
} from 'app/components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    MaterializeModule,
    AnimatorModule
  ],
  declarations: [
    AppComponent,
    LandingComponent,
    QuizComponent,
    QuizNavComponent,
    QuizCardComponent,
    QuizDoneComponent,
    QuizStatusComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

export default AppModule;
