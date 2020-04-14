module.exports = {
    elements: {
        NavFlows: {
            selector: '#nav-menu-flows'
        },

        AddFlowBtn: {
            selector: '#add-flow-button'
        },


        PopUp: {
            selector: '.modal-background.d-flex'
        },

        FlowNameInput: {
            selector: '#enter-new-flow-name'
        },

        BackButton: {
            selector: '.flow-header-back'
        },

        FlowNameonBackButton: {
            selector: '.flow-name.text-slicer'
        },

        DataSourcesButton: {
            selector: '#datasources-header-button'
        },

        FlowMenu: {
            selector: '.flow-status'
        },

        Edit: {
            selector: '#edit'
        },

        Delete: {
            selector: '#delete'
        },

        Copy: {
            selector: '#copy'
        },


        FlowCount: {
            selector: '.flow-count.fw-bold'
        },

        CardBodyChart: {
            selector: '.card-body-chart'
        },

        CardBodyInfo: {
            selector: '.card-body-info'
        },

        //CardHeader : '.card-header-custom',
        Author: {
            selector: '.username-wrapper.mt-2'
        },

        FlowName: {
            selector: '.app-input-invisible.c-p.p-0'
        },

        Selected: {
            selector: '.sort-control-button.c-p.selected'
        },

        SpanForName: {
            selector: '.sort-control-items:nth-child(3)>div>span'
        },

        SpanForGini: {
            selector: '.sort-control-items:nth-child(4)>div>span'
        },

        SpanForDatecreated: {
            selector: '.sort-control-items:nth-child(5)>div>span'

        },

        UploadBtn: {
            selector: '#uploadButton',
        },

        InputFileId: {
            selector: '#inputFileId',
        },

        EmptyInput: {
            selector: '.input-empty',
        },

        ErrorInput: {
            selector: '.input-error',
        },

        FileInformation: {
            selector: '.source-info',
        },

        Name: {
            selector: '.source-info>ul>li:nth-child(1)>strong'
        },

        Type: {
            selector: '.source-info>ul>li:nth-child(2)>strong'
        },
        /*Type: {
            selector: '/html/body/div/div/div/div[2]/div/div[2]/div/div/div[2]/div[1]/div/ul/li[2]/strong',
            locateStrategy: 'xpath'
        },
*/
        Columns: {
            selector: '.source-info>ul>li:nth-child(3)>strong'
        },

        NameOfThefile: {
            selector: '.source-info>ul>li:nth-child(1)>span'
        },

        TypeOfTheFile: {
            selector: '.source-info>ul>li:nth-child(2)>span'
        },

        NumberOfColumns: {
            selector: '.source-info>ul>li:nth-child(3)>span'
        },

        PreviewData: {
            selector: '.tablist>ul>li>#data-preview-button',
        },

        Table: {
            selector: '.custom-table',
        },

        TableRowItem: {
            selector: '.table-row-item'
        },

        SelectLabelInput: {
            selector: '#model-select-label',
        },

        LabelWarning: {
            selector: '#label-warning'
        },

        LabelMenuVisible: {
            selector: '.menu.visible'
        },

        PieChart: {
            selector: '#pie-chart'
        },

        DataSourcesButton: {
            selector: '#datasources-header-button-run',
        },

        TransformationButton: {
            selector: '#transformations-header-button',
        },

        FlowLogButton: {
            selector: '.d-flex.notifications-button',
        },

        RunFlowButton: {
            selector: '.flow-edit-control-buttons>div:nth-child(1)'
        },

        StopFlowButton: {
            selector: '.flow-edit-control-buttons>div:nth-child(2)>.app-btn.app-btn-asset.app-btn-square'
        },
        RefreshFlowButton: {
            selector: '.flow-edit-control-buttons>div:nth-child(3)>.app-btn.app-btn-asset.app-btn-square'
        },

        LogError: {
            selector: '.pre-log.error-log'
        },

        Log: {
            selector: '.pre-log'
        },

        LogWindow: {
            selector: '.notifications-window-wrapper>div>.app-modal-view.app-card-custom'
        },
        CloseIcon: {
            selector: '.close-modal.c-p.d-flex'
        },

        FlowList: {
            selector: '.app-card-custom.flow-card.select-none.flow-list-item'
            //selector : '.flow-list-wrapper'
        },
        Date: {
            selector: '.text-center'
        },
        DataSourceSection: {
            selector: '.data-sourse-list-wrapper.h-100'
        },
        RemoveAllButton: {
            selector: '.app-btn.app-btn-danger.app-btn-small'

        },
        FileNameButton: {
            selector: '.app-btn.app-btn-medium.app-btn-asset.data-source-list-item.disabled'
        },
        AddDataSourceButton: {
            //selector: '.w-100.app-btn.app-btn-medium.app-btn-primary'
            selector: 'button[name="add-data-source"]'
        },
        CombinedRows: {
            selector: '#data-shape-combined-rows'
        },
        RowsAfterFiltering: {
            selector: '#data-shape-rows-after-filtering'
        },
        ColumnsInDataSourceSection: {
            selector: '#data-shape-columns'
        },
        HeaderOfDataSourceSection: {
            selector: '.d-flex.justify-content-between.card-header-custom'
        },
        //This for "EyeOnRisk License will expire in 5 days"
        SubmitButton: {
            selector: '#submit-button'
        },
        SearchByFeatureName: {
            //selector: '.app-input.app-input-primary.app-input-medium.mr-3'
            selector: '.preview-table-wrapper>div>div>.app-input.app-input-primary.app-input-medium.mr-3'
        },

        FirstColumninTable: {
            selector: '.table-row-item:nth-child(1)'
        },
        //Selectors in Columns Tab
        ColumnsTab: {
            selector: '.tablist>ul>li>#columns-table-button'

        },
        SwitcherBoxColumn: {
            selector: '.switcher-box'
        },
        NameColumn: {
            selector: '.table-row-item:nth-child(2)'
        },
        RoleColumn: {
            selector: '.table-row-item:nth-child(3)'
        },
        TypeColumn: {
            selector: '.table-row-item:nth-child(4)'
        },
        CardinalityColumn: {
            selector: '.table-row-item:nth-child(5)'
        },
        NullRatioColumn: {
            selector: '.table-row-item:nth-child(6)'
        },
        PreviewColumn: {
            selector: '.table-row-item:nth-child(7)'
        },
        ID: {
            selector: '.table-row',
            index: '1'
        },
        LIMIT_BAL: {
            selector: '.table-row',
            index: '2'
        },
        GENDER: {
            selector: '.table-row',
            index: '3'
        },
        EDUCATION: {
            selector: '.table-row',
            index: '4'
        },
        MARRIAGERow: {
            selector: '.table-row',
            index: '5'
        },
        AGE: {
            selector: '.table-row',
            index: '6'
        },
        PAY_0: {
            selector: '.table-row',
            index: '7'
        },
        PAY_2: {
            /// selector: '.table-row:nth-child(8)'
            selector: '.table-row',
            index: '8'
        },
        PAY_3: {
            selector: '.table-row',
            index: '9'
        },
        PAY_4: {
            selector: '.table-row',
            index: '10'
        },

        PAY_5: {
            selector: '.table-row',
            index: '1'
        },
        PAY_6: {
            selector: '.table-row',
            index: '2'
        },
        BILL_AMT1: {
            selector: '.table-row',
            index: '3'
        },
        BILL_AMT2: {
            selector: '.table-row',
            index: '4'
        },
        BILL_AMT3: {
            selector: '.table-row',
            index: '5'
        },
        BILL_AMT4: {
            selector: '.table-row',
            index: '6'
        },
        BILL_AMT5: {
            selector: ' .table-row',
            index: '7'
        },
        BILL_AMT6: {
            selector: '.table-row',
            index: '8'
        },

        PAY_AMT1: {
            selector: '.table-row',
            index: '9'
        },

        PAY_AMT2: {
            selector: '.table-row',
            index: '10'
        },

        paginationInTabs: {
            selector: '.pagination-item:nth-child(5)'
        },

        PAY_AMT3: {
            selector: '.custom-table>.table-body>.table-row:nth-child(1)'
        },
        PAY_AMT4: {
            selector: '.table-row:nth-child(2)'
        },
        PAY_AMT5: {
            selector: '.table-row:nth-child(3)'
        },
        PAY_AMT6: {
            selector: '.table-row:nth-child(4)'
        },

        DefaultPaymentNextMonth: {
            selector: '.table-row:nth-child(5)'
        },
        SearchByColumn: {
            selector: '.table-options-wrapper>div>div>.app-input.app-input-primary.app-input-medium'
        },
        FirstRowInTable: {
            selector: '.custom-table>.table-body>.table-row:nth-child(1)'
        },
        StatisticsTab: {
            selector: '.tablist>ul>li>#stats-table-button'
        },
        FeatureName: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(1)'
        },
        CountValues: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(2)'
        },
        UniqueCount: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(3)'
        },
        NullRatio: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(4)'
        },
        Mean: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(5)'
        },
        Stdv: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(6)'
        },
        MinValue: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(7)'
        },
        the25Percentile: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(8)'
        },
        Median: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(9)'
        },
        the75Percentile: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(10)'
        },
        MaxValue: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(11)'
        },
        MostCommonFrequency: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(12)'
        },
        MostCommonValue: {
            selector: '#stats-table>div>div>div>.table-row-item:nth-child(13)'
        },
        NoColumnsMsg: {
            selector: '.text-no-columns'
        },
        RemoveIcon: {
            selector: '.app-btn.app-btn-danger.app-btn-square'
        },
        ModalForRemoveDataSource: {
            selector: '.modal-background.d-flex>#modal-view'
        },
        SubmitButtonInRemoveModal: {
            selector: '.modal-background.d-flex>div>div>#submit-button'
        },
        AddMasterDataSourceButton: {
            selector: '.add-new-button'
        },
        FlowEditHeader: {
            selector: '.flow-edit-header'
        },
        AutoFGButton: {
            selector: '#AutoFG'
        },
        ExperimentsButton: {
            selector: '#experiments-header-button'
        },
        FlowManagerTitle: {
            selector: '#flow-manager-title'
        },
        FlowList: {
            selector: '.flow-list-main-wrapper'
        },

        FirstJoinField: {
            selector: '.top-part>div>div.d-flex >div:nth-child(1)>.ui.fluid.search.selection.dropdown>.search'
        },
        SecondjoinField: {
            selector: '.d-flex>div:nth-child(2)>.ui.fluid.search.selection.dropdown>.search'
        },
        TransformationTab: {
            selector: '#transformations-tab'
        },
        ExperimentSideBar: {
            selector: '.experiment-sidebar.h-100'
        },

        FirstElement: {
            selector: '.ui.fluid.search.selection.dropdown.active.visible:nth-child(1)>div.menu.visible>div'
        },

        AutoFGPage: {
            selector: '.autofg-wrapper'
        },

        ToolTipforRunFlow: {
            selector: '.flow-edit-control-buttons>div:nth-child(1)'
        },
        FlowMemberinthelist: {
            selector: '.card-header-custom>div>.flow-name'
        },
        FirstElementinLabelList: {
            selector: '.ui.fluid.search.selection.dropdown.active.visible>.menu.visible'
        },
        AutoFGButtonDisabled: {
            selector: '#AutoFG[disabled="disabled"]'
        },
        RunFlowDisabled: {
            selector: '#run-flow-button[disabled="disabled"]'
        }

    }
};