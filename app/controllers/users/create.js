import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function(){
      // just before saving, we set the creationDate
      this.get('model').set('creationDate', new Date());

      // create a record and save it to the store
      var newUser = this.get('model').save();

      // redirects to the user itself
      this.transitionToRoute('user', newUser);
    }
  }
});
