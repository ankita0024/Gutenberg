import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { DetailsComponent } from "./details/details.component";
import { ItemsComponent } from "./items/items.component";

const routes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },
  { path: "book-list", component: ListComponent },
  { path: "details", component: DetailsComponent },
  { path: "items", component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
