import { AfterViewInit, Component } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartData: any[] = [];
  public products : any = [];
  public grandTotal !: number;
  constructor(private dataservice: DataService) {

  }

  ngOnInit(): void {
    this.dataservice.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.dataservice.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.dataservice.removeCartItem(item);
  }
  emptycart(){
    this.dataservice.removeAllCart();
  }
}
