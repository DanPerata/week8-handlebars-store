$(document).on('ready', function() {
  var handlebarTemplate = $('#handle');

  var template = handlebarTemplate.html();

  var renderTemplate = Handlebars.compile(template);

  for (var i = 0; i < productsData.productsList.length; i++) {
  	var outputHTML = renderTemplate(productsData.productsList[i]);
  	// console.log(outputHTML);
  	$('#product-container').append(outputHTML);
  };

  var wishScript = $('#wishScript');
  var wishTemplate = wishScript.html();
  var renderWishTemplate = Handlebars.compile(wishTemplate);
  $('.addButton').on('click',function(){
  	var outputHTML = renderWishTemplate({
  		title: $(this).closest('.product').find('.title').text()
  	});
  	$('#wishList').append(outputHTML);
 	})

 	$(document).on('click', '.removeButton', function(){
 	 // console.log('remove button clicked');
 		$(this).closest('li').remove()
 	});

});