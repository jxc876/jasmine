var app = app || {};

(function(){

	app.Person = function(){


		//constructor
		function Person(name){

			// private properties
			var that = this;
			var _energy = 100;


			// public properties 
			this.name;


			// validations
			if (name && name.length > 0){
				this.name = name;
			}
			else {
				throw "name cannot be empty or have length of 0";
			}

			// priviledge methods

			this.getEnergy = function(){
				return _energy;
			};

			this.greet = function(){
				_energy -= 5;
				return "Hello my name is " + this.name;
			};


			this.sleep = function(){
				_energy += 20;
				if (_energy > 100){
					_energy = 100;
				}
			};
		}

		return Person

	}();


})();
