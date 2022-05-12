import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { ImageViewerModule } from '@mxa30/ngx-imageviewer';

@NgModule({
  declarations: [AppComponent, ViewerComponent],
  imports: [BrowserModule, ImageViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
