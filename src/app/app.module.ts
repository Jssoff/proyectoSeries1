import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SeriesModule } from './serie/serie.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SeriesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
