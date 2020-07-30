import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DemocontentRoutingModule } from "./democontent.routing.module";
import { DemocontentComponent } from "./democontent.component";

@NgModule({
  imports: [DemocontentRoutingModule, CommonModule],
  declarations: [DemocontentComponent],
  exports: [DemocontentComponent],
})
export class DemoContentModule {}
