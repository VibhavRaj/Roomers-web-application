import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeaturesRoutingModule } from "./featuresrouting.module";
import { FeaturesComponent } from "./features.component";

@NgModule({
  imports: [FeaturesRoutingModule, CommonModule],
  declarations: [FeaturesComponent],
  exports: [FeaturesComponent],
})
export class FeatureModule {}
