import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);

  getProducts(){
    return this.productList.asObservable();
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.itemPrice;
      debugger
    })
    return grandTotal;
  }


  getItems() {
    throw new Error('Method not implemented.');
  }
  getValues(arg0: number, lastKey: string) {
    throw new Error('Method not implemented.');
  }
 

  constructor(private http: HttpClient) { }
  fetchData(url: string): Observable<any> {
    return this.http.get(url);
  }


  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
