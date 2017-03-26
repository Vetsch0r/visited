var Controller = function (model, view) {
  this.model = model;
  this.view = view;
  this.registerHandlers();
};

Controller.prototype = {

  registerHandlers: function(){
    var model = this.model;
    var view = this.view;
    $(window).bind('hashchange', function() {
      model.changeMap();
      view.load();
    });
    $("#visistedLink").click(function(e){
      view.changeSite("index.html");
    });
    $("#wantedLink").click(function(e){
      view.changeSite("wanted.html");
    });
  },
}
