import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MiddleBannerRoutingModule } from "./middlebannerrouting.module";
import { MiddleBannerComponent } from "./middle-banner.component";

@NgModule({
  imports: [MiddleBannerRoutingModule, CommonModule],
  declarations: [MiddleBannerComponent],
  exports: [MiddleBannerComponent],
})
export class MiddleBannerModule {}
