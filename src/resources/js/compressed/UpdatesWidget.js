!function(a){Craft.UpdatesWidget=Garnish.Base.extend({$widget:null,$body:null,$btn:null,checking:!1,init:function(b,c){this.$widget=a("#widget"+b),this.$body=this.$widget.find(".body:first"),this.initBtn(),c||this.checkForUpdates(!1)},initBtn:function(){this.$btn=this.$body.find(".btn:first"),this.addListener(this.$btn,"click",function(){this.checkForUpdates(!0)})},lookLikeWereChecking:function(){this.checking=!0,this.$widget.addClass("loading"),this.$btn.addClass("disabled")},dontLookLikeWereChecking:function(){this.checking=!1,this.$widget.removeClass("loading")},checkForUpdates:function(b){this.checking||(this.lookLikeWereChecking(),Craft.cp.checkForUpdates(b,a.proxy(this,"showUpdateInfo")))},showUpdateInfo:function(a){if(this.dontLookLikeWereChecking(),a.total){var b;b=1==a.total?Craft.t("One update available!"):Craft.t("{total} updates available!",{total:a.total}),this.$body.html('<p class="centeralign">'+b+' <a class="go nowrap" href="'+Craft.getUrl("updates")+'">'+Craft.t("Go to Updates")+"</a></p>")}else this.$body.html('<p class="centeralign">'+Craft.t("Congrats! You’re up-to-date.")+'</p><p class="centeralign"><a class="btn" data-icon="refresh">'+Craft.t("Check again")+"</a></p>"),this.initBtn();
// Update the CP header badge
Craft.cp.displayUpdateInfo(a)}})}(jQuery);
//# sourceMappingURL=UpdatesWidget.js.map