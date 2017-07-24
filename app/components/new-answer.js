import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,

  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true)
    },
    saveAnswer(){
      var params = {
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('author', '');
      this.set('answer', '');
    }
  }
});
