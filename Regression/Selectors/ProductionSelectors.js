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
    selector : '#re-test-wrap>.test-item:nth-child(1)>div:nth-child(1)'
},
ReTestButton : {
    selector : '.app-btn.app-btn-asset.app-btn-medium.outline'
},
NumOfRecordsFailedIntestStep : {
    selector : '.test-item:nth-child(2)>div:nth-child(3)'
},
PrevButton : {
    selector : '.app-btn.app-btn-asset.app-btn-medium'
},
ExpID : { 
    selector : '.table-row.selected-row>.table-row-item:nth-child(1)'
},
ExpIdInApprovalStep : {
    selector : '#summary > div:nth-child(1) > div:nth-child(3)'
},
FinishButton : {
    selector :'#finish'
},
FlowNameInFlowStep : {
    selector : '.table-row.selected-row>.table-row-item:nth-child(2)'
},
FlowIDInFlowStep : {
    selector : '.table-row.selected-row>.table-row-item:nth-child(1)'
},

SearchbyFlowNameInProdPage : {
    selector : 'input.app-input.app-input-primary.app-input-medium.search-field'
},
ProductionCard : {
    selector : '.production-card.app-card-custom.c-p'
},
ProductionCardName : {
    selector : '.prodcution-card-name'
},
DropdownBtn : {
    selector : '#dropdown-btn'
},
ScoreFileOption : {
    selector : '.app-dropdown-wrapper.d-flex.c-p>.app-dropdown-menu>.dropdown-menu-item:nth-child(3)'
},
InputFile : {
    selector : '#inputFileId'
},
SuccessMsg : {
    selector : '.score-result-wrapper.score-link>div'
},
RequestsButton :{
    selector : 'button.app-btn.app-btn-secondary.app-btn-medium.outline'
},
ProductionRequestsTable : {
    selector : '.production-requests-table'
},
FirstElementInPredIdcolumn : {
    selector :'.table-row.c-p:nth-child(1)>.table-row-item:nth-child(3)'
}


    }
  };