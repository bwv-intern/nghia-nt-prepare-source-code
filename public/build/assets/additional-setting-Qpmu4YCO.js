$.fn.extend({trackChanges:function(){$(this).data("serialize",$(this).serialize())},isChanged:function(){return $(this).serialize()!=$(this).data("serialize")},preventDoubleSubmission:function(){return $(this).on("submit",function(t){var a=$(this);a.data("submitted")===!0?t.preventDefault():a.valid()&&a.data("submitted",!0)}),this}});$.fn.timepicker&&$.extend($.fn.timepicker.defaults,{showMeridian:!1,defaultTime:!1});$.extend(jQuery.validator,{messages:{required:function(t,a){return $.validator.format("{0}は必須項目です。",[$(a).data("label")])},maxlength:function(t,a){return $.validator.format("{0}は「{1}」文字以下で入力してください。（現在{2}文字）",[$(a).data("label"),t,$(a).val().length])},minlength:function(t,a){return $.validator.format("{0}は「{1}」文字以上で入力してください。（現在{2}文字）",[$(a).data("label"),t,$(a).val().length])},checkNumeric:function(t,a){return $.validator.format("{0}は半角数字で入力してください。",[$(a).data("label")])},checkKatakana2ByteAndCharacter:function(t,a){return $.validator.format("{0}は全角カナで入力してください。",[$(a).data("label")])},checkCapital1Byte:function(t,a){return $.validator.format("{0}は半角英大文字で入力してください。",[$(a).data("label")])},date_month:function(t,a){return $.validator.format("{0}は年月を正しく入力してください。",[$(a).data("label")])},greaterThanDate:$.validator.format("{0}は{1}以降の日時を選択してください。"),lessThanDate:$.validator.format("{0}は{1}以降の日時を選択してください。"),checkExceedMonthByFromTo:$.validator.format("{0}と{1}は24ヶ月以内に設定してください。"),checkHiragana2Byte:function(t,a){return $.validator.format("{0}は全角ひらがなで入力してください。",[$(a).data("label")])},checkValidEmailRFC:function(t,a){return $.validator.format("メールアドレスを正しく入力してください。")},checkCharacterlatin:function(t,a){return $.validator.format("{0}は半角英数で入力してください。",[$(a).data("label")])},passwordEqualTo:$.validator.format("新しいパスワードと確認用パスワードが一致しません。"),checkKatakana2Byte:function(t,a){return $.validator.format("{0}は全角カナで入力してください。",[$(a).data("label")])},checkDateOfBirth:$.validator.format("未成年(18歳未満の方)は申込することができません。"),checkCustomerUnique:$.validator.format("入力された内容と一致するアカウントが既に存在します。同一人物で複数のアカウントの作成は出来かねます。"),checkCustomerUniqueByMail:$.validator.format("入力されたメールアドレスは既に使用されています。別のメールアドレスを入力してください。"),checkAllExplainConfirmImportant:$.validator.format("重要事項は必ず説明を行なってください。"),checkExplainConfirmImportant:$.validator.format("上記いずれかの確認を必ず行ってください。"),checkCustomerCanceledContract:$.validator.format("一度解約された場合、同じ物件での再申し込みはできかねます。"),checkBuildingUnique:$.validator.format("入力された内容に一致する建物が既に存在します。同じ建物は複数登録できません。"),checkPasswordIsNotSameCustomerId:$.validator.format("パスワードとお客様IDが同じです。違うパスワードを入力してください。")}});$.validator.setDefaults({errorClass:"error-message",errorElement:"div",ignore:":hidden:not(.chosen-select)",onfocusout:function(t){this.element(t)},submitHandler:function(t){_common.showLoading(),t.submit()},errorPlacement:function(t,a){$(a).hasClass("chosen-select")?$(a).parent("div").append(t):t.insertAfter(a)}});$.validator.methods.minlength=function(t,a,r){var e=$.isArray(t)?t.length:s(t,a);return this.optional(a)||e>=r};$.validator.methods.maxlength=function(t,a,r){var e=$.isArray(t)?t.length:s(t,a);return this.optional(a)||e<=r};$.validator.methods.exactlength=function(t,a,r){var e=$.isArray(t)?t.length:s(t,a);return this.optional(a)||e===r};function s(t,a){if(a)switch(a.nodeName.toLowerCase()){case"select":return $("option:selected",a).length;case"input":if(m(a))return this.findByName(a.name).filter(":checked").length}var r=t.match(/\n/g),e=r?r.length:0;return t.length+e}function m(t){return/radio|checkbox/i.test(t.type)}var o=new Date("2200/12/31"),l=new Date("1700/01/01");$.validator.methods.date=function(t,a,r){var e=new Date(t);return t==""||moment(t,"YYYY/MM/DD",!0).isValid()&&l<=e&&e<=o};$.validator.addMethod("datetime",function(t,a,r){var e=new Date(t);return t==""||moment(t,"YYYY/MM/DD H:mm:ss",!0).isValid()&&l<=e&&e<=o||moment(t,"YYYY/MM/DD H:mm",!0).isValid()&&l<=e&&e<=o||moment(t,"YYYY/MM/DD",!0).isValid()&&l<=e&&e<=o});$.validator.addMethod("date_time",function(t,a,r){return t==""||moment(t,"YYYY/MM/DD H:mm:ss",!0).isValid()||moment(t,"YYYY/MM/DD H:mm",!0).isValid()});$.validator.addMethod("date_month",function(t,a,r){return t==""||moment(t,"YYYY/MM",!0).isValid()||moment(t,"YYYY/MM",!0).isValid()});$.validator.addMethod("futureDate",function(t,a,r){return t.length>0&&moment().startOf("date").isSameOrBefore(moment(t,"YYYY/MM/DD"))});$.validator.addMethod("latin",function(t,a){return this.optional(a)||/^[a-zA-Z0-9~`!@#$%^&*()-_=+<>?,./:;"'{}]*$/.test(t)});$.validator.addMethod("mail_valid",function(t,a,r){if($(r).val()!=""&&t==""||$(r).val()==""&&t!="")return!1;var e=$(r).val().concat("@");return e=e.concat(t),this.optional(a)||/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i.test(e)});$.validator.addMethod("filesize",function(t,a,r){return this.optional(a)||a.files[0].size<=r*1024*1024});$.validator.addMethod("fixedFileSize",function(t,a,r){return t?this.optional(a)||a.files[0].size<=10*1024*1024:!0});$.validator.addMethod("check2Byte",function(t,a){return t.length>0?t.match(/^[^\x01-\x7E\xA1-\xDF]+$/)?!t.match(/^[ｱ-ﾝﾞﾟｧ-ｫｬ-ｮｰ｡｢｣､]+$/):!1:!0});$.validator.addMethod("check2ByteHfS",function(t,a){for(var r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e>=65377&&e<=65439)return!1;if(!(e>=19968&&e<=40911||e>=13312&&e<=19903||e>=131072&&e<=173791||e>=63744&&e<=64223||e>=194560&&e<=195103||e>=12448&&e<=12543||e>=12352&&e<=12447||e==32||e==12288||e>=65280&&e<=65520))return!1}return!0});$.validator.addMethod("rangeEmail",function(t,a,r){//!#$%&'*+-/=?^_`{|}~.
return this.optional(a)||/^[0-9a-zA-Z\#\!\$\%\(\)\*\+\-\.\/\:\;\?\'\=\`\|\&\@\^\[\]\_\{\}\~]{6,75}$/i.test(t)});$.validator.addMethod("checkKanji",function(t,a){for(var r=0;r<t.length;r++){var e=t.charCodeAt(r);if(!(e>=19968&&e<=40911||e>=13312&&e<=19903||e>=131072&&e<=173791||e>=63744&&e<=64223||e>=194560&&e<=195103||e>=12448&&e<=12543||e>=12352&&e<=12447))return!1}return!0});$.validator.addMethod("checkKatakana",function(t,a){for(var r=0;r<t.length;r++){var e=t.charCodeAt(r);if(!(e>=12448&&e<=12543||e==32||e==12288))return!1}return!0});$.validator.addMethod("checkKatakanaV2",function(t,a){for(var r=0;r<t.length;r++){var e=t.charCodeAt(r);if(!(e>=12448&&e<=12543||e==32||e==12288||e==65288||e==65289))return!1}return!0});$.validator.addMethod("checkKatakana1Byte2Byte",function(t,a){var r=!0;return t.length>0&&(r=!!t.match(/^[\uFF65-\uFF9F\u30A0-\u30FF.\)\(\/\-\　]+$/)),r});$.validator.addMethod("checkKatakana2ByteAndCharacter",function(t,a){var r=!0;return t.length>0&&(r=!!t.match(/^[\u30A0-\u30FF]+$/)),r});$.validator.addMethod("checkCharacterlatin",function(t,a){return this.optional(a)||/^[a-zA-Z0-9]*$/.test(t)});$.validator.addMethod("checkAlphabet",function(t,a){return this.optional(a)||/^[a-zA-Z]*$/.test(t)});$.validator.addMethod("checkNumeric",function(t,a){return this.optional(a)||/^[0-9]*$/.test(t)});$.validator.addMethod("digitsCustom",function(t,a){return this.optional(a)||/^[0-9-]*$/.test(t)});$.validator.addMethod("checkValidEmailRFC",function(t,a){var r=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),e=/^[a-zA-Z0-9~`!@#$%^&*()-_=+<>?,./:;"'{}]*$/.test(t);return this.optional(a)||r.test(t)&&e});$.validator.addMethod("mail_valid_RFC",function(t,a,r){if($(r).val()!=""&&t==""||$(r).val()==""&&t!="")return!1;var e=$(r).val().concat("@");e=e.concat(t);var n=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),i=/^[a-zA-Z0-9~`!@#$%^&*()-_=+<>?,./:;"'{}]*$/.test(e);return this.optional(a)||n.test(e)&&i});$.validator.addMethod("greaterThanDate",function(t,a,r){return $(r).val().length>0&&t.length>0?/Invalid|NaN/.test(new Date(t))?isNaN(t)&&isNaN($(r).val())||Number(t)>Number($(r).val()):(new Date(t)<=new Date($(r).val())&&$(r).hasClass("error-message")&&($(r).removeClass("error-message"),$(r).next().remove()),new Date(t)<=new Date($(r).val())):!0});$.validator.addMethod("greaterThanDateUpgrade",function(t,a,r){return $(r).val().length>0&&t.length>0&&moment(t,"YYYY/MM/DD",!0).isValid()&&moment($(r).val(),"YYYY/MM/DD",!0).isValid()?(new Date(t)<=new Date($(r).val())&&$(r).hasClass("error-message")&&($(r).removeClass("error-message"),$(r).next().remove()),new Date(t)<=new Date($(r).val())):!0});$.validator.addMethod("lessThanDate",function(t,a,r){return $(r).val().length>0&&t.length>0&&moment(t,"YYYY/MM/DD",!0).isValid()&&moment($(r).val(),"YYYY/MM/DD",!0).isValid()?(new Date(t)>=new Date($(r).val())&&$(r).hasClass("error-message")&&($(r).removeClass("error-message"),$(r).next().remove()),new Date(t)>=new Date($(r).val())):!0});$.validator.addMethod("checkCapital1Byte",function(t,a){return this.optional(a)||/^[A-Z]*$/.test(t)});$.validator.addMethod("checkExceedMonthByFromTo",function(t,a,r){var e=25;typeof $(a).data("exceed-month")<"u"&&(e=$(a).data("exceed-month"));const n=$(r).val();if(n.length>0&&t.length>0&&moment(n,"YYYY/MM",!0).isValid()&&moment(t,"YYYY/MM",!0).isValid()){const i=moment(n,"YYYY/MM").diff(moment(t,"YYYY/MM"),"months",!0);return!(Math.abs(i)>=e)}return!0});$.validator.addMethod("checkHiragana2Byte",function(t,a){for(let r=0;r<t.length;r++){let e=t.charCodeAt(r);if(!(e>=12352&&e<=12447))return!1}return!0});$.validator.addMethod("checkKatakana2Byte",function(t,a){var r=!0;return t.length>0&&(r=!!t.match(/^[・\u30a0-\u30ff　]*$/)),r});$.validator.addMethod("checkDateOfBirth",function(t,a){var e=$(".datedd-year").val(),n=$(".datedd-month").val(),i=$(".datedd-day").val();if(moment(t,"YYYY/MM/DD",!0).isValid()){var d=t.split("/");e=d[0],n=d[1],i=d[2]}if(e!=""&&n!=""&&i!=""){var h=new Date;h.setFullYear(e,n-1,i);var f=new Date;return f.setFullYear(f.getFullYear()-18),f>=h}return!0});
