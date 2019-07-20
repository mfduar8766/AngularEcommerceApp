import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.css']
})
export class AddToCartModalComponent implements OnInit {
  public totalItems: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private _dialogRef: MatDialogRef<AddToCartModalComponent>
  ) {}

  ngOnInit() {
    this._dialogRef.updatePosition({ top: '50px', right: '50px' });
    const { totalItems } = this.dialogData;
    this.totalItems = totalItems;
  }
}
