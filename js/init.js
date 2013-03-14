////////////////////////////////////////////////
//
//                Init.js
//////////////////////////////////////////////////
//
// init all the managers

var onLoad = function()
{
	console.log("Initializing JS");
	jManager = new JourneyManager();

	var stracturedUser = jManager.loadUser();
	currentUser = new User();
	currentUser.unstructurize(stracturedUser);

	runTest();
	currentUser.print();

	//setup timer
	var d = new Date();
	timer = d.getTime();
}

var onUnload = function()
{
	//get time spent on website
	var d = new Date();
	var n = d.getTime();

	//prepare data to be added
	var type = "Website";
	var tags = ["main","web"];
	var time = Math.floor((n-timer)/1000);
	var content = new Object();
	content.thumbnail = "http://ichef.bbci.co.uk/images/ic/336x189/legacy/episode/b01r3pb9.jpg";
	content.headline = "BBC main";
	content.teaser = "BBC - latest news and greatest knowledge experience";

	currentUser.addNewStep(type , tags, time, content);
	jManager.saveUser(currentUser);
	console.log("unloaded");
}

var runTest = function()
{
	//add user
	currentUser.init( 0 , "Charlie" );
	//currentUser.addNewStep("Website" , ["writers","france"], 100);
	//jManager.saveUser(currentUser);
	//currentUser.addNewStep("Website" , ["italy","cake"], 100);
	//currentUser.addNewStep("Website" , ["world_war_2","japan"], 100);
	//jManager.saveUser(currentUser);


	////-----------------------------TO reset user 
	//resetUser();
	///--------------------------------------------

}

var resetUser = function()
{
	currentUser.reset();
	jManager.saveUser(currentUser);
}

//global variables
//user
var currentUser;
var jManager;
var timer;



