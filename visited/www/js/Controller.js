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
      view.loadMap();
    });
    $( ".collapsing").on("collapsiblecollapse", function( event, ui ) {
      window.location.hash = "";
    });
    $( "#AF").on("collapsibleexpand", function( event, ui ) {
      $(".collapsing:not(#AF)").collapsible("collapse");
      window.location.hash = "AF";
    });
    $( "#AS").on("collapsibleexpand", function( event, ui ) {
      $(".collapsing:not(#AS)").collapsible("collapse");
      window.location.hash = "AS";
    });
    $( "#australia").on("collapsibleexpand", function( event, ui ) {
      $(".collapsing:not(#australia)").collapsible("collapse");
      window.location.hash = "OC";
    });
    $( "#europe").on("collapsibleexpand", function( event, ui ) {
      $(".collapsing:not(#europe)").collapsible("collapse");
      window.location.hash = "EU";
    });
    $( "#namerica").on("collapsibleexpand", function( event, ui ) {
      $(".collapsing:not(#namerica)").collapsible("collapse");
      window.location.hash = "NA";
    });
    $( "#samerica").on("collapsibleexpand", function( event, ui ) {
      $(".collapsing:not(#samerica)").collapsible("collapse");
      window.location.hash = "SA";
    });
    $(document).on('click', ".ui-block-c", function(e) {
      view.clickVisited(e.target.id);
    });
    $(document).on('click', ".ui-block-d", function(e) {
      view.clickWanted(e.target.id);
    });
  },
}
