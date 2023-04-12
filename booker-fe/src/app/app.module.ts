import { BookmarkModule } from './bookmark/bookmark.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './auth/login/login.module';
import { SignUpModule } from './auth/sign-up/sign-up.module';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/cache';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { Bookmark1Module } from './bookmark/bookmark1/bookmark1.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Bookmark1Component } from './bookmark/bookmark1/bookmark1.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    LoginModule,
    SignUpModule,
    ApolloModule,
    HttpClientModule,
    HomeModule,
    BookmarkModule,
    Bookmark1Module,
    MatToolbarModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'api/graphql'
          })
        }
      },
      deps: [HttpLink]
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
