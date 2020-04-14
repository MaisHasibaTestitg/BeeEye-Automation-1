exports.getThenameOfTheNewFlow = (testOBJ, browser, Message) => {
   const now = new Date();
   const secondsSinceEpoch = Math.round(now.getTime() / 1000);
   var FlowName = "Flow_" + secondsSinceEpoch + Math.floor(Math.random(1, 0) * 1000) ;
   console.log("Name for the new flow is : " + FlowName);
   return FlowName;
}
