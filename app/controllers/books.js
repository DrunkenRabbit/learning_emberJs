import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class BooksController extends Controller {
  queryParams = ['search'];

  @tracked search = '';
  @tracked isLoading;
  @service dataService;
  @action
  async deleteBook(id) {
    await this.dataService.deleteBook(id);

    this.transitionToRoute('books');
  }
}
