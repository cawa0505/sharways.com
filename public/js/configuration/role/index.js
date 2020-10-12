(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{tuRs:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{roleForm:new Form({name:""})}},methods:{storeRole:function(){var t=this,e=this.$loading.show();this.roleForm.post("/api/role").then((function(o){toastr.success(o.message),t.$emit("completed"),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))}}},a=o("KHd+"),s={components:{roleForm:Object(a.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{on:{submit:function(e){return e.preventDefault(),t.storeRole(e)},keydown:function(e){return t.roleForm.errors.clear(e.target.name)}}},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:""}},[t._v(t._s(t.trans("configuration.role_name")))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.roleForm.name,expression:"roleForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.trans("configuration.role_name")},domProps:{value:t.roleForm.name},on:{input:function(e){e.target.composing||t.$set(t.roleForm,"name",e.target.value)}}}),t._v(" "),o("show-error",{attrs:{"form-name":t.roleForm,"prop-name":"name"}})],1),t._v(" "),o("div",{staticClass:"card-footer text-right"},[o("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(t._s(t.trans("general.cancel")))]),t._v(" "),o("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[o("span",[t._v(t._s(t.trans("general.save")))])])])])}),[],!1,null,null,null).exports},data:function(){return{roles:{total:0,data:[]},filter:{page_length:helper.getConfig("page_length")},showCreatePanel:!1,help_topic:""}},mounted:function(){helper.hasRole("admin")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getRoles()},methods:{getRoles:function(t){var e=this,o=this.$loading.show();"number"!=typeof t&&(t=1);var n=helper.getFilterURL(this.filter);axios.get("/api/role?page="+t+n).then((function(t){e.roles=t,o.hide()})).catch((function(t){o.hide(),helper.showErrorMsg(t)}))},confirmDelete:function(t){var e=this;return function(o){return e.deleteRole(t)}},deleteRole:function(t){var e=this,o=this.$loading.show();axios.delete("/api/role/"+t.id).then((function(t){toastr.success(t.message),e.getRoles(),o.hide()})).catch((function(t){o.hide(),helper.showErrorMsg(t)}))},toWord:function(t){return helper.toWord(t)}},filters:{momentDateTime:function(t){return helper.formatDateTime(t)}}},r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"page-titles"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6"},[o("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("configuration.role"))+"\n                    "),t.roles.total?o("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.total_result_found",{count:t.roles.total,from:t.roles.from,to:t.roles.to})))]):o("span",{staticClass:"card-subtitle d-none d-sm-inline"},[t._v(t._s(t.trans("general.no_result_found")))])])]),t._v(" "),o("div",{staticClass:"col-12 col-sm-6"},[o("div",{staticClass:"action-buttons pull-right"},[o("button",{staticClass:"btn btn-info btn-sm",on:{click:function(e){t.showCreatePanel=!t.showCreatePanel}}},[o("i",{staticClass:"fas fa-plus"}),t._v(" "),o("span",{staticClass:"d-none d-sm-inline"},[t._v(t._s(t.trans("configuration.add_new_role")))])]),t._v(" "),o("help-button",{on:{clicked:function(e){t.help_topic="configuration.role"}}})],1)])])]),t._v(" "),o("div",{staticClass:"container-fluid"},[o("transition",{attrs:{name:"fade"}},[t.showCreatePanel?o("div",{staticClass:"card card-form"},[o("div",{staticClass:"card-body"},[o("h4",{staticClass:"card-title"},[t._v(t._s(t.trans("configuration.add_new_role")))]),t._v(" "),o("role-form",{on:{completed:t.getRoles,cancel:function(e){t.showCreatePanel=!t.showCreatePanel}}})],1)]):t._e()]),t._v(" "),o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[t.roles.total?o("div",{staticClass:"table-responsive"},[o("table",{staticClass:"table table-sm"},[o("thead",[o("tr",[o("th",[t._v(t._s(t.trans("configuration.role_name")))]),t._v(" "),o("th",{staticClass:"table-option"},[t._v("Action")])])]),t._v(" "),o("tbody",t._l(t.roles.data,(function(e){return o("tr",[o("td",{domProps:{textContent:t._s(t.toWord(e.name))}}),t._v(" "),o("td",{staticClass:"table-option"},[o("div",{staticClass:"btn-group"},[o("button",{directives:[{name:"confirm",rawName:"v-confirm",value:{ok:t.confirmDelete(e)},expression:"{ok: confirmDelete(role)}"},{name:"tooltip",rawName:"v-tooltip",value:t.trans("configuration.delete_role"),expression:"trans('configuration.delete_role')"}],key:e.id,staticClass:"btn btn-danger btn-sm"},[o("i",{staticClass:"fas fa-trash"})])])])])})),0)])]):t._e(),t._v(" "),t.roles.total?t._e():o("module-info",{attrs:{module:"configuration",title:"role_module_title",description:"role_module_description",icon:"list"}}),t._v(" "),o("pagination-record",{attrs:{"page-length":t.filter.page_length,records:t.roles},on:{"update:pageLength":function(e){return t.$set(t.filter,"page_length",e)},"update:page-length":function(e){return t.$set(t.filter,"page_length",e)},updateRecords:t.getRoles},nativeOn:{change:function(e){return t.getRoles(e)}}})],1)])],1),t._v(" "),o("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=index.js.map?id=b9ef376b8c0db2f266cb