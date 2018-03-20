import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  articles: IListArticle[] = [
    {
      id: 1,
      image: {
        imageUrl: 'assets/img/1.webp',
        thumbUrl: 'assets/img/1.webp',
      },
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est cursus, porta leo vitae, faucibus lorem. Ut id elit id metus finibus laoreet. Suspendisse rutrum tempus ante, eget placerat augue condimentum quis. Integer scelerisque elit sit amet tellus ultrices, et dapibus ipsum vehicula. Nam sed ipsum pellentesque felis pellentesque ornare non vitae nisl. Duis et enim urna. Vivamus venenatis velit sem, sed lacinia quam imperdiet ac. In ac risus urna. Duis purus ligula, consequat sed pharetra et, iaculis et libero. Sed eget dolor viverra, faucibus ante nec, lacinia nisi.',
      createdAt: new Date(),
      tags: ['links', 'downloads']
    },
    {
      id: 1,
      image: {
        imageUrl: 'assets/img/2.webp',
        thumbUrl: 'assets/img/2.webp',
      },
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est cursus, porta leo vitae, faucibus lorem. Ut id elit id metus finibus laoreet. Suspendisse rutrum tempus ante, eget placerat augue condimentum quis. Integer scelerisque elit sit amet tellus ultrices, et dapibus ipsum vehicula. Nam sed ipsum pellentesque felis pellentesque ornare non vitae nisl. Duis et enim urna. Vivamus venenatis velit sem, sed lacinia quam imperdiet ac. In ac risus urna. Duis purus ligula, consequat sed pharetra et, iaculis et libero. Sed eget dolor viverra, faucibus ante nec, lacinia nisi.',
      createdAt: new Date(),
      tags: ['links', 'downloads']
    },
    {
      id: 1,
      image: {
        imageUrl: 'assets/img/3.webp',
        thumbUrl: 'assets/img/3.webp',
      },
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est cursus, porta leo vitae, faucibus lorem. Ut id elit id metus finibus laoreet. Suspendisse rutrum tempus ante, eget placerat augue condimentum quis. Integer scelerisque elit sit amet tellus ultrices, et dapibus ipsum vehicula. Nam sed ipsum pellentesque felis pellentesque ornare non vitae nisl. Duis et enim urna. Vivamus venenatis velit sem, sed lacinia quam imperdiet ac. In ac risus urna. Duis purus ligula, consequat sed pharetra et, iaculis et libero. Sed eget dolor viverra, faucibus ante nec, lacinia nisi.',
      createdAt: new Date(),
      tags: ['links', 'downloads']
    },
    {
      id: 1,
      image: {
        imageUrl: 'assets/img/4.webp',
        thumbUrl: 'assets/img/4.webp',
      },
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est cursus, porta leo vitae, faucibus lorem. Ut id elit id metus finibus laoreet. Suspendisse rutrum tempus ante, eget placerat augue condimentum quis. Integer scelerisque elit sit amet tellus ultrices, et dapibus ipsum vehicula. Nam sed ipsum pellentesque felis pellentesque ornare non vitae nisl. Duis et enim urna. Vivamus venenatis velit sem, sed lacinia quam imperdiet ac. In ac risus urna. Duis purus ligula, consequat sed pharetra et, iaculis et libero. Sed eget dolor viverra, faucibus ante nec, lacinia nisi.',
      createdAt: new Date(),
      tags: ['links', 'downloads']
    },
    {
      id: 1,
      image: {
        imageUrl: 'assets/img/5.webp',
        thumbUrl: 'assets/img/5.webp',
      },
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est cursus, porta leo vitae, faucibus lorem. Ut id elit id metus finibus laoreet. Suspendisse rutrum tempus ante, eget placerat augue condimentum quis. Integer scelerisque elit sit amet tellus ultrices, et dapibus ipsum vehicula. Nam sed ipsum pellentesque felis pellentesque ornare non vitae nisl. Duis et enim urna. Vivamus venenatis velit sem, sed lacinia quam imperdiet ac. In ac risus urna. Duis purus ligula, consequat sed pharetra et, iaculis et libero. Sed eget dolor viverra, faucibus ante nec, lacinia nisi.',
      createdAt: new Date(),
      tags: ['links', 'downloads']
    },
    {
      id: 1,
      image: {
        imageUrl: 'assets/img/6.webp',
        thumbUrl: 'assets/img/6.webp',
      },
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est cursus, porta leo vitae, faucibus lorem. Ut id elit id metus finibus laoreet. Suspendisse rutrum tempus ante, eget placerat augue condimentum quis. Integer scelerisque elit sit amet tellus ultrices, et dapibus ipsum vehicula. Nam sed ipsum pellentesque felis pellentesque ornare non vitae nisl. Duis et enim urna. Vivamus venenatis velit sem, sed lacinia quam imperdiet ac. In ac risus urna. Duis purus ligula, consequat sed pharetra et, iaculis et libero. Sed eget dolor viverra, faucibus ante nec, lacinia nisi.',
      createdAt: new Date(),
      tags: ['links', 'downloads']
    },
    {
      id: 1,
      image: {
        imageUrl: 'assets/img/7.webp',
        thumbUrl: 'assets/img/7.webp',
      },
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est cursus, porta leo vitae, faucibus lorem. Ut id elit id metus finibus laoreet. Suspendisse rutrum tempus ante, eget placerat augue condimentum quis. Integer scelerisque elit sit amet tellus ultrices, et dapibus ipsum vehicula. Nam sed ipsum pellentesque felis pellentesque ornare non vitae nisl. Duis et enim urna. Vivamus venenatis velit sem, sed lacinia quam imperdiet ac. In ac risus urna. Duis purus ligula, consequat sed pharetra et, iaculis et libero. Sed eget dolor viverra, faucibus ante nec, lacinia nisi.',
      createdAt: new Date(),
      tags: ['links', 'downloads']
    },
    {
      id: 1,
      image: {
        imageUrl: 'assets/img/8.webp',
        thumbUrl: 'assets/img/8.webp',
      },
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est cursus, porta leo vitae, faucibus lorem. Ut id elit id metus finibus laoreet. Suspendisse rutrum tempus ante, eget placerat augue condimentum quis. Integer scelerisque elit sit amet tellus ultrices, et dapibus ipsum vehicula. Nam sed ipsum pellentesque felis pellentesque ornare non vitae nisl. Duis et enim urna. Vivamus venenatis velit sem, sed lacinia quam imperdiet ac. In ac risus urna. Duis purus ligula, consequat sed pharetra et, iaculis et libero. Sed eget dolor viverra, faucibus ante nec, lacinia nisi.',
      createdAt: new Date(),
      tags: ['links', 'downloads']
    },
    {
      id: 1,
      image: {
        imageUrl: 'assets/img/9.webp',
        thumbUrl: 'assets/img/9.webp',
      },
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est cursus, porta leo vitae, faucibus lorem. Ut id elit id metus finibus laoreet. Suspendisse rutrum tempus ante, eget placerat augue condimentum quis. Integer scelerisque elit sit amet tellus ultrices, et dapibus ipsum vehicula. Nam sed ipsum pellentesque felis pellentesque ornare non vitae nisl. Duis et enim urna. Vivamus venenatis velit sem, sed lacinia quam imperdiet ac. In ac risus urna. Duis purus ligula, consequat sed pharetra et, iaculis et libero. Sed eget dolor viverra, faucibus ante nec, lacinia nisi.',
      createdAt: new Date(),
      tags: ['links', 'downloads']
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}


export interface IListArticle {
  id?: number;
  image?: {
    imageUrl?: string,
    thumbUrl?: string
  };
  createdAt?: Date;
  title?: string;
  description?: string;
  tags?: string[];
}
