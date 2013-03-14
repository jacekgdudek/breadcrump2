function JourneyManager()
{

	this.loadUser = function()
	{
		///// test
		var retrievedObject = localStorage.getItem('breadcrump_user_data');

		console.log('breadcrump_user_data: ', JSON.parse(retrievedObject));

		var parsedObject = new Object();
		parsedObject = JSON.parse(retrievedObject);

		if(!parsedObject)
		{
			var user = new User();
			user.init(0, "Charlie");
			return user;
		}
		return parsedObject.user;
	}

	this.saveUser = function(user)
	{
		var data = new Object();

		data.user = user.structurize();

		console.log(data);

		localStorage.setItem('breadcrump_user_data', JSON.stringify(data));
	}
}