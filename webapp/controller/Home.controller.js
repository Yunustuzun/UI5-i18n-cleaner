sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";
	return Controller.extend("int.ui5.i18ncleaner.controller.Home", {

		pressTile: function (oEvent) {

			var target = oEvent.getSource().data().target;
			this.getRouter().navTo(target, true);
		},
		onInit: function () {

		},
		onAfterRendering: function () {


		},

		_setNumericContentsValues: function () {


		},

	});
});