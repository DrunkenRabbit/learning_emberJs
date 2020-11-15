import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import { tracked } from '@glimmer/tracking';

export default class CreateSpeakerController extends Controller {
  @service dataService;

  @tracked firstName;
  @tracked lastName;
  @tracked patronymic;

  @action
  async saveSpeaker(e) {
    e.preventDefault();

    await this.dataService.createSpeaker(this.model);

    this.transitionToRoute('speakers');
  }

  @action
  changeName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
