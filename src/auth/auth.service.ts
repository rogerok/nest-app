import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return {
      key: 'signin',
    };
  }

  signup() {
    return {
      key: 'signup',
    };
  }
}
