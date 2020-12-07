import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, timer } from 'rxjs';
import { CourseEditComponent } from './course-edit/course-edit.component';
// import { timer } from 'rxjs/observable/timer'
// import 'rxjs/add/observable/timer';
// import { timer } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-demo';
  value = 2;
  isChecked = true;
  isLoading = false;
  timer;
  progress = 0;
  foods = [
    { value: 1, viewValue: 'Apple' },
    { value: 2, viewValue: 'Orange' },
    { value: 3, viewValue: 'Grapes' },
    { value: 4, viewValue: 'Litchy' },
    { value: 5, viewValue: 'Cherry' }
  ];
  chipsEg = [{ name: 'rat' }, { name: 'cat' }, { name: 'cow' }, { name: 'buffalo' }];
  constructor(private dialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress == 100) {
        clearInterval(this.timer);
      }
    }, 10);
  }

  // constructor() {
  //   this.isLoading = true;
  //   this.getCourses().subscribe(x => this.isLoading = false);
  // }

  // getCourses() {
  //   return timer(2000);
  // }

  onChange($event) {
    console.log($event);
  }
  onSelectChips(obj) {
    this.chipsEg.filter(c => c != obj).forEach(c => c['selected'] = false);
    obj.selected = !obj.selected;
    console.log(obj);
  }
  openDialog() {
    this.dialog.open(CourseEditComponent, {
      data: { courseId: 1 }
    }).afterClosed().subscribe(result => console.log(result));
  }
}
