import { Component, OnInit } from "@angular/core";
import { NzModalRef } from "ng-zorro-antd/modal";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  passwordVisible = false;
  password?: string;
  constructor(private modalref: NzModalRef, private route: Router) {}
  ngOnInit() {}
  destroyModal(): void {
    this.modalref.destroy();
  }
  login() {
    this.route.navigate(["/dashboard"]);
    this.modalref.destroy();
  }
}
