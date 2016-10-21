sap.ui.jsview("roomgui.roomDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf roomgui.RoomDetail
	*/ 
	getControllerName : function() {
		return "roomgui.roomDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf roomgui.RoomDetail
	*/
	createContent : function(oController) {
		
		
		
		var map = new sap.m.Image("xMap",{
						text:"map",
						src:"{map}",
						width:"100%",
						height:"100%",
						densityAware: false,
						activeSrc:"{map}"
		});
		
		var imageBox = new sap.m.FlexBox("xSc",{
			items:[map], 
			fitContainer: true,
			alignItems: "Center"});
		
		var layout = new sap.m.VBox({
				items:[imageBox], 
				fitContainer: true,
				justifyContent: "Center",
				alignItems: "Center"
		});
		
		
		var detailsPage = new sap.m.Page("roomDetail",{  
                      title: "{name}",  
                      showNavButton: true,
                      enableScrolling:false,
                      icon: "img/sap-logo.png",
                      backgroundDesign: sap.m.PageBackgroundDesign.List,
                      navButtonTap: function(){
                    	  myScroll.scrollTo(0,0,0); 
                    	  app.back(); 
                      },
                      content:[layout]});   
		return detailsPage;   
	}
});