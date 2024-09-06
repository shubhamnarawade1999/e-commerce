import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    console.log('Swiper initialization');
    new Swiper('.mySwiper', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

  allItems: any[] = [];
  displayedItems: any[] = [];
  filteredItems: any[] = [];
  itemsToShow: number = 9;
  searchQuery: string = '';
  iconHide: boolean = false;
  cartItem: any[] = [];

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    const apiUrl = 'https://db.ezobooks.in/kappa/image/task';
    this.dataService.fetchData(apiUrl).subscribe(data => {
      this.allItems = data.items;
      this.filteredItems = this.allItems; // Initially, filteredItems will be the same as allItems
      this.loadItems();
    });


  }

  loadItems(): void {
    const newItems = this.filteredItems.slice(this.displayedItems.length, this.displayedItems.length + this.itemsToShow);
    this.displayedItems = this.displayedItems.concat(newItems);
  }

  loadMore(): void {
    this.loadItems();
  }

  searchItems(): void {
    this.displayedItems = []; // Reset the displayed items
    this.filteredItems = this.allItems.filter(item =>
      item.itemName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.loadItems(); // Reload items based on the search query
  }

  addTocart(item: any) {
    debugger
    this.dataService.addtoCart(item)

  }



}
