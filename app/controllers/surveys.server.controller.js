// Load the 'Survey' Mongoose model
var Survey = require('mongoose').model('Survey');


// Create a new 'createSurvey' controller method
exports.create = function (req, res, next) {
    // Create a new instance of the 'Survey' Mongoose model
    var survey = new Survey(req.body);
    // Use the 'Survey' instance's 'save' method to save a new survey document
    survey.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            //res.json(survey);
            //res.redirect('/');
            console.log(survey);
            res.render('thankyou');
        }
    });
};

// Create a new 'readSurveys' controller method
exports.read = function (req, res, next) {
    console.log('in read')
    // Use the 'Survey' static 'find' method to retrieve the list of items
    Survey.find({}, function (err, surveys) {
        console.log(surveys)
        if (err) {
            // Call the next middleware with an error message
            console.log('some error in read method')
            return next(err);
        } else {
            //
            res.render('survey_list', {
                title: 'Surveys',
                surveys: surveys
            });
        }    
    });    
};


exports.update = (req, res, next) => {
    Survey.findOneAndUpdate({surveyId: req.body.originalSurveyId}, req.body, (err) => {
        if (err) {
            console.log("Error finding and updating stuff");
            return next(err);
        } else {
         res.redirect("/survey_list");
}
    });
};

exports.delete = (req, res, next) => {
	
	Survey.findOneAndRemove({surveyId: req.body.originalSurveyId}, req.body, (err) => {
		if (err) {
			// Call the next middleware with an error message
            console.log("Error deleting");
			return next(err);
		} else {
			// Use the 'response' object to send a JSON response
            res.redirect("/survey_list");
		}
	})
};