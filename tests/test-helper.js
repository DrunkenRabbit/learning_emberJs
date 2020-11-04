import Application from 'ember-js-learning/app';
import config from 'ember-js-learning/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
