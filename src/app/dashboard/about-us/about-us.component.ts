import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { ToastyService } from 'ng2-toasty';
import { AddMaterialComponent } from '../../shared/modals/add-material/add-material.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {


  constructor(private bsModalService: BsModalService, private toastyService: ToastyService) {
  }

  ngOnInit() {
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

export interface IAboutUs {
  id?: number;
  image?: {
    imageUrl?: string,
    thumbUrl?: string
  };
  createdAt?: Date;
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
