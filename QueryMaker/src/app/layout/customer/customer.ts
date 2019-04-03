export class Customer {
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
export class CustomerList {
  Customers: Customer[];
}
