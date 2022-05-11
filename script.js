$(window).on("load", start);

function start(){
    $("body").css("background-color", "#FDC9CC");
    $("ul.nav a:first").click()
}


$("#menu_NEWIN").click(openNEWIN);

function openNEWIN(){
	$("#menu a").removeClass("active");
	$(this).addClass("active");
	$("#content_NEWIN").siblings().hide();
	$("#content_NEWIN").show();
}

$("#menu_EXPLORE").click(openEXPLORE);

function openEXPLORE(){
	$("#menu a").removeClass("active");
	$(this).addClass("active");
	$("#content_EXPLORE").siblings().hide();
	$("#content_EXPLORE").show();
}

$("#menu_LOOKBOOK").click(openLOOKBOOK);

function openLOOKBOOK(){
	$("#menu a").removeClass("active");
	$(this).addClass("active");
	$("#content_LOOKBOOK").siblings().hide();
	$("#content_LOOKBOOK").show();
}


$("#menu_home").click();