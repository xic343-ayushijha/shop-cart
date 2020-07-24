import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  productName: string = "";
  @Input() filterArr: any;
  @Output() shuffledList = new EventEmitter<object>();
  sortedList: any = [];
  searchList: any = [];
  @Input() order: any;
  selectedLevel: string = "choose";
  checkedVal: any = [];
  checkedColor: any;
  colorList: any = [];
  priceList: any = [];
  discountList: any = [];
  checkedBrand: any;
  priceMin: any="Min";
  priceMax: any="Max";
  discountMin: any="Min";
  discountMax: any="Max";
  isVisible: boolean = false;
  @ViewChild('brandSelect') chooseBrand: ElementRef;
  constructor() { }

  filterBrand(name, $event) {
    var brandName, brandList, originalArr;
    originalArr = this.filterArr;
    var sortVal = name.brand.toLowerCase();
    originalArr.filter((item) => {
      var brandName = item.brand.toLowerCase();
      if (brandName.indexOf(sortVal) > -1) {
        this.searchList.push(item);
        this.shuffledList.emit(this.searchList);

      }
    });
  }
  filterColor(color, $event) {
    var colorName, originalArr;
    originalArr = this.filterArr;
    var sortVal = color.colour.title.toLowerCase();
    if ($event.target.checked == true) {
      originalArr.filter((item) => {
        colorName = item.colour.title.toLowerCase();
        if (colorName.indexOf(sortVal) > -1) {
          this.colorList.push(item);
          this.shuffledList.emit(this.colorList);
        }
      });
    }
  }
  filterByPrice() {
    var maxCost, minCost;
    maxCost = this.priceMax;
    minCost = this.priceMin;
    this.filterArr.filter((item) => {
      var priceVal = item.price.final_price;
      if (priceVal > minCost && priceVal < maxCost) {
        this.priceList.push(item);
        this.shuffledList.emit(this.priceList);
      }
    });
  }
  filterByDiscount() {
    var maxdiscount, mindiscount;
    maxdiscount = this.discountMax;
    mindiscount = this.discountMin;
    this.filterArr.filter((item) => {
      var discVal = item.discount;
      if (discVal > mindiscount && discVal < maxdiscount) {
        this.discountList.push(item);
        this.shuffledList.emit(this.discountList);
      }
    });
  }
  clearFilter() {
    this.shuffledList.emit(this.filterArr);
    this.priceMin="Min";
    this.priceMax="Max";
    this.discountMin="Min";
    this.discountMax="Max";
    // this.chooseBrand.nativeElement.setAttribute('checked', false);
    // console.log("cleared", this.chooseBrand.nativeElement.getAttribute('checked'));    
  }

}
