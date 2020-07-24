import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
@Input() itemScore:any;
  constructor() { }

  ngOnInit(): void {
  }

}
