module.exports = {
    elements: {

        ExperimentsButton: {
            selector: '.dashboard-panel-left'
        },
        CreateExpButton: {
            selector: '.app-dropdown-content>div>.app-btn.app-btn-secondary.app-btn-square'
        },
        MachineLearningModel: {
            //selector :'#machine\ learning\ model'
            selector: '.card-header-custom.d-flex.justify-content-between.align-items-center>div>div>.app-dropdown-wrapper>.app-dropdown-menu>.dropdown-menu-item:nth-child(1)'
        },
        NewExpModal: {
            selector: '#modal-view'
        },
        SecondControllerButton: {
            selector: '.tables-wrapper>.controllers>.app-btn.app-btn-secondary.app-btn-square:nth-child(2)'
        },

        Submitbutton: {
            selector: '.modal-background.d-flex>.app-modal-view.app-card-custom>.app-modal-actions.card-body-custom>#submit-button'
        },
        ExperimentsCard: {
            selector: '.expiriment-card.app-card-custom.w-100.marked.selected.automl'
        },
        RunFlow: {
            selector: '#run-flow-button'
        },
        ROCCurve: {
            selector: '.roc-curve-wrapper.fw-bold'
        },
        ExperimentStats: {
            selector: '.experiment-stats'
        },
        ModelParameters: {
            selector: '.d-flex.flex-column.model-params-wrapper.model-params'
        },
        SelectedFeatures: {
            selector: '.features-ranking-item'
        }
    }
};