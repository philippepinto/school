import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

export class Unsubscriber {

  protected _subscriptions: Subscription[] = [];

  public constructor() {
    let destroy = (this as any).ngOnDestroy;

    (this as any).ngOnDestroy = function() {
      if (destroy) {
        destroy.bind(this)();
      }

      this.unsubscribe();
    };
  }

  protected unsubscribe() {
    for (let i = 0, len = this._subscriptions.length; i < len; i++) {
      this._subscriptions[i].unsubscribe();
    }

    this._subscriptions = [];
  }

  get subscriptions() {
    return this._subscriptions;
  }

}

export default Unsubscriber;
