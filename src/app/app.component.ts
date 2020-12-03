import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  value = 2;
  isChecked = true;
  foods = [
    { value: 1, viewValue: 'Apple' },
    { value: 1, viewValue: 'Orange' },
    { value: 1, viewValue: 'Grapes' },
    { value: 1, viewValue: 'Litchy' },
    { value: 1, viewValue: 'Cherry' }
  ]
  onChange($event) {
    console.log($event);
  }
}
