import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class EditBookController extends Controller {
  @service dataService;

  @action
  async saveBook() {
    try {
      this.store.findRecord('book', this.model.id).then(function(book) {
        book.save();
      });


      this.transitionToRoute('speaker');
    } catch (e) {
      this.send('error', e);
    }
  }
  @action
  changeName(bookTitle) {
    this.bookTitle = bookTitle;
  }
}
