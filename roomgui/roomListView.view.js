sap.ui.jsview("roomgui.roomListView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf roomListView
	*/ 
	getControllerName : function() {
		return "roomgui.roomListView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf roomListView
	*/ 
	createContent : function(oController) {
		
		
		
		var searchList = new sap.m.SearchField("xSearch",{
	        tooltip: "Search for rooms",
	        liveChange: oController.filterList
		});
		
		var listSorter = new sap.ui.model.Sorter("name", false); // sort descending
		
		
		var listItemTemplate = new sap.m.StandardListItem("xList", {
									title : "{name}",   
									icon:"{pic}",
	                                type : sap.m.ListType.Navigation,   
	                                description:"{building}",  
	                                tap : oController.navigateToDetails
		});
		
		var roomList = new sap.m.List("xRooms",{
			headerText:"List all Rooms",
			width:"100%",
			items: {path:"/roomdata", template:listItemTemplate, sorter:listSorter}
		});

		var oFlexBox = new sap.m.VBox("fv-flexbox",{
	                              items:[searchList, roomList],  
	                              fitContainer: true,   
	                              alignItems: "Stretch"});
		
		var mainPage = new sap.m.Page("roomListView",{
									title: "Search List",
									showNavButton: true,
	                     			backgroundDesign: sap.m.PageBackgroundDesign.List,
	                     			icon: "img/sap-logo.png",
	                     			navButtonPress: function(){  
							          	  app.back();  
							        },   
	                     			content : [oFlexBox]});  
	  return mainPage;
	}

});