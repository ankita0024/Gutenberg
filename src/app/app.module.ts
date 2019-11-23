import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from "angular-svg-icon";
import { ListComponent } from "./list/list.component";
import { DetailsComponent } from "./details/details.component";
import { ItemsComponent } from "./items/items.component";
import { AppService } from "./app.service";
@NgModule({
  declarations: [AppComponent, ListComponent, DetailsComponent, ItemsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule,
    NgbModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
