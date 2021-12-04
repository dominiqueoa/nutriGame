$(document).ready(function(){
	$('.lose_weight').click(function() {
		$('.main_btn_area').addClass('hiden');
		$('.weight_option_one').addClass('show');
		$('.normal_show').addClass('hiden');
		// $('.input_show').addClass('show');
		$('.options2_btn_area').addClass('show');
		return false;
	});
	$('.height_btn').click(function(){
		$('.height_btn').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	AOS.init({
        duration: 800,
    });



})


