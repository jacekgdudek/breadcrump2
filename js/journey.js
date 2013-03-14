function Journey()
{
	//define private
	var walks;

	this.init = function()
	{
		//if(typeof _walks === 'undefined')
		//{
		walks = new Array();//todo::walks class
		//}
		// else
		// {
		// 	walks = _walks;
		// }
		//init varibles
	}

	this.init = function(_walks)
	{
		//if(typeof _walks === 'undefined')
		//{
		walks = new Array();//_walk;//todo::walks class
		//}
		// else
		// {
		// 	walks = _walks;
		// }
		//init varibles
	}

	this.add = function(steps)
	{
		walks = new Walk();
		walks.init(steps);
	}

	this.structurize = function()
	{
		var walks_structure = new Array();
		if(typeof walks === 'undefined')
		{
			walks = new Array();
		}
		for(var i = 0 ; i < walks.length ; i ++)
		{
			walks_structure.push(walks[i].structurize());
		}
		return walks_structure;
	}

	this.unstructurize = function(structure)
	{
		walks = new Array();
		if(typeof structure.walks !== 'undefined')
		{
			for(var i = 0 ; i < structure.walks.length ; i ++)
			{
				var walk = new Walk();
				walk.init(structure.walks[i]);
				walks.push(walk);
			}	
		}
		return this;
	}

	this.print = function()
	{
		console.log("-----journey-----");
		if(typeof walks === 'undefined')
		{
			walks = new Array();
		}
		for(var i = 0 ; i < walks.length ; i ++)
		{
			walks[i].print();
		}
		console.log("-----------------");
	}
}
