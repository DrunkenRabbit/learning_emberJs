import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';


export default class BooksController extends Controller {
  queryParams = ['search', 'searchByTagN'];

  @tracked search = '';
  @tracked searchByTagN='';
  @tracked isLoading;
  @service dataService;

  @action
  async deleteBook(id) {
    await this.dataService.deleteBook(id);
    this.transitionToRoute('index'); // очередной костыыыль !!!!
    this.transitionToRoute('books');
  }
}
