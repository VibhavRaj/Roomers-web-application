import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
})
export class QuestionComponent implements OnInit {
  panels = [
    {
      active: false,
      disabled: true,
      name: "Will I get the cash send to me ?",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      customStyle: {
        background: "#fafafa",
        border: "0px",
      },
    },
    {
      active: false,
      disabled: true,
      name: "How do I pay for my deposit",
      customStyle: {
        background: "#fafafa",
        border: "0px",
      },
    },
    {
      active: false,
      disabled: true,
      name: "Who protects my deposit ?",
      customStyle: {
        background: "#fafafa",
        border: "0px",
      },
    },
    {
      active: false,
      disabled: true,
      name: "How do I reclaim damages or rent arrears from the deposit ?",
      customStyle: {
        background: "#fafafa",
        border: "0px",
      },
    },
    {
      active: false,
      disabled: true,
      name: "How long does it take from start to finish to get an account",
      customStyle: {
        background: "#fafafa",
        border: "0px",
      },
    },
    {
      active: false,
      disabled: true,
      name: "Can I pay off my Account deposit and stop using account ?",
      customStyle: {
        background: "#fafafa",
        border: "0px",
      },
    },
  ];
  constructor() {}

  ngOnInit() {}
}
