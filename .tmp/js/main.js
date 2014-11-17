(function() {
  var MainClass, myClass;

  MainClass = (function() {
    function MainClass() {
      var one;
      one = 3;
      alert(one);
    }

    return MainClass;

  })();

  myClass = new MainClass();

}).call(this);
