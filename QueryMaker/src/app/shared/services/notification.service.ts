import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}
  openSnackbar(message) {
    this.snackBar.open(message, 'X', { duration: 5000, horizontalPosition: 'center', verticalPosition: 'top' });
  }
}
