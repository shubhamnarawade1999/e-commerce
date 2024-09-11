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
      debugger
    })
  }
  removeItem(item: any){
    this.dataservice.removeCartItem(item);
  }
  emptycart(){
    this.dataservice.removeAllCart();
  }




  celsius: number = 0;
  fahrenheit: number = 32;

  // Convert Celsius to Fahrenheit
  convertToFahrenheit() {
    this.fahrenheit = (this.celsius * 9) / 5 + 32;
  }

  // Convert Fahrenheit to Celsius
  convertToCelsius() {
    this.celsius = ((this.fahrenheit - 32) * 5) / 9;
  }
}
