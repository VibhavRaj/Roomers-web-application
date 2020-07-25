import { NgModule } from "@angular/core";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
registerLocaleData(en);
import { FeaturesRoutingModule } from "./featuresrouting.module";
import { FeaturesComponent } from "./features.component";

@NgModule({
  imports: [FeaturesRoutingModule, CommonModule, NgZorroAntdModule],
  declarations: [FeaturesComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [FeaturesComponent],
})
export class FeatureModule {}
