sap.ui.controller("roomgui.roomListView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf roomListView
*/
	onInit: function() {
        // Data is fetched here
		$.getJSON("data/roomdata.json", function(data) {
			var oModel = new sap.ui.model.json.JSONModel(data);
            sap.ui.getCore().setModel(oModel);
		});
    },  
    
	filterList: function(oEvent){
		var like = oEvent.getParameter("newValue");
		var oFilter = new sap.ui.model.Filter("name", 
											sap.ui.model.FilterOperator.StartsWith, 
											like);
		
		var element = sap.ui.getCore().getElementById("xRooms");
		var listBinding = element.getBinding("items");
		listBinding.filter([oFilter]);
	},
	
	
	navigateToDetails: function(oEvent){
		
		var context = oEvent.oSource.getBindingContext(); 
		var screen  = app.getPage("detailScreen");  
		screen.setBindingContext(context);
	    app.to(screen);  
	},
	
	navigateToConfig: function(oEvent){
		var screen  = app.getPage("configScreen");
		app.to(screen);
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf roomListView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf roomListView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf roomListView
*/
//	onExit: function() {
//
//	}
});