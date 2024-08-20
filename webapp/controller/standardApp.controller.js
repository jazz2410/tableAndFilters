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
        onSearch: function(){
            
            var customerKeys = this.byId('filterCustomer').getControl().getSelectedKeys();
            var customerFilters = customerKeys.map(function(selectedKey){
                    return new Filter({
                        path : 'CustomerID',
                        operator: FilterOperator.Contains,
                        value1 : selectedKey
                    });                
                ;
            });
            this.getView().byId('ordersTable').getBinding("items").filter(customerFilters);


        }



    });
});
