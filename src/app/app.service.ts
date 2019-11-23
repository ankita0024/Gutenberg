import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(protected httpClient: HttpClient) {}
  getBookList(item: string): Observable<any> {
    const params = new HttpParams().set("topic", item);
    return this.httpClient.get<any>(
      `http://skunkworks.ignitesol.com:8000/books`,
      {
        params
      }
    );
  }
  getBookDetails(id: number): Observable<any> {
    return this.httpClient.get<any>(
      `http://skunkworks.ignitesol.com:8000/books/${id}`
    );
  }
  searchBook(text: string): Observable<any> {
    const params = new HttpParams().set("search", text);
    return this.httpClient.get<any>(
      `http://skunkworks.ignitesol.com:8000/books`,
      {
        params
      }
    );
  }
  scroll(url): Observable<any> {
    return this.httpClient.get<any>(url);
  }
}
