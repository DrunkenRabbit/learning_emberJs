import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SpeakersRoute extends Route {
  @service dataService;

  async model({search }) {
    return this.dataService.readSpeakers(search) ;
  }
}
