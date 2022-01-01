(function($) {
  'use strict';
    /*---------------------------------
        Preloader JS
    -----------------------------------*/
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.lds-ripple');
        var preloaderArea = jQuery('.preloader');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
    /*---------------------------------
        Preloader JS
    -----------------------------------*/

    /*---------------------------------
        sticky header JS
    -----------------------------------*/
    $(window).on('scroll',function() {
        var scroll = $(window).scrollTop();
         if (scroll < 100) {
          $(".header_area").removeClass("sticky");
         }else{
          $(".header_area").addClass("sticky");
         }
    });
    /*---------------------------------
        sticky header JS
    -----------------------------------*/

    /*----------------------
        Slick slider js
    ------------------------*/
    $('.hero_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.project_button button').on('click', function() {
        $('.project_button button').removeClass('active_btn');
        var filterValues = $(this).data('filter');
        $('.projects_slider_content').slick('slickUnfilter');
        $('.projects_slider_content').slick('slickFilter', filterValues);
        $(this).addClass('active_btn');
    });
    $('.projects_slider_content').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    $('.testimonial_slide').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1
    });
    /*----------------------
        Slick slider js
    ------------------------*/

    /*----------------------
        mobile menu js
    ------------------------*/
    $(".menu_icon,.close_btn").on('click', function (e) {
      e.preventDefault();
      $(".menu_icon").toggleClass("active");
    });
    $(".menu_icon,.close_btn").on('click', function (e) {
      e.preventDefault();
      $(".sidenav_menu").toggleClass("active");
    });
    $.sidebarMenu($('.sidebar-menu'))
    /*----------------------
        mobile menu js
    ------------------------*/

    /*----------------------
        Isotope js
    ------------------------*/
    $('#project').imagesLoaded( function() {
        var $grid = $('.grid_wrapper').isotope({
            itemSelector: '.single_project',
            layoutMode: 'fitRows'
        })
        $('.project_button_2').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
        $('.project_button_2').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.active_btn').removeClass('active_btn');
                $(this).addClass('active_btn');
            });
        });
    });
    /*----------------------
        Isotope js
    ------------------------*/

    /*----------------------
        wow js
    ------------------------*/
    new WOW().init();
    /*----------------------
        wow js
    ------------------------*/

  /*----------------------
      Search
  ------------------------*/
  $("#news-search").submit(function(event) {
    event.preventDefault();
  });

  if($("#search-input").length >0) {
    var sjs = SimpleJekyllSearch({
      json: '/search.json',
      noResultsText: '<li>На жаль, за Вашим запитом нічого не знайдено...</li>',
      resultsContainer: document.getElementById('results-container'),
      searchInput: document.getElementById('search-input'),
      searchResultTemplate: '<li><a href="{url}">{title}</a></li>'
    });
  }

  /*----------------------------------------------*/
  /*---------- SDG Business Consulting -----------*/
  /*----------------------------------------------*/

  if (window.location.pathname.includes('services')) {
    var urlParams = new URLSearchParams(window.location.search);
    var sections = [
      'impact',
      'reporting',
      'communication',
      'strategy',
      'greendeal',
      'lean'
    ];

    if (urlParams.has('show') && sections.includes(urlParams.get('show'))) {
      $('a[href="#' + urlParams.get('show') + '"]').tab('show');
    } else {
      $('a[href="#impact"]').tab('show');
    }
  }
})(window.jQuery);
