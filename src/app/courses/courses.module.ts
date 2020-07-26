import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseContainerComponent } from "./course-container/course-container.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "", component: CourseContainerComponent }];

@NgModule({
  declarations: [CourseContainerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CoursesModule {}
