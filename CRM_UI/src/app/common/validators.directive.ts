import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as _ from 'lodash';
@Directive({
  selector: '[validators]'
})
export class ValidatorsDirective implements OnChanges, AfterViewInit {
  protected _elementClass: string[] = [];
  @Input() type: any = '';
  @Input() value: string = '';
  viewInit = false;

  constructor(private el: ElementRef,
    private control: NgControl) {
  }

  ngAfterViewInit(): void {
    this.viewInit = true;
  }

  @HostListener('keyup', ['$event'])
  ngOnChanges() {
    if (this.viewInit) {
      if (this.control.invalid) {
        this.makeBorderChangeColor('red')
      } else {
        this.makeBorderChangeColor('green')
      }
    } else {
      this.makeBorderChangeColor('')
    }
  }

  makeBorderChangeColor(color: string) {
    if (_.get(this.el, 'nativeElement.classList', undefined)) {
      let classNames: string = this.el.nativeElement.className;
      let indexOfRedClass = classNames.indexOf('redBorder');
      if (color == 'red') {
        classNames = classNames.replace('greenBorder', '');
        this.el.nativeElement.className = classNames + ' redBorder';
      } else if (color == 'green') {
        classNames = classNames.replace('redBorder', '');
        this.el.nativeElement.className = classNames + ' greenBorder';
      } else {
        if (indexOfRedClass != -1) {
          this.el.nativeElement.className = classNames.replace('redBorder', '');
        }
      }
    }
  }

}
