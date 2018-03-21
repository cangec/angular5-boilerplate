import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BoardComponent } from './board/board.component';
import { ArticleComponent } from './article/article.component';
import { AboutUsComponent } from './about-us/about-us.component';




const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: BoardComponent
      },
      {
        path: 'article',
        component: ArticleComponent
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: '**',
        redirectTo: 'articles'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
