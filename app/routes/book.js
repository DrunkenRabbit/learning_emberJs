import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class BooksRoute extends Route {
  @service dataService;
  queryParams = {
    search: {
      refreshModel: true
    },
    searchByTagN: {
      refreshModel: true
    }
  }
  model({ search,searchByTagN }) {
    if (search) {
      return this.store.query('book', { q: search });
    }
    if (searchByTagN) {
      return this.store.query('book', { q: searchByTagN });
    }

    return this.store.findAll('book');
  }

  @action
  loading() {
    return false;
  }
}

