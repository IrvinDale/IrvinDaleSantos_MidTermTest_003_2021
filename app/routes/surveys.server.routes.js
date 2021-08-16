// Load the 'surveys' controller
var surveys = require('../../app/controllers/surveys.server.controller');

// Define the routes module' method
module.exports = function(app) {

    // Route for survey post
    app.route('/submit_survey').post(surveys.create);

    // base route for get put delete
    app.route('/survey_list')
    .get(surveys.read)
    .put(surveys.update)
    .delete(surveys.delete);

    //app.route('/edit_survey').put(surveys.update);


	
};