import { Component, OnInit } from "@angular/core";
import { NzModalRef } from "ng-zorro-antd/modal";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  password?: string;
  constructor(private modalref: NzModalRef) {}
  ngOnInit() {}
  destroyModal(): void {
    this.modalref.destroy();
  }
}
