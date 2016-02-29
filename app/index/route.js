import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit: function() {
      var user = this.store.createRecord('user', {
        firstName: this.controller.get('firstName'),
        lastName: this.controller.get('lastName'),
        email: this.controller.get('email')
      });
      user.save().then( () => {
        console.log('save successful');
        this.controller.set('firstName', null);
        this.controller.set('lastName', null);
        this.controller.set('email', null);
      }, function() {
        console.log('save failed');
      });
    }
  }
});
