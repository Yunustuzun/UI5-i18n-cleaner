sap.ui.define([
	"int/ui5/template/controller/BaseController",
	'sap/m/MessageBox',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	'sap/ui/unified/CalendarLegendItem',
	'sap/ui/unified/DateTypeRange',
	'sap/ui/unified/library',
], function (BaseController, MessageBox, Filter, Operator, JSONModel, CalendarLegendItem, DateTypeRange, unifiedLibrary) {
	"use strict";
	var CalendarDayType = unifiedLibrary.CalendarDayType;
	return BaseController.extend("int.ui5.template.controller.Home", {

		pressTile: function (oEvent) {

			var target = oEvent.getSource().data().target;
			this.getRouter().navTo(target, true);
		},
		onInit: function () {

		},
		onAfterRendering: function () {

			// this._setCardAuth();
			// this._initCards();
			// this._setNumericContentsValues();

			// this.getModel("layoutModel").setProperty("/backActive", true)
			// this.navToContainer("reportResult");

		},
	
		_setNumericContentsValues: function () {

			// var iconTabbars = this.getView().byId("idIconTabBar").getItems();
			// var tab1 = undefined;
			// var tab2 = undefined;
			// var count = 0;

			// for (var K = 0; K < iconTabbars.length; K++) {
			// 	var tab = iconTabbars[K];

			// 	if (tab.getText() === "Hedef") {
			// 		tab1 = tab;
			// 	}

			// 	if (tab.getText() === "Yetkinlik") {
			// 		tab2 = tab;
			// 	}
			// }

			// if (tab1) {
			// 	var tiles = tab1.getContent();

			// 	for (var m = 0; m < tiles.length; m++) {
			// 		var tile = tiles[m];
			// 		var header = tile.getHeader();
			// 		switch (header) {
			// 			case "Hedef Girişi":
			// 				var targetEntranceTile = tile.getTileContent()[0].getContent()
			// 				break;
			// 			case "Hedef Değerlendirme":
			// 				var targetEvaluateTile = tile.getTileContent()[0].getContent()
			// 				break;
			// 			case "IK Hedef Yönetimi":
			// 				var hrTargetManageTile = tile.getTileContent()[0].getContent()
			// 				break;
			// 			default:
			// 				break;
			// 		}
			// 	}
			// }

			// if (tab2) {
			// 	tiles = tab2.getContent();

			// 	for (m = 0; m < tiles.length; m++) {
			// 		tile = tiles[m];
			// 		header = tile.getHeader();
			// 		switch (header) {
			// 			case "Yetkinlik Değerlendirme":
			// 				var skillEvaluateTile = tile.getTileContent()[0].getContent()
			// 				break;
			// 			default:
			// 				break;
			// 		}
			// 	}
			// }

			// var skillevaluate = this.dataModel().getProperty("/skillevaluate");
			// var targetevaluate = this.dataModel().getProperty("/targetevaluate");
			// var targetentry = this.dataModel().getProperty("/targetentry");



			// count = 0;
			// for (var k = 0; k < skillevaluate.length; k++) {
			// 	var object = skillevaluate[k];
			// 	if (!object.evaluator_finished) {
			// 		count = count + 1;
			// 	}
			// }

			// if (skillEvaluateTile && count > 0) {
			// 	skillEvaluateTile.setValue(count);
			// }

			// count = 0;
			// for (k = 0; k < targetevaluate.length; k++) {
			// 	object = targetevaluate[k];
			// 	if (object.target.status !== "E") {

			// 		count = count + 1;
			// 	}
			// }

			// if (targetEvaluateTile && count > 0) {
			// 	targetEvaluateTile.setValue(count);
			// }



			// count = 0;
			// for (k = 0; k < targetentry.length; k++) {
			// 	object = targetentry[k];
			// 	if (object.target.status === "" ||
			// 		object.target.status === "I" ||
			// 		object.target.status === "R") {

			// 		count = count + 1;
			// 	}
			// }

			// if (targetEntranceTile && count > 0) {
			// 	targetEntranceTile.setValue(count);
			// }

			// this._setApproveTargetTileValue();
			// this._setHrTargetManageTileValue();
		},

		// _setApproveTargetTileValue: function () {
		// 	var tab1 = undefined;


		// 	var iconTabbars = sap.ui.getCore().byId("layoutView--homeView--idIconTabBar").getItems();

		// 	for (var K = 0; K < iconTabbars.length; K++) {
		// 		var tab = iconTabbars[K];

		// 		if (tab.getText() === "Hedef") {
		// 			tab1 = tab;
		// 		}
		// 	}

		// 	if (tab1) {
		// 		var tiles = tab1.getContent();

		// 		for (var m = 0; m < tiles.length; m++) {
		// 			var tile = tiles[m];
		// 			var header = tile.getHeader();
		// 			switch (header) {
		// 				case "Hedef Onayı":
		// 					var targetApproveTile = tile.getTileContent()[0].getContent()
		// 					break;
		// 				default:
		// 					break;
		// 			}
		// 		}
		// 	}


		// 	if (targetApproveTile) {
		// 		if (this.dataModel().getProperty("/mytarget/status") === "S") {
		// 			targetApproveTile.setValue(1);
		// 		}
		// 		else {
		// 			targetApproveTile.setValue();
		// 		}
		// 	}
		// },
		// _setHrTargetManageTileValue: function () {

		// 	var tab1 = undefined;
		// 	var iconTabbars = sap.ui.getCore().byId("layoutView--homeView--idIconTabBar").getItems();

		// 	for (var K = 0; K < iconTabbars.length; K++) {
		// 		var tab = iconTabbars[K];

		// 		if (tab.getText() === "Hedef") {
		// 			tab1 = tab;
		// 		}
		// 	}



		// 	if (tab1) {
		// 		var tiles = tab1.getContent();

		// 		for (var m = 0; m < tiles.length; m++) {
		// 			var tile = tiles[m];
		// 			var header = tile.getHeader();
		// 			switch (header) {
		// 				case "IK Hedef Yönetimi":
		// 					var hrTargetManageTile = tile.getTileContent()[0].getContent()
		// 					break;
		// 				default:
		// 					break;
		// 			}
		// 		}
		// 	}

		// 	var periodid = this.dataModel().getProperty("/periodnow/periodid");
		// 	var bukrs = this.dataModel().getProperty("/personel_info/bukrs");

		// 	var requestData = {
		// 		bukrs: bukrs,
		// 		periodid: periodid
		// 	};

		// 	this.oGetProvider.getIkTargets(requestData).done(function (responseData) {

		// 		if (responseData.length > 0) {
		// 			hrTargetManageTile.setValue(responseData.length)
		// 		}
		// 		else {
		// 			hrTargetManageTile.setValue()
		// 		}


		// 	});
		// },
		// _initCards: function () {
		// 	var cardManifestsModel = new JSONModel();
		// 	cardManifestsModel.loadData(sap.ui.require.toUrl("yildiz/hr/performance/data/cardManifests.json"));

		// 	cardManifestsModel.attachRequestCompleted(function () {

		// 		var cardManifestsData = cardManifestsModel.getData();

		// 		cardManifestsData = this._adjustCardManifests(cardManifestsData);

		// 		cardManifestsModel.setData(cardManifestsData);

		// 		this.getView().setModel(cardManifestsModel, "cardManifests");
		// 	}.bind(this));


		// },
		// _setCardAuth: function () {

		// 	var aCards = this.dataModel().getProperty("/view/cards");
		// 	for (var k = 0; k < aCards.length; k++) {
		// 		var oCard = aCards[k];
		// 		this.getView().byId(oCard.id).setVisible(true);
		// 	}
		// },
		// _adjustCardManifests: function (cardManifests) {
		// 	cardManifests.calendar = this._adjustCalendarManifest(cardManifests.calendar);
		// 	cardManifests.listPersons = this._adjustPersonsManifest(cardManifests.listPersons);

		// 	return cardManifests;
		// },
		// _adjustDonutsManifest: function (donutOverall, type) {

		// 	donutOverall["sap.card"].content.data.json.measures = this.dataModel().getProperty("/flow/overall/" + type);

		// 	return donutOverall;

		// },
		// _adjustPersonsManifest: function (listPersons) {

		// 	var aData = [];

		// 	var aPersons = this.dataModel().getProperty("/personels_low")

		// 	for (var k = 0; k < aPersons.length; k++) {
		// 		var oPerson = aPersons[k];

		// 		aData.push({
		// 			name: oPerson.orgtx,
		// 			icon: oPerson.photo,
		// 			description: oPerson.plstx,
		// 			infoState: "Information",
		// 			info: oPerson.ename,
		// 		})
		// 	}

		// 	listPersons["sap.card"].content.data.json = aData;
		// 	return listPersons;
		// },
		// _adjustCalendarManifest: function (calendar) {
		// 	var aLegendItems = [];
		// 	var aItems = [];
		// 	var aSpecialDates = [];

		// 	var dates = this.dataModel().getProperty("/periodnow")

		// 	aLegendItems.push({
		// 		category: "calendar",
		// 		text: "Giriş Tarihleri",
		// 		type: "Type06"
		// 	});

		// 	aLegendItems.push({
		// 		category: "calendar",
		// 		text: "Onay Tarihleri",
		// 		type: "Type08"
		// 	});

		// 	aLegendItems.push({
		// 		category: "calendar",
		// 		text: "Değerlendirme Tarihleri",
		// 		type: "Type13"
		// 	});

		// 	aSpecialDates.push({
		// 		start: dates.entrancedatestart,
		// 		end: dates.entrancedateend,
		// 		type: "Type06"
		// 	});

		// 	aSpecialDates.push({
		// 		start: dates.approvedatestart,
		// 		end: dates.approvedateend,
		// 		type: "Type08"
		// 	});

		// 	aSpecialDates.push({
		// 		start: dates.evaluatedatestart,
		// 		end: dates.evaluatedateend,
		// 		type: "Type13"
		// 	});



		// 	aItems.push({
		// 		visualization: "appointment",
		// 		title: "Hedef Girişleri",
		// 		start: this.datefromSapToJS(dates.entrancedatestart),
		// 		end: this.addDays(this.datefromSapToJS(dates.entrancedateend), 1),
		// 		type: "Type06"
		// 	});

		// 	aItems.push({
		// 		visualization: "appointment",
		// 		title: "Hedef Onaylama",
		// 		start: this.datefromSapToJS(dates.approvedatestart),
		// 		end: this.addDays(this.datefromSapToJS(dates.approvedateend), 1),
		// 		type: "Type08"
		// 	});

		// 	aItems.push({
		// 		visualization: "appointment",
		// 		title: "Değerlendirme",
		// 		start: this.datefromSapToJS(dates.evaluatedatestart),
		// 		end: this.addDays(this.datefromSapToJS(dates.evaluatedateend), 1),
		// 		type: "Type13"
		// 	});



		// 	calendar["sap.card"].data.json.item = aItems;
		// 	calendar["sap.card"].data.json.specialDate = aSpecialDates;
		// 	calendar["sap.card"].data.json.legendItem = aLegendItems;

		// 	return calendar;
		// },
		// _initCalendar: function () {
		//     var oCal2 = this.byId("calendar2"),
		//         oLeg2 = this.byId("legend2"),
		//         oRefDate;


		//     oRefDate = new Date();
		//     for (var i = 1; i <= 10; i++) {
		//         oRefDate.setDate(i);
		//         var sType = "";
		//         if (i < 10) {
		//             sType = "Type0" + i;
		//         } else {
		//             sType = "Type" + i;
		//         }

		//         oCal2.addSpecialDate(new DateTypeRange({
		//             startDate: new Date(oRefDate),
		//             type: sType,
		//             tooltip: "Hedef " + i
		//         }));


		//         oLeg2.addItem(new CalendarLegendItem({
		//             text: "Hedef " + i
		//         }));
		//     }



		//     oCal2.addSpecialDate(new DateTypeRange({
		//         startDate: new Date(oRefDate.setDate(12)),
		//         type: "Type11",
		//         color: "#ff0000"
		//     }));

		//     oCal2.addSpecialDate(new DateTypeRange({
		//         startDate: new Date(oRefDate.setDate(13)),
		//         type: "Type11",
		//         color: "#add8e6"
		//     }));


		//     oCal2.addSpecialDate(new DateTypeRange({
		//         startDate: new Date(oRefDate.setDate(22)),
		//         type: CalendarDayType.NonWorking
		//     }));

		//     oCal2.addSpecialDate(new DateTypeRange({
		//         startDate: new Date(oRefDate.setDate(22)),
		//         type: CalendarDayType.Type03
		//     }));

		//     oCal2.addSpecialDate(new DateTypeRange({
		//         startDate: new Date(oRefDate.setDate(24)),
		//         type: CalendarDayType.NonWorking
		//     }));

		//     oCal2.addSpecialDate(new DateTypeRange({
		//         startDate: new Date(oRefDate.setDate(24)),
		//         type: CalendarDayType.Type03
		//     }));


		// }
	});
});