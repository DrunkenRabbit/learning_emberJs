import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SpeakersController extends Controller {
  queryParams = ['search'];

  @tracked search = '';
  @tracked isLoading;
  @service dataService;

  @action
  async deleteSpeaker(id) {
    await this.dataService.deleteSpeaker(id);

    this.transitionToRoute('speakers');
  }
}
