$(".hidden_menu").click(function() {
	if ($(".hidden_menu_in").is(":visible")) {
		$(".hidden_menu_in").fadeOut("slow");
	} else {
		$(".hidden_menu_in").fadeIn("slow");
	};
});
$(".menu__button").click(function() {
	if ($(".menu__item").is(":visible")) {
		$(".menu__item").slideUp("slow");
	} else {
		$(".menu__item").slideDown("slow");
	};
});
$(".menu_lc_toggle").click(function() {
	if ($(".lc_drop").is(":visible")) {
		$(".lc_drop").slideUp("slow");
	} else {
		$(".lc_drop").slideDown("slow");
	};
});
$(".coin_toggle").click(function() {
	if ($(".btn_rubl_drop").is(":visible")) {
		$(".btn_rubl_drop").slideUp("slow");
	} else {
		$(".btn_rubl_drop").slideDown("slow");
	};
});


$(".lang_toggle").click(function() {
	if ($(".btn_ru_drop").is(":visible")) {
		$(".btn_ru_drop").slideUp("slow");
	} else {
		$(".btn_ru_drop").slideDown("slow");
	};
});

$(".modal_button").click(function() {
	if ($(".bron_menu").is(":visible")) {
		$(".bron_menu").slideUp("slow");
	} else {
		$(".bron_menu").slideDown("slow");
	};
});
$(".close_modal").click(function() {
	if ($(".bron_menu").is(":visible")) {
		$(".bron_menu").slideUp("slow");
	} else {
		$(".close_modal").slideDown("slow");
	};
});
$(".toggle_more").click(function() {
	if ($(".cruise6").is(":visible")) {
		$(".cruise6").slideUp("slow");
	} else {
		$(".cruise6").slideDown("slow");
	};
});
$(".toggle_price").click(function() {
	if ($(".toggle_price_menu").is(":visible")) {
		$(".toggle_price_menu").slideUp("slow");
	} else {
		$(".toggle_price_menu").slideDown("slow");
	};
});

