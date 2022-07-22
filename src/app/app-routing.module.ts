import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenceComponent } from './agence/agence.component';
import { ArticleComponent } from './article/article.component';
import { TypeArticleComponent } from './type-article/type-article.component';

const routes: Routes = [
  { path: "article", component: ArticleComponent },
  { path: "agence", component: AgenceComponent },
  { path: "type-article", component: TypeArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
