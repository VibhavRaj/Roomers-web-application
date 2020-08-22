import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as Feather from "feather-icons";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    Feather.replace();
  }
}
