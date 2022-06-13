import {Component, OnInit} from '@angular/core';
import {StudentService} from '../../shared/services/student.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {routerTransition} from '../../router.animations';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CoursService} from '../../shared/services/cours.service';
import {TeacherService} from '../../shared/services/teacher.service';
import {forkJoin} from 'rxjs';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css'],
    animations: [routerTransition()]
})
export class StudentComponent implements OnInit {
    students: any[] = [];
    studentForm: FormGroup;
    cours: any[] = [];
    teachers: any[] = [];

    constructor(private studentService: StudentService, private modalService: NgbModal, private fb: FormBuilder,
               ) {
    }

    ngOnInit(): void {
        this.studentForm = this.fb.group({
            numInscription: [],
            prenomETU: [],
            nameETU: [],
        });
        this.getAllStudents();
    }

    getAllStudents() {
        this.studentService.getAll().subscribe((r: any) => {
            this.students = r;
        });
    }

    open(content) {
        this.studentForm.reset();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
        /*.result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });*/
    }

    save() {
        const form = this.studentForm.value;
        const obj = {
            numInscription: form.numInscription,
            prenomETU: form.prenomETU,
            nameETU: form.nameETU,
            dateEntree: form.numInscription ? this.students.filter(u => u.numInscription == form.numInscription).shift().dateEntree : null
        };
        this.studentService.save(obj).subscribe(u => {
            this.getAllStudents();
        });
    }

    delete(id: any) {
        this.studentService.delete(id).subscribe(() => {
            this.students = this.students.filter(u => u.numInscription != id);
        });
    }

    edit(s: any, content) {
        this.studentForm.controls.numInscription.setValue(s.numInscription);
        this.studentForm.controls.prenomETU.setValue(s.prenomETU);
        this.studentForm.controls.nameETU.setValue(s.nameETU);
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
    }
}
