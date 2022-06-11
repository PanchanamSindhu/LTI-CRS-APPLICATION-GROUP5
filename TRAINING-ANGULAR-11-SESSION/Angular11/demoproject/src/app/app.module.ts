import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FormsModule } from '@angular/forms';
import { TestPipePipe } from './my-component/testpipe.pipe';
import { HighlightDirective } from './my-component/highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { MyserviceService } from './my-component/myservice.service';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TestPipePipe,
    HighlightDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
