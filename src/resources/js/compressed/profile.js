!function(a){function b(b){"undefined"!=typeof b.html&&(a(".user-photo").replaceWith(b.html),a("#user-photo > img").replaceWith(a("#current-photo > img").clone()),c())}function c(){
// These change dynamically after each HTML overwrite, so we can't have them in the initial settings array.
e.uploadButton=a(".user-photo-controls .upload-photo"),e.deleteButton=a(".user-photo-controls .delete-photo"),d=new Craft.ImageUpload(e)}var d=null,e={postParameters:{userId:a(".user-photo").attr("data-user")},modalClass:"profile-image-modal",uploadAction:"users/upload-user-photo",deleteMessage:Craft.t("Are you sure you want to delete this photo?"),deleteAction:"users/delete-user-photo",cropAction:"users/crop-user-photo",areaToolOptions:{aspectRatio:"1",initialRectangle:{mode:"auto"}},onImageSave:function(a){b(a)},onImageDelete:function(a){b(a)}};
// Only init for existing users.
a("input[name=userId]").val()&&c()}(jQuery);
//# sourceMappingURL=profile.js.map