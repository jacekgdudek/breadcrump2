function Walk()
{
	//elements
	var steps;

	this.init = function()
	{
		steps = new Array();
	}

	this.init = function(_steps)
	{
		steps = new Array();
		steps = _steps;
		if(typeof steps === 'undefined') steps = new Array();
	}

	this.add = function(type, tags, time, content)
	{
		var step = new Step();
		step.init(type, tags, time, content);
		if(typeof steps === 'undefined')
		{
			steps = new Array();
		}
		steps.push(step);
	}

	this.structurize = function()
	{
		var steps_structure = new Array();
		if(typeof steps !== 'undefined')
		{
			for(var i = 0 ; i < steps.length ; i ++)
			{
				steps_structure.push(steps[i].structurize());
			}
		}
		return steps_structure;
	}

	this.unstructurize = function(structure)
	{
		steps = new Array();
		if(typeof structure !== 'undefined')
		{
			for(var i = 0 ; i < structure.length ; i ++)
			{
				var step = new Step();
				step.initEx(structure[i]);
				steps.push(step);
			}
		}
		return this;
	}

	this.print = function()
	{
		console.log("-----walk-----");
		if(typeof steps !== 'undefined')
		{
			for(var i = 0 ; i < steps.length ; i ++)
			{
				steps[i].print();
			}
		}
		console.log("--------------")
	}

}