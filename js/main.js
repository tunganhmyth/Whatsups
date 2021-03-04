$('.partner-detail').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    speed: 1800,
    prevArrow: '<i class="fa fa-chevron-left prevArrow" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-right nextArrow" aria-hidden="true"></i>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        },
    ]
});
document.addEventListener("DOMContentLoaded", function () {
    var nut = document.querySelector('div.icon i');
    var mobile = document.querySelector('ul');
    nut.addEventListener('click', function () {
        mobile.classList.toggle('active');
    })
})
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it