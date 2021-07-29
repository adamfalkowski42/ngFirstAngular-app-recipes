import {RecipesComponent} from "./recipes.component";
import {AuthGuard} from "../auth/auth.guard";
import {RecipesStartComponent} from "./recipes-start/recipes-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipesResolverService} from "./recipes-resolver.service";
import {Router, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [{
  path: 'recipes',
  component: RecipesComponent, canActivate:[AuthGuard],
  children: [
    { path: '', component: RecipesStartComponent },
    { path: 'new', component: RecipeEditComponent },
    {
      path: ':id',
      component: RecipeDetailComponent,
      resolve: [RecipesResolverService],
    },
    {
      path: ':id/edit',
      component: RecipeEditComponent,
      resolve: [RecipesResolverService],
    },
  ],
},]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule{}
