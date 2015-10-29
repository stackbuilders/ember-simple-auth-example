import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    oauth2Authenticate() {
      const { identification, password } = this.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:oauth2', identification, password);
    },
    deviseAuthenticate() {
      const { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', identification, password);
    }
  }
});
