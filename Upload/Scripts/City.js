



var imageUrl = "Image/GetBase64Image";
var imgs = null;
 
$(document).ready(function () {
    if ($.browser.msie) {
        var browserMsg
             = "Your browser does not support Base64 image"
        $("#divBrowserInfo").html(browserMsg);
 
        $("#btnClearImage").attr("disabled", true);
        $("#btnLoadImage").attr("disabled", true);
    }
 
    var displayImage = function (base64Data) {
        var imag = "<img "
                 + "src='" + "data:image/jpg;base64,"
                 + base64Data + "'/>";
 
        $("#divImageHolder").html(imag)
    };
 
    $("#btnLoadImage").click(function () {
        if (imgs != null) {
            displayImage(imgs.base64imgage);
            return;
        }
 
        $.ajax({
            cache: false,
            type: "GET",
            url: imageUrl,
            contentType: 'application/json',
            dataType: "json",
            success: function (data) {
                imgs = data;
                displayImage(imgs.base64imgage);
            },
            error: function (xhr) {
                alert("Error occurred while loading the image. "
                    + xhr.responseText);
            }
        });
    });
 
    $("#btnClearImage").click(function () {
        $("#divImageHolder").html("");
    });
});







//var CityController =
//{

//    init: function () {
//        CityController.setForm();
//    },

//    setForm: function () {
//        var form = document.querySelector('form');
//        form.addEventListener('submit', function (event) {
//            CityController.getData(form);
//            //it is necessary to avoid form submition
//            event.preventDefault();
//        });
//    },

//    getData: function(form)
//    {
//        var
//            name = form.name.value,
//            description = form.description.value,
//            file = $('#file').val();
//        alert(file);
//        CityController.convertBase64();
//    },

//    convertBase64: function()
//    {
//        var file = $j(fileUpload.toString()).attr('files')[0];
//        var encoded = Btoa(file);
//        console.log("Codificado: " + encoded);
//    }
//};

////var handleFileSelect = function (evt)
////{
////    var files = evt.target.files;
////    var file = files[0];

////    if (files && file) {
////        var reader = new FileReader();

////        reader.onload = function (readerEvt) {
////            var binaryString = readerEvt.target.result;
////            document.getElementById("base64textarea").value = btoa(binaryString);
////        };

////        reader.readAsBinaryString(file);
////    }
////}

////initialization
//CityController.init();