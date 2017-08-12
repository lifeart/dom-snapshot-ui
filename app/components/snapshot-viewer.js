import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        this._super(...arguments);
        this.sendAction('sendNode', this.$('iframe').contents().find('body')[0]);
    }
});
