import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./ProductCarousel.css"
import banner3 from './images/banner3.png';
import { Heart } from 'react-bootstrap-icons';
import { Shuffle } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';

const Products = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="productCarouselContainer mx-4 my-5">
            <Carousel responsive={responsive}>
                <div>
                    <div className="row product-card">
                        <div className="col-md-8 col-sm-6">
                            <div className="product-grid">
                                <div className="product-image">
                                    <a href="#" className="image">
                                        <img className="pic-1" src={banner3} alt="Product" />
                                    </a>
                                    <span className="product-discount-label">-33%</span>
                                    <ul className="product-links">
                                        <li><a href="#" data-tip="Add to Wishlist"><Heart size={18} color="red" /></a></li>
                                        <li><a href="#" data-tip="Compare"><Shuffle size={18} color="blue" /></a></li>
                                        <li><a href="#" data-tip="Quick View"><Search size={18} color="red" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-content">
                                    <ul className="rating">
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="far fa-star"></li>
                                        <li className="far fa-star"></li>
                                    </ul>
                                    <h3 className="title"><a href="#">Men's Blazer</a></h3>
                                    <div className="price"><span>$90.00</span> $66.00</div>
                                    <a className="add-to-cart" href="#">add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <div className="product-grid">
                                <div className="product-image">
                                    <a href="#" className="image">
                                        <img className="pic-1" src={banner3} alt="Product" />
                                    </a>
                                    <span className="product-discount-label">-33%</span>
                                    <ul className="product-links">
                                        <li><a href="#" data-tip="Add to Wishlist"><Heart size={18} color="red" /></a></li>
                                        <li><a href="#" data-tip="Compare"><Shuffle size={18} color="blue" /></a></li>
                                        <li><a href="#" data-tip="Quick View"><Search size={18} color="red" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-content">
                                    <ul className="rating">
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="far fa-star"></li>
                                        <li className="far fa-star"></li>
                                    </ul>
                                    <h3 className="title"><a href="#">Men's Blazer</a></h3>
                                    <div className="price"><span>$90.00</span> $66.00</div>
                                    <a className="add-to-cart" href="#">add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div>
                <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <div className="product-grid">
                                <div className="product-image">
                                    <a href="#" className="image">
                                        <img className="pic-1" src={banner3} alt="Product" />
                                    </a>
                                    <span className="product-discount-label">-33%</span>
                                    <ul className="product-links">
                                        <li><a href="#" data-tip="Add to Wishlist"><Heart size={18} color="red" /></a></li>
                                        <li><a href="#" data-tip="Compare"><Shuffle size={18} color="blue" /></a></li>
                                        <li><a href="#" data-tip="Quick View"><Search size={18} color="red" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-content">
                                    <ul className="rating">
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="far fa-star"></li>
                                        <li className="far fa-star"></li>
                                    </ul>
                                    <h3 className="title"><a href="#">Men's Blazer</a></h3>
                                    <div className="price"><span>$90.00</span> $66.00</div>
                                    <a className="add-to-cart" href="#">add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <div className="product-grid">
                                <div className="product-image">
                                    <a href="#" className="image">
                                        <img className="pic-1" src={banner3} alt="Product" />
                                    </a>
                                    <span className="product-discount-label">-33%</span>
                                    <ul className="product-links">
                                        <li><a href="#" data-tip="Add to Wishlist"><Heart size={18} color="red" /></a></li>
                                        <li><a href="#" data-tip="Compare"><Shuffle size={18} color="blue" /></a></li>
                                        <li><a href="#" data-tip="Quick View"><Search size={18} color="red" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-content">
                                    <ul className="rating">
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="far fa-star"></li>
                                        <li className="far fa-star"></li>
                                    </ul>
                                    <h3 className="title"><a href="#">Men's Blazer</a></h3>
                                    <div className="price"><span>$90.00</span> $66.00</div>
                                    <a className="add-to-cart" href="#">add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <div className="product-grid">
                                <div className="product-image">
                                    <a href="#" className="image">
                                        <img className="pic-1" src={banner3} alt="Product" />
                                    </a>
                                    <span className="product-discount-label">-33%</span>
                                    <ul className="product-links">
                                        <li><a href="#" data-tip="Add to Wishlist"><Heart size={18} color="red" /></a></li>
                                        <li><a href="#" data-tip="Compare"><Shuffle size={18} color="blue" /></a></li>
                                        <li><a href="#" data-tip="Quick View"><Search size={18} color="red" /></a></li>
                                    </ul>
                                </div>
                                <div className="product-content">
                                    <ul className="rating">
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="far fa-star"></li>
                                        <li className="far fa-star"></li>
                                    </ul>
                                    <h3 className="title"><a href="#">Men's Blazer</a></h3>
                                    <div className="price"><span>$90.00</span> $66.00</div>
                                    <a className="add-to-cart" href="#">add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </Carousel>
        </div>
    );
};

export default Products;