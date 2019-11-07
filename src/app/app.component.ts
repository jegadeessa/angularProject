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
      description:"It's a product"
    },
    {
      name:"iphone",
      description:"It's a product"
    },
    {
      name:"samsung",
    }
  ];
  share(){
    alert("This product has been shared");
  }
}
