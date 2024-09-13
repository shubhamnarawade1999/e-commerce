import { AfterViewInit, Component } from '@angular/core';
import { DataService } from '../../data.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartData: any[] = [];
  public products : any = [];
  public grandTotal !: number;
  constructor(private dataservice: DataService,private modalService: NgbModal) {

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


  open(content: any) {
    this.modalService.open(content);
  }
}
