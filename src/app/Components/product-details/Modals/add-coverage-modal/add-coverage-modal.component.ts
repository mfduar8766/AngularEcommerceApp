import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { IProductDetails } from '../../../../Models/products-interface';
import { UserStore } from '../../../../Store/UserStore/user.store';

@Component({
  selector: 'app-add-coverage-modal',
  templateUrl: './add-coverage-modal.component.html',
  styleUrls: ['./add-coverage-modal.component.css']
})
export class AddCoverageModalComponent implements OnInit {
  public isNotInterested: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: IProductDetails,
    private _dialogRef: MatDialogRef<AddCoverageModalComponent>,
    private _router: Router,
    private _store: UserStore
  ) {}

  ngOnInit() {}

  closeModal() {
    this._store.setPurchasedProducts(this.dialogData);
    this.isNotInterested = true;
    this._dialogRef.close(this.isNotInterested);
    this._router.navigate(['checkout']);
  }
}
