import { Component, OnInit } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzPlacementType } from "ng-zorro-antd/dropdown";
import { LoginComponent } from "../login/login.component";
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  listOfPosition: NzPlacementType[] = ["bottomRight"];
  constructor(public modalService: NzModalService) {}
  ngOnInit() {}

  login() {
    this.modalService.create({
      nzWidth: "350px",
      nzBodyStyle: {
        background: "#f5f5f5",
        border: "none",
        padding: "15px 20px 25px 20px",
        margin: "0",
        borderRadius: "5px 5px 0 0",
      },
      nzClosable: false,
      nzMask: true,
      nzContent: LoginComponent,
    });
    console.log("Log");
  }
  register() {}
  // destroyModal(): void {
  //   this.modalref.destroy();
  // }
}
