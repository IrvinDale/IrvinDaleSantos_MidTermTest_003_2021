//Load the index controller
var index = require('../../app/controllers/index.server.controller');


// Define the routes module' method
module.exports = function (app) {

   	// Mount the 'index' controller's 'render' method
	app.get('/', index.renderIndex);
 
	//renders add_survey.ejs if a get request is made to /add_survey path
	app.get('/add_survey', index.renderAdd);



};