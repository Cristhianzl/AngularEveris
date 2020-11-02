import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ], 
    imports: [
      CommonModule,
      FormsModule,
      StarModule,
      AppPipeModule,
        RouterModule.forChild([
              {
                path: 'course/info/:id', component: CourseInfoComponent
              },
              {
                path: 'courses', component: CourseListComponent
              }
        ])
    ]
})
export class CourseModule{

}