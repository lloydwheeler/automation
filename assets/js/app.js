(function() {
  var ExampleClass, myClass;

  ExampleClass = (function() {
    function ExampleClass() {
      console.log("test");
    }

    return ExampleClass;

  })();

  myClass = new ExampleClass();

}).call(this);

(function() {
  var Search;

  Search = (function() {
    function Search() {
      console.log("search");
    }

    return Search;

  })();

}).call(this);

(function() {
  var MainClass, myClass;

  MainClass = (function() {
    function MainClass() {
      var one;
      one = 3;
    }

    return MainClass;

  })();

  myClass = new MainClass();

}).call(this);
