import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VueloModule } from './vuelo/vuelo.module';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VueloModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
