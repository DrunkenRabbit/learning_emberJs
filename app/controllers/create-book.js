import Controller from '@ember/controller';
import { action } from '@ember/object';


export default class CreateBookController extends Controller {
  @action
  async saveBook(book) {
    try {
      book.preventDefault();
      const newBook = this.store.createRecord('book', this.model);
      await newBook.save();
      this.transitionToRoute('book');

    }
    catch(e) {
      this.send('error', e);
    }
  }
}
