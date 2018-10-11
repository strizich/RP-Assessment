import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { TextGroupComponent } from './text-group/text-group.component';
import { TextComponent } from './text/text.component';
import { MultiClassComponent } from './demo/multi-class/multi-class.component';
import { FlexComponent } from './demo/flex/flex.component';
import { AnimsComponent } from './demo/anims/anims.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    TextGroupComponent,
    TextComponent,
    MultiClassComponent,
    FlexComponent,
    AnimsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
