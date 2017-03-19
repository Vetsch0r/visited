$(function() {
  var model = new ApplicationModel();;
  var view = new View(model);
  var controller = new Controller(model, view);
  view.init();
});
