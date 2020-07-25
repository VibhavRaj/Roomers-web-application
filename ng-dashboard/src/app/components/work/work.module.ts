import { NgModule } from "@angular/core";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
registerLocaleData(en);
import { WorkRoutingModule } from "./work.routing.module";
import { WorkComponent } from "./work.component";

@NgModule({
  imports: [WorkRoutingModule, CommonModule, NgZorroAntdModule],
  declarations: [WorkComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [WorkComponent],
})
export class WorkModule {}
