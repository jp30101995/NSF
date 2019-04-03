import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { LoginResponse } from 'src/app/login/login';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';
import { AddpersonComponent } from './addperson/addperson.component';
import { Person } from './person';
import { PersonService } from './person.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  displayedColumns = ['Select', 'Id', 'Name', 'Email', 'Phone', 'Qualification', 'Marital Status', 'Relation', 'Actions'];
  dataSource: MatTableDataSource<Person>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selection = new SelectionModel<Person>(true, []);

  constructor(public dialog: MatDialog, private notificationService: NotificationService, private personService: PersonService) {}

  ngOnInit() {
    this.getAllPerson();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Person): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id + 1}`;
  }

  openDialog(row: Person) {
    const dialogConfig = new MatDialogConfig();
    if (row != null && row !== undefined) {
      dialogConfig.data = {
        Id: row.Id,
        Title: 'Edit Person',
        FirstName: row.FirstName,
        MidddleName: row.MiddleName,
        Phone: row.Phone,
        Gender: row.Gender
      };
    } else {
      dialogConfig.data = {
        Id: 0,
        Title: 'Add Person',
        FirstName: '',
        MidddleName: '',
        Phone: '',
        Gender: ''
      };
    }
    dialogConfig.width = '500px';
    dialogConfig.height = '500px';
    const dialogRef = this.dialog.open(AddpersonComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.getAllPerson();
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
  getAllPerson() {
    // const result = this.personService.getList(localStorage.getItem('id')).subscribe(
    //   (data: CustomerList) => {
    //     const custs: Customer[] = [];
    //     for (const v in data) {
    //       custs.push(data[v]);
    //     }
    //     this.dataSource = new MatTableDataSource(custs);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  deleteCustomer(row) {}
}
