import {Component, OnInit} from '@angular/core';
import {TeacherService} from '../../shared/services/teacher.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.css'],
    animations: [routerTransition()]
})
export class TeacherComponent implements OnInit {
    teachers: any[] = [];
    teacherForm: FormGroup;

    constructor(private teacherService: TeacherService, private fb: FormBuilder, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.teacherForm = this.fb.group({
            matricule: [],
            prenomENS: [],
            nomENS: [],
            adresseENS: [],
            diplome: []
        });
        this.getAllTeachres();
    }

    getAllTeachres() {
        this.teacherService.getAll().subscribe((r: any) => {
            this.teachers = r;
        });
    }

    edit(s: any, content) {
        this.teacherForm.controls.matricule.setValue(s.matricule);
        this.teacherForm.controls.prenomENS.setValue(s.prenomENS);
        this.teacherForm.controls.nomENS.setValue(s.nomENS);
        this.teacherForm.controls.adresseENS.setValue(s.adresseENS);
        this.teacherForm.controls.diplome.setValue(s.diplome);
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
    }

    delete(id) {
        this.teacherService.delete(id).subscribe(() => {
            this.teachers = this.teachers.filter(u => u.matricule != id);
        });
    }

    open(content) {
        this.teacherForm.reset();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
    }

    save() {
        this.teacherService.save(this.teacherForm.value).subscribe(u => {
            this.getAllTeachres();
        });
    }
}
