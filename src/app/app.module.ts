import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductInfoComponent } from './product-info/product-info.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
      { path:'jega/:productId', component:ProductInfoComponent },
      { path: '', component:ProductAlertsComponent }
    ])
   ],
  declarations: [ AppComponent, HelloComponent, ProductAlertsComponent, ProductInfoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
