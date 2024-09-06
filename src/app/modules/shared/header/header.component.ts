import { Component } from '@angular/core';
import { DataService } from '../../user/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private dataService : DataService , private router:Router) { }

  ngOnInit(): void {
    this.dataService.getProducts()
    .subscribe(res=>{
      debugger
      this.totalItem = res.length;
    })
  }

  openCart(){
    this.router.navigate(['user/cart'])
  }
}
