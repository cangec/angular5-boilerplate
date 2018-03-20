import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { AddMaterialComponent } from '../../shared/modals/add-material/add-material.component';
import { ToastyService } from 'ng2-toasty';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  date: Date;

  constructor(private bsModalService: BsModalService, private toastyService: ToastyService) {
  }

  ngOnInit() {

    this.date = new Date;

  }

  addNewMaterial() {
    this.bsModalService.show(AddMaterialComponent);
  }

  save() {
    this.toastyService.success('Article saved.');
  }

  publish() {
    this.toastyService.success('Article published.');
  }

}


export interface IArticle {
  id?: number;
  country?: number;
  image?: {
    imageUrl?: string,
    thumbUrl?: string
  };
  createdAt?: Date;
  title?: string;
  description?: string;
  extraMaterial?: [
    {
      id?: number;
      type?: string;
      description?: string;
      url?: string;
    }
    ];
}
