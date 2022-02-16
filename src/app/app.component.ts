import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Subject, Subscription} from 'rxjs'
// import { DataService } from './services/data.service';
import {delay} from 'rxjs/operators'
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './ref.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // modal = false
  @ViewChild(RefDirective) refDir : any
 constructor(public resolver: ComponentFactoryResolver ){}

  ngOnInit(): void { }

 showModal(){
    const modalfactory = this.resolver.resolveComponentFactory(ModalComponent)
    this.refDir.containerRef.clear()

    const comp = this.refDir.containerRef.createComponent(modalfactory)
    comp.instance.title = "Vova"
    comp.instance.close.subscribe(()=> {
    this.refDir.containerRef.clear()
  })
  }

}
