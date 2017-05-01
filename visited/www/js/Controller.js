var Controller = function (model, view) {
  this.model = model;
  this.view = view;
  this.registerHandlers();
};

Controller.prototype = {

  registerHandlers: function(){
    var model = this.model;
    var view = this.view;

    $(window).bind('hashchange', function(e) {
      e.preventDefault();
      model.changeMap();
      view.resetScroll();
      view.loadMap();
    });
    $(".collapsing a").on("click", function(e) {
      if(!$(".collapsing#" + e.target.parentNode.parentNode.id).collapsible("option", "collapsed")){
        window.location.hash = "";
      }
    });
    $( "#africa").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "AF";
    });
    $( "#asia").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "AS";
    });
    $( "#australia").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "OC";
    });
    $( "#europe").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "EU";
    });
    $( "#namerica").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "NA";
    });
    $( "#samerica").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "SA";
    });
    $(document).on('click', ".visitedButton", function(e) {
      view.clickVisited(e.target.id);
    });
    $(document).on('click', ".wantedButton", function(e) {
      view.clickWanted(e.target.id)
    });
    $(document).on('click', ".focusButton", function(e) {
      window.location="focus.html?country=" + e.target.id;
    });
    $("#visitedColor").spectrum({
      color: model.getVisitedColor(),
      change: function (color) {
        model.changeVisitedColor(color.toHexString());
        view.loadMap();
      }
    });
    $("#wantedColor").spectrum({
      color: model.getWantedColor(),
      change: function (color) {
        model.changeWantedColor(color.toHexString());
        view.loadMap();
      }
    });
    window.addEventListener("orientationchange", function() {
      var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
      if (orientation.type === "landscape-primary" || orientation.type == "landscape-secondary") {
        $('#map').height('100%');
      }
      else{
        $('#map').height('35%');
      }
    });
  },
}
