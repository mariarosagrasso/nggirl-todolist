import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `

    <input class="todo-input"
           #inputElementRef
           [placeholder]="title"
           (keyup.enter)="submitValue($event.target.value)">
    ​
    <button class="btn"
            (click)="submitValue(inputElementRef.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Type content here...';
  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
    console.log('test');
  }
}
