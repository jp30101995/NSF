// export class User {
//   ErrorCode: number;
//   Message: string;
//   Id: number;
//   Name: string;
//   Email: string;
//   ContactNo: string;
//   Password: string;
//   Type: number;
//   ParentId: number;
//   Title: string;
// }
// export class UserList {
//   User: User[];
// }
export interface User {
  ErrorCode: number;
  Message: string;
  Id: number;
  Name: string;
  Email: string;
  ContactNo: string;
  Password: string;
  Type: number;
  ParentId: number;
  Title: string;
  CommunityName: string;
}
