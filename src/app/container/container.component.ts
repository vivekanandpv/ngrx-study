import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {incrementActionCreator} from "../feature/general.actions";
import {counterSelector} from "../feature/general.selectors";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  counter$!: Observable<number>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select(counterSelector);
  }

  increment() {
    this.store.dispatch(incrementActionCreator({
      factor: 0
    }));
  }

}
