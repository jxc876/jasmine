describe('Person', function(){

	var person = null;

	beforeEach(function(){
		person = new app.Person('mike');
	});

	afterEach(function(){
		person = null;
	});

	it('should be initialized', function(){
		expect(person).not.toBeNull();
		expect(person.name).toBe('mike');
	});

	it('should throw error when name is not valid', function(){
		expect(function(){
			new app.Person();
		}).toThrow();
	});


	it('should decrement energy levels after activies', function(){
		expect(person.getEnergy()).toBe(100);
		person.greet();
		expect(person.getEnergy()).toBeLessThan(100);
	});

	it('should increase energy after sleeping', function(){
		person.greet();
		person.greet();
		person.sleep();
		expect(person.getEnergy()).toBe(100);
	});

	it('should not have energy levels above 100', function(){
		person.sleep();
		person.sleep();
		expect(person.getEnergy()).toBe(100);
	});

	it("should not share properties across objects", function(){
		var p1 = person;
		var p2 = new app.Person('misha');

		p1.greet();
		expect(p1.getEnergy()).toBe(95);
		expect(p2.getEnergy()).toBe(100);

	});

});