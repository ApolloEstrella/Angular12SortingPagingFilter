import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { ShippingComponent } from './shipping/shipping.component';
import { RegisterComponent } from './register/register.component';
import { InvoiceComponent } from './invoice/invoice.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-material-dialog-app';


  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ShippingComponent, { restoreFocus: false });
    
    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  openDialog2() {
    const dialogRef = this.dialog.open(RegisterComponent, { restoreFocus: false });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  openDialog3() {
    const dialogRef = this.dialog.open(InvoiceComponent, { restoreFocus: false });
    dialogRef.updateSize("900px", "600px"); 
    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    //dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

}

 
