(function($){
	$(function(){

		$('.n ul li a:not(:only-child)').click(function(e){
			$(this).siblings('.nd').toggle();
			$('.nd').not($(this).siblings()).hide();
			e.stopPropagation();
		});
		$('html').click(function(){
			$('.nd').hide();
		});
		$('#nt').click(function(){
			$('.n ul').slideToggle();
		});






		$('#nt').on('click',function(){
			this.classList.toggle('active');
		});




	});
})(jQuery);
