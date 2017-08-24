import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        loadSnapshot(id) {
            this.sendAction('loadSnapshot',id);
            this.set('selectedSnapshot', id);
        },
        removeSnapshot() {
           if (confirm(`Remove snapshot ${this.get('selectedSnapshot')}?`)) {
             this.sendAction('removeSnapshot',this.get('selectedSnapshot'));
           }
        }
    }
});
