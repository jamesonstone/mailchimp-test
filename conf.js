"use strict"

exports.config = {

	OnPrepare : function() {
		global.ec = protractor.ExpectedConditions;

		//width: 1814 height: 974
		wd.manage().window().maximize();
	},

	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [ './tests/*.js' ]
};