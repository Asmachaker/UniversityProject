import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import {PageHeaderModule} from '../../shared';
import {StudentRoutingModule} from './student-routing.module';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
  declarations: [
    StudentComponent
  ],
    imports: [
        CommonModule,
        PageHeaderModule,
        StudentRoutingModule,
        NgbDatepickerModule,
        ReactiveFormsModule,
        NgSelectModule, FormsModule
    ]
})
export class StudentModule { }
