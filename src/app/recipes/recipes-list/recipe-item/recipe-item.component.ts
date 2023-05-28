import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  // receiving data from parent i.e recipe-list using property binding [recipe]="recipeEl"
  @Input() recipe: Recipe;

  // sending data to parent component using @output and EventEmitter,emit by the help of event binding
  @Output() recipeSelected = new EventEmitter();
  onSelected() {
    this.recipeSelected.emit();
  }

  constructor() {}

  ngOnInit(): void {
    // console.log(this.recipe);
  }
}
