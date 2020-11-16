import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class BooksRoute extends Route {
  @service dataService;
  queryParams = {
    search: {
      refreshModel: true
    }
  }

  async model({ search }) {
    let promise = new Promise((resolve, reject) => {
      resolve(this.dataService.readBooks(search));
    }).
    then((data) => {
      this.controller.model = data;
    }).finally(() => {
      if (promise === this.lastPromise) {
        this.controller.isLoading = false;
      }
    });

    this.lastPromise = promise;
    return {
      isLoading: true
    }
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    controller.isLoading = true;
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.isLoading = false;
      this.lastPromise = false;
    }
  }


  @action
  loading() {
    return false;
  }

}
