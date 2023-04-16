import React, { useState } from 'react'
import './../style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCoffee, faGlobe, faGlobeAsia, faLanguage, faSearch } from "@fortawesome/free-solid-svg-icons"


function importimages(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importimages(require.context('../Components/Assets/images', false, /\.(png|jpe?g|svg)$/));

function importbanner(r) {
    let banner = {};
    r.keys().map(item => { banner[item.replace('./', '')] = r(item); });
    return banner;
}

const banner = importbanner(require.context('../Components/Assets/images/banner', false, /\.(png|jpe?g|svg)$/));

function importicon(r) {
    let icons = {};
    r.keys().map(item => { icons[item.replace('./', '')] = r(item); });
    return icons;
}

const icons = importicon(require.context('../Components/Assets/images/icon', false, /\.(png|jpe?g|svg)$/));

function importclient(r) {
    let clients = {};
    r.keys().map(item => { clients[item.replace('./', '')] = r(item); });
    return clients;
}

const clients = importclient(require.context('../Components/Assets/images/clients', false, /\.(png|jpe?g|svg)$/));


function importauthor(r) {
    let author = {};
    r.keys().map(item => { author[item.replace('./', '')] = r(item); });
    return author;
}

const author = importauthor(require.context('../Components/Assets/images/author', false, /\.(png|jpe?g|svg)$/));

export default function User_Nav() {
    const [opensearch, setopensearch] = useState(false)

    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);



    return (<>
        <body data-spy="scroll" data-target="#mainNav">

            
                {opensearch ?<nav className="navbar navbar-expand-lg fixed-top trans-navigation navbarsado"> <div className="container" >
                    <div className="navbar-brand">
                        <img src={images['logo.png']} alt="" className="img-fluid b-logo" />
                    </div>

                    <div className='searchinput'>
                        <input type='search' />
                        <button className=""><FontAwesomeIcon icon={faSearch}  /></button>
                    </div>
                    <button className='closebutton' onClick={() => { setopensearch(false) }}><FontAwesomeIcon icon={faClose}  />close</button>
                </div></nav> : <nav className={colorChange?'navbar navbar-expand-lg fixed-top trans-navigation navbarsado':"navbar navbar-expand-lg fixed-top trans-navigation"}><div className="container">
                    <div className="navbar-brand">
                        <img src={images['Marslogo.png']} alt="" className="img-fluid b-logo row align-items-center" />
                    </div>
                    <button className='search' onClick={() => { setopensearch(true) }} > Search   <FontAwesomeIcon icon={faSearch} className='button' />
                    </button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars"></i>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="mainNav">

                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link smoth-scroll">What we do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link smoth-scroll" >Who we are</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link smoth-scroll" >Insights</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link smoth-scroll">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link smoth-scroll">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link smoth-scroll">Contact</a>
                            </li>


                        </ul>
                        <div className='selectlang'>
                            <FontAwesomeIcon icon={faGlobe} size='1x' />
                            Globle | EN
                        </div>

                    </div>

                </div>
                </nav>
                }

          

            <div className="banner-area banner-3">
                <div className="overlay dark-overlay"></div>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto text-center col-sm-12 col-md-12" style={{zIndex:'1'}}>
                                    <div className="banner-content content-padding">
                                        <h1 className="banner-title">We craft seo and digital markting services</h1>
                                        <p>We provide marketing services to startups and small businesses to looking for a partner for their digital media, design-area.We are a a startup company to be commited to work and time management.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section id="intro" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12">
                            <div className="section-heading">
                                <p className="lead">We are creative digital marketing agency with expertise to grow any business that need proper guidance and a committed service.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-lg-5 d-none d-lg-block col-sm-12 align-self-end">
                            <div className="intro-img">
                                <img src={banner['why-choose.png']} alt="intro-img" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="intro-box">
                                        <span>01.</span>
                                        <h4>Management</h4>
                                        <p>we founded September with the goal of creating meaningful digital experiences that connect with people.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="intro-box">
                                        <span>02.</span>
                                        <h4>Strategy</h4>
                                        <p>We're full service which means we've got you covered on design & content right through to digital. </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="intro-box">
                                        <span>03.</span>
                                        <h4>Experience</h4>
                                        <p>You'll form a lasting relationship with us, collaboration is central to we do.Digital experiences
                                            connect people.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="intro-box">
                                        <span>04.</span>
                                        <h4>Build</h4>
                                        <p>Technology and design are the core of success for real estate related businesses. Leverage our years.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="intro-cta">
                                        <p className="lead ">Still have any question on mind ? <a  className="smoth-scroll">Contact us</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="bg-light">
                <div className="about-bg-img d-none d-lg-block d-md-block"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-sm-12 col-md-8">
                            <div className="about-content">
                                <h5 className="subtitle">About us</h5>
                                <h3>We are making beautiful <br />design layout for your business</h3>
                                <p>We craft beautiful website layout from scratch.You need not to worry about site design and other technial
                                    issue.We provide these attractive service as a bonus.Let's have atalk together for your next project.</p>

                                <ul className="about-list">
                                    <li><i className="far fa-check-circle"></i> Responsive site</li>

                                    <li>
                                        <i className="far fa-check-circle"> </i> Latest bootstrap 4
                                    </li>

                                    <li>
                                        <i className="far fa-check-circle"> </i> Modern and clean design
                                    </li>
                                    <li>
                                        <i className="far fa-check-circle"> </i> Working contact form
                                    </li>
                                    <li>
                                        <i className="far fa-check-circle"> </i> Premium services and support
                                    </li>
                                    <li>
                                        <i className="far fa-check-circle"></i> Cross browser compatiabilty
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="service-head" className=" bg-feature">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 m-auto">
                            <div className="section-heading text-white">
                                <h4 className="section-title">Full stack digital marketing solution</h4>
                                <p>We're full service which means we've got you covered on design & content right through to digital. You’ll
                                    form a lasting relationship with us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-box">
                                <div className="service-img-icon">
                                    <img src={icons['001-magnifying-glass.png']} alt="service-icon" className="img-fluid" />
                                </div>
                                <div className="service-inner">
                                    <h4>Video Marketing</h4>
                                    <p>Reach a huge area of users and get a publicty of your product and service ,<span>video marketing</span>
                                        solution.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-box ">
                                <div className="service-img-icon">
                                    <img src={icons['008-digital-marketing-2.png']} alt="service-icon" className="img-fluid" />
                                </div>
                                <div className="service-inner">
                                    <h4>Email Marketing</h4>
                                    <p>Email Marketing is a great solution to reach a <span>high range of customers</span> eagrerly waiting to
                                        get a service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-box">
                                <div className="service-img-icon">
                                    <img src={icons['003-task.png']} alt="service-icon" className="img-fluid" />
                                </div>
                                <div className="service-inner">
                                    <h4>SEO optimization</h4>
                                    <p>we provide wide range of<span> seo service</span> to make your site at top to reach your target customers
                                        provided.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-box">
                                <div className="service-img-icon">
                                    <img src={icons['010-digital-marketing.png']} alt="service-icon" className="img-fluid" />
                                </div>
                                <div className="service-inner">
                                    <h4>Custom Website</h4>
                                    <p>We provide <span>custom website</span> for any small and large company web based service in large compact
                                        package.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-box">
                                <div className="service-img-icon">
                                    <img src={icons['006-analytics.png']} alt="service-icon" className="img-fluid" />
                                </div>
                                <div className="service-inner">
                                    <h4>Content Growth</h4>
                                    <p>Content is king,Having a blog site and want to <span>build content</span> make a platform of earning too
                                        we assist you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="service-box">
                                <div className="service-img-icon">
                                    <img src={icons['004-hiring.png']} alt="service-icon" className="img-fluid" />
                                </div>
                                <div className="service-inner">
                                    <h4>Link Building </h4>
                                    <p>Want to grow your <span>potential visitor</span> your site to make it more effective and succesful
                                        business .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section id="pricing" className="section-padding bg-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 m-auto">
                            <div className="section-heading">
                                <h4 className="section-title">Affordable pricing plan for you</h4>
                                <p>We have different type of pricing table to choose with your need. Check which one is most suitble for you
                                    and your business purpose. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="pricing-block ">
                                <div className="price-header">
                                    <i className="icofont-diamond"></i>

                                    <h4 className="price"><small>$</small>26</h4>
                                    <h5>Monthly pack</h5>
                                </div>
                                <div className="line"></div>
                                <ul>
                                    <li>5 GB Bandwidth</li>
                                    <li>Highest Speed</li>
                                    <li>1 GB Storage</li>
                                    <li>Unlimited Website</li>
                                    <li>Unlimited Users</li>
                                    <li>Data Security and Backups</li>
                                    <li>24x7 Great Support</li>
                                    <li>Monthly Reports and Analytics</li>
                                </ul>

                                <a href="pricing.html" className="btn btn-hero btn-circled">select plan</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="pricing-block ">
                                <div className="price-header">
                                    <i className="icofont-rocket-alt-1"></i>

                                    <h4 className="price"><small>$</small>46</h4>
                                    <h5>Monthly pack</h5>
                                </div>
                                <div className="line"></div>
                                <ul>
                                    <li>5 GB Bandwidth</li>
                                    <li>Highest Speed</li>
                                    <li>1 GB Storage</li>
                                    <li>Unlimited Website</li>
                                    <li>Unlimited Users</li>
                                    <li>Data Security and Backups</li>
                                    <li>24x7 Great Support</li>
                                    <li>Monthly Reports and Analytics</li>
                                </ul>

                                <a href="pricing.html" className="btn btn-hero btn-circled">select plan</a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="pricing-block">
                                <div className="price-header">
                                    <i className="icofont-light-bulb"></i>

                                    <h4 className="price"><small>$</small>76</h4>
                                    <h5>Monthly pack</h5>
                                </div>
                                <div className="line"></div>
                                <ul>
                                    <li>5 GB Bandwidth</li>
                                    <li>Highest Speed</li>
                                    <li>1 GB Storage</li>
                                    <li>Unlimited Website</li>
                                    <li>Unlimited Users</li>
                                    <li>Data Security and Backups</li>
                                    <li>24x7 Great Support</li>
                                    <li>Monthly Reports and Analytics</li>
                                </ul>

                                <a href="pricing.html" className="btn btn-hero btn-circled">select plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id="testimonial" className="section-padding ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="mb-5">
                                <h3 className="mb-2">Trusted by hundred over years</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dignissimos?</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 m-auto col-sm-12 col-md-12">
                            <div className="carousel slide" id="test-carousel2">
                                <div className="carousel-inner">
                                    <ol className="carousel-indicators">
                                        <li data-target="#test-carousel2" data-slide-to="0" className="active"></li>
                                        <li data-target="#test-carousel2" data-slide-to="1"></li>
                                        <li data-target="#test-carousel2" data-slide-to="2"></li>
                                    </ol>

                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12">
                                                <div className="testimonial-content style-2">
                                                    <div className="author-info ">
                                                        <div className="author-img">
                                                            <img src={author['3b.jpg']} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>

                                                    <p><i className="icofont icofont-quote-left"></i>They is a great platform to anyone like who want to
                                                        start buisiness but not get right decision. It's really great placefor new to start the buisness
                                                        in righ way! <i className="icofont icofont-quote-right"></i></p>
                                                    <div className="author-text">
                                                        <h5>Marine Joshi</h5>
                                                        <p>Senior designer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12">
                                                <div className="testimonial-content style-2">
                                                    <div className="author-info ">
                                                        <div className="author-img">
                                                            <img src={author['5b.jpg']} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>

                                                    <p><i className="icofont icofont-quote-left"></i>They is a great platform to anyone like who want to
                                                        start buisiness but not get right decision. It's really great placefor new to start the buisness
                                                        in righ way! <i className="icofont icofont-quote-right"></i></p>
                                                    <div className="author-text">
                                                        <h5>Marine Joshi</h5>
                                                        <p>Senior designer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item ">
                                        <div className="row">
                                            <div className="col-lg-12 col-sm-12">
                                                <div className="testimonial-content style-2">
                                                    <div className="author-info ">
                                                        <div className="author-img">
                                                            <img src={author['3b.jpg']} alt="" className="img-fluid" />
                                                        </div>
                                                    </div>

                                                    <p><i className="icofont icofont-quote-left"></i>They is a great platform to anyone like who want to
                                                        start buisiness but not get right decision. It's really great placefor new to start the buisness
                                                        in righ way!<i className="icofont icofont-quote-right"></i></p>
                                                    <div className="author-text">
                                                        <h5>Marine Joshi</h5>
                                                        <p>Senior designer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section-padding ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-3 text-center">
                            <img src={clients['client01.png']} alt="partner" className="img-fluid" />
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-3 text-center">
                            <img src={clients['client06.png']} alt="partner" className="img-fluid" />
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-3 text-center">
                            <img src={clients['client04.png']} alt="partner" className="img-fluid" />
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-3 text-center">
                            <img src={clients['client05.png']} alt="partner" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>


            <section id="blog" className="section-padding bg-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 m-auto">
                            <div className="section-heading">
                                <h4 className="section-title">Latest Blog news</h4>
                                <div className="line"></div>
                                <p>Our blog journey may come handy to build a community to make more effective success for business. Latest and trend tricks will help a lot </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-4">
                            <div className="blog-block ">
                                <img src="" alt="" className="w-100" />
                                <div className="blog-text">
                                    <h6 className="author-name"><span>Tips and tricks</span>john Doe</h6>
                                    <a href="blog-single.html" className="h5 my-2 d-inline-block">
                                        Best tips to grow your content quality and standard.
                                    </a>
                                    <p>If you want to grow your content quality and standard you should foolow these tips properly voluptatibus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-4">
                            <div className="blog-block ">
                                <img src="" alt="" className="w-100" />
                                <div className="blog-text">
                                    <h6 className="author-name"><span>Branding</span>john Doe</h6>
                                    <a href="blog-single.html" className="h5 my-2 d-inline-block">
                                        Brand your site at top in few minuts.
                                    </a>
                                    <p>Brand your site at top, boost your audioance corporis facilis animi voluptas alias ex saepe quo
                                        voluptatibus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-4">
                            <div className="blog-block ">
                                <img src="" alt="" className="w-100" />
                                <div className="blog-text">
                                    <h6 className="author-name"><span>Marketing</span>john Doe</h6>
                                    <a href="blog-single.html" className="h5 my-2 d-inline-block">
                                        How to become a best sale <br />marketer in a year!
                                    </a>
                                    <p>Becomeing a best sale marketer is not easy but not impossible too.Need to follow up some proper guidance
                                        and strategy .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="counter" className="section-padding">
                <div className="overlay dark-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="counter-stat">
                                <i className="icofont icofont-heart"></i>
                                <span className="counter" data-count="460">0</span>
                                <h5>Our Happy Clients</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="counter-stat">
                                <i className="icofont icofont-rocket"></i>
                                <span className="counter" data-count="60">0</span>
                                <h5>Projects Done</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="counter-stat">
                                <i className="icofont icofont-hand-power"></i>
                                <span className="counter" data-count="30">0</span>
                                <h5>Experienced stuff</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="counter-stat">
                                <i className="icofont icofont-shield-alt"></i>
                                <span className="counter" data-count="25">0</span>
                                <h5>Ongoning Projects</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer" className="section-padding">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-4">
                            <div className="footer-widget footer-link">
                                <h4>We concern about you<br /> to grow business rapidly.</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam hic non sunt recusandae atque unde saepe nihil earum voluptatibus aliquid optio suscipit nobis quia vel quod, iure quae.</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="footer-widget footer-link">
                                <h4>About</h4>
                                <ul>
                                    <li><a>About</a></li>
                                    <li><a>Service</a></li>
                                    <li><a >Pricing</a></li>
                                    <li><a >Team</a></li>
                                    <li><a>Testimonials</a></li>
                                    <li><a >Blog</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-6">
                            <div className="footer-widget footer-link">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="#!">How it Works</a></li>
                                    <li><a href="#!">Support</a></li>
                                    <li><a href="#!">Privacy Policy</a></li>
                                    <li><a href="#!">Report Bug</a></li>
                                    <li><a href="#!">License</a></li>
                                    <li><a href="#!">Terms & Condition</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="footer-widget footer-text">
                                <h4>Our location</h4>
                                <p className="mail"><span>Mail:</span> example@gmail.com</p>
                                <p><span>Phone :</span>+000 000 000 0000</p>
                                <p><span>Location:</span> 455 West Orchard Street Kings Mountain, NC 28086,NOC building</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="footer-copy">
                                Copyright &copy; 2023, Designed &amp; Developed by <a>Mars services pvt. ltd.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>


    </>
    )
}
