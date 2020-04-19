module.exports = {
    elements: {

        ModelButtonSelected: {
            selector: 'button.app-btn.app-btn-meduim.app-btn-secondary.button-tab.selected-item'
        },
        FlowIdSelect : {
            selector : '#explain-flow-select'
        },
        ExpIdSelect : {
            selector : '#explain-experiment-select'
        },
        FirstOptionInFlowIdList : {
            selector : '#explain-flow-select>option:nth-child(2)'
        },
        FirstOptionInExpIdList : {
            selector : '#explain-experiment-select > option:nth-child(2)'
        },
        ExplainCard :{
            selector: '.explain-details-item.app-card-custom'
        },
        ConfusionMatrixCard : {
           selector : '.explain-details-item.app-card-custom:nth-child(1)'
        },
        RocCurveCard : {
            selector : '.explain-details-item.app-card-custom:nth-child(2)'
        },
        PredictionHistogramCard : {
            selector : '.explain-details-item.app-card-custom:nth-child(3)'
        },
        TrainedModelInfoCard :{
            selector : '.explain-details-item.app-card-custom:nth-child(4)'
        },
        FeatureRankingCard : {
            selector : '.explain-details-item.app-card-custom:nth-child(5)'
        },
        FlowDataLineageCard : {
            selector : '.explain-details-item.app-card-custom:nth-child(6)'
        }
       
        
    }
};