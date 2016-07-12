!function(a){var b=Garnish.Base.extend({$form:null,$loginNameInput:null,$loginFields:null,$passwordPaneItem:null,$passwordInput:null,$forgotPasswordLink:null,$rememberMeCheckbox:null,$sslIcon:null,$submitBtn:null,$spinner:null,$error:null,passwordInputInterval:null,forgotPassword:!1,loading:!1,init:function(){this.$form=a("#login-form"),this.$loginNameInput=a("#loginName"),this.$loginFields=a("#login-fields"),this.$passwordPaneItem=this.$loginFields.children(),this.$passwordInput=a("#password"),this.$forgotPasswordLink=a("#forgot-password"),this.$sslIcon=a("#ssl-icon"),this.$submitBtn=a("#submit"),this.$spinner=a("#spinner"),this.$rememberMeCheckbox=a("#rememberMe"),new Craft.PasswordInput(this.$passwordInput,{onToggleInput:a.proxy(function(a){this.removeListener(this.$passwordInput,"textchange"),this.$passwordInput=a,this.addListener(this.$passwordInput,"textchange","validate")},this)}),this.addListener(this.$loginNameInput,"textchange","validate"),this.addListener(this.$passwordInput,"textchange","validate"),this.addListener(this.$forgotPasswordLink,"click","onForgetPassword"),this.addListener(this.$form,"submit","onSubmit"),
// Super hacky!
this.addListener(this.$sslIcon,"mouseover",function(){this.$sslIcon.hasClass("disabled")||this.$submitBtn.addClass("hover")}),this.addListener(this.$sslIcon,"mouseout",function(){this.$sslIcon.hasClass("disabled")||this.$submitBtn.removeClass("hover")}),this.addListener(this.$sslIcon,"mousedown",function(){this.$sslIcon.hasClass("disabled")||(this.$submitBtn.addClass("active"),this.addListener(Garnish.$doc,"mouseup",function(){this.$submitBtn.removeClass("active"),this.removeListener(Garnish.$doc,"mouseup")}))}),
// Manually validate the inputs every 250ms since some browsers don't fire events when autofill is used
// http://stackoverflow.com/questions/11708092/detecting-browser-autofill
this.passwordInputInterval=setInterval(a.proxy(this,"validate"),250),this.addListener(this.$sslIcon,"click",function(){this.$submitBtn.click()})},validate:function(){return this.$loginNameInput.val()&&(this.forgotPassword||this.$passwordInput.val().length>=6)?(this.$sslIcon.enable(),this.$submitBtn.enable(),!0):(this.$sslIcon.disable(),this.$submitBtn.disable(),!1)},onSubmit:function(a){
// Prevent full HTTP submits
a.preventDefault(),this.validate()&&(this.$submitBtn.addClass("active"),this.$spinner.removeClass("hidden"),this.loading=!0,this.$error&&this.$error.remove(),this.forgotPassword?this.submitForgotPassword():this.submitLogin())},submitForgotPassword:function(){var b={loginName:this.$loginNameInput.val()};Craft.postActionRequest("users/send-password-reset-email",b,a.proxy(function(a,b){"success"==b&&(a.success?new c:this.showError(a.error)),this.onSubmitResponse()},this))},submitLogin:function(){var b={loginName:this.$loginNameInput.val(),password:this.$passwordInput.val(),rememberMe:this.$rememberMeCheckbox.prop("checked")?"y":""};return Craft.postActionRequest("users/login",b,a.proxy(function(a,b){"success"==b?a.success?window.location.href=a.returnUrl:(Garnish.shake(this.$form),this.onSubmitResponse(),
// Add the error message
this.showError(a.error)):this.onSubmitResponse()},this)),!1},onSubmitResponse:function(){this.$submitBtn.removeClass("active"),this.$spinner.addClass("hidden"),this.loading=!1},showError:function(b){b||(b=Craft.t("An unknown error occurred.")),this.$error=a('<p class="error" style="display:none">'+b+"</p>").insertAfter(a(".buttons",this.$form)),this.$error.velocity("fadeIn")},onForgetPassword:function(a){a.preventDefault(),Garnish.isMobileBrowser()||this.$loginNameInput.focus(),this.$error&&this.$error.remove();var b=parseInt(this.$form.css("margin-top")),c=this.$loginFields.height(),d=b+Math.round(c/2);this.$form.velocity({marginTop:d},"fast"),this.$loginFields.velocity({height:0},"fast"),this.$form.addClass("reset-password"),this.$submitBtn.addClass("reset-password"),this.$submitBtn.attr("value",Craft.t("Reset Password")),this.$submitBtn.enable(),this.$sslIcon.remove(),this.forgotPassword=!0,this.validate()}}),c=Garnish.Modal.extend({init:function(){var b=a('<div class="modal fitted email-sent"><div class="body">'+Craft.t("Check your email for instructions to reset your password.")+"</div></div>").appendTo(Garnish.$bod);this.base(b)},hide:function(){}});new b}(jQuery);
//# sourceMappingURL=login.js.map