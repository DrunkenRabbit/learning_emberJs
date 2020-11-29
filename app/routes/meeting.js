import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class MeetingRoute extends Route {
  @service dataService;

  queryParams = {
    search: {
      refreshModel: true
    }
  }

  async model({ search }) {
    if (search) {
      return this.store.query("meeting", { q: search });
    }
    let response = this.store.findAll("meeting");
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
