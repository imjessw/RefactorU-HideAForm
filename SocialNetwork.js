$(".buttons .bio").on("click", function(){
	$(this).hide();
	var buttons= $(this).closest(".buttons");
	var data= buttons.find(".data");
	var input= buttons.find(".form-control");
	var submit= buttons.find(".submit")

	input.show().focus();
	submit.show();
	

});

$(".submit").on("click", function(){
	var buttons= $(this).closest(".buttons");
	var input= buttons.find(".form-control");
	var data= buttons.find(".data");
	var inputVal= input.val();
	data.prepend("<p>" + inputVal + "</p>");
	input.val("")
	$(".bio").show();
	input.hide();
	$(this).hide();
});