import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  productId:String="";
  @Output() notify = new EventEmitter();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.productId=this.product[params.get("productId")];
    })
  }

}