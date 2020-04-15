module.exports = {
    elements: {
        NewDeploybutton: {
        selector: '#new-deploy-button'
      },

      DeployFlowWizard : {
        selector : '.modal-background.d-flex>#modal-view'
      },
ExperimentColumnInDeployWizard : {
    selector : '.table-row-item:nth-child(3)'
},
FirstElementInExpColumn : {
    selector : 'div.table-body>.table-row:nth-child(1)>.table-row-item:nth-child(3)'
},
FirstFlowinDeployWizard : {
    selector : '.table-body>.table-row:nth-child(1)'
},
NextButton : {
    selector : '#next-step'
},
NextButtonDisabled : {
    selector : '#next-step[disabled="disabled"]'
},
FirstExpInTrainedModel : {
    selector : '.table-body>.table-row:nth-child(1)'
},
TestWrap : {
    selector : '#re-test-wrap>.test-item:nth-child(1)'
},
ReTestButton : {
    selector : '.app-btn.app-btn-asset.app-btn-medium.outline'
},
NumOfRecordsFailedIntestStep : {
    selector : '.test-item:nth-child(2)>div:nth-child(3)'
}




      
    }
  };