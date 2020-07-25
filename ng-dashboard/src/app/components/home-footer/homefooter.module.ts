import { NgModule } from "@angular/core";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
registerLocaleData(en);
import { HomeFooterRoutingModule } from "./homefooter.routing.module";
import { HomeFooterComponent } from "./home-footer.component";

@NgModule({
  imports: [HomeFooterRoutingModule, CommonModule, NgZorroAntdModule],
  declarations: [HomeFooterComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [HomeFooterComponent],
})
export class HomeFooterModule {}
