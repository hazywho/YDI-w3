import { useEffect } from 'react'
import $ from 'jquery'

export const NavBar = () =>{
    useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".menu-list");

    const mobileMenu = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("responsive");
    };

    hamburger.addEventListener("click", mobileMenu);

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("responsive");
    }));

    const initScrollNav = () => {
      const scroll = $(window).scrollTop();
      if (scroll) {
        $('#header').addClass("fixed-top");
      } else {
        $('#header').removeClass("fixed-top");
      }
    };

    $(window).on('scroll', initScrollNav);
    initScrollNav();

    $(document).ready(function () {
      // Chocolat gallery — you must ensure this plugin is available
      // Chocolat(document.querySelectorAll('.image-link'), {
      //   imageSize: 'contain',
      //   loop: true,
      // });

      $('#header-wrap').on('click', '.search-toggle', function (e) {
        const selector = $(this).data('selector');
        $(selector).toggleClass('show').find('.search-input').focus();
        $(this).toggleClass('active');
        e.preventDefault();
      });

      $(document).on('click touchstart', function (e) {
        if (!$(e.target).closest('.search-toggle, #header-wrap').length) {
          $('.search-toggle').removeClass('active');
          $('#header-wrap').removeClass('show');
        }
      });

      $('.main-slider').slick({
        autoplay: true,
        autoplaySpeed: 40,
        fade: true,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
      });

      $('.product-grid').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
          { breakpoint: 1400, settings: { slidesToShow: 3 } },
          { breakpoint: 999, settings: { slidesToShow: 2 } },
          { breakpoint: 660, settings: { slidesToShow: 1 } },
        ]
      });

      AOS.init({
        duration: 1200,
        once: true,
      });

      // $('.stellarnav').stellarNav({ theme: 'plain', closingDelay: 250 });
    });

    return () => {
      $(window).off('scroll', initScrollNav);
      hamburger.removeEventListener("click", mobileMenu);
    };
  }, []);

    return(
        <nav id="navbar">
                <div className="main-menu stellarnav">
                  <ul className="menu-list">
                    <li className="menu-item active">
                      <a href="#home">Home</a>
                    </li>
                    <li className="menu-item has-sub">
                      <a href="#pages" className="nav-link">
                        Page
                      </a>
                      <ul>
                        <li className="active">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="index.html">About</a>
                        </li>
                        <li>
                          <a href="index.html">Styles</a>
                        </li>
                        <li>
                          <a href="index.html">Blog</a>
                        </li>
                        <li>
                          <a href="index.html">Post Single</a>
                        </li>
                        <li>
                          <a href="index.html">Our Store</a>
                        </li>
                        <li>
                          <a href="index.html">Product Single</a>
                        </li>
                        <li>
                          <a href="index.html">Contact</a>
                        </li>
                        <li>
                          <a href="index.html">Thank You</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#featured-books" className="nav-link">
                        Featured
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#popular-books" className="nav-link">
                        Popular
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#special-offer" className="nav-link">
                        Offer
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="#latest-blog" className="nav-link">
                        Articles
                      </a>
                    </li>
                  </ul>
                  <div className="hamburger">
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                  </div>
                </div>
              </nav>
    )
}