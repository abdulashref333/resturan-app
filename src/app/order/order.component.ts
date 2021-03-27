import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  total = 0;
  selectedCategory  = "";
  selectedMale = "";
  price = 0;
  options = [];
  quantity = 1;
  counterItems = 0;
  TotalPrice = 0;
  spicy: boolean = false;
  combo: boolean = false;

  @ViewChild('rowContainer') rowContainer: ElementRef;
  myItemsOrder = "";

  males = {
    cat1:[
      {value:20, name:'rice'},
      {value:40, name:'phool'}
    ],
    cat2:[
      {value:12, name:'rice2'},
      {value:42, name:'phool2'}
    ],
    cat3:[
      {value:23, name:'rice3'},
      {value:43, name:'phool3'}
    ]

  }
  constructor() { }

  ngOnInit(): void {
  }
  addItem(){
    console.log(this.price)
    this.total = this.quantity * this.price;
    if(this.combo){
      this.total += 2;
    }
    if(this.spicy){
      this.total += 1;
    }

    this.myItemsOrder = `
      <tr>
          <th scope="row">${++this.counterItems}</th>
          <td>${this.selectedMale}</td>
          <td>${this.quantity}</td>
          <td>${this.price}</td>
          <td>${this.combo? this.spicy? "combo + spicy":"combo": this.spicy ? "spicy":""}</td>
          <td>${this.total}</td>
      </tr>
    `;
    this.rowContainer.nativeElement.insertAdjacentHTML('beforeend', this.myItemsOrder);
    this.TotalPrice += this.total;
    this.total = 0;
  }

  reset(){
    this.rowContainer.nativeElement.innerHTML = "";
    this.TotalPrice = 0;
  }
  selectCat(){
    for (const cat in this.males) {
      if(cat === this.selectedCategory){
        this.options = this.males[cat];
        break;
      }
    }
  }
  isCombo(){
    this.combo = this.combo ? false : true;
  }
  isSpicy(){
    this.spicy = this.spicy ? false: true;
  }
}
