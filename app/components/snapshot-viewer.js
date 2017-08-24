import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        this._super(...arguments);
        this.sendAction('sendNode', this.$('iframe').contents().find('body')[0]);
    },
    attributeBindings: ['draggable'],
    classNames: ['ui','segment'],
    draggable: true,
    visible: true,
    x: 0,
    y: 0,
    iframeHeight: 1080,
    scale: 0.5,
    iframeWidth: 1920,
    positionChanged: Ember.observer('x', 'y', function(){
      this.$().css({
        left: `${this.get('x')}px`,
        top: `${this.get('y')}px`,
      });
    }),
    dragStart(e) {
       var x = parseInt(this.$().css('left')) - e.originalEvent.clientX;
       var y = parseInt(this.$().css('top')) - e.originalEvent.clientY;
       e.originalEvent.dataTransfer.setData("position", `${x},${y}`);
     },
     windowDrop(e) {
    var xy = e.dataTransfer.getData("position").split(',');
    this.setProperties({
      x: `${e.originalEvent.clientX + parseInt(xy[0])}`,
      y: `${e.originalEvent.clientY + parseInt(xy[1])}`,
    });
  },
  windowDragOver(e) {
    e.originalEvent.preventDefault();
  },
  didRender() {
  var self = this;
  $(document)
    .on('drop', $.proxy(self.windowDrop, self))
    .on('dragover', $.proxy(self.windowDragOver, self));
},
// Remember to unbind the document event handlers
didDestroyElement() {
  $(document)
    .off('drop')
    .off('dragover');
}
});
