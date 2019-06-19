import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchObligadoTributarioComponent } from './shared/components/search-obligado-tributario/search-obligado-tributario.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchObligadoTributarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
