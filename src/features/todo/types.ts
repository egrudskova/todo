export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  isEdited: boolean;
}

export enum Filter {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}
