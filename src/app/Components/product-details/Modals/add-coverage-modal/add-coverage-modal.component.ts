import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { SelectedProductService } from '../../../../Services/selected-product.service';

@Component({
  selector: 'app-add-coverage-modal',
  templateUrl: './add-coverage-modal.component.html',
  styleUrls: ['./add-coverage-modal.component.css']
})
export class AddCoverageModalComponent implements OnInit {
  public isNotInterested: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData,
    private dialogRef: MatDialogRef<AddCoverageModalComponent>,
    private router: Router,
    private selectedProduct: SelectedProductService
  ) {}

  ngOnInit() {}

  closeModal() {
    this.selectedProduct.sendProductDetails(this.dialogData);
    this.isNotInterested = true;
    this.dialogRef.close(this.isNotInterested);
    this.router.navigate(['checkout']);
  }
}
