import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import { tracked } from '@glimmer/tracking';

export default class CreateBookController extends Controller {
  @service dataService;

  @action
  async saveBook(e) {
    e.preventDefault();

    await this.dataService.createBook(this.model);

    this.transitionToRoute('books');
  }
}
