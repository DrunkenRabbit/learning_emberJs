import Controller from '@ember/controller';
import {action} from '@ember/object';

export default class EditSpeakerController extends Controller {

  @action
  async saveSpeaker() {
    try {
      this.store.findRecord('speaker', this.model.id).then(function(speaker) {
        speaker.save();
      });


      this.transitionToRoute('speaker');
    } catch (e) {
      this.send('error', e);
    }
  }

  @action
  changeName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
