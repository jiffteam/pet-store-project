var shop = [
    {
      title: 'Throg',
      image: './assets/Throg vert.jpg',
      price: '$500',
      description: 'Throg brings your team all the power of Thor the god of thunder in a pint sized package.'
    },



    ]

    var postHTML =  require("posthtml")
 




    for (var i=0; i < throg.price; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="./Throg vert.jpg' + shop[i] + '"/'
        var price = '<p> $' + throg.price + '</p></span>'
        var description = '<div class="description"><p>'+ throg.description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
var shop = [
    {
      title: 'Throg',
      image: './assets/Throg vert.jpg',
      price: '$500',
      description: 'Throg brings your team all the power of Thor the god of thunder in a pint sized package.'
    },



    ]

    var postHTML =  require("posthtml")
 




    for (var i=0; i < throg.price; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img src="./Throg vert.jpg' + shop[i] + '"/'
        var price = '<p> $' + throg.price + '</p></span>'
        var description = '<div class="description"><p>'+ throg.description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML