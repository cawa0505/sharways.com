(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{CO3Z:function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,"\n.loading-overlay.is-full-page{\n    z-index: 1060;\n}\n",""])},"D+Gm":function(t,e,s){var r=s("CO3Z");"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(r,o);r.locals&&(t.exports=r.locals)},jEK4:function(t,e,s){"use strict";var r=s("D+Gm");s.n(r).a},oCG3:function(t,e,s){"use strict";s.r(e);var r;function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var a={components:{transportRouteForm:s("yQfA").a},data:function(){return{transport_routes:{total:0,data:[]},transport_route:{},filter:{sort_by:"name",order:"asc",name:"",page_length:helper.getConfig("page_length")},orderByOptions:[{value:"name",translation:i18n.transport.route_name},{value:"created_at",translation:i18n.general.created_at}],showCreatePanel:!1,showFilterPanel:!1,showStoppageReorderModal:!1,stoppage_list:[],help_topic:""}},mounted:function(){helper.hasPermission("list-transport-route")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getTransportRoutes(),helper.showDemoNotification(["transport"])},methods:(r={getConfig:function(t){return helper.getConfig(t)},hasPermission:function(t){return helper.hasPermission(t)},showStoppageReorderAction:function(t){this.showStoppageReorderModal=!0,this.getStoppageList(t)},getStoppageList:function(t){var e=this;this.stoppage_list=[],this.transport_route=t,t.transport_route_details.forEach((function(t){e.stoppage_list.push(t.transport_stoppage.name)}))},getTransportRoutes:function(t){var e=this,s=this.$loading.show();"number"!=typeof t&&(t=1);var r=helper.getFilterURL(this.filter);axios.get("/api/transport/route?page="+t+r).then((function(t){e.transport_routes=t,s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))},editTransportRoute:function(t){this.$router.push("/transport/route/"+t.id+"/edit")},confirmDelete:function(t){var e=this;return function(s){return e.deleteTransportRoute(t)}},deleteTransportRoute:function(t){var e=this,s=this.$loading.show();axios.delete("/api/transport/route/"+t.id).then((function(t){toastr.success(t.message),e.getTransportRoutes(),s.hide()})).catch((function(t){s.hide(),helper.showErrorMsg(t)}))}},o(r,"getConfig",(function(t){return helper.getConfig(t)})),o(r,"formatCurrency",(function(t){return helper.formatCurrency(t)})),o(r,"print",(function(){var t=this.$loading.show();axios.post("/api/transport/route/print",{filter:this.filter}).then((function(e){var s=window.open("/print");t.hide(),s.document.write(e)})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))})),o(r,"pdf",(function(){var t=this,e=this.$loading.show();axios.post("/api/transport/route/pdf",{filter:this.filter}).then((function(s){e.hide(),window.open("/download/report/"+s+"?token="+t.authToken)})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))})),o(r,"reorderStoppage",(function(){var t=this;axios.post("/api/transport/route/"+this.transport_route.id+"/stoppage/reorder",{list:this.stoppage_list}).then((function(e){toastr.success(e.message),t.showStoppageReorderModal=!1,t.getTransportRoutes()})).catch((function(t){helper.showErrorMsg(t)}))})),r),filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}},watch:{"filter.sort_by":function(t){this.getTransportRoutes()},"filter.order":function(t){this.getTransportRoutes()},"filter.page_length":function(t){this.getTransportRoutes()}},computed:{authToken:function(){return helper.getAuthToken()}}},n=s("KHd+"),i=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("transport.route"))+" \n                    "),t.transport_routes.total?s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.transport_routes.total,from:t.transport_routes.from,to:t.transport_routes.to})))]):s("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[t.hasPermission("assign-transport-route")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("transport.assign_route"),expression:"trans('transport.assign_route')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){return t.$router.push("/transport/route/assign")}}},[s("i",{staticClass:"fas fa-route"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("transport.assign_route")))])]):t._e(),t._v(" "),t.transport_routes.total&&!t.showCreatePanel&&t.hasPermission("create-transport-route")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.add_new"),expression:"trans('general.add_new')"}],staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("transport.add_new_route")))])]):t._e(),t._v(" "),t.showFilterPanel?t._e():s("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showFilterPanel=!t.showFilterPanel}}},[s("i",{staticClass:"fas fa-filter"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("general.filter")))])]),t._v(" "),s("sort-by",{attrs:{"order-by-options":t.orderByOptions,"sort-by":t.filter.sort_by,order:t.filter.order},on:{updateSortBy:function(e){t.filter.sort_by=e},updateOrder:function(e){t.filter.order=e}}}),t._v(" "),s("div",{staticClass:"btn-group"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("general.more_option"),expression:"trans('general.more_option')"}],staticClass:"btn btn-info btn-sm dropdown-toggle no-caret ",attrs:{type:"button",role:"menu",id:"moreOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),t._v(" "),s("span",{staticClass:"d-none d-sm-inline"})]),t._v(" "),s("div",{class:["dropdown-menu","ltr"==t.getConfig("direction")?"dropdown-menu-right":""],attrs:{"aria-labelledby":"moreOption"}},[s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.print}},[s("i",{staticClass:"fas fa-print"}),t._v(" "+t._s(t.trans("general.print")))]),t._v(" "),s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:t.pdf}},[s("i",{staticClass:"fas fa-file-pdf"}),t._v(" "+t._s(t.trans("general.generate_pdf")))]),t._v(" "),t.hasPermission("list-transport-stoppage")?s("button",{staticClass:"dropdown-item custom-dropdown",on:{click:function(e){return t.$router.push("/transport/stoppage")}}},[s("i",{staticClass:"fas fa-stoppage-notch"}),t._v(" "+t._s(t.trans("transport.transport_stoppage")))]):t._e()])]),t._v(" "),s("help-button",{on:{clicked:function(e){t.help_topic="transport.route"}}})],1)])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("transition",{attrs:{name:"fade"}},[t.showFilterPanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("general.filter")))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.route_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.name,expression:"filter.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("transport.route_name")},domProps:{value:t.filter.name},on:{input:function(e){e.target.composing||t.$set(t.filter,"name",e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"card-footer text-right"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.showFilterPanel=!1}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"button"},on:{click:t.getTransportRoutes}},[t._v(t._s(t.trans("general.filter")))])])])]):t._e()]),t._v(" "),t.hasPermission("create-transport-route")?s("transition",{attrs:{name:"fade"}},[t.showCreatePanel?s("div",{staticClass:"card card-form"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("transport.add_new_route")))]),t._v(" "),s("transport-route-form",{on:{completed:t.getTransportRoutes,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]):t._e(),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t.transport_routes.total?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-sm"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.trans("transport.route_name")))]),t._v(" "),s("th",[t._v(t._s(t.trans("transport.stoppage")))]),t._v(" "),s("th",[t._v(t._s(t.trans("transport.route_description")))]),t._v(" "),s("th",{staticClass:"table-option"},[t._v(t._s(t.trans("general.action")))])])]),t._v(" "),s("tbody",t._l(t.transport_routes.data,(function(e){return s("tr",[s("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),s("td",[s("ul",{staticStyle:{"list-style-type":"none","padding-left":"0"}},t._l(e.transport_route_details,(function(e){return s("li",[t._v(t._s(e.transport_stoppage.name))])})),0)]),t._v(" "),s("td",{domProps:{textContent:t._s(e.description)}}),t._v(" "),s("td",{staticClass:"table-option"},[s("div",{staticClass:"btn-group"},[e.transport_route_details?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("transport.reorder_stoppage"),expression:"trans('transport.reorder_stoppage')"}],staticClass:"btn btn-success btn-sm",on:{click:function(s){return s.preventDefault(),t.showStoppageReorderAction(e)}}},[s("i",{staticClass:"fas fa-arrows-alt"})]):t._e(),t._v(" "),t.hasPermission("edit-transport-route")?s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.trans("transport.edit_route"),expression:"trans('transport.edit_route')"}],staticClass:"btn btn-info btn-sm",on:{click:function(s){return s.preventDefault(),t.editTransportRoute(e)}}},[s("i",{staticClass:"fas fa-edit"})]):t._e(),t._v(" "),t.hasPermission("delete-transport-route")?s("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(transport_route)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("transport.delete_route"),expression:"trans('transport.delete_route')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[s("i",{staticClass:"fas fa-trash"})]):t._e()])])])})),0)])]):t._e(),t._v(" "),t.transport_routes.total?t._e():s("module-info",{attrs:{module:"transport",title:"route_module_title",description:"route_module_description",icon:"list"}},[s("div",{attrs:{slot:"btn"},slot:"btn"},[!t.showCreatePanel&&t.hasPermission("create-transport-route")?s("button",{staticClass:"btn btn-info btn-md",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[s("i",{staticClass:"fas fa-plus"}),t._v(" "+t._s(t.trans("general.add_new")))]):t._e()])]),t._v(" "),s("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.transport_routes},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getTransportRoutes}})],1)])],1),t._v(" "),t.hasPermission("edit-transport-route")&&t.showStoppageReorderModal?s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container modal-lg"},[s("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n                            "+t._s(t.trans("transport.reorder_stoppage"))+"\n                            "),s("span",{staticClass:"float-right pointer",on:{click:function(e){t.showStoppageReorderModal=!1}}},[t._v("x")])])],2),t._v(" "),s("div",{staticClass:"modal-body"},[t._t("body",[s("draggable",{staticClass:"list-group",on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.stoppage_list,callback:function(e){t.stoppage_list=e},expression:"stoppage_list"}},t._l(t.stoppage_list,(function(e){return s("div",{key:e.id,staticClass:"list-group-item pointer"},[s("i",{staticClass:"fas fa-arrows-alt"}),t._v(" "+t._s(e))])})),0),t._v(" "),s("button",{staticClass:"btn btn-info pull-right m-t-10",attrs:{type:"button"},on:{click:t.reorderStoppage}},[t._v(t._s(t.trans("general.save")))])])],2)])])])]):t._e(),t._v(" "),s("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);e.default=i.exports},yQfA:function(t,e,s){"use strict";var r={components:{},data:function(){return{transportRouteForm:new Form({name:"",description:"",transport_stoppages:[]}),transport_stoppages:[],selected_transport_stoppages:null,showTransportStoppageModal:!1}},props:["id"],mounted:function(){helper.hasPermission("create-transport-route")||helper.hasPermission("edit-transport-route")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite()},methods:{hasPermission:function(t){return helper.hasPermission(t)},proceed:function(){this.id?this.update():this.store()},getPreRequisite:function(){var t=this,e=this.$loading.show();this.showTransportStoppageModal=!1,axios.get("/api/transport/route/pre-requisite").then((function(s){t.transport_stoppages=s,t.id&&t.get(),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},store:function(){var t=this,e=this.$loading.show();this.transportRouteForm.post("/api/transport/route").then((function(s){toastr.success(s.message),t.transportRouteForm.transport_stoppages=[],t.selected_transport_stoppages=null,t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},get:function(){var t=this,e=this.$loading.show();axios.get("/api/transport/route/"+this.id).then((function(s){t.transportRouteForm.name=s.transport_route.name,t.transportRouteForm.description=s.transport_route.description,t.selected_transport_stoppages=s.selected_transport_stoppages,s.selected_transport_stoppages.forEach((function(e){t.transportRouteForm.transport_stoppages.push(e.id)})),e.hide()})).catch((function(s){e.hide(),helper.showErrorMsg(s),t.$router.push("/transport/route")}))},update:function(){var t=this,e=this.$loading.show();this.transportRouteForm.patch("/api/transport/route/"+this.id).then((function(s){toastr.success(s.message),e.hide(),t.$router.push("/transport/route")})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getConfig:function(t){return helper.getConfig(t)},onTransportStoppageSelect:function(t){this.transportRouteForm.transport_stoppages.push(t.id)},onTransportStoppageRemove:function(t){this.transportRouteForm.transport_stoppages.splice(this.transportRouteForm.transport_stoppages.indexOf(t.id),1)}}},o=(s("jEK4"),s("KHd+")),a=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.proceed(e)},keydown:function(e){return t.transportRouteForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.route_name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.transportRouteForm.name,expression:"transportRouteForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("transport.route_name")},domProps:{value:t.transportRouteForm.name},on:{input:function(e){e.target.composing||t.$set(t.transportRouteForm,"name",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.transportRouteForm,"prop-name":"name"}})],1)]),t._v(" "),s("div",{staticClass:"col-12 col-sm-4"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.route_description")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.transportRouteForm.description,expression:"transportRouteForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:t.trans("transport.route_description")},domProps:{value:t.transportRouteForm.description},on:{input:function(e){e.target.composing||t.$set(t.transportRouteForm,"description",e.target.value)}}}),t._v(" "),s("show-error",{attrs:{"form-name":t.transportRouteForm,"prop-name":"description"}})],1)])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("transport.stoppage"))+" ")]),t._v(" "),s("v-select",{attrs:{label:"name","track-by":"id",name:"transport_stoppages",id:"transport_stoppages",options:t.transport_stoppages,placeholder:t.trans("transport.select_stoppage"),multiple:!0,"close-on-select":!1,"clear-on-select":!1,"hide-selected":!0,selected:t.selected_transport_stoppages},on:{select:t.onTransportStoppageSelect,remove:t.onTransportStoppageRemove},model:{value:t.selected_transport_stoppages,callback:function(e){t.selected_transport_stoppages=e},expression:"selected_transport_stoppages"}},[t.transport_stoppages.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n                            "+t._s(t.trans("general.no_option_found"))+"\n                        ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.transportRouteForm,"prop-name":"transport_stoppages"}})],1)])]),t._v(" "),s("div",{staticClass:"card-footer"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"}),t._v(" "),s("div",{staticClass:"col-12 col-sm-6 text-right"},[s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/transport/route"}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),t.id?t._e():s("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),s("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[t.id?s("span",[t._v(t._s(t.trans("general.update")))]):s("span",[t._v(t._s(t.trans("general.save")))])])],1)])])])])}),[],!1,null,null,null);e.a=a.exports}}]);
//# sourceMappingURL=index.js.map?id=ad3922260f0387578adf