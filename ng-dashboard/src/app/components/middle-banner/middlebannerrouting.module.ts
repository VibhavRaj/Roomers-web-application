import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MiddleBannerComponent } from "./middle-banner.component";

const routes: Routes = [{ path: "", component: MiddleBannerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiddleBannerRoutingModule {}
