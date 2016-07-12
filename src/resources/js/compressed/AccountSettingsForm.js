!function(a){Craft.AccountSettingsForm=Garnish.Base.extend({userId:null,isCurrent:null,$copyPasswordResetUrlBtn:null,$actionSpinner:null,currentPasswordModal:null,$lockBtns:null,$currentPasswordInput:null,$currentPasswordSpinner:null,afterVerifyPassword:null,currentPassword:null,confirmDeleteModal:null,$deleteBtn:null,init:function(b,c){this.userId=b,this.isCurrent=c,this.$lockBtns=a(".btn.lock"),this.$copyPasswordResetUrlBtn=a("#copy-passwordreset-url"),this.$actionSpinner=a("#action-spinner"),this.$deleteBtn=a("#delete-btn"),this.addListener(this.$lockBtns,"click","showCurrentPasswordForm"),this.addListener(this.$copyPasswordResetUrlBtn,"click","getPasswordResetUrl"),this.addListener(this.$deleteBtn,"click","showConfirmDeleteModal")},showCurrentPasswordForm:function(){if(this.currentPasswordModal)this.currentPasswordModal.show();else{var b="";b=this.isCurrent?Craft.t("Please enter your current password."):Craft.t("Please enter your password.");var c=a('<form id="verifypasswordmodal" class="modal fitted"/>').appendTo(Garnish.$bod),d=a('<div class="body"><p>'+b+"</p></div>").appendTo(c),e=a('<div class="passwordwrapper"/>').appendTo(d),f=a('<div class="buttons right"/>').appendTo(d),g=a('<div class="btn">'+Craft.t("Cancel")+"</div>").appendTo(f);a('<input type="submit" class="btn submit" value="'+Craft.t("Continue")+'" />').appendTo(f);this.$currentPasswordInput=a('<input type="password" class="text password fullwidth"/>').appendTo(e),this.$currentPasswordSpinner=a('<div class="spinner hidden"/>').appendTo(f),this.currentPasswordModal=new Garnish.Modal(c,{onHide:a.proxy(function(){this.afterVerifyPassword=null},this)}),new Craft.PasswordInput(this.$currentPasswordInput,{onToggleInput:a.proxy(function(a){this.$currentPasswordInput=a},this)}),this.addListener(g,"click",function(){this.currentPasswordModal.hide()}),this.addListener(c,"submit","submitCurrentPassword")}
// Auto-focus the password input
Garnish.isMobileBrowser(!0)||setTimeout(a.proxy(function(){this.$currentPasswordInput.focus()},this),100)},submitCurrentPassword:function(b){b.preventDefault();var c=this.$currentPasswordInput.val();if(c){this.$currentPasswordSpinner.removeClass("hidden");var d={password:c};Craft.postActionRequest("users/verify-password",d,a.proxy(function(b,d){if(this.$currentPasswordSpinner.addClass("hidden"),"success"==d)if(b.success){this.currentPassword=c,a('<input type="hidden" name="password"/>').val(c).appendTo("#userform");var e=a("#newPassword");a("#email").add(e).removeClass("disabled").removeAttr("disabled"),this.$lockBtns.remove(),new Craft.PasswordInput(e),this.afterVerifyPassword&&this.afterVerifyPassword(),this.currentPasswordModal.hide()}else Garnish.shake(this.currentPasswordModal.$container)},this))}},getPasswordResetUrl:function(){
// Make sure they've entered their password first
if(!this.currentPassword)return this.afterVerifyPassword=a.proxy(this,"getPasswordResetUrl"),void this.showCurrentPasswordForm();this.$actionSpinner.removeClass("hidden");var b={password:this.currentPassword,userId:this.userId};Craft.postActionRequest("users/get-password-reset-url",b,a.proxy(function(a,b){if(this.$actionSpinner.addClass("hidden"),"success"==b){var c=Craft.t("{ctrl}C to copy.",{ctrl:navigator.appVersion.indexOf("Mac")?"⌘":"Ctrl-"});prompt(c,a)}},this))},showConfirmDeleteModal:function(){this.confirmDeleteModal?this.confirmDeleteModal.show():this.confirmDeleteModal=new Craft.DeleteUserModal(this.userId)}})}(jQuery);
//# sourceMappingURL=AccountSettingsForm.js.map