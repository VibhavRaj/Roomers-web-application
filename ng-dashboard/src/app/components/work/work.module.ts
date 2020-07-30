import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WorkRoutingModule } from "./work.routing.module";
import { WorkComponent } from "./work.component";

@NgModule({
  imports: [WorkRoutingModule, CommonModule],
  declarations: [WorkComponent],
  exports: [WorkComponent],
})
export class WorkModule {}
