"use strict";

describe( 'mail chimp about page', function() {
	var AboutPage = require( "./../pages/AboutPage" );

	it( 'should contain name, position, and description of leadership team', function() {
		browser.waitForAngularEnabled(false);
		AboutPage.get();
		// AboutPage.getLeadershipTeam();
		expect(AboutPage.getLeadershipTeam()).toBe("there");


	} );
} );