import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { SharedModule } from '../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { ArticleComponent } from './article/article.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent,
                 BoardComponent,
                 AboutUsComponent,
                 ArticleComponent]
})
export class DashboardModule {
}
