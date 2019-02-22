sap.ui.define([
	"csc/cscm/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("csc.cscm.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);