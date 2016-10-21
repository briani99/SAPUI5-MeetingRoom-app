sap.ui.controller("roomgui.floor", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf main
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf main
*/
//	onBeforeRendering: function() {
//
//	},
	
	rowSelected: function(oEvent){
		var context = oEvent.oSource.getBindingContext();
		var path = context.sPath;
		var obj = sap.ui.getCore().getModel().getProperty(path);
		if (obj.leaf === 'true') {  
			//no children so lets display the map
			var screen  = app.getPage("detailScreen");  
			screen.setBindingContext(context);
			app.to(screen);
		    
		 }
		else
		{
			 var newList = sap.ui.getCore().getElementById("roomList");
			 newList.bindItems({path: path+'/nodes', template: sap.ui.getCore().getElementById("itemArea")});
		}
	},

	
	moveContextBack: function(){
		var newList = sap.ui.getCore().getElementById("roomList");
		var path = newList.getBindingInfo('items').path;
		//If the path is back at the start then we need are at the start of the
		//model so the back button should go back to the screen before.
		if(path === '/zonedata'){
			app.back();
		}
		else
		{
			//otherwise just go back through the context
			path = path.replace(/\/nodes$/, '');
			var idx = path.lastIndexOf('/');
			if (idx > 0) {
				var previouspath = path.substring(0, idx);
				newList.bindItems({path: previouspath, template: sap.ui.getCore().getElementById("itemArea")});
			}
		}
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf main
*/
//	onExit: function() {
//
//	}

});