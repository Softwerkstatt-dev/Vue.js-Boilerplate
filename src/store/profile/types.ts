export interface User {
  firstName: string;
  lastName: string;
}

export interface ProfileState {
  users?: User[];
  error: boolean;
  value: number;
}
