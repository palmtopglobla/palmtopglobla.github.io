webpackJsonp([7],{lKeC:function(e,t){},p7h9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","label-position":"top"}},[i("el-form-item",{attrs:{prop:"key",label:"key",rules:{required:!0,message:"key不能为空"}}},[i("el-select",{attrs:{placeholder:"--请选择--"},on:{change:e.selectOption},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}},e._l(e.options,function(e,t){return i("el-option",{key:t,attrs:{label:e.title,value:t}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{prop:"value",label:"value",rules:{required:!0,message:"value不能为空"}}},[i("el-input",{attrs:{placeholder:e.placeholder,type:"number"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}},[i("template",{slot:"append"},[e._v(e._s(e.unit))])],2)],1),e._v(" "),i("el-form-item",{staticClass:"bottomButton"},[i("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var l=i("VU/8")({data:function(){return{unit:"天",placeholder:"",form:{key:"",value:""},options:[{title:"订单创建以后，初始等待时间",unit:"天"},{title:"订单支付倒计时持续时间",unit:"天"},{title:"冻结期（收益期）最小周期时间",unit:"天"},{title:"冻结期（收益期）最大周期时间",unit:"天"},{title:"P1阶段每日收益率",unit:"szabo"},{title:"P2阶段总收益",unit:"szabo"},{title:"订单创建间隔时间",unit:"天"},{title:"每次参与后额度增量",unit:"mwei"},{title:"订单最小额度限制",unit:"mwei"},{title:"订单最大额度限制",unit:"mwei"},{title:"订单最小支付比例",unit:"szabo"},{title:"订单金额倍数整除因数",unit:"mwei"},{title:"订单获得帮助时候，需要支付的DT手续费比例",unit:"szabo"},{title:"DT手续费和USDT之间的比例",unit:"microether"},{title:"每日全网挂单总额度上限限制",unit:"mwei"},{title:"黑名单解封需要支付的手续费数量",unit:"ether"}],units:{"天":"天",szabo:"%",mwei:"USDT",ether:"DT",microether:"USDT"}}},methods:{selectOption:function(e){var t=this;this.unit=this.units[this.options[e].unit],this.Global.config.methods.GetConfigValue(e).call(function(i,o){if(!i)switch(t.unit){case"天":t.placeholder=t.$format(o);break;case"%":var l=t.web3.utils.fromWei(o,"szabo");t.placeholder=""+100*l;break;default:t.placeholder=t.web3.utils.fromWei(o,t.options[e].unit)}})},submit:function(e){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;var i="";switch(t.unit){case"天":i=t.$format(t.form.value,"秒");break;case"%":i=t.web3.utils.toWei(""+t.form.value/100,"szabo");break;default:i=t.web3.utils.toWei(t.form.value,t.options[t.form.key].unit)}t.Global.config.methods.SetConfigValue(t.form.key,i).send({from:t.address}).on("transactionHash",function(e){t.$refs.form.resetFields(),t.placeholder="",t.$notify({title:"成功",message:"交易已发送",type:"success"})}).on("error",function(e){t.$notify.error({title:"错误",message:"交易失败"})}).on("receipt",function(e){t.$notify({title:"成功",message:"设置成功",type:"success"})})})}}},o,!1,function(e){i("lKeC")},"data-v-9c1c3818",null);t.default=l.exports}});