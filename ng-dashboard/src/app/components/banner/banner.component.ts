import { Component, OnInit, AfterViewInit } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzPlacementType } from "ng-zorro-antd/dropdown";
import * as Feather from "feather-icons";
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit, AfterViewInit {
  listOfPosition: NzPlacementType[] = ["bottomRight"];
  modalStyle = {
    background: "#f5f5f5",
    border: "none",
    padding: "22px 18px",
    margin: "0",
    borderRadius: "5px 5px 0 0",
  };
  constructor(public modalService: NzModalService) {}
  ngOnInit() {}
  ngAfterViewInit() {
    Feather.replace();
  }
  async login() {
    const { LoginComponent } = await import("../login/login.component");
    this.modalService.create({
      nzWidth: "350px",
      nzBodyStyle: this.modalStyle,
      nzClosable: false,
      nzMask: true,
      nzContent: LoginComponent,
    });
    console.log("Log");
  }
  async register() {
    const { RegisterComponent } = await import(
      "../register/register.component"
    );
    this.modalService.create({
      nzWidth: "350px",
      nzBodyStyle: this.modalStyle,
      nzClosable: false,
      nzMask: true,
      nzContent: RegisterComponent,
    });
    console.log("Register");
  }
}
