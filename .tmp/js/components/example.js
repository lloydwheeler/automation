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
