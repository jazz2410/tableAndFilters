sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
],
function (Controller,JSONModel,MessageToast,Filter,FilterOperator) {
    "use strict";

    return Controller.extend("standardapp.controller.standardApp", {
        onInit: function () {

        },
        onValueHelpCustomer: function(oEvent){
            var sInputValue = oEvent.getSource().getValue()

            if(!this._oDialog){
                this._oDialog = sap.ui.xmlfragment(this.getView().getId(),"standardapp.view.CustomerValueHelp", this);
                this.getView().addDependent(this._oDialog);
            }

            this._oDialog.getBinding("items").filter([new Filter("CustomerID", FilterOperator.Contains, sInputValue)]);
            this._oDialog.open();
        },
        onValueHelpSearch: function(oEvent){
            var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("CustomerID", FilterOperator.Contains, sValue);
			oEvent.getSource().getBinding("items").filter([oFilter]);
        },
        onValueHelpClose: function(oEvent){
            var oSelectedItem = oEvent.getParameter("selectedItem");
			oEvent.getSource().getBinding("items").filter([]);

			if (!oSelectedItem) {
				return;
			}

			this.byId("ValueInput").setValue(oSelectedItem.getTitle());
        },
    });
});
