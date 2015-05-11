/**
 * Created by Alex on 10.05.2015.
 */

$(function(){
  $(document).on("click",".search-button", function(ev){
    $(this).addClass("clicked");
    $(".search-input").animate({
      width: "248px",
      borderLeft: "1px solid #f17b7b",
      borderBottom: "1px solid #f17b7b"
    },500);
    $(".header-search-input").animate({
      width: "259px",
      paddingLeft: "11px"
    },500);
  });

  $(document).on("click", ".clicked", function(ev){
    $(this).removeClass("clicked");
    $(".search-input").animate({
      width: "0",
      borderLeft: "none",
      borderBottom: "none"
    },500);
    $(".header-search-input").animate({
      width: "0",
      paddingLeft: "0"
    },500);
  });

  $("#slides").slidesjs({
    width: 980,
    height: 442,
    play: {
      active: true,
      auto: true,
      interval: 6000,
      swap: true,
      pauseOnHover: false,
      restartDelay: 0
    },
    navigation: {
      effect: "fade"
    },
    pagination: {
      effect: "fade"
    },
    effect: {
      fade: {
        speed: 1000,
        // [number] Speed in milliseconds of the fade animation.
        crossfade: true
        // [boolean] Cross-fade the transition.
      }
    }
  });

  var nav = responsiveNav(".nav", { // Selector
    animate: true, // Boolean: Use CSS3 transitions, true or false
    transition: 284, // Integer: Speed of the transition, in milliseconds
    label: "Menu", // String: Label for the navigation toggle
    insert: "before", // String: Insert the toggle before or after the navigation
    customToggle: "", // Selector: Specify the ID of a custom toggle
    closeOnNavClick: false, // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative", // String: Position of the opened nav, relative or static
    navClass: "nav", // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active", // String: Class that is added to  element when nav is active
    jsClass: "js", // String: 'JS enabled' class which is added to  element
    init: function(){}, // Function: Init callback
    open: function(){}, // Function: Open callback
    close: function(){} // Function: Close callback
  });
});