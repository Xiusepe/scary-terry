export interface User {
  _id: string;
  mail: string;
  token: string;
}

export interface LogInData {
  email: string;
  password: string;
}