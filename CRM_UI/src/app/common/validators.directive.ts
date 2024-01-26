import { AfterViewChecked, AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as _ from 'lodash';
import { ComponentCommunicationServiceService } from './component-communication-service.service';
@Directive({
  selector: '[validators]'
})
export class ValidatorsDirective implements OnDestroy, OnChanges, OnInit, AfterViewChecked, AfterViewInit {
  protected _elementClass: string[] = [];
  @Input() type: any = '';
  @Input() value: string = '';
  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }
  set(val: string) {
    this._elementClass = val.split(' ');
  }
  viewInit = false;
  constructor(private el: ElementRef,
    private communicationService: ComponentCommunicationServiceService,
    private control: NgControl) {

    this.control.valueChanges?.subscribe((value) => {
      this.ngOnChanges();
    })
    // this.dataTransferSubscribe = this.communicationService.dataTransferToCompoenentObservable.subscribe((data) => {
    //   if (data.from === 'blurEvent' && data.data.path[2].className == this.el.nativeElement.className) {
    //     let val: SimpleChange = new SimpleChange('', data.data.target.value, false);
    //     let simCh: SimpleChanges = {
    //       "value": val
    //     };
    //     this.ngOnChanges(simCh);
    //   }
    // })

  }
  ngAfterViewInit(): void {
    this.viewInit = true;
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked not implemented.');
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    // this.dataTransferSubscribe.unsubscribe();
  }


  @HostListener('keyup', ['$event'])
  ngOnChanges() {
    console.log('this.control.invalid')
    if (this.control.invalid && this.viewInit) {
      this.makeBorderChangeColor('red')
    } else {
      this.makeBorderChangeColor('')
    }
    // if (this.type && changes && changes['value']) {
    //   if (this.type.type === 'text' && this.type.operator === 'notNull') {
    //     if (changes['value']['currentValue'] == null || String(changes['value']['currentValue']).trim().length == 0)
    //       this.makeBorderChangeColor('red');
    //     else
    //       this.makeBorderChangeColor('');
    //   }
    //   else if (this.type.type === 'number' && this.type.limit === 10) {
    //     if (changes['value']['currentValue'] == null || String(changes['value']['currentValue']).trim().length != 10)
    //       this.makeBorderChangeColor('red');
    //     else
    //       this.makeBorderChangeColor('');
    //   }

    // }

  }

  makeBorderChangeColor(color: string) {
    // $('.' + cass).find('input').addClass('redBorder');
    // console.log('before----->' + this.el.nativeElement?.children[0]?.children[0]?.className);

    if (_.get(this.el, 'nativeElement.classList', undefined)) {
      let classNames: string = this.el.nativeElement.className;
      let indexOfRedClass = classNames.indexOf('redBorder');
      if (color == 'red') {
        if (indexOfRedClass == -1)
          this.el.nativeElement.className = classNames + ' redBorder';
      } else {
        if (indexOfRedClass != -1) {
          this.el.nativeElement.className = classNames.replace('redBorder', '');
        }
      }

    }
  }

}
