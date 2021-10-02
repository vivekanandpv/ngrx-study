import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {languageSelector} from "../feature/general.selectors";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentLanguage$!: Observable<string>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.currentLanguage$ = this.store.select(languageSelector);
  }
}
