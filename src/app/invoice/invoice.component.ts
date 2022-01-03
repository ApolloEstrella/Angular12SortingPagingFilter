import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  idDelete: number;
  idUpdate: string;
  name: string;
  progress: string;
  fruit: string;
  //delete: string;
  //update: string;

}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'idDelete', 'idUpdate'];
  dataSource: MatTableDataSource<UserData>;
  entityId: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 0 }, (_, k) => this.createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
    this.entityId += 1
    const user = {
      id: this.entityId.toString(),
      idDelete: this.entityId,
      idUpdate: this.entityId.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
     // delete: '',
     // update: ''
    };
    this.dataSource.data.push(user)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    return user
  }

  deleteUser(id: number) {
    const index = this.dataSource.data.findIndex(obj => Number(obj.id) === id)
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

/** Builds and returns a new User.
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
} */





/*
import { Component } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms'
import { InvoiceOrder } from '../model/invoice.order';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

  constructor(private fb: FormBuilder) { }


  invoiceForm = this.fb.group({
    invoiceNo: [null, Validators.required],
    invoiceOrder: this.fb.array([]),
    total: [null]
  })

  get invoiceFormArray(): FormArray {
    return this.invoiceForm.get('invoiceOrder') as FormArray;
  }



  addInvoiceOrder() {
    let order = this.fb.group(new InvoiceOrder())
    this.invoiceFormArray.push(order)

  }

  computeLineTotal(index: number) {

    const unitPrice = this.invoiceForm.get('invoiceOrder.' + index.toString() + '.unitPrice')?.value
    const quantity = this.invoiceForm.get('invoiceOrder.' + index.toString() + '.quantity')?.value

    this.invoiceFormArray.at(index).patchValue({ subTotal: unitPrice * quantity })
    var orderTotal: number = 0
    var index: number = 0
    for (let c of this.invoiceFormArray.controls) {
      const uP = this.invoiceForm.get('invoiceOrder.' + index + '.unitPrice')?.value
      const qty = this.invoiceForm.get('invoiceOrder.' + index + '.quantity')?.value
      orderTotal = orderTotal + (uP * qty)
      index++
    }
    this.invoiceForm.patchValue({ total: orderTotal })
  }




  deleteItem(index: number) {
    this.invoiceFormArray.removeAt(index)
    var orderTotal: number = 0
    var index: number = 0
    for (let c of this.invoiceFormArray.controls) {
      const uP = this.invoiceForm.get('invoiceOrder.' + index + '.unitPrice')?.value
      const qty = this.invoiceForm.get('invoiceOrder.' + index + '.quantity')?.value
      orderTotal = orderTotal + (uP * qty)
      index++
    }
    this.invoiceForm.patchValue({ total: orderTotal })
  }

  onSubmit() {
    console.log(this.invoiceForm.value);
    alert('Thanks!');
  }
}
*/