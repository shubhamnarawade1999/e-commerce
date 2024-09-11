import { Component, HostListener } from '@angular/core';
import { DataService } from '../../user/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  public totalItem: number = 0;
  public searchTerm !: string;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }

  openCart() {
    this.router.navigate(['user/cart'])
  }


  isHeaderVisible = true;
  private lastScrollTop = 0;

  // Listen to scroll events on the window
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, hide the header
    if (st > this.lastScrollTop) {
      this.isHeaderVisible = false;
    } else {
      // If scrolling up, show the header
      this.isHeaderVisible = true;
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // Prevent negative scrolling
  }
}
