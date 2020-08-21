import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
import { BannerRoutingModule } from "./banner.routing.module";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzIconModule } from "ng-zorro-antd/icon";
import { BannerComponent } from "./banner.component";
import { LoginComponent } from "../login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "../register/register.component";
registerLocaleData(en);
@NgModule({
  imports: [
    BannerRoutingModule,
    FormsModule,
    CommonModule,
    NgZorroAntdModule,
    NzModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzIconModule,
  ],
  declarations: [BannerComponent, LoginComponent, RegisterComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  entryComponents: [LoginComponent, RegisterComponent],
  exports: [BannerComponent],
})
export class BannerModule {}
