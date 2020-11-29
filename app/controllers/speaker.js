import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SpeakerController extends Controller {
  queryParams = ['search'];

  @tracked search = '';
  @tracked isLoading;

  @action
  async deleteSpeaker(id) {
    let deletedSpeaker = this.store.peekRecord('speaker', id);
    await deletedSpeaker.destroyRecord();
  }
}
