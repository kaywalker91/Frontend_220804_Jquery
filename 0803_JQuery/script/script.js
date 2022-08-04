$(document).ready(function(){

    for(i=1;i<10;i++){
        $("#jiho"+i).text(i);
    }
    
    $("#jiho"+1).click(function(){
        $("#jiho"+1).hide();
    });
    
    $(".aaa").click(function(){
        $(this).hide(); // 여러개의 클래스중 선택된 클래스만 호출한다.
    });

    $("#county").change(function(){
        var sel = $(this).val();
        $("#s_county").text(sel);
    });

    $("#btn1").dblclick(function(){
        alert("누르지말랬자나");
    });

    $("#btn1").focus(function(){
        $(this).css("background-color","red");
    });

    $("#btn1").blur(function(){
        $(this).css("background-color","#fff");
    });

    $("#text1").keyup(function(){
        var len = $(this).val().length;
        $("#textlen>span").text(len);
        if(len>250){
            alert("250자를 초과하였습니다.");
        }
    });

    $("#btn1").mouseenter(function(){
        $(this).text("훠이~");
    });

    $("#btn1").mouseleave(function(){
        $(this).text("누르지마시오.");
    });

    $("#btn2").click(function(){
        if($("#active").is(":checked")){
            alert("체크됨");
        }
    });

    $("#btn4").click(function(){
       $("#box1").fadeOut();
    });

     function winchk(){
        var w = $(this).width();
        var h = $(this).height();
        $("#winSize").text(w + "," + h);
     }

     $(window).resize(function(){
        winchk();
     });

     winchk();

     $(document).scroll(function(){
        $("#box1").append("ㅁ");
     });

     $(document).scroll(function(){
        var scrH = $(document).scrollTop();
        scrH = parseInt(scrH);
        if(scrH>0){
            $("#box2").css("background-color","yellow");
        }else{
            $("#box2").css("background-color","green");
        }
     });

     $("#login_btn").click(function(){
        var idlen = $("#userid").val().length;
        var pwlen = $("#userpw").val().length;
        if(idlen * pwlen == 0){
            alert("아이디나 비밀번호를 입력해주세요!");
        }else{
            $("#login_form").submit();
        }
     });

     $("#userpw").keydown(function(){
       if(event.keyCode == 13){
        $("#login_btn").trigger("click");
       }
     });

     $(document).mousemove(function(event){
        var x = event.clientX;
        var y = event.clientY;
        $("#starbucks").css({
            left: x+"px",top: y+"px"
        });       
     });

 
});

