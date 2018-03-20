import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss']
})
export class AddMaterialComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

  close() {
    this.bsModalRef.hide();
  }

}
