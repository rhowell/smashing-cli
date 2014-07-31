import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'smashing-cli', // TODO: loaded via config
  Resolver: Resolver,
  ApplicationAdapter: DS.LSAdapter
});

loadInitializers(App, 'smashing-cli');

export default App;
