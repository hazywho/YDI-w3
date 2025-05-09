import './App.css'
import './index.css'
import { NavBar } from './components/navbar'

function App() {
  return (
    <>
    <div id="header-wrap">
      <div className="top-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="social-links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-youtube-play" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon icon-behance-square" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*social-links*/}
            </div>
            <div className="col-md-6">
              <div className="right-element">
                <a href="#" className="user-account for-buy">
                  <i className="icon icon-user" />
                  <span>Profile</span>
                </a>
                <a href="#" className="cart for-buy">
                  <i className="icon icon-clipboard" />
                  <span>Cart:(RM0 )</span>
                </a>
                <div className="action-menu">
                  <div className="search-bar">
                    <a
                      href="#"
                      className="search-button search-toggle"
                      data-selector="#header-wrap"
                    >
                      <i className="icon icon-search" />
                    </a>
                    <form role="search" method="get" className="search-box">
                      <input
                        className="search-field text search-input"
                        placeholder="Search"
                        type="search"
                      />
                    </form>
                  </div>
                </div>
              </div>
              {/*top-right*/}
            </div>
          </div>
        </div>
      </div>
      {/*top-content*/}
      <header id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="main-logo">
                <a href="index.html">
                  <img src="images/main-logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-md-10">
              <NavBar />
            </div>
          </div>
        </div>
      </header>
    </div>
    {/*header-wrap*/}
    <section id="billboard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button className="prev slick-arrow">
              <i className="icon icon-arrow-left" />
            </button>
            <div className="main-slider pattern-overlay">
              <div className="slider-item">
                <div className="banner-content">
                  <h2 className="banner-title">Life of the wild</h2>
                  <p>
                    Life of the Wild is a book that explores the beauty and
                    challenges of nature through vivid storytelling. It delves
                    into the lives of animals and their habitats, showcasing the
                    intricate balance of ecosystems. The book highlights the
                    struggles of wildlife in the face of environmental changes and
                    human impact while celebrating the resilience and wonders of
                    the natural world
                  </p>
                  <div className="btn-wrap">
                    <a
                      href="#"
                      className="btn btn-outline-accent btn-accent-arrow"
                    >
                      Read More
                      <i className="icon icon-ns-arrow-right" />
                    </a>
                  </div>
                </div>
                {/*banner-content*/}
                <img
                  src="images/main-banner1.jpg"
                  alt="banner"
                  className="banner-image"
                />
              </div>
              {/*slider-item*/}
              <div className="slider-item">
                <div className="banner-content">
                  <h2 className="banner-title">Birds gonna be Happy</h2>
                  <p>
                    Birds Gonna Be Happy is a book that likely celebrates birds
                    and their natural habitats. It might explore the beauty of
                    birds, their behaviors, and how they thrive in the wild. The
                    title suggests a positive and uplifting tone, possibly
                    highlighting the joy and freedom birds experience when nature
                    is healthy and protected
                  </p>
                  <div className="btn-wrap">
                    <a
                      href="#"
                      className="btn btn-outline-accent btn-accent-arrow"
                    >
                      Read More
                      <i className="icon icon-ns-arrow-right" />
                    </a>
                  </div>
                </div>
                {/*banner-content*/}
                <img
                  src="images/main-banner2.jpg"
                  alt="banner"
                  className="banner-image"
                />
              </div>
              {/*slider-item*/}
            </div>
            {/*slider*/}
            <button className="next slick-arrow">
              <i className="icon icon-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="client-holder" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="inner-content">
            <div className="logo-wrap">
              <div className="grid">
                <a href="#">
                  <img src="images/client-image1.png" alt="client" />
                </a>
                <a href="#">
                  <img src="images/client-image2.png" alt="client" />
                </a>
                <a href="#">
                  <img src="images/client-image3.png" alt="client" />
                </a>
                <a href="#">
                  <img src="images/client-image4.png" alt="client" />
                </a>
                <a href="#">
                  <img src="images/client-image5.png" alt="client" />
                </a>
              </div>
            </div>
            {/*image-holder*/}
          </div>
        </div>
      </div>
    </section>
    <section id="featured-books" className="py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header align-center">
              <div className="title">
                <span>Some quality items</span>
              </div>
              <h2 className="section-title">Featured Books</h2>
            </div>
            <div className="product-list" data-aos="fade-up">
              <div className="row">
                <div className="col-md-3">
                  <div className="product-item">
                    <figure className="product-style">
                      <img
                        src="images/product-item1.jpg"
                        alt="Books"
                        className="product-item"
                      />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </figure>
                    <figcaption>
                      <h3>Simple way of piece life</h3>
                      <span>Armor Ramsey</span>
                      <div className="item-price">RM 40.00</div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product-item">
                    <figure className="product-style">
                      <img
                        src="images/product-item2.jpg"
                        alt="Books"
                        className="product-item"
                      />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </figure>
                    <figcaption>
                      <h3>Great travel at desert</h3>
                      <span>Sanchit Howdy</span>
                      <div className="item-price">RM 38.00</div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product-item">
                    <figure className="product-style">
                      <img
                        src="images/product-item3.jpg"
                        alt="Books"
                        className="product-item"
                      />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </figure>
                    <figcaption>
                      <h3>The lady beauty Scarlett</h3>
                      <span>Arthur Doyle</span>
                      <div className="item-price">RM 45.00</div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product-item">
                    <figure className="product-style">
                      <img
                        src="images/product-item4.jpg"
                        alt="Books"
                        className="product-item"
                      />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </figure>
                    <figcaption>
                      <h3>Once upon a time</h3>
                      <span>Klien Marry</span>
                      <div className="item-price">RM 35.00</div>
                    </figcaption>
                  </div>
                </div>
              </div>
              {/*ft-books-slider*/}
            </div>
            {/*grid*/}
          </div>
          {/*inner-content*/}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="btn-wrap align-right">
              <a href="#" className="btn-accent-arrow">
                View all products <i className="icon icon-ns-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="best-selling" className="leaf-pattern-overlay">
      <div className="corner-pattern-overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <figure className="products-thumb">
                  <img
                    src="images/single-image.jpg"
                    alt="book"
                    className="single-image"
                  />
                </figure>
              </div>
              <div className="col-md-6">
                <div className="product-entry">
                  <h2 className="section-title divider">Best Selling Book</h2>
                  <div className="products-content">
                    <div className="author-name">By Timbur Hood</div>
                    <h3 className="item-title">Birds gonna be happy</h3>
                    <p>
                      Birds Gonna Be Happy is a book that likely celebrates birds
                      and their natural habitats. It might explore the beauty of
                      birds, their behaviors, and how they thrive in the wild
                    </p>
                    <div className="item-price">RM 45.00</div>
                    <div className="btn-wrap">
                      <a href="#" className="btn-accent-arrow">
                        shop it now <i className="icon icon-ns-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* / row */}
          </div>
        </div>
      </div>
    </section>
    <section id="popular-books" className="bookshelf py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header align-center">
              <div className="title">
                <span>Some quality items</span>
              </div>
              <h2 className="section-title">Popular Books</h2>
            </div>
            <ul className="tabs">
              <li data-tab-target="#all-genre" className="active tab">
                All Genre
              </li>
              <li data-tab-target="#business" className="tab">
                Business
              </li>
              <li data-tab-target="#technology" className="tab">
                Technology
              </li>
              <li data-tab-target="#romantic" className="tab">
                Romantic
              </li>
              <li data-tab-target="#adventure" className="tab">
                Adventure
              </li>
              <li data-tab-target="#fictional" className="tab">
                Fictional
              </li>
              <li data-tab-target="#men" className="tab">
                dwane "the rock" Johnny
              </li>
              {/* ^^ edited here */}
            </ul>
            <div className="tab-content">
              <div id="all-genre" data-tab-content="" className="active">
                <div className="row">
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item1.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Portrait photography</h3>
                        <span>Adam Silber</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item2.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Once upon a time</h3>
                        <span>Klien Marry</span>
                        <div className="item-price">RM 35.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item3.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Tips of simple lifestyle</h3>
                        <span>Bratt Smith</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item4.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Just felt from outside</h3>
                        <span>Nicole Wilson</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Peaceful Enlightment</h3>
                        <span>Marmik Lama</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item6.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Great travel at desert</h3>
                        <span>Sanchit Howdy</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item7.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Life among the pirates</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item8.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Simple way of piece life</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
              <div id="business" data-tab-content="">
                <div className="row">
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item2.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Peaceful Enlightment</h3>
                        <span>Marmik Lama</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item4.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Great travel at desert</h3>
                        <span>Sanchit Howdy</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item6.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Life among the pirates</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item8.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Simple way of piece life</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
              <div id="technology" data-tab-content="">
                <div className="row">
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item1.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Peaceful Enlightment</h3>
                        <span>Marmik Lama</span>
                        <div className="item-price">Rm 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item3.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Great travel at desert</h3>
                        <span>Sanchit Howdy</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Life among the pirates</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item7.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Simple way of piece life</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
              <div id="romantic" data-tab-content="">
                <div className="row">
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item1.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Peaceful Enlightment</h3>
                        <span>Marmik Lama</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item3.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Great travel at desert</h3>
                        <span>Sanchit Howdy</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Life among the pirates</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item7.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Simple way of piece life</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
              <div id="adventure" data-tab-content="">
                <div className="row">
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Life among the pirates</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item7.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Simple way of piece life</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
              <div id="fictional" data-tab-content="">
                <div className="row">
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Life among the pirates</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item7.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Simple way of piece life</h3>
                        <span>Armor Ramsey</span>
                        <div className="item-price">RM 40.00</div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
              {/* changes here */}
              <div id="men" data-tab-content="">
                <div className="row">
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/tab-item5.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>way of THE ROCK</h3>
                        <span>johnson</span>
                        <div className="item-price">RM 770.00</div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*inner-tabs*/}
        </div>
      </div>
    </section>
    <section id="quotation" className="align-center pb-5 mb-5">
      <div className="inner-content">
        <h2 className="section-title divider">Quote of the day</h2>
        <blockquote data-aos="fade-up">
          <q>
            “The more that you read, the more things you will know. The more that
            you learn, the more places you’ll go.”
          </q>
          <div className="author-name">Dr. Seuss</div>
        </blockquote>
      </div>
    </section>
    <section id="special-offer" className="bookshelf pb-5 mb-5">
      <div className="section-header align-center">
        <div className="title">
          <span>Grab your opportunity</span>
        </div>
        <h2 className="section-title">Books with offer</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="inner-content">
            <div className="product-list" data-aos="fade-up">
              <div className="grid product-grid">
                <div className="product-item">
                  <figure className="product-style">
                    <img
                      src="images/product-item5.jpg"
                      alt="Books"
                      className="product-item"
                    />
                    <button
                      type="button"
                      className="add-to-cart"
                      data-product-tile="add-to-cart"
                    >
                      Add to Cart
                    </button>
                  </figure>
                  <figcaption>
                    <h3>Simple way of piece life</h3>
                    <span>Armor Ramsey</span>
                    <div className="item-price">
                      <span className="prev-price">RM 50.00</span>RM 40.00
                    </div>
                  </figcaption>
                </div>
                <div className="product-item">
                  <figure className="product-style">
                    <img
                      src="images/product-item6.jpg"
                      alt="Books"
                      className="product-item"
                    />
                    <button
                      type="button"
                      className="add-to-cart"
                      data-product-tile="add-to-cart"
                    >
                      Add to Cart
                    </button>
                  </figure>
                  <figcaption>
                    <h3>Great travel at desert</h3>
                    <span>Sanchit Howdy</span>
                    <div className="item-price">
                      <span className="prev-price">RM 30.00</span>RM 38.00
                    </div>
                  </figcaption>
                </div>
                <div className="product-item">
                  <figure className="product-style">
                    <img
                      src="images/product-item7.jpg"
                      alt="Books"
                      className="product-item"
                    />
                    <button
                      type="button"
                      className="add-to-cart"
                      data-product-tile="add-to-cart"
                    >
                      Add to Cart
                    </button>
                  </figure>
                  <figcaption>
                    <h3>The lady beauty Scarlett</h3>
                    <span>Arthur Doyle</span>
                    <div className="item-price">
                      <span className="prev-price">RM 35.00</span>RM 45.00
                    </div>
                  </figcaption>
                </div>
                <div className="product-item">
                  <figure className="product-style">
                    <img
                      src="images/product-item8.jpg"
                      alt="Books"
                      className="product-item"
                    />
                    <button
                      type="button"
                      className="add-to-cart"
                      data-product-tile="add-to-cart"
                    >
                      Add to Cart
                    </button>
                  </figure>
                  <figcaption>
                    <h3>Once upon a time</h3>
                    <span>Klien Marry</span>
                    <div className="item-price">
                      <span className="prev-price">RM 25.00</span>RM 35.00
                    </div>
                  </figcaption>
                </div>
                <div className="product-item">
                  <figure className="product-style">
                    <img
                      src="images/product-item2.jpg"
                      alt="Books"
                      className="product-item"
                    />
                    <button
                      type="button"
                      className="add-to-cart"
                      data-product-tile="add-to-cart"
                    >
                      Add to Cart
                    </button>
                  </figure>
                  <figcaption>
                    <h3>Simple way of piece life</h3>
                    <span>Armor Ramsey</span>
                    <div className="item-price">RM 40.00</div>
                  </figcaption>
                </div>
              </div>
              {/*grid*/}
            </div>
          </div>
          {/*inner-content*/}
        </div>
      </div>
    </section>
    <section id="subscribe">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6">
                <div className="title-element">
                  <h2 className="section-title divider">
                    Subscribe to our newsletter
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="subscribe-content" data-aos="fade-up">
                  <p>
                    Get the latest news, events, and announcements delivered
                    straight to your inbox
                  </p>
                  <form id="form">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email addresss here"
                    />
                    <button className="btn-subscribe">
                      <span>send</span>
                      <i className="icon icon-send" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-item">
              <div className="company-brand">
                <img
                  src="images/main-logo.png"
                  alt="logo"
                  className="footer-logo"
                />
                <p>
                  At BookSaw, every page holds a new discovery. Whether you're
                  seeking thrilling adventures, heartwarming tales, or insightful
                  knowledge, our carefully curated collection has something for
                  every reader
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-menu">
              <h5>About Us</h5>
              <ul className="menu-list">
                <li className="menu-item">
                  <a href="#">vision</a>
                </li>
                <li className="menu-item">
                  <a href="#">articles </a>
                </li>
                <li className="menu-item">
                  <a href="#">careers</a>
                </li>
                <li className="menu-item">
                  <a href="#">service terms</a>
                </li>
                <li className="menu-item">
                  <a href="#">donate</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-menu">
              <h5>Discover</h5>
              <ul className="menu-list">
                <li className="menu-item">
                  <a href="#">Home</a>
                </li>
                <li className="menu-item">
                  <a href="#">Books</a>
                </li>
                <li className="menu-item">
                  <a href="#">Authors</a>
                </li>
                <li className="menu-item">
                  <a href="#">Subjects</a>
                </li>
                <li className="menu-item">
                  <a href="#">Advanced Search</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-menu">
              <h5>My account</h5>
              <ul className="menu-list">
                <li className="menu-item">
                  <a href="#">Sign In</a>
                </li>
                <li className="menu-item">
                  <a href="#">View Cart</a>
                </li>
                <li className="menu-item">
                  <a href="#">My Wishtlist</a>
                </li>
                <li className="menu-item">
                  <a href="#">Track My Order</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-menu">
              <h5>Help</h5>
              <ul className="menu-list">
                <li className="menu-item">
                  <a href="#">Help center</a>
                </li>
                <li className="menu-item">
                  <a href="#">Report a problem</a>
                </li>
                <li className="menu-item">
                  <a href="#">Suggesting edits</a>
                </li>
                <li className="menu-item">
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* / row */}
      </div>
    </footer>
    <div id="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6">
                  <p>© 2025 All rights reserved</p>
                </div>
                <div className="col-md-6">
                  <div className="social-links align-right">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="icon icon-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-youtube-play" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon icon-behance-square" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*grid*/}
          </div>
          {/*footer-bottom-content*/}
        </div>
      </div>
    </div>
  </>

  )
}

export default App
