import { AppService } from "./../app.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  genreName;
  lists = [];
  originalList;
  showModal;
  searchText = "";
  nextUrl;
  originalNextUrl;
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit() {
    this.showModal = false;
    this.route.params.subscribe(params => {
      this.genreName = params["name"];
      this.appService.getBookList(params["type"]).subscribe(list => {
        this.lists = list.results;
        this.originalList = list.results;
        this.nextUrl = list.next;
        this.originalNextUrl = list.next;
      });
    });
  }
  viewDetails(item: any, popupModal: any): void {
    let subStr;
    this.appService.getBookDetails(item.id).subscribe(details => {
      const subStrList = Object.values(details.formats);
      const arr = [".htm", ".pdf", ".txt"];
      for (let i = 0; i < 3; i++) {
        subStr = subStrList.find(
          x => x.toString().substring(x.toString().length - 4) === arr[i]
        );
        if (subStr) {
          window.open(subStr.toString());
          break;
        }
      }
      if (!subStr) {
        this.modalService.open(popupModal);
      }
    });
  }
  search(): void {
    if (this.searchText) {
      this.appService.searchBook(this.searchText).subscribe(list => {
        this.lists = list.results;
        this.nextUrl = list.next;
      });
    } else {
      this.lists = this.originalList;
      this.nextUrl = this.originalNextUrl;
    }
  }
  onScroll() {
    if (this.nextUrl) {
      this.appService.scroll(this.nextUrl).subscribe(list => {
        this.lists = this.lists.concat(list.results);
      });
    }
  }
  goBack() {
    this.router.navigate(["/items"]);
  }
}
