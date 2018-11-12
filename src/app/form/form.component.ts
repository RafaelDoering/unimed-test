import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @ViewChild('scrollFirst') private firstScroll: ElementRef;
  @ViewChild('scrollSecond') private secondScroll: ElementRef;
  @ViewChild('scrollThird') private thirdScroll: ElementRef;
  @ViewChild('scrollFourth') private fourthScroll: ElementRef;

  isBlur: boolean[] = [false, false, false, false];
  isDone: boolean[] = [false, false, false, false];
  value = 10;

  portalForm = this.fb.group({
    first: ['', [Validators.required, Validators.minLength(3)]],
    second: ['', [Validators.required, Validators.minLength(3)]],
    third: ['', [Validators.required, Validators.min(1)]],
    fourth: ['', [Validators.required, Validators.min(1)]],
  });

  scrollToElement(elementNumber) {
    console.log(elementNumber);
    if (elementNumber === 0) {
      this.firstScroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    } else if (elementNumber === 1) {
      this.secondScroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    } else if (elementNumber === 2) {
      this.thirdScroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    } else if (elementNumber === 3) {
      this.fourthScroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  }

  onKey(event, input) {
    if (this.isDone[input] === false) {
      if (input === 0) {
        if (this.portalForm.controls.first.status === 'VALID') {
          this.isDone[input] = true;
          this.value = 25;
        }
      } else if (input === 1) {
        if (this.portalForm.controls.second.status === 'VALID') {
          this.isDone[input] = true;
          this.value = 50;
        }
      } else if (input === 2) {
        this.isDone[input] = true;
        this.value = 75;
      } else if (input === 3) {
        this.isDone[input] = true;
        this.value = 100;
      }
    }
  }

  firstBtn() {
    console.log(this.portalForm);
  }

  consolelog(event) {
    console.log(event);
  }

  onBlur(inputNumber: number) {
    this.isBlur[inputNumber] = true;
  }

  onFocus(inputNumber: number) {
    this.isBlur[inputNumber] = false;
  }

  constructor(private fb: FormBuilder) { }
}
