import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {

    this.snapshot = new DomSnapshot();

    this.snapshot.getBodyNode = () => {
      return this.viewNode;
    };

    return this.snapshot.loaded();

  },
  loadModel() {
    return this.snapshot.firebase.database().ref('/snapshots-list').once('value').then(function(snapshot) {
      const snapshots =  snapshot.val();
      return Object.keys(snapshots).map(id=>{
        return {
          id: id,
          name: `snapshot - ${id}`
        }
      });
    });
  },
  model() {
    return this.loadModel();
  },
  afterModel(model) {
    this._super(...arguments);
  },
  actions: {
    async removeSnapshot(id) {
      if (1503571368954 == id) {
        return;
      }
      let indexRemove = await this.snapshot.firebase.database().ref('/snapshots-list/'+id).remove();
      let rootRemove = await this.snapshot.firebase.database().ref('/snapshots/'+id).remove();
      let newModel = await this.loadModel();
      this.controller.set('model', newModel);
    },
    loadSnapshot(id) {
      try {
        this.viewNode.parentNode.querySelector('head').innerHTML = '';
        this.viewNode.innerHTML = '<b>Loading...</b>';
        this.snapshot.showSnapshot(id);
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
