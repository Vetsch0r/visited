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
      if(!$("#"+ e.target.parentNode.parentNode.id).collapsible("option", "collapsed")){
        window.location.hash = "";
      }
    });
    $( "#AF").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "AF";
    });
    $( "#AS").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "AS";
    });
    $( "#OC").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "OC";
    });
    $( "#EU").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "EU";
    });
    $( "#NA").on("collapsibleexpand", function( event, ui ) {
      window.location.hash = "NA";
    });
    $( "#SA").on("collapsibleexpand", function( event, ui ) {
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
  },
}
