import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NewCompComponent } from './newComponent/new-comp.component'
import { TemplateComponent } from './template/template.component'

@NgModule({
  declarations: [AppComponent, NewCompComponent, TemplateComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
