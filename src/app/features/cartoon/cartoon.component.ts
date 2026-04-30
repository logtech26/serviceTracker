import { Component, OnInit } from '@angular/core';
import { CartoonService } from 'src/app/services/cartoon.service';

@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.scss']
})
export class CartoonComponent implements OnInit {

  charac: any[] = [];


  constructor(private cartoonService: CartoonService) { }

  ngOnInit(): void {
    this.cartoonService.getCartooCharacter().subscribe(res => {
      console.log("from component ==>", res);
      this.charac = res.items;
    })
  }

}
