(function() {
  var MainClass, myClass;

  MainClass = (function() {
    function MainClass() {
      console.log("test");
    }

    return MainClass;

  })();

  myClass = new MainClass();

}).call(this);
