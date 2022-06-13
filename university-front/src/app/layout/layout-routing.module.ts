import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'students', pathMatch: 'prefix' },
            {
                path: 'students',
                loadChildren: () => import('./student/student.module').then((m) => m.StudentModule)
            },
            {
                path: 'teachers',
                loadChildren: () => import('./teacher/teacher.module').then((m) => m.TeacherModule)
            },
            {
                path: 'cours',
                loadChildren: () => import('./cours/cours.module').then((m) => m.CoursModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
