import Route from '@ember/routing/route';

export default class CreateBookRoute extends Route {
  model() {
    return {
      bookTitle: '',
      authorName: '',
      bookCoverUrl: './book-cover.jpg',
      tags: [1,2],
      rating: "",
      numberOfPages: "",
      description: "",
    };
  }

}
