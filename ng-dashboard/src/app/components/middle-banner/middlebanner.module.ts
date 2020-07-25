import { NgModule } from "@angular/core";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
registerLocaleData(en);
import { MiddleBannerRoutingModule } from "./middlebannerrouting.module";
import { MiddleBannerComponent } from "./middle-banner.component";

@NgModule({
  imports: [MiddleBannerRoutingModule, CommonModule, NgZorroAntdModule],
  declarations: [MiddleBannerComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [MiddleBannerComponent],
})
export class MiddleBannerModule {}
