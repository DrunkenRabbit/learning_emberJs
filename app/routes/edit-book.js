import Route from '@ember/routing/route';

export default class EditBookRoute extends Route {

  async model({id }) {
    return this.store.findRecord("book",id);
  }
}
