sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/m/library",
	'sap/ui/core/library',
	'sap/ui/core/message/ControlMessageProcessor',
	'sap/ui/core/message/Message',
	'sap/m/MessagePopover',
	'sap/m/MessagePopoverItem',
	"sap/m/MessageBox",
	"sap/m/BusyDialog"
], function (BaseController, JSONModel, formatter, mobileLibrary, coreLibrary, ControlMessageProcessor, Message, MessagePopover, MessagePopoverItem, MessageBox, BusyDialog) {
	"use strict";

	return BaseController.extend("int.ui5.template.controller.Planner", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */
		_busyDialogOdata: new BusyDialog("busyDialogOdata"),
		onInit: function () {
			
		}

	});
});