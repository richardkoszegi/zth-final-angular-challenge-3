import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocalizationPipe } from './pipes/localization.pipe';
import { LocalizationService } from './services/localization.service';

@NgModule({
  declarations: [
    AppComponent,
    LocalizationPipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [ LocalizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
