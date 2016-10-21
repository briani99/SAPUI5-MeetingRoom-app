sap.ui.jsview("roomgui.config", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf roomgui.Config
	*/ 
	getControllerName : function() {
		return "roomgui.config";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf roomgui.Config
	*/ 
	createContent : function(oController) {
	

	var vBox = new sap.m.VBox({
			  		fitContainer: true,
			  		alignItems: "Center",
			  		items:[  
			  		       new sap.m.RadioButton("magnum", {
			  		    	   selected:true,
			        	       groupname:"theme",
			        	       text:"magnum ",
			        	       select: oController.changeTheme}),
			        	   new sap.m.RadioButton("bsteel", {
			        		   selected:false,
			        	       groupname:"theme",
			        	       text:"blue steel ",
			        	       select: oController.changeTheme})
			        	       ]
			          });

		
		var configPage = new sap.m.Page("config",{  
            title: "Settings",  
            showNavButton: true,
            enableScrolling:false,
            icon: "img/sap-logo.png",
            backgroundDesign: sap.m.PageBackgroundDesign.List,
            navButtonTap: function(){  
          	  app.back();  
            },   
            content:[vBox]});   
		return configPage;   
	}

});