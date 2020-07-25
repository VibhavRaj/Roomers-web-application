import { NgModule } from "@angular/core";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
registerLocaleData(en);
import { ServiceRoutingModule } from "./service.routing.module";
import { ServiceComponent } from "./service.component";

@NgModule({
  imports: [ServiceRoutingModule, CommonModule, NgZorroAntdModule],
  declarations: [ServiceComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [ServiceComponent],
})
export class ServiceModule {}
