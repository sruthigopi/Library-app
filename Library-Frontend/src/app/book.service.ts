import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  server_address :string ='/api';

  constructor(private http: HttpClient,) { }
  // get data from database
  getBooks(){
    return this.http.get(`${this.server_address}/books`);
  }
// adding books
  newBook(item:any){
    console.log('accessd');
    return this.http.post(`${this.server_address}/insert`,{'book':item})
    .subscribe(data=>{
      console.log(data)
    })
    }
    // get for update
    getBookUpdate(id:any){
      return this.http.get(`${this.server_address}/`+id);
    }
    // update
    editBook(book:any){
      console.log('client is updated');
      return this.http.put(`${this.server_address}/update`,book)
      .subscribe((data)=>{console.log(data)})
    }
    // delete product
    deleteBooks(id:any){
      return this.http.delete(`${this.server_address}//remove/`+id);
    }
}
