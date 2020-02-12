/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/vaees/ui5Test/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});