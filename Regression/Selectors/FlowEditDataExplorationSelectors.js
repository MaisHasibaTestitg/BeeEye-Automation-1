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
        }
        
        
        
    }
};