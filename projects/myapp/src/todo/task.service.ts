import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data'
import { TODO } from './todo.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService  extends EntityCollectionServiceBase<TODO>{

  constructor(collectionFactory:EntityCollectionServiceElementsFactory) {
    super('todo',collectionFactory);
    //super('product',collectionFactory);
  }
}
