var Controller = function (model, view) {
  this.model = model;
  this.view = view;
  this.registerHandlers();
};

Controller.prototype = {

  registerHandlers: function(){
    var controller = this;
    var model = this.model;
    var view = this.view;

    $(window).bind('hashchange', function(e) {
      e.preventDefault();
      model.changeMap();
      view.resetScroll();
      view.loadMap();
    });
    $(document).ready(function() {
      document.addEventListener("resume", function(){
        orientationChange();
      }, false);
      orientationChange();
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

    /**
    * Settings color picker
    **/
    if($('#visitedColor').length) {
      $("#visitedColor").spectrum({
        color: model.getVisitedColor(),
        replacerClassName: 'colorpicker',
        containerClassName: 'colorpickerContainer',
        change: function (color) {
          model.changeVisitedColor(color.toHexString());
          view.loadMap();
          view.markCountries();
        }
      });
    }
    if($('#wantedColor').length) {
      $("#wantedColor").spectrum({
        color: model.getWantedColor(),
        replacerClassName: 'colorpicker',
        containerClassName: 'colorpickerContainer',
        change: function (color) {
          model.changeWantedColor(color.toHexString());
          view.loadMap();
          view.markCountries();
        }
      });
    }

    /**
    * Settings number format
    **/
    $("input[name='radio-number-format-1']").bind("change", function(event, ui) {
      model.changeNumberFormat($(this).val());
      view.updateBubbles();
    });


    /**
    * Orientation plugin
    **/
    window.addEventListener("orientationchange", function() {
      orientationChange();
    });

    /*
    * Whatapp Icon
    */
    $(document).on('click', "#whatsapp", function(e) {
      $("#settingsPanel").panel("close");
      $(".hamburger").toggle();
      $(".icon").toggle();
      setTimeout(function(){
        controller.takeScreenshot();
      }, 500);
    });

    /*
    * Back button should close the settings panel
    */
    document.addEventListener("backbutton", function(e){
      if( $("#settingsPanel").hasClass("ui-panel-open")){
        e.preventDefault();
        $("#settingsPanel").panel("close");
      }else{
        navigator.app.backHistory();
      }
    }, false);
  },

  takeScreenshot: function(){
    var model = this.model;
    try{
      navigator.screenshot.URI(function(error, res){
        if(error){
          console.log(error);
        }
        else{
          window.plugins.socialsharing.shareViaWhatsApp(
            null,
            res.URI,
            null,
            function() {},
            function(error){
              console.log(error);
            }
          );
        }
      },'jpg',50);
      $(".icon").toggle();
      $(".hamburger").toggle();
    }
    catch(err){
      console.log(err);
      $(".icon").toggle();
      $(".hamburger").toggle();
    }
  }
}

function orientationChange(){
  var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
  alert(orientation);
  if (orientation.type === "landscape-primary" || orientation.type === "landscape-secondary") {
    $('#map').height('100%');
  }
  else{
    $('#map').height('35%');
  }
  var map = $('#map').vectorMap('get', 'mapObject');
  var center = map.pointToLatLng(map.width / 2, map.height / 2);

  var config = {
      lat: center.lat,
      lng: center.lng,
      scale: 1.0
  }
  map.setFocus(config);
  $('#map').resize();
}
