import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
import { BannerRoutingModule } from "./banner.routing.module";
import { BannerComponent } from "./banner.component";
registerLocaleData(en);
@NgModule({
  imports: [BannerRoutingModule, FormsModule, CommonModule, NgZorroAntdModule],
  declarations: [BannerComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [BannerComponent],
})
export class BannerModule {}
