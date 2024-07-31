const outerObject = {

    outerMethod: "hello",
  
    innerObject: {
  
        callOuterMethod: function(outer) {
  
            return this.outerMethod;
  
        }
  
    }
  
  };
  
  outerObject.innerObject.callOuterMethod(outerObject)