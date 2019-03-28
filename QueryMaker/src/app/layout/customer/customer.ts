export class Customer {
    ErrorCode: number;
    Message: string;
    Id: number;
    Name: string;
    Email: string;
    ContactNo: number;
    Password: string;
    Type: number;
    ParentId: number;
}
export class CustomerList{
    Customers: Customer[];
}

