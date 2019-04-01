export class Login {
  Id: number;
  Username: string;
  Password: string;
}
export class LoginResponse {
  Response: Response;
  User: UserResponse;
  ParentID: number;
}

export class UserResponse {
  Id: number;
  Password: string;
  Username: string;
}

export class Response {
  ErrorCode: number;
  Message: string;
}
