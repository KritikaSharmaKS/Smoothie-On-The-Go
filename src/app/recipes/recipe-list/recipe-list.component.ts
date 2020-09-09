import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'This is simply a test', 'https://cdn.shopify.com/s/files/1/2479/2098/products/Saphir_EN_2048x2048.jpg?v=1595266518'),

  ];

  constructor() { 

  }

  ngOnInit(): void {
  }

}
