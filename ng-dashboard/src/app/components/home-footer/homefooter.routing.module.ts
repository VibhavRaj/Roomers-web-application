import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeFooterComponent } from "./home-footer.component";

const routes: Routes = [{ path: "", component: HomeFooterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeFooterRoutingModule {}
