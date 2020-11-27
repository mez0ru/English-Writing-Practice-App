import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {DemoMaterialModule} from './material-module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  exports: [DemoMaterialModule]
})
export class AppModule {}
