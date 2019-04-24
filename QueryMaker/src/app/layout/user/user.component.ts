import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { AdduserComponent } from './adduser/adduser.component';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  displayedColumns = ['Select', 'Id', 'Name', 'Email', 'Contact', 'Actions'];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selection = new SelectionModel<User>(true, []);

  constructor(private userService: UserService, public dialog: MatDialog, private notificationService: NotificationService) {}

  ngOnInit() {
    this.getAllUsers();
  }

  isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource !== undefined ? this.dataSource.data.length : 0;
      return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id + 1}`;
  }

  openDialog(row: User) {
    const dialogConfig = new MatDialogConfig();
    if (row != null && row !== undefined) {
      dialogConfig.data = {
        Id: row.Id,
        Title: 'Edit User',
        Name: row.Name,
        Email: row.Email,
        ContactNo: row.ContactNo,
        CommunityName: localStorage.getItem('communityName'),
      };
    } else {
      dialogConfig.data = {
        Id: 0,
        Title: 'Add User',
        Name: '',
        Email: '',
        ContactNo: '',
        CommunityName: localStorage.getItem('communityName'),
      };
    }
    dialogConfig.width = '500px';
    const dialogRef = this.dialog.open(AdduserComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.getAllUsers();
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllUsers() {
    const result = this.userService.getList(localStorage.getItem('customerId')).subscribe(
      (data: User) => {
        const objUser: User[] = [];
        for (const v in data) {
          objUser.push(data[v]);
        }

        if (objUser.length > 0) {
          this.dataSource = new MatTableDataSource(objUser);
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }
}
