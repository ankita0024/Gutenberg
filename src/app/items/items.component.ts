import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  items = [
    { name: "Fiction", imgUrl: "../assets/img/Fiction.svg", type: "fiction" },
    { name: "Drama", imgUrl: "../assets/img/Drama.svg", type: "drama" },
    { name: "Humour", imgUrl: "../assets/img/Humour.svg", type: "humour" },
    {
      name: "Politics",
      imgUrl: "../assets/img/Politics.svg",
      type: "politics"
    },
    {
      name: "Philosophy",
      imgUrl: "../assets/img/Philosophy.svg",
      type: "philosophy"
    },
    { name: "History", imgUrl: "../assets/img/History.svg", type: "history" },
    {
      name: "Adventure",
      imgUrl: "../assets/img/Adventure.svg",
      type: "adventure"
    }
  ];
  getBookList(item): void {
    this.router.navigate(["/book-list", { type: item.type, name: item.name }]);
  }
}
