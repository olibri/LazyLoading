import { Directive, Input, Output, ViewContainerRef } from "@angular/core";

@Directive({
  selector:'[appRef]'
})


export class RefDirective{
  constructor(public containerRef: ViewContainerRef){}
}
