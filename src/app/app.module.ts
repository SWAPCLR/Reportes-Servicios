import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './Forms-components /form1/form1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatPaginatorModule,MatIconModule, 
  MatListModule, MatTableModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatSelectModule, 
  MatButtonToggleModule, MatOptionModule, MatRadioModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {NavService} from './nav.service';
import { RepServiciosComponent } from './Forms-components /rep-servicios/rep-servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    SideNavComponent,
    DashboardComponent,
    RepServiciosComponent
  ],
  imports: [
    MatPaginatorModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatTableModule,
    BrowserModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
