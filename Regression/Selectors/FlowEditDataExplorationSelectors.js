module.exports = {
    elements: {

        FeatureListLink : {
            selector: '#feature-list'
        },
        FeatureListLinkActive : {
            selector : '.active>#feature-list'
        },
        ExportButton : {
            selector : '#feature_stats_download_click'
        },
        Pagination : {
            selector : '.app-pagination'
        },
        MeanColumn : {
            selector : '.table-row-item:nth-child(5)'
        },
        SortIconForTheFifthColumn : {
            selector : '.table-row-item:nth-child(5)>span.c-p'
        },
        SortIcon : {
            selector : 'span.c-p'
        },
        FirstElementInFifthColumn : {
            selector : 'div.table-body>div:nth-child(1)>.table-row-item:nth-child(5)'
        },
        SecondElementInFifthColumn : {
            selector : 'div.table-body>div:nth-child(2)>.table-row-item:nth-child(5)' 
        },
        SearchField :{
            selector : 'input.app-input.app-input-primary.app-input-medium'
        },
        FirstRowAfterSearch : {
            selector : '.table-body>.table-row'
        },
        FeatureAnalysis : {
            selector : '#feature-analysis'
        },
        SelectFeatureAnalysis : {
            selector : 'input#model-select-feature-analysis'
        },
        MenuInFeatureAnalysis: {
            selector : '.menu.visible'
        },
        FeatureInMenu : {
           selector : '.ui.fluid.search.selection.dropdown.active.visible>.menu.visible'
        },
        TableInFeatureAnalysis : {
            selector : '.custom-table.sticky-column'
        },
        FilterInFeatureAnalysis : {
            selector : '.features-analysis-header>.filters-wrapper>.app-btn.app-btn-asset.app-btn-square.outline'
        },
        
        ModalViewForFilter : {
            selector : '.modal-background.d-flex>#modal-view'
        },
        CountValueForTheSelectedFeature : {
            selector : '.table-body>.table-row>.table-row-item:nth-child(2)'
        },
        FilterQuery : {
            selector :'.modal-content-item>#enter-filter-query'
        },
        SubmitButton : {
            selector : '.modal-background.d-flex>.app-modal-view.app-card-custom>.app-modal-actions.card-body-custom>button#submit-button'
        },
        CancleButton : {
            selector : 'button.app-btn.app-btn-asset.app-btn-small'
        }
    }
};