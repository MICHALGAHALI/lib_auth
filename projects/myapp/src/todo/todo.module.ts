import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';
import {todoRoutingModule} from './todo-routing.module'

@NgModule({
  declarations: [
    TodoListPageComponent
  ],
  imports: [
    CommonModule,
    todoRoutingModule
  ],
  bootstrap:[TodoListPageComponent]
})
export class TodoModule { }
