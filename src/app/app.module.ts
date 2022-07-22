import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CardModule } from 'primeng/card'
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AgenceComponent } from './agence/agence.component';
import { TypeArticleComponent } from './type-article/type-article.component';
import { StockComponent } from './stock/stock.component';
import { LoginComponent } from './login/login.component';
import { AddAgenceComponent } from './add-agence/add-agence.component'
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AgenceComponent,
    TypeArticleComponent,
    StockComponent,
    LoginComponent,
    AddAgenceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    DynamicDialogModule,
    TableModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
