import {Component, OnInit} from '@angular/core';
import {CoursService} from '../../shared/services/cours.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {routerTransition} from '../../router.animations';

@Component({
    selector: 'app-cours',
    templateUrl: './cours.component.html',
    styleUrls: ['./cours.component.css'],
    animations: [routerTransition()]
})
export class CoursComponent implements OnInit {
    cours: any[] = [];
    coursForm: FormGroup;

    constructor(private coursService: CoursService, private fb: FormBuilder, private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.coursForm = this.fb.group({
            codeC: [],
            libelleC: [],
        });
        this.getAllCours();
    }

    getAllCours() {
        this.coursService.getAll().subscribe(r => {
            this.cours = r;
        });
    }

    open(content) {
        this.coursForm.reset();
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
    }

    delete(id) {
        this.coursService.delete(id).subscribe(() => {
            this.cours = this.cours.filter(u => u.codeC != id);
        });
    }

    edit(s: any, content) {
        this.coursForm.controls.codeC.setValue(s.codeC);
        this.coursForm.controls.libelleC.setValue(s.libelleC);
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true});
    }

    save() {
        this.coursService.save(this.coursForm.value).subscribe(u => {
            this.getAllCours();
        });
    }
}
