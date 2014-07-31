import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    // the model for this route is a new empty Ember.Object
    return this.store.createRecord('user');
  },

  // in this case (the create route), we can reuse the user/edit template
  // associated with the usersCreateController
  renderTemplate: function(){
    this.render('user.edit', {
      controller: 'users/create'
    });
  }
});
