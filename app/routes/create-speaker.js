import Route from '@ember/routing/route';

export default class CreateSpeakerRoute extends Route {
  model() {
    return {
      firstName: '',
      lastName: '',
      patronymic: '',
      photoUrl: "./speaker.jpg"
    };
  }
  setupController(controller, model) {
    super.setupController(...arguments);
  }

}
