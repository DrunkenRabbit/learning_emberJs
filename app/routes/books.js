import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BooksRoute extends Route {
  @service dataService;

  async model({search }) {
    return this.dataService.readBooks(search) ;
  }

}
