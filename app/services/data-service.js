import Service from '@ember/service';
import config from 'ember-js-learning/config/environment';

export default class DataServiceService extends Service {
  async readBooks(searchValue) {
    let searchSegm = searchValue ? `?q=${searchValue}` : '';
    let response = await fetch(`${config.APP.backEndURL}books${searchSegm}`);
    return response.json();
  }

  async readBook(id) {
    let response = await fetch(`${config.APP.backEndURL}books/${id}`);
    return response.json();
  }
  async readSpeakers(searchValue) {
    let searchSegm = searchValue ? `?q=${searchValue}` : '';
    let response = await fetch(`${config.APP.backEndURL}speakers${searchSegm}`);
    return response.json();
  }

  async readSpeaker(id) {
    let response = await fetch(`${config.APP.backEndURL}speakers/${id}`);
    return response.json();
  }

  changeSpeaker(speaker) {
    return fetch(`${config.APP.backEndURL}speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  }
  changeBook(book) {
    return fetch(`${config.APP.backEndURL}books/${book.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  }

  createBook(book) {
    return fetch(`${config.APP.backEndURL}books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
  }
  createSpeaker(speaker) {

    return fetch(`${config.APP.backEndURL}speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  }

  deleteSpeaker(id) {
    return fetch(`${config.APP.backEndURL}speakers/${id}`, {
      method: 'DELETE',
    });
  }

  deleteBook(id) {
    return fetch(`${config.APP.backEndURL}books/${id}`, {
      method: 'DELETE',
    });
  }

}
