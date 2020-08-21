import { Component, OnInit, AfterViewInit } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzPlacementType } from "ng-zorro-antd/dropdown";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
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
  login() {
    this.modalService.create({
      nzWidth: "350px",
      nzBodyStyle: this.modalStyle,
      nzClosable: false,
      nzMask: true,
      nzContent: LoginComponent,
    });
    console.log("Log");
  }
  register() {
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
