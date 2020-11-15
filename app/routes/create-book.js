import Route from '@ember/routing/route';

export default class CreateBookRoute extends Route {
  model() {
    return {
      bookTitle: '',
      authorName: '',
      bookCoverUrl: './book-cover.jpg',//пока какая нить дефолтная картинка
      tags: [1,2],// надо их настроить
      rating: "",// пока хз как передвать
      numberOfPages: "",
      description: "",
    };
  }

  setupController(controller, model) {
    super.setupController(...arguments);
  }
}
