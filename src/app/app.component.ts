import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Subject, Subscription} from 'rxjs'
import {delay} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
  }

}
