import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return ['Yehuda Katz', 'David Hanson', 'Matz'];
  }
});
