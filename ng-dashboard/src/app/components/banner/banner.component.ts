import { Component, OnInit } from "@angular/core";
import { NzPlacementType } from "ng-zorro-antd/dropdown";
@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  listOfPosition: NzPlacementType[] = ["bottomRight"];

  constructor() {}

  ngOnInit() {}
}
