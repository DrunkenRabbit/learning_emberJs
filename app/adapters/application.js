import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'ember-js-learning/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = config.APP.backEndURL;
  headers = {
    'Content-Type': 'application/json'
  };

  // buildURL(modelName, id, snapshot, requestType, query) {
  //   let url = super.buildURL(...arguments);
  //   if (modelName === 'speaker' && requestType === 'findRecord' && id) {
  //     url += '?_embed=books';
  //   }
  //
  //   return url;
  // }

}
