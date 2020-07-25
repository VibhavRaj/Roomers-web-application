import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { HompageRoutingModule } from "./hompage-routing.module";
import { HompageComponent } from "./hompage.component";
import { BannerModule } from "src/app/components/banner/banner.module";
import { DemoContentModule } from "src/app/components/democontent/democontent.module";
import { FeatureModule } from "src/app/components/features/features.module";
import { HomeFooterModule } from "src/app/components/home-footer/homefooter.module";
import { MiddleBannerModule } from "src/app/components/middle-banner/middlebanner.module";
import { QuestionModule } from "src/app/components/question/question.module";
import { ServiceModule } from "src/app/components/service/service.module";
import { WorkModule } from "src/app/components/work/work.module";
@NgModule({
  imports: [
    CommonModule,
    HompageRoutingModule,
    BannerModule,
    DemoContentModule,
    FeatureModule,
    HomeFooterModule,
    MiddleBannerModule,
    QuestionModule,
    ServiceModule,
    WorkModule,
  ],
  declarations: [HompageComponent],
  exports: [HompageComponent],
})
export class HompageModule {}
