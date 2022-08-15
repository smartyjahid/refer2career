import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  showToast(message: any, color = 'bg-violet') {
    this.snackBar.open(message, 'close', { duration: 2500, verticalPosition: 'bottom', horizontalPosition: 'center', panelClass: [color, 'text-white', 'overlay', 'fixed-bottom', 'mx-auto', 'w-100', 'success-dialog'] });
  }
}
