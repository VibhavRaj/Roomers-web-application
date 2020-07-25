import { NgModule } from "@angular/core";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
import { DemocontentRoutingModule } from "./democontent.routing.module";
import { DemocontentComponent } from "./democontent.component";
registerLocaleData(en);

@NgModule({
  imports: [DemocontentRoutingModule, CommonModule, NgZorroAntdModule],
  declarations: [DemocontentComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [DemocontentComponent],
})
export class DemoContentModule {}
