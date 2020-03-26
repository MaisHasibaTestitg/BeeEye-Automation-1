module.exports = {
    elements: {
  TransformationButton :{
    selector: '#transformations-header-button-run'
  },
  TransformationTab : { 
      selector: '#transformations-header-button'
  },
  
  TransformationMsg : {
      selector : '.navigation-content >.feature-exploration-content-wrapper.d-flex.justify-content-center.align-items-center>h3'
  },
  FeaturesTable : {
      selector : '#feartures-table'
  },
  LogReportItem : {
    selector : '.log-repport-item'
  },
  WarningLog : {
    selector :'.pre-log.warning-log'
  },

  TransformationTabLink: {
    selector : '#transformations-tab'
  },

  AddTransformationButton : {
    selector : '#create-transformation'
  },
  BuiltInTypeList : {
    selector : '#builtInType'
  },
  //Input Features for Subtract function
  FirstInputFeaturesList : {
    selector : '#InputFeature_0>div>div>.ui.fluid.search.selection.dropdown.build-in-select>input.search'
  },
  SecondInputFeatureList : {
    selector : '#InputFeature_1>div>div>.ui.fluid.search.selection.dropdown.build-in-select>input.search'
  },
  SubmitTransformationButtonDisabled : {
    selector : '#submit-transformation[disabled="disabled"]'
  },
  SubmitTransformationButton : {
    selector : '#submit-transformation'
  },
ActiveTransformationFunction :{
  selector :'#scrollDiv>.transformations-list>div>button'
},
ColumnsPreviewDataTable  :{ 
  selector : '.custom-table'
},
FirstElemntinFirstRow : {
  selector: '.custom-table>.table-body>.table-row:nth-child(1)>.table-row-item:nth-child(1)'
},
SecondElemntinFirstRow  : {
  selector : '.custom-table>.table-body>.table-row:nth-child(1)>.table-row-item:nth-child(2)'
},
ThirdElemntinFirstRow : {
  selector : '.custom-table>.table-body>.table-row:nth-child(1)>.table-row-item:nth-child(3)'
},
FirstElemntinSixthRow : {
  selector : '.custom-table>.table-body>.table-row:nth-child(6)>.table-row-item:nth-child(1)'
},
SecondElemntinSixthRow  : {
  selector : '.custom-table>.table-body>.table-row:nth-child(6)>.table-row-item:nth-child(2)'
},
TableRowItem : {
  selector : '.table-row-item'
},
FirstElementInFirstList : {
 selector : '#InputFeature_0>div>div>.ui.fluid.search.selection.dropdown.build-in-select.active.visible>div:nth-child(4)'
},
FirstElementInSecondList : {
  selector : '#InputFeature_1>div>div>.ui.fluid.search.selection.dropdown.build-in-select.active.visible>div:nth-child(4)'
}, 
BuiltInClicked : {
  selector : '.app-btn.app-btn-asset.app-btn-medium.transformation-type-item'
},
//Input Features for Subtract function
InputFeaturesList : {
  selector : '#InputFeature_0>div>div>.ui.fluid.search.dropdown.selection.multiple.build-in-multiselect>input.search'
},
FirstElementInList : {
  selector: '#InputFeature_0>div>div>.ui.fluid.search.dropdown.selection.multiple.build-in-multiselect.active.visible>div:nth-child(4)'
},
SecondTransformationFunction : {
  selector : '#scrollDiv>.transformations-list>div>button:nth-child(2)'
}


    }
  };
