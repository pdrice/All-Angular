import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'ngx-bootstrap/accordion'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
  
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    PostComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
