import { NgModule } from '@angular/core';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import {todoRoutingModule} from './todo-routing.module'
import { CommonImportModule } from '../common-import/common-import.module';
@NgModule({
  declarations: [
    TodoListPageComponent
  ],
  imports: [
    CommonImportModule,
    todoRoutingModule,
  ]
})
export class TodoModule {
 }
