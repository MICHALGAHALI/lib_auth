import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import { TodoListPageComponent } from "./todo-list-page/todo-list-page.component";

const router :Routes = [
    {path : '', component: TodoListPageComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(router)
    ],
    exports: [RouterModule]
})
export class todoRoutingModule { }
