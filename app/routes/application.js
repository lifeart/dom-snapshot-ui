import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {

    this.snapshot = new DomSnapshot();

    this.snapshot.getBodyNode = () => {
      return this.viewNode;
    };

    return this.snapshot.loaded();

  },
  model() {
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
  afterModel(model) {
    this._super(...arguments);

    // let modelHash = {};
    //
    // model.forEach(e=>{
    //   modelHash[e.id] = {
    //     visible: true
    //   }
    // });
    //
    // this.snapshot.firebase.database().ref(`/snapshots-list`).set(modelHash);
    //

    // console.log(arguments);
  },
  actions: {
    loadSnapshot(id) {
      this.snapshot.showSnapshot(id);
    },
    sendNode(node) {
      this.viewNode = node;
    }
  }
});
