sap.ui.jsview("roomgui.floor", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf roomgui.Config
	*/ 
	getControllerName : function() {
		return "roomgui.floor";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf roomgui.Config
	*/ 
	createContent : function(oController) {
		


			
		var areaItemTemplate = new sap.m.StandardListItem("itemArea", {
			title : "{name}",  
			icon : "{pic}",
            type : sap.m.ListType.Navigation,   
            press : oController.rowSelected
		});
		
		var areaList = new sap.m.List("roomList",{
		width:"100%"});
		

		areaList.bindItems({
		  path: "/zonedata", 
		  template: areaItemTemplate}  
		);

		
		var mainPage = new sap.m.Page("selectList",{
									title: "Select Area",
									showNavButton: true,
	                     			backgroundDesign: sap.m.PageBackgroundDesign.List,
	                     			icon: "img/sap-logo.png",
	                     			navButtonPress: oController.moveContextBack,
	                     			content : [areaList]});  
	  return mainPage;
	  }

});