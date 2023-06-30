import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSubmitButton]',
})
export class SubmitButtonDirective {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    
  }

  @Input('appSubmitButton') set setStyle(transparent: boolean){
    const button = this.elementRef.nativeElement;

    if(transparent){
      this.renderer2.setStyle(button, "backgroundColor", "transparent");
    }else{
      this.renderer2.setStyle(button, "backgroundColor", "#17110D");
    }

    this.renderer2.setStyle(button, "display", "flex");
    this.renderer2.setStyle(button, "justify-content", "center");
    this.renderer2.setStyle(button, "alignItems", "center");
    this.renderer2.setStyle(button, "width", "84vw");
    this.renderer2.setStyle(button, "max-width", "362px");
    this.renderer2.setStyle(button, "height", "90px");
    this.renderer2.setStyle(button, "border-radius", "100px");
    this.renderer2.setStyle(button, "font-size", "32px");
    this.renderer2.setStyle(button, "text-decoration", "none");
  }
}
