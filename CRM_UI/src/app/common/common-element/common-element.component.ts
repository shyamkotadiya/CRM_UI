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
  _formControlNameRef: any;
  get formControlNameRef() {
    return this._formControlNameRef as FormControl;
  }
  @Input() set formControlNameRef(value: any) {
    this._formControlNameRef = value;
  }
  @Output() blurEmitter: EventEmitter<any> = new EventEmitter();;
  array = [1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 11, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1];
  value: string = '';
  text: string = 'Hi';

  onChange(_: any) {
  }

  onTouch() {

  }
  constructor(private communicationService: ComponentCommunicationServiceService,
    private eRef: ElementRef) {
    this.formControlNameRef = this.formControlNameRef as FormControl;
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

  onNgModelChange() {
    this.onChange(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.onNgModelChange()
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

  geDropdownLabel(value: string) {
    let temp = _.filter(this.options, { id: value })
    if (temp && temp.length != 0 && temp[0]) {
      return temp[0]["value"];
    }
    return " ";
  }

  onOptionSelection(option: any) {
    this.value = option ? option.id : '';
    this.hideDropDown();
  }
}


