import Ember from 'ember';
/* global moment */
// ^ you actually need that comment

export default Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).fromNow();
});
