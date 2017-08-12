import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        loadSnapshot(id) {
            this.sendAction('loadSnapshot',id);
        }
    }
});
