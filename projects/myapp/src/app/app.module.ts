import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HeaderComponent } from './header/header.component';
import { CommonImportModule } from '../common-import/common-import.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule,DefaultDataServiceConfig } from '@ngrx/data';
import { userService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    HeaderComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonImportModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(),
    EntityDataModule.forRoot({
      entityMetadata: {
        'todo': {}
      },
      //pluralNames:{'Task':'TODO'}
    }),
  ],
  providers: [
    userService,
    {provide:DefaultDataServiceConfig,useValue:{root:'https://jsonplaceholder.typicode.com/'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
