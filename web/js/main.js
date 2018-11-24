$(function() {
    $('.slider__box').slick({
        infinite: true,
        dots:true,
	});
    $('.slide-box2').slick({
        infinite: true,
        dots:true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,

    });
});
function initMap() {
    // The location of Uluru
    var uluru = {lat:48.9117518,lng:24.647089};

    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: "web/img/icon1.png",
    });

};


