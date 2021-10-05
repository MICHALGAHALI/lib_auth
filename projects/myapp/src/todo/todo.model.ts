/**
 * Entity - this is an object returned from the tasks api
 */

 export interface TODO {
  userId: number;
  id: number;
  title: string;
  completed:boolean
  }