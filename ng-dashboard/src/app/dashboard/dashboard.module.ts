import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
import { DashboardRoutingModule } from "./dashboard.routing";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzIconModule } from "ng-zorro-antd/icon";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./dashboard.component";

registerLocaleData(en);
@NgModule({
  imports: [
    DashboardRoutingModule,
    FormsModule,
    CommonModule,
    NgZorroAntdModule,
    NzModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzIconModule,
  ],
  declarations: [DashboardComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  entryComponents: [],
  exports: [DashboardComponent],
})
export class DashboardModule {}
