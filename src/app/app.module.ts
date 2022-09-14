import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompComponent } from './newComponent/new-comp.component';
import { TemplateComponent } from './template/template.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { BrowserModule } from '@angular/platform-browser';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { InputCompComponent } from './input-comp/input-comp.component';
import { InputChildComponent } from './input-comp/input-child/input-child.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { OutputChildComponent } from './output-parent/output-child/output-child.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { DirectiveNgIfComponent } from './directive-ngif/directive-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    TemplateComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InputCompComponent,
    InputChildComponent,
    OutputParentComponent,
    OutputChildComponent,
    DirectiveNgforComponent,
    DirectiveNgIfComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
