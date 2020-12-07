import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseService } from './course.service';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { MatComponentModule } from './mat-component.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatComponentModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
