import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './screens/home/home.component';
import { CarouselModule } from 'primeng/carousel'
import { ButtonModule } from 'primeng/button'
import { MedicineCarouselComponent } from './components/medicine/medicine-carousel/medicine-carousel.component';
import { ServiceListComponent } from './components/services/service-list/service-list.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitterModule } from 'primeng/splitter';
import { GMapModule } from 'primeng/gmap';
import { ToastModule } from 'primeng/toast'
import { DialogModule } from 'primeng/dialog';
import { BoldTextPipe } from './pipes/bold-text.pipe';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MedicineCarouselComponent,
    ServiceListComponent,
    BoldTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    AccordionModule,
    BrowserAnimationsModule,
    SplitterModule,
    GMapModule,
    ToastModule,
    DialogModule,
    PasswordModule,
    InputTextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
