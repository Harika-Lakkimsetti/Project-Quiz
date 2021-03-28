import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
@Input() correctAnswer:boolean=false;
  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
@HostListener('click')onAnsered()
{
if(this.correctAnswer)
this.renderer.setStyle(this.elRef.nativeElement,"background-color",'powderblue');
else
this.renderer.setStyle(this.elRef.nativeElement,"background-color",'powderblue');
}
}
