import Route from '@ember/routing/route';

export default class EditSpeakerRoute extends Route {

  async model({id }) {
    let response = this.store.findRecord("speaker", id);
    return response;
  }

  setupController(controller, model) {
    super.setupController(...arguments);

  }
}
