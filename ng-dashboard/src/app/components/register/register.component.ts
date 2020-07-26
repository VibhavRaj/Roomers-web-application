import { Component, OnInit } from "@angular/core";
import { NzModalRef } from "ng-zorro-antd/modal";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  passwordVisible = false;
  password?: string;
  constructor(private modalref: NzModalRef) {}
  ngOnInit() {}
  destroyModal(): void {
    this.modalref.destroy();
  }
}
