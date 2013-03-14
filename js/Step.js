function Step()
{
	//elements
	var id;
	var type;
	var tags;
	var time;
	var content;

	this.init = function(_type, _tags, _time, _content)
	{
		type = _type;//new Array();
		tags = new Array();
		tags = _tags;
		time = _time;
		content = _content;
	}

	this.initEx = function(structure)
	{
		type = structure.type;//new Array();
		tags = structure.tags;
		time = structure.time;
		if(typeof structure.content !== 'undefined')
		{
			content = new Object();
			content.thumbnail = structure.content.thumbnail;
			content.headline = structure.content.headline;
			content.teaser = structure.content.teaser;
		}
	}

	this.structurize = function()
	{
		var step = new Object();
		
		step.id = id;
		step.type = type;
		step.tags = tags;
		step.time = time;
		if(typeof content !== 'undefined')
		{
			var _content = new Object();
			_content.thumbnail = content.thumbnail;
			_content.headline = content.headline;
			_content.teaser = content.teaser;
			step.content = _content;
		}
		return step;
	}

	this.print = function()
	{
		console.log("-----step-----");
		console.log("type : " + type);
		for(var i = 0 ; i < tags.length ; i ++)
		{
			console.log("tags : " + tags[i]);
		}
		console.log("time : " + time);
		if(typeof content !== 'undefined')
		{
			console.log("thumbnail : " + content.thumbnail);
			console.log("headline : " + content.headline);
			console.log("teaser : " + content.teaser);
		}
		console.log("--------------")
	}
}