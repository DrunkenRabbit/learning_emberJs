import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


export default class BooksController extends Controller {
  queryParams = ['search', 'searchByTagN'];

  @tracked search = '';
  @tracked searchByTagN='';
  @tracked isLoading;
  @tracked isError;

  @action
  async deleteBook(id) {
    let deletedBook = this.store.peekRecord('book', id);
    await deletedBook.destroyRecord();
  }
}
