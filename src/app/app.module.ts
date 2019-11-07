import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AltPipe } from './pipe/alt.pipe';
import { DirecDirective } from './Directives/direc.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
      { path:'jega/:productId', component:ProductInfoComponent },
      { path: '', component:ProductAlertsComponent }
    ])
   ],
  declarations: [ AppComponent, HelloComponent, ProductAlertsComponent, ProductInfoComponent, AltPipe, DirecDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
