import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  products =[
    {
      name:"apple",
      description:"It's a product",
      price:"5000",
      productId:"0"
    },
    {
      name:"iphone",
      description:"It's a product",
      price:"500",
      productId:"1"
    },
    {
      name:"samsung",
      price:"50000",
      productId:"2"
    }
  ];
  share(){
    alert("This product has been shared");
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
