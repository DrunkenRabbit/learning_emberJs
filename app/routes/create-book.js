import Route from '@ember/routing/route';

export default class CreateBookRoute extends Route {
  model() {
    return {
      bookTitle: '',
      authorName: '',
      bookCoverUrl: './book-cover.jpg',
      tags: '',
      rating: 85,
      numberOfPages: 0,
      description: "",
    };
  }
  setupController(controller, model) {
    super.setupController(...arguments);
  }
}
