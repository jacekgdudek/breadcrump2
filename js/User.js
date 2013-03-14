function User()
{
	var id;
	var name;
	var journey;
	var currentWalk;

	this.init = function(_id, _name)
	{
		id = _id;
		name = _name;

		//set username on website
		var usernameDOM = document.getElementById('username');
		//usernameDOM.text = _name;
		usernameDOM.textContent = _name;
	}

	this.addNewStep = function(type, tags, time, content)
	{
		currentWalk.add(type, tags, time, content);
	}

	this.structurize = function()
	{
		var user = new Object();

		user.id = id;
		user.name = name;
		user.journey = journey.structurize();
		user.currentWalk = currentWalk.structurize();

		return user;
	}

	this.unstructurize = function(structure)
	{
		id = structure.id;
		name = structure.name;
		journey = new Journey();
		if(structure.journey)
		{
			journey = journey.unstructurize(structure.journey);
		}
		currentWalk = new Walk();
		if(structure.currentWalk)
		{
			currentWalk = currentWalk.unstructurize(structure.currentWalk);
		}

	}

	this.reset = function()
	{
		currentWalk = new Walk();
	}

	this.print = function()
	{
		console.log("------USER------");
		console.log("id :" + id);
		console.log("name :" + name);
		console.log("journey :" + journey.print());
		console.log("currentWalk :" + currentWalk.print());
		console.log("----------------");
	}
}