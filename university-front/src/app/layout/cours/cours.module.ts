import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursComponent } from './cours.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoursRoutingModule} from './cours-routing.module';



@NgModule({
  declarations: [
    CoursComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CoursRoutingModule
    ]
})
export class CoursModule { }
