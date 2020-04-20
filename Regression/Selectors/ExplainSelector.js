module.exports = {
    elements: {

        ModelButtonSelected: {
            selector: 'button.app-btn.app-btn-meduim.app-btn-secondary.button-tab.selected-item'
        },
        FlowIdSelect: {
            selector: '#explain-flow-select'
        },
        ExpIdSelect: {
            selector: '#explain-experiment-select'
        },
        FirstOptionInFlowIdList: {
            selector: '#explain-flow-select>option:nth-child(2)'
        },
        FirstOptionInExpIdList: {
            selector: '#explain-experiment-select>option:nth-child(2)'
        },
        FirstOptionInRecordIdList: {
            selector: '.explain-header-wrapper>div>div:nth-child(3)>div>.app-select-search-wrapper >.d-none>.app-select-search-list>.app-select-search-list-item:nth-child(1)'
        },
        ExplainCard: {
            selector: '.explain-details-item.app-card-custom'
        },
        ConfusionMatrixCard: {
            selector: '.explain-details-item.app-card-custom:nth-child(1)'
        },
        RocCurveCard: {
            selector: '.explain-details-item.app-card-custom:nth-child(2)'
        },
        PredictionHistogramCard: {
            selector: '.explain-details-item.app-card-custom:nth-child(3)'
        },
        TrainedModelInfoCard: {
            selector: '.explain-details-item.app-card-custom:nth-child(4)'
        },
        FeatureRankingCard: {
            selector: '.explain-details-item.app-card-custom:nth-child(5)'
        },
        FlowDataLineageCard: {
            selector: '.explain-details-item.app-card-custom:nth-child(6)'
        },
        RecordsPrediction: {
            selector: '.explain-navigation-wrapper>button:nth-child(2)'
        },
        RecordIdSelect: {
            selector: '.app-select-search-wrapper>input#explain-record-select'
        },
        RecordPredictionWrapper: {
            selector: '.record-prediction-wrapper'
        },
        SelectSearchList: {
            selector: '.app-select-search-list'
        },
        ShapleyInfoListAppCard: {
            selector: '.shapley-info-list.app-card'
        },
        ShapleyValuesForceDiagram: {
            selector: '.app-card.force-diagram-wrapper'
        },
        CustomTableWrapper: {
            selector: '.app-custom-table-wrapper'
        }
    }
};