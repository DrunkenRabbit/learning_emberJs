import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class CreateSpeakerController extends Controller {

  @action
  async saveSpeaker(speaker) {
    try {
      speaker.preventDefault();
      let newSpeaker = this.store.createRecord('speaker', this.model);
      await newSpeaker.save();
      this.transitionToRoute('speaker');
    }
    catch(e) {
      this.send('error', e);
    }
  }

}
