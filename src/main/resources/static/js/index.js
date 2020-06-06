screencenter();
function screencenter(){
    $("#app").css("height",$(window).height()+"px");
}
$(function () {
    $(window).resize(function () {
        screencenter();
    });
});


/**************************************************************************************/

/*初始化*/
/*var options ={
    //设置裁剪框的比例
    aspectRatio:1.4,
    //视图模式
    viewMode:3,
    //开启预览
    preview:'.preview_img',
    //拖拽模式
    dragMode:"move",
    //双击时dragMode属性是否可以在“crop”和“move”之间切换拖拽模式，
    toggleDragModeOnDblclick:true,

    //在调整窗口大小的时候重新渲染cropper
    responsive: false,
    //在调整窗口大小后恢复裁剪的区域。
    restore:false,
    //检查当前图片是否为跨域图片
    checkCrossOrigin:false,

    //显示图片上方的黑色框
    modal:true,
    //显示在裁剪框上方的虚线。
    guides:true,

    //选中区域亮色处理
    highlight:true,
    //显示容器网格背景就是那个马赛克
    background:true,

    //裁剪框在图片正中心
    center: true,
    //当初始化时，自动显示裁剪框
    autoCrop: true,
    //是否通过拖拽来移动剪裁框。
    cropBoxMovable:true,
    //是否通过拖动来调整剪裁框的大小。
    cropBoxResizable:false,

    //初始化时定义自动裁剪面积大小(百分比)和图片进行对比。默认0.8
    autoCropArea:0.8,
    //是否允许可以移动后面的图片
    movable: true,
    //是否允许旋转图像
    rotatable: true,
    //是否允许缩放图像。(没什么用)
    scalable:true,
    //是否允许缩放图像
    zoomable:false,
    //是否可以通过拖动触摸来放大图像。（移动端）
    zoomOnTouch:true,

    //是否可以通过移动鼠标来放大图像。
    zoomOnWheel:true,
    //用鼠标移动图像时，定义缩放比例。默认为1
    wheelZoomRatio:1.0,

    //容器的最小宽高度。默认为200,100
    minContainerWidth:200,
    minContainerHeight:100,
    //canvas的最小宽高度。默认为0
    minCanvasWidth:0,
    minCanvasHeight:0,
    //设置裁剪层的最小宽高度。默认为0
    minCropBoxWidth:0,
    minCropBoxHeight:0,

    //函数部分
    //插件准备完成执行的函数
    ready: function (e) {
        console.log("一切准备就绪"+e);
        /!*设置默认裁剪规格为1寸*!/
        //设置宽高比
        $('#img').cropper('setAspectRatio',1.4);
        //设置大小
        var op = {
            width:413
        };
        $('#img').cropper('setData',op);
        console.log($('#img').cropper('getData'));
    },

    //剪裁框开始移动执行的函数。
    cropstart:function (e) {
        console.log("裁剪框开始移动"+e);
    },
    //剪裁框移动时执行的函数。
    cropmove:function (e) {
        console.log("裁剪框正在移动"+e);
    },
    //剪裁框移动结束执行的函数。
    cropend:function (e) {
        console.log("裁剪框移动结束了"+e);
    },
    //剪裁框发生变化执行的函数。
    crop:function (e) {
        // console.log("裁剪框发生变化了")
    }

}*/
$("#img").cropper({
    //设置裁剪框的比例
    aspectRatio:1.4,
    //视图模式
    viewMode:1,
    //开启预览
    preview:'.preview_img',
    //拖拽模式
    dragMode:"move",
    //双击时dragMode属性是否可以在“crop”和“move”之间切换拖拽模式，
    toggleDragModeOnDblclick:true,

    //在调整窗口大小的时候重新渲染cropper
    responsive: true,
    //在调整窗口大小后恢复裁剪的区域。
    restore:true,
    //检查当前图片是否为跨域图片
    checkCrossOrigin:false,

    //显示图片上方的黑色框
    modal:true,
    //显示在裁剪框上方的虚线。
    guides:true,

    //选中区域亮色处理
    highlight:true,
    //显示容器网格背景就是那个马赛克
    background:true,

    //裁剪框在图片正中心
    center: true,
    //当初始化时，自动显示裁剪框
    autoCrop: true,
    //是否通过拖拽来移动剪裁框。
    cropBoxMovable:true,
    //是否通过拖动来调整剪裁框的大小。
    cropBoxResizable:false,

    //初始化时定义自动裁剪面积大小(百分比)和图片进行对比。默认0.8
    autoCropArea:0.8,
    //是否允许可以移动后面的图片
    movable: true,
    //是否允许旋转图像
    rotatable: true,
    //是否允许缩放图像。(没什么用)
    scalable:true,
    //是否允许缩放图像
    zoomable:false,
    //是否可以通过拖动触摸来放大图像。（移动端）
    zoomOnTouch:true,

    //是否可以通过移动鼠标来放大图像。
    zoomOnWheel:true,
    //用鼠标移动图像时，定义缩放比例。默认为1
    wheelZoomRatio:1.0,

    //容器的最小宽高度。默认为200,100
    minContainerWidth:200,
    minContainerHeight:100,
    //canvas的最小宽高度。默认为0
    minCanvasWidth:0,
    minCanvasHeight:0,
    //设置裁剪层的最小宽高度。默认为0
    minCropBoxWidth:0,
    minCropBoxHeight:0,

    //函数部分
    //插件准备完成执行的函数
    ready: (e)=> {
        console.log("一切准备就绪"+e);
        //获取到当前的规格然后设置规格 在cropper加载完成之后，如果设置尺寸失败就讲图片替换成默认的
        if (!user.setGuige_now(user.guige_now)){
            user.img_now = "img/default_img.jpg";
            $('#img').cropper('replace', "img/default_img.jpg", false);
        };
    },

    //剪裁框开始移动执行的函数。
    cropstart:function (e) {
        // console.log("裁剪框开始移动"+e);
    },
    //剪裁框移动时执行的函数。
    cropmove:function (e) {
        // console.log("裁剪框正在移动"+e);
    },
    //剪裁框移动结束执行的函数。
    cropend:function (e) {
        // console.log("裁剪框移动结束了"+e);
    },
    //剪裁框发生变化执行的函数。
    crop:function (e) {
        // console.log("裁剪框发生变化了")
    }

});

//在初始化之后获取crope .js实例
var cropper = $("#img").data("cropper");

function ImgInputFileChanged(e) {
    //读取上传的文件
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    //读取完成时
    reader.onloadend = (e) => {
        user.img_now = e.target.result;
        //替换预览中的图片
        $('#img').cropper('replace', e.target.result, false);
    };
    //将上传图片的表单置空
    $("#input-img").val("");
    // console.log($("#input-img").val());
}

 class User{

     /*构造器*/
     constructor() {

     }
     /*属性*/
     //姓名
     name = $("input[name='username']").val();
     // 电话
     tel = $("input[name='tel']").val();
     //QQ
     qq = $("input[name='qq']").val();
     //规格   第一位为裁剪框的宽高比，第二位为裁剪框的宽
     img_guige = {
         one:[1.4,413,295],/*一寸*/
         idCard:[1.5,390,260],/*身份证大头照*/
         two:[626/413,626,413],/*两寸*/
         smallTwo:[567/390,567,390],/*小两寸（护照）*/
         teacher:[0.75,150,200],/*教资*/
         computer:[0.75,144,192]/*计算机考试*/
     };
     //当前规格
     guige_now = $("#sel1").val();
     //当前图片
     img_now = $("#img").attr("src");

     /*方法*/
     //设置姓名
     setName (name){
         this.name = name;
     };
     //设置电话
     setTel(tel){
         this.tel = tel;
     };
     //当前图片能否比配当前规格
     isMachGuige(guige){
         //当前图片的原始高宽度
         var imgNaturalHeight = $('#img').cropper('getImageData').naturalHeight;
         var imgNaturalWidth = $('#img').cropper('getImageData').naturalWidth;
         //即将改变的规格最低宽高
         var minWidth = this.img_guige[guige][1];
         var minHeight = this.img_guige[guige][2];
         //判断当前图片是否符合将要改变的尺寸
         if(minWidth < imgNaturalWidth && minHeight<imgNaturalHeight){
             return true;
         }
         return false;
     }
     //设置规格
     setGuige_now(guige){
         if (this.isMachGuige(guige)){
             this.guige_now = guige;
             //设置宽高比
             $('#img').cropper('setAspectRatio',this.img_guige[guige][0]);
             //设置大小
             var op = {
                 width:this.img_guige[guige][1]
             };
             $('#img').cropper('setData',op);
             return true;
         }
         else {
             alert("你选择的图片在该尺寸下太小了");
             $("#sel1").val(this.guige_now);
             return false;
         }
     };
     //上传
     uploadFile(){
         //用户名，电话，qq判空
         if (this.name==""){
             $("input[name='username']").css("border-color","red");
             return;
         }else if (this.tel==""){
             $("input[name='tel']").css("border-color","red");
             return;
         }else if (this.qq==""){
             $("input[name='qq']").css("border-color","red");
             return;
         }else {
             $("input").css("border-color","#ced4da");
         }

         var cas = $('#img').cropper('getCroppedCanvas');//获取被裁剪的画布
         var base64 = cas.toDataURL("image/jpeg");//转换为base64编码
         // console.log(base64);

         $.ajax({
             url:"http://localhost:8080/dreamcloud/img/uploid",
             type:"POST",
             data:{
                 "username" : this.name,
                 "tel": this.tel,
                 "qq":this.qq,
                 "file":base64
             },
             async:true,
             success:function (result) {
                // console.log(result);
                if (result.imgUpLoidStatus=="ok"&&result.infoStatus=="ok"){
                    alert("照片上传成功！管理员正在加急处理...");
                    window.location.reload();
                }
             },
             error:function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.status+","+textStatus+"请联系管理员");
             }
         })

     }

}
var user = new User();
//当文件组件法神改变时调用
$('#input-img').on("change",ImgInputFileChanged );

$("#getData").on("click",function () {
    console.log($('#img').cropper('getData'));
});

/*改变规格*/
$("#sel1").on("change",function () {
    var guige= $("#sel1").val();
    user.setGuige_now(guige);
});
/*监听姓名*/
$("input[name='username']").on("change",function () {
    user.name = $(this).val();
});
/*监听电话*/
$("input[name='tel']").on("change",function () {
    //先电话用正则校验
    var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    if (reg.test($(this).val())){
        user.tel = $(this).val();
    }else {
        $("input[name='tel']").val("");
        user.tel = $(this).val();
        $("input[name='tel']").attr("placeholder","请输入正确的电话号码");
    }
});
/*监听qq*/
$("input[name='qq']").on("change",function () {
    //先qq用正则校验
    var reg= /^[0-9]{5,11}$/;
    if (reg.test($(this).val())){
        user.qq = $(this).val();
    }else {
        $("input[name='qq']").val("");
        user.qq = $(this).val();
        $("input[name='qq']").attr("placeholder","请输入正确的QQ");
    }
});

/*监听上传*/
$("#uploadFile").on("click",function () {
    user.uploadFile();
});
