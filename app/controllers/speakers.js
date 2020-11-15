import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SpeakersController extends Controller {
  @service dataService;
  @action
  async deleteSpeaker(id) {
    await this.dataService.deleteSpeaker(id);

    this.transitionToRoute('speakers');
  }
}
