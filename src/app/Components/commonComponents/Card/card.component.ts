import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public header: boolean = false;
  @Input() public footer: boolean = false;
  @Input() public cardBody: boolean = false;
  @Input() public promotionalSlogan: boolean = false;
  @Input() public footerTitle: string = null;
  @Input() public footerSubTitle: string = null;
  @Input() public productData: any = null;

  constructor() {}

  ngOnInit() {}
}
