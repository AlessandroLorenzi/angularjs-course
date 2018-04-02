import { NgModule } from '@angular/core';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { dropdownDirective } from './shared/dropdown.directive';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, 
    children: [
      { path: '',
        component: RecipeStartComponent,
        pathMatch: 'full'
      },
      { path: ':id', component: RecipeDetailComponent }
    ]
    
  },

  { path: 'shopping-list', component: ShoppingListComponent },

  { path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
})
export class AppRouterModule { }
