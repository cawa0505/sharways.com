(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{A7nH:function(e,t,n){"use strict";var i={data:function(){return{enquiryTypeForm:new Form({name:"",description:""})}},props:["id"],mounted:function(){this.id&&this.get()},methods:{proceed:function(){this.id?this.update():this.store()},store:function(){var e=this,t=this.$loading.show();this.enquiryTypeForm.post("/api/reception/enquiry/type").then((function(n){toastr.success(n.message),e.$emit("completed"),t.hide()})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))},get:function(){var e=this,t=this.$loading.show();axios.get("/api/reception/enquiry/type/"+this.id).then((function(n){e.enquiryTypeForm.name=n.name,e.enquiryTypeForm.description=n.description,t.hide()})).catch((function(n){t.hide(),helper.showErrorMsg(n),e.$router.push("/configuration/reception/enquiry/type")}))},update:function(){var e=this,t=this.$loading.show();this.enquiryTypeForm.patch("/api/reception/enquiry/type/"+this.id).then((function(n){toastr.success(n.message),t.hide(),e.$router.push("/configuration/reception/enquiry/type")})).catch((function(e){t.hide(),helper.showErrorMsg(e)}))}}},r=n("KHd+"),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.proceed(t)},keydown:function(t){return e.enquiryTypeForm.errors.clear(t.target.name)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.enquiry_type_name")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.enquiryTypeForm.name,expression:"enquiryTypeForm.name"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:e.trans("reception.enquiry_type_name")},domProps:{value:e.enquiryTypeForm.name},on:{input:function(t){t.target.composing||e.$set(e.enquiryTypeForm,"name",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.enquiryTypeForm,"prop-name":"name"}})],1)]),e._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v(e._s(e.trans("reception.enquiry_type_description")))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.enquiryTypeForm.description,expression:"enquiryTypeForm.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",placeholder:e.trans("reception.enquiry_type_description")},domProps:{value:e.enquiryTypeForm.description},on:{input:function(t){t.target.composing||e.$set(e.enquiryTypeForm,"description",t.target.value)}}}),e._v(" "),n("show-error",{attrs:{"form-name":e.enquiryTypeForm,"prop-name":"description"}})],1)])]),e._v(" "),n("div",{staticClass:"card-footer text-right"},[n("router-link",{directives:[{name:"show",rawName:"v-show",value:e.id,expression:"id"}],staticClass:"btn btn-danger waves-effect waves-light ",attrs:{to:"/configuration/reception/enquiry/type"}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),e.id?e._e():n("button",{staticClass:"btn btn-danger waves-effect waves-light ",attrs:{type:"button"},on:{click:function(t){return e.$emit("cancel")}}},[e._v(e._s(e.trans("general.cancel")))]),e._v(" "),n("button",{staticClass:"btn btn-info waves-effect waves-light",attrs:{type:"submit"}},[e.id?n("span",[e._v(e._s(e.trans("general.update")))]):n("span",[e._v(e._s(e.trans("general.save")))])])],1)])}),[],!1,null,null,null);t.a=s.exports},S6PG:function(e,t,n){"use strict";n.r(t);var i={components:{enquiryTypeForm:n("A7nH").a},data:function(){return{id:this.$route.params.id}},mounted:function(){helper.hasPermission("access-configuration")||(helper.notAccessibleMsg(),this.$router.push("/dashboard"))}},r=n("KHd+"),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"page-titles"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-sm-6"},[n("h3",{staticClass:"text-themecolor"},[e._v(e._s(e.trans("reception.edit_enquiry_type")))])]),e._v(" "),n("div",{staticClass:"col-12 col-sm-6"},[n("div",{staticClass:"action-buttons pull-right"},[n("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){return e.$router.push("/configuration/reception/enquiry/type")}}},[n("i",{staticClass:"fas fa-list"}),e._v(" "),n("span",{staticClass:"d-none d-sm-inline"},[e._v(e._s(e.trans("reception.enquiry_type")))])])])])])]),e._v(" "),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"card card-form"},[n("div",{staticClass:"card-body p-t-20"},[n("enquiry-type-form",{attrs:{id:e.id}})],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);
//# sourceMappingURL=edit.js.map?id=d0d14af0e5771968fc8c