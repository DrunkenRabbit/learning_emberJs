import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';


export default class SpeakerRoute extends Route {
  @service dataService;

  queryParams = {
    search: {
      refreshModel: true
    }
  }

  async model({ search }) {
    if (search) {
      return this.store.query("speaker", { q: search });
    }
    let response = this.store.findAll("speaker");
    return response;
  }

  setupController(controller, model) {
    super.setupController(...arguments);

  }

  resetController(controller, isExiting) {
    super.resetController(...arguments);
  }

  @action
  loading() {
    return false;
  }
}
