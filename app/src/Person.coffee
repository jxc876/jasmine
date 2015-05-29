class Person

    constructor: (@name = '') ->
        throw 'must provide valid name' if @name.length = 0
        @energy = 100

    greet: -> 
        @energy -= 5
        "hello my name is : #{@name}" 

    sleep: ->
        @energy += 20
        @energy = 100 if @energy > 100
        @energy
