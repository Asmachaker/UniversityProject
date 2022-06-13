import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TeacherRoutingModule} from './teacher-routing.module';



@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, TeacherRoutingModule
  ]
})
export class TeacherModule { }
