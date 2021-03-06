import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {

    this.snapshot = window.snapshoter;
    this.snapshot.getBodyNode = () => {
      return this.viewNode;
    };

    return this.snapshot.loaded();

  },
  loadModel() {
    this.existingElements = [];
    const _this = this;
    return this.snapshot.firebase.database().ref('/snapshots-list').once('value').then(function(snapshot) {
      const snapshots =  snapshot.val();
      _this.existingElements = Object.keys(snapshots);
      return Object.keys(snapshots).map(id=>{
        return {
          id: id,
          name: `snapshot - ${id}`
        }
      }).reverse();
    });
  },
  model() {
    return this.loadModel();
  },
  afterModel() {
    this._super(...arguments);

    var snapshotsRef = this.snapshot.firebase.database().ref('/snapshots-list');
    const _this = this;
    snapshotsRef.limitToLast(1).on('child_added', function(data) {
      const key = data.key;
      if (!_this.existingElements.includes(key)) {
        _this.send('reloadModel');
      }
    });

    snapshotsRef.on('child_changed', function(data) {
      console.log('child_changed',data, data.val());
    });

    snapshotsRef.on('child_removed', (data) => {
      console.log('child_removed',data);
    });
  },
  actions: {
    async removeSnapshot(id) {
      if (1503571368954 == id) {
        return;
      }
      let indexRemove = await this.snapshot.firebase.database().ref('/snapshots-list/'+id).remove();
      let rootRemove = await this.snapshot.firebase.database().ref('/snapshots/'+id).remove();
      let nextIndex = this.controller.model.indexOf(this.controller.model.find((el)=>el.id == id)) + 1;
      this.send('reloadModel', this.controller.model[nextIndex].id);
    },
    async reloadModel(maybeId) {
      let newModel = await this.loadModel();
      this.controller.set('model', newModel);
      if (maybeId) {
        this.send('loadSnapshot', maybeId);
      }
    },
    loadSnapshot(id) {
      try {
        this.controller.set('selectedSnapshot', id);
        this.viewNode.parentNode.querySelector('head').innerHTML = '';
        this.viewNode.innerHTML = '<b>Loading...</b>';
        this.snapshot.showSnapshot(id).catch((e)=>{
          if (confirm('Remove broken snapshot?')) {
            this.send('removeSnapshot', id);
          } else {
            console.log(e);
          }
        });
      } catch (e) {
        alert('Snapshot load error');
      }
    },
    sendNode(node) {
      this.viewNode = node;
      this.send('loadSnapshot', 1503571368954);
    }
  }
});
