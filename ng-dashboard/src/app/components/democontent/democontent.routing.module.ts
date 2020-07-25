import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DemocontentComponent } from "./democontent.component";

const routes: Routes = [{ path: "", component: DemocontentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemocontentRoutingModule {}
