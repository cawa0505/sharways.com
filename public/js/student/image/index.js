(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{"8NIR":function(t,e,s){"use strict";s.r(e);var o={components:{},data:function(){return{imageForm:new Form({batch_id:"",students:[]},!1),batches:[],selected_batch:null,selected_batch_detail:{},student_records:[],help_topic:""}},mounted:function(){helper.hasPermission("edit-student")||(helper.notAccessibleMsg(),this.$router.push("/dashboard")),this.getPreRequisite(),helper.showDemoNotification(["student"])},methods:{getPreRequisite:function(){var t=this,e=this.$loading.show();axios.get("/api/student/roll/number/pre-requisite").then((function(s){t.batches=s.batches,e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getStudent:function(){var t=this,e=this.$loading.show();axios.post("/api/student/fetch",{batch_id:this.imageForm.batch_id}).then((function(s){t.student_records=s.student_records,t.selected_batch_detail=s.batch,t.imageForm.students=[],t.student_records.forEach((function(e){t.imageForm.students.push({id:e.id,uuid:e.student.uuid,name:t.getStudentName(e.student),photo:e.student.student_photo,date_of_birth:e.student.date_of_birth,contact_number:e.student.contact_number,admission_number:helper.getAdmissionNumber(e.admission),father_name:e.student.parent.father_name,roll_number:e.roll_number})})),t.imageForm.students.sort((function(t,e){var s=t.name.toUpperCase(),o=e.name.toUpperCase();return s<o?-1:s>o?1:0})),e.hide()})).catch((function(t){e.hide(),helper.showErrorMsg(t)}))},getStudentName:function(t){return helper.getStudentName(t)},getRollNumberName:function(t){return t+"_roll_number"},onBatchSelect:function(t){var e=this.$loading.show();this.imageForm.batch_id=t.id,this.autoRollNumberAssign=0,this.getStudent(),e.hide()},onBatchRemove:function(t){this.imageForm.batch_id="",this.imageForm.students=[],this.student_records=[]},updatePhoto:function(t){}},filters:{moment:function(t){return helper.formatDate(t)},momentDateTime:function(t){return helper.formatDateTime(t)}}},a=s("KHd+"),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-titles"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-6"},[s("h3",{staticClass:"text-themecolor"},[t._v(t._s(t.trans("student.image_upload")))])]),t._v(" "),s("div",{staticClass:"col-12 col-sm-6"},[s("div",{staticClass:"action-buttons pull-right"},[s("help-button",{on:{clicked:function(e){t.help_topic="registration"}}})],1)])])]),t._v(" "),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body p-4"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)},keydown:function(e){return t.imageForm.errors.clear(e.target.name)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-sm-3"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:""}},[t._v(t._s(t.trans("academic.batch")))]),t._v(" "),s("v-select",{attrs:{label:"name","group-values":"batches","group-label":"course_group","group-select":!1,name:"batch_id",id:"batch_id",options:t.batches,placeholder:t.trans("academic.select_batch")},on:{select:t.onBatchSelect,close:function(e){return t.imageForm.errors.clear("batch_id")},remove:t.onBatchRemove},model:{value:t.selected_batch,callback:function(e){t.selected_batch=e},expression:"selected_batch"}},[t.batches.length?t._e():s("div",{staticClass:"multiselect__option",attrs:{slot:"afterList"},slot:"afterList"},[t._v("\n\t\t\t\t\t\t                            "+t._s(t.trans("general.no_option_found"))+"\n\t\t\t\t\t\t                        ")])]),t._v(" "),s("show-error",{attrs:{"form-name":t.imageForm,"prop-name":"batch_id"}})],1)])]),t._v(" "),t.imageForm.students.length?s("div",t._l(t.imageForm.students,(function(e){return s("div",{key:e.id},[s("h4",[t._v(t._s(e.name))]),t._v(" "),s("upload-image",{attrs:{id:e.id+"_photo","upload-path":"/student/self/photo/"+e.uuid,"remove-path":"/student/self/photo/remove/"+e.uuid,"image-source":e.photo},on:{uploaded:t.updatePhoto,removed:t.updatePhoto}})],1)})),0):t._e()])])])])])]),t._v(" "),s("right-panel",{attrs:{topic:t.help_topic}})],1)}),[],!1,null,null,null);e.default=i.exports}}]);
//# sourceMappingURL=index.js.map?id=c3a9ca37e206678c1a7a