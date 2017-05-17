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
      var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
      if (orientation.type === "landscape-primary" || orientation.type === "landscape-secondary") {
        $('#map').height('100%');
        $('#screenshot').css("display", "block");
      }
      else{
        $('#map').height('35%');
        $('#screenshot').css("display", "none");
      }

      var map = $('#map').vectorMap('get', 'mapObject');
      var center = map.pointToLatLng(map.width / 2, map.height / 2);

      var config = {
          lat: center.lat,
          lng: center.lng,
          scale: 1.0
      }
      map.setFocus(config)
    });

    /**
    * Screenshot handling
    **/
    $(document).on('click', "#screenshot", function(e) {
      var toggelDivs = function() {
        $("#screenshot").toggle();
        $(".hamburger").toggle();
      };
      $.when(toggelDivs()).done( function() {
        navigator.screenshot.save(function(error,res){
          toggleDivs();
          if(error){
            console.error(error);
          }
        },'jpg',50);
      });
    });
  },
}
