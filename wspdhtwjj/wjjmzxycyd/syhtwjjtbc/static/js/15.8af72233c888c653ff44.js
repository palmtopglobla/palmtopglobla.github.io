webpackJsonp([15],{Olj2:function(e,t){},iwRY:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top"}},[r("el-form-item",{attrs:{prop:"prices",label:"USDT数量",rules:{required:!0,message:"prices不能为空"}}},[r("el-input",{attrs:{placeholder:e.placeholder,type:"number"},model:{value:e.form.prices,callback:function(t){e.$set(e.form,"prices",t)},expression:"form.prices"}},[r("template",{slot:"append"},[e._v("USDT")])],2)],1),e._v(" "),r("el-form-item",{staticClass:"bottomButton"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var o=r("VU/8")({data:function(){return{placeholder:"",form:{prices:""}}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.Global.counterManagerState.methods.dlv1Prices().call(function(t,r){t||(e.placeholder=e.web3.utils.fromWei(r,"mwei"))})},submit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.Global.counterManager.methods.SetDLevel1Prices(e.web3.utils.toWei(e.form.prices,"mwei")).send({from:e.address}).on("transactionHash",function(t){e.$refs.form.resetFields(),e.$notify({title:"成功",message:"交易已发送",type:"success"})}).on("error",function(t){e.$notify.error({title:"错误",message:"交易失败"})}).on("receipt",function(t){e.init(),e.$notify({title:"成功",message:"设置成功",type:"success"})})})}}},i,!1,function(e){r("Olj2")},null,null);t.default=o.exports}});