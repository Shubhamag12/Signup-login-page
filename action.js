$(document).ready(function(){
    $("#Signup_btn").click(function(){
        $("#main1").animate({left:"22.5%"},300);
        $("#main1").animate({left:"30%"},500);

        $("#login-form1").css("visibility","hidden");
        $("#login-form1").animate({left:"30%"},400);

        $("#Signup-form1").css("visibility","visible");
        $("#Signup-form1").animate({left:"23%"},400);
        $("#Signup-form1").animate({left:"30%"},500);        
    });
});

$(document).ready(function(){
    $("#login_btn").click(function(){
        $("#main1").animate({left: "77.5%"}, 400);
        $("#main1").animate({left: "70%"}, 500);

        $("#login-form1").css("visibility","visible");
        $("#login-form1").animate({left:"83.5%"},400);
        $("#login-form1").animate({left:"70%"},500);

        $("#Signup-form1").css("visibility","hidden");
        $("#Signup-form1").animate({left:"75%"},400);

    });
});