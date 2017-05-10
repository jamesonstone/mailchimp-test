"use strict";
var fs = require( 'fs' ),
	file = "./leadershipteam.csv",
	stream = fs.createWriteStream( file );

var AboutPage = {
	/**
	 * Navigates to About page
	 */
	get : function() {
		browser.driver.get( 'https://mailchimp.com/about/' );
	},

	/**
	 * Gets the leadership team, munge the data, and writes to csv
	 */
	writeLeadershipTeamToCsv : function() {
		browser.driver.findElements( by.css( '.bio_link' ) ).then( function( text ) {
			for( var i = 0; i < text.length; i++ ) {
				var a, b;

				text[ i ].getText().then( function( namePosition ) {
					a = namePosition.replace( /\r?\n|\r/g, "," ) + ",";
				} );
				text[ i ].getAttribute( 'data-description' ).then( function( description ) {
					b = description.replace( /\r?\n|\r/g, "," ) + "";
					stream.write( a + b + '\n' );
				} );
			}
		} );
	}

};

module.exports = AboutPage;