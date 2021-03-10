import axios, { AxiosResponse } from 'axios';

import { LogInData, User } from '../../core/models/userSession.models';

export function postLogin({ email, password }: LogInData): Promise<AxiosResponse<User>> {
  return axios.post('http://localhost:3000/signin', { email, password }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
