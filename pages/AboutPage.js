"use strict";
var fs = require('fs');
var file = "./leadershipteam.csv";

var AboutPage = {

	/**
	 * Navigates to About page
	 */
	get : function() {
		browser.get( 'https://mailchimp.com/about/' );
	},

	/**
	 * Gets the leadership team by element
	 */
	getLeadershipTeam : function() {
		var leadership = browser.driver.findElements( by.css( '.bio_link' ) );
		console.log(leadership.getText());
		return leadership.getText();

		// return browser.driver.findElements( by.css( '.bio_link' ) ).then( function( text ) {
		// 	for(var i = 0; i < text.length; i++) {
		// 		console.log(text[i].getText());
		// 	}
		// 	return text[11].getText();
		// } );
	}

};

module.exports = AboutPage;