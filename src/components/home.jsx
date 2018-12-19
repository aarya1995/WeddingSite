import React, { Component } from 'react';
import Navbar from './navbar';
import '../css/glanz_library.css';
import '../fonts/themify-icons.css';
import '../css/glanz_style.css';
import '../css/style.css';
import '../fonts/marsha/stylesheet.css';
import OurWeddingGif from '../images/animations/ourwedding_wh.gif';
import FlowerGif from '../images/animations/flowers.gif';
import MrMrsGif from '../images/animations/mrandmrs.gif';
import JustWhGif from '../images/animations/savethedate_wh.gif';

class Home extends Component {
    render() {
        return (
            <div className="gla_middle_titles">
                <div className="gla_page" id="gla_page">
                    { this.renderNavbar() }
                    { this.renderHeader() }
                    <section id="gla_content" className="gla_content">
                        { this.renderWhere() }
                        { this.renderStory() }
                        { this.renderDetails() }
                        { this.renderQuote() }
                    </section>
                </div>
            </div>
        );
    }

    renderNavbar = () => {
        return <Navbar />;
    };

    renderHeader = () => {
        return (
            <div className="main-img gla_slider gla_image_bck  gla_wht_txt gla_fixed" data-stellar-background-ratio="0.8">
                <div className="gla_over" data-color="#9abab6" data-opacity="0.2"></div>
                <div className="container">
                    <div className="gla_slide_txt gla_slide_center_bottom text-center">
                        <p><img src={OurWeddingGif} alt="" height="150" /></p>
                    </div>   
                </div>
                <a className="gla_scroll_down gla_go" href="#gla_content">
                    <b></b>
                    Scroll
                </a>


            </div>
        );
    };

    renderWhere = () => {
        return (
            <section className="gla_section"> 
                <div className="container text-center">
                    <div className="row text-center">
                        <div className="col-md-4 gla_round_block">
                            <div className="akshay-headshot gla_round_im gla_image_bck"></div>
                            <h3>Akshay Kumar</h3>
                        </div>
                        <div className="col-md-4 gla_round_block">
                            <p><img src={MrMrsGif} height="150" alt="" /></p>
                    
                            <h3>Are getting married<br/>on August 10, 2017</h3>

                            St. Thomas's Church,<br/>Bristol, U.K.
                        </div>
                        <div className="col-md-4 gla_round_block">
                            <div className="selena-headshot gla_round_im gla_image_bck"></div>
                            <h3>Selena Lee</h3>
                        </div>
                    </div>
                    <div className="gla_countdown" data-year="2019" data-month="08" data-day="10"></div>
                </div>
            </section>
        );
    }

    renderStory = () => {
        return (
            <section className="gla_section gla_image_bck" data-color="#ecf2f0">
                <div className="container">
                    <div className="text-center">
                        <p><img src={FlowerGif} height="150" alt=""/></p>
                        <h2>The Engagement</h2>
                    </div>
                    <div className="row gla_auto_height">
                        <div className="col-md-6 gla_image_bck" data-color="#fff">
                            <div className="gla_simple_block">
                                <h2 className="normal_font">Akshay Kumar</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio mollitia, ipsa accusamus eius. Aspernatur ab sed minima, doloremque eligendi voluptatibus repellat unde, facilis natus ex ipsum eius atque suscipit fugit.</p>
                                <div className="gla_footer_social">
                                    <a href="#"><i className="ti ti-facebook gla_icon_box"></i></a>
                                    <a href="#"><i className="ti ti-instagram gla_icon_box"></i></a>
                                    <a href="#"><i className="ti ti-google gla_icon_box"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 gla_image_bck couple1">
                            
                        </div>
                        <div className="col-md-6 col-md-push-6 gla_image_bck" data-color="#fff">
                            <div className="gla_simple_block">
                                <h2 className="normal_font">Selena Lee</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio mollitia, ipsa accusamus eius. Aspernatur ab sed minima, doloremque eligendi voluptatibus repellat unde, facilis natus ex ipsum eius atque suscipit fugit.</p>
                                <div className="gla_footer_social">
                                    <a href="#"><i className="ti ti-facebook gla_icon_box"></i></a>
                                    <a href="#"><i className="ti ti-instagram gla_icon_box"></i></a>
                                    <a href="#"><i className="ti ti-google gla_icon_box"></i></a>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6 col-md-pull-6 gla_image_bck couple2">
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    };

    renderDetails = () => {
        return (
            <section className="gla_section">
                <div className="container text-center">
                    <h2>When &amp; Where</h2>
                    <div className="gla_icon_boxes row text-left">
                        <div className="col-md-6 col-sm-6">
                            <a href="#" className="gla_news_block">
                                <span className="gla_news_img">
                                    <span className="gla_over" data-image="http://placehold.it/600x600"></span>  
                                </span>
                                <span className="gla_news_title">Wedding Ceremony</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa similique porro officiis nobis nulla quidem nihil iste veniam ut sit, maiores. <br/><b>10 August, 2017, St. Thomas's Church, <br/>Bristol, U.K.</b></p>
                            </a>
                        </div> 
                        <div className="col-md-6 col-sm-6">
                            <a href="#" className="gla_news_block">
                                <span className="gla_news_img">
                                    <span className="gla_over" data-image="http://placehold.it/600x600"></span>  
                                </span>
                                <span className="gla_news_title">Wedding Party</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa similique porro officiis nobis nulla quidem nihil iste veniam ut sit, maiores. <br/><b>10 August, 2017, St. Thomas's Church, <br/>Bristol, U.K.</b></p>
                            </a>
                        </div> 

                        

                    </div>                 
                </div>
            </section>
        );
    };

    renderQuote = () => {
        return (
            <section className="gla_section gla_wht_txt quote-bg" data-stellar-background-ratio="0.8">
                <div className="gla_over" data-color="#282828" data-opacity="0.4"></div>
                
                <div className="container text-center">
                    <p><img src={JustWhGif} height="150" alt=""/></p>
                    <h3>You’re wonderful. Can you be wonderful forever?"</h3>
                    <p className="gla_subtitle">— Brennan. A true master of words.</p>
                </div>
            </section>
        );
    };
}

export default Home;