/*global QUnit*/

sap.ui.define([
	"standardapp/controller/standardApp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("standardApp Controller");

	QUnit.test("I should test the standardApp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
