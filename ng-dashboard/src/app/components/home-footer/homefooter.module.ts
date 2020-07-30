import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeFooterRoutingModule } from "./homefooter.routing.module";
import { HomeFooterComponent } from "./home-footer.component";

@NgModule({
  imports: [HomeFooterRoutingModule, CommonModule],
  declarations: [HomeFooterComponent],
  exports: [HomeFooterComponent],
})
export class HomeFooterModule {}
