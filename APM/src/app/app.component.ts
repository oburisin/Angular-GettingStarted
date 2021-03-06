import { Component } from '@angular/core';

@Component({
  selector: 'pm-root', // convention to prefix by part of app (pm - product management)
  template: `<div><h1>{{pageTitle}}</h1><pm-products></pm-products></div>` // back ticks allow multi line strings, '' or "" are for inline
})
export class AppComponent {
  pageTitle: string =  'Acme Product Management'; 
}