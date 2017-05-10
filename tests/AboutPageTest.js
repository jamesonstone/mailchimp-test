"use strict";

describe( 'mail chimp About page', function() {
	var AboutPage = require( "./../pages/AboutPage" );

	it( 'gathers leadership team data and writes to csv, ', function() {
		AboutPage.get();
		AboutPage.writeLeadershipTeamToCsv()
	} );
} );