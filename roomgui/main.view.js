sap.ui.jsview("roomgui.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf main
	*/ 
	getControllerName : function() {
		return "roomgui.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf main
	*/ 
	createContent : function(oController) {
				
			var configHeader = new sap.m.Bar({
					contentLeft: [new sap.m.Button({icon: "img/sap-logo.png"})],
					contentMiddle: [new sap.m.Label({text: "Meeting Rooms"})]  
			    	
			});
			
			var listText = new sap.m.Label("xlistLabel",{
				design: sap.m.LabelDesign.Bold,
				text:"Search by name",   
				width: "100%",
				textAlign: sap.ui.core.TextAlign.Center
			});
			var listImage = new sap.m.Image("xlistImage",{
				text:"map",
				width: "100%",
				height: "100%",
				src:"img/list.png",
				densityAware: false,
				});
			
			var listLayout = new sap.m.VBox("listLayout", {
				items: [listImage,listText],
				alignItems: sap.m.FlexAlignItems.Center ,
           	 	justifyContent :  sap.m.FlexJustifyContent.Center,
			});
			      
			var listTile = new sap.m.CustomTile({
				content:listLayout,
				press: oController.navigateToList
			}).addStyleClass('sapMTile');

	
			
			var mapText = new sap.m.Label("xMapLabel",{
				design: sap.m.LabelDesign.Bold,
				text:"Search by map",   
				width: "100%",
				textAlign: sap.ui.core.TextAlign.Center
			});
			var mapImage = new sap.m.Image("xMapImage",{
				text:"map",
				width: "100%",
				height: "100%",
				src:"img/map.png",
				densityAware: false,
				});
			
			var mapLayout = new sap.m.VBox("Layout1", {
				items: [mapImage,mapText],
				JustifyContent : sap.m.FlexJustifyContent.Center
			});
			      
			var mapTile = new sap.m.CustomTile({
				content:mapLayout,
				press: oController.navigateToMap
			}).addStyleClass('sapMTile');

			
			
			var oVBox = new sap.m.VBox("tileVBox", {
				width: "100%",
				height: "100%",
				fitContainer: true,
				justifyContent: "Center",
				alignItems: "Center",
				items:[listTile, mapTile],  
				});
			
			var mainPage = new sap.m.Page("mainView",{
										customHeader: configHeader,
		                     			backgroundDesign: sap.m.PageBackgroundDesign.List,
		                     			icon: "img/sap-logo.png",
		                     			content : [oVBox]});  
		  return mainPage;
		}
});
