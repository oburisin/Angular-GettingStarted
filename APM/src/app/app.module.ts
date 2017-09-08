import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

// decorator <=> attribute in C#
@NgModule({
  declarations: [
    AppComponent,  // array of what belongs to the module
    ProductListComponent
  ],
  imports: [ // external modules be available to all components in this Angular module
    BrowserModule // important for all browser apps, contains error handling 
  ],
  providers: [],
  bootstrap: [AppComponent] // startup component which contains the index.html directive
})
export class AppModule { }
