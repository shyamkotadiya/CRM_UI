import { Component, OnInit, Input, Output, EventEmitter, forwardRef, RendererFactory2, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentCommunicationServiceService } from '../component-communication-service.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-common-element',
  templateUrl: './common-element.component.html',
  styleUrls: ['./common-element.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommonElementComponent),
      multi: true,
    },
  ],
})
export class CommonElementComponent implements OnInit, ControlValueAccessor {

  @Input() dataUI: string = "";
  @Input() for: string = "";
  @Input() type: any = "";
  @Input() isRequired: boolean = false;
  @Input() options: Array<any> = [{ id: '', value: '' }];
  @Input() placeholderText: string = '';
  formControlNameRef: FormControl;
  _customFormControl:any
  get customFormControl() {
    return this.formControlNameRef as FormControl;
  }
  @Input() set customFormControl(value: any) {
    this.formControlNameRef = value;
  }

  @Input() minLength: number = 0;
  @Input() maxLength: number = Number.MAX_VALUE;
  @Output() blurEmitter: EventEmitter<any> = new EventEmitter();
  @Output() ngModelChangeEvent: EventEmitter<any> = new EventEmitter();;
  // value: string = '';
  text: string = 'Hi';

  onChange(_: any) {
  }

  onTouch() {

  }
  constructor(private communicationService: ComponentCommunicationServiceService,
    private eRef: ElementRef) {
    this.formControlNameRef = this._customFormControl as FormControl;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.eRef.nativeElement.contains(event.target)) {
      //click inside DOM element
    } else {
      //click outside DOM element
      this.text = "clicked outside";
      this.hideDropDown();
    }
  }

  onNgModelChange(event: any) {
    // this.onChange(this.value);
    this.ngModelChangeEvent.emit(event);
  }

  writeValue(obj: any): void {
    // this.value = obj;
    this.formControlNameRef.patchValue(obj);
    this.onNgModelChange(obj)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }


  ngOnInit(): void {

  }

  onClick(source: string) {
    if (source === 'onDropdown') {
      if ($('.optionsClass-' + this.for).hasClass("hide")) {
        $('.optionsClass-' + this.for).removeClass('hide');
        $('.upArrow-' + this.for).removeClass('hide');
        $('.downArrow-' + this.for).addClass('hide');
      } else {
        $('.optionsClass-' + this.for).addClass('hide');
        $('.upArrow-' + this.for).addClass('hide');
        $('.downArrow-' + this.for).removeClass('hide');
      }
    }
  }

  onBlur(event: any) {
    let json = {
      from: "blurEvent",
      data: event,
      type: this.type
    }

    this.communicationService.dataTransferToComponent(json)
  }


  hideDropDown() {
    $('.optionsClass-' + this.for).addClass('hide');
    $('.upArrow-' + this.for).addClass('hide');
    $('.downArrow-' + this.for).removeClass('hide');
  }

  geDropdownLabel() {
    let temp;
    if(this.formControlNameRef.value) {
      temp = _.find(this.options, { id: _.get(this.formControlNameRef, 'value', null) });
    } 

    if (!_.isEmpty(temp)) {
      return _.get(temp, 'value', " ");
    }
  }

  onOptionSelection(option: any) {
    let value = option ? option.id : '';
    this.formControlNameRef.patchValue(value);
    this.onNgModelChange(value);
    this.hideDropDown();
  }
}


