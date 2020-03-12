import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    currentIndex: computed('selectedSnapshot', 'model.[]', function() {
        return  this.model.indexOf(this.model.find((el)=>el.id == this.selectedSnapshot));
    }),
    prev: computed('currentIndex', function() {
        return  this.model[this.currentIndex - 1];
    }),
    next: computed('currentIndex', function() {
        return  this.model[this.currentIndex + 1];
    }),
    actions: {
        loadSnapshot(id) {
            this.sendAction('loadSnapshot',id);
        },
        removeSnapshot() {
           if (confirm(`Remove snapshot ${this.get('selectedSnapshot')}?`)) {
             this.sendAction('removeSnapshot',this.get('selectedSnapshot'));
           }
        }
    }
});
