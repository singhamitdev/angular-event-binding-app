import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  // variable to store data recived from the $event
  electedRecipe: Recipe;

  onNewselectedRecipe(newselectedRecipe: Recipe) {
    this.electedRecipe = newselectedRecipe;
  }

  constructor() {}

  ngOnInit(): void {}
}
