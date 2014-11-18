define "component/example", [], () ->

  class Example

    constructor: (element) ->
      
      @carousel = $(element)
      @carousel.owlCarousel
        items: 1
