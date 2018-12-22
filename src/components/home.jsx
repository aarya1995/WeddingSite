import React, { Component } from 'react';
import Navbar from './navbar';
import '../css/glanz_library.css';
import '../fonts/themify-icons.css';
import '../css/glanz_style.css';
import '../css/style.css';
import '../fonts/marsha/stylesheet.css';
import OurWeddingGif from '../images/animations/ourwedding_wh.gif';
import FlowerGif from '../images/animations/flowers.gif';
import Flower3Gif from '../images/animations/flowers3.gif';
import MrMrsGif from '../images/animations/mrandmrs.gif';
import JustWhGif from '../images/animations/savethedate_wh.gif';
import ThankyouGif from '../images/animations/thnyou_wh.gif';

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
                        { this.renderGallery() }
                        { this.renderThankyou() }
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
            <div className="gla_slider gla_image_bck  gla_wht_txt gla_fixed" data-image="https://c1.staticflickr.com/5/4805/46390311681_0d69715512_b.jpg" data-stellar-background-ratio="0.8">
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
            <section className="gla_section" id="date"> 
                <div className="container text-center">
                    <div className="row text-center">
                        <div className="col-md-4 gla_round_block">
                            <div className="gla_round_im gla_image_bck" data-image="https://c2.staticflickr.com/8/7845/32543774558_873383369b_b.jpg"></div>
                            <h3>Akshay Kumar</h3>
                        </div>
                        <div className="col-md-4 gla_round_block">
                            <p><img src={MrMrsGif} height="150" alt="" /></p>
                    
                            <h3>Are getting married<br/>on August 10, 2019</h3>

                            Napa Valley Vineyards<br/>CA
                        </div>
                        <div className="col-md-4 gla_round_block">
                            <div className="gla_round_im gla_image_bck" data-image="https://c1.staticflickr.com/5/4864/46365048662_bdbc950a47_b.jpg"></div>
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
            <section className="gla_section gla_image_bck" data-color="#ecf2f0" id="story">
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
                            </div>
                        </div>
                        <div className="col-md-6 gla_image_bck" data-image="https://c1.staticflickr.com/5/4888/31476161497_61c4a5caa7_b.jpg">
                            
                        </div>
                        <div className="col-md-6 col-md-push-6 gla_image_bck" data-color="#fff">
                            <div className="gla_simple_block">
                                <h2 className="normal_font">Selena Lee</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio mollitia, ipsa accusamus eius. Aspernatur ab sed minima, doloremque eligendi voluptatibus repellat unde, facilis natus ex ipsum eius atque suscipit fugit.</p>
                            </div>
                            
                        </div>
                        <div className="col-md-6 col-md-pull-6 gla_image_bck" data-image="https://c2.staticflickr.com/8/7860/45503327645_e33cfccf21_b.jpg">
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    };

    renderDetails = () => {
        return (
            <section className="gla_section" id="venue">
                <div className="container text-center">
                    <h2>When &amp; Where</h2>
                    <div className="gla_icon_boxes row text-left">
                        <div className="col-md-6 col-sm-6">
                            <a href="#" className="gla_news_block">
                                <span className="gla_news_img">
                                    <span className="gla_over" data-image="https://c2.staticflickr.com/8/7884/31476160367_70651f0c6f_o.jpg"></span>  
                                </span>
                                <span className="gla_news_title">Wedding Ceremony</span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa similique porro officiis nobis nulla quidem nihil iste veniam ut sit, maiores. <br/><b>10 August, 2017, St. Thomas's Church, <br/>Bristol, U.K.</b></p>
                            </a>
                        </div> 
                        <div className="col-md-6 col-sm-6">
                            <a href="#" className="gla_news_block">
                                <span className="gla_news_img">
                                    <span className="gla_over" data-image="https://c1.staticflickr.com/5/4889/45692620024_fc0ccc48f5_o.jpg"></span>  
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
            <section className="gla_section gla_image_bck gla_fixed gla_wht_txt" data-stellar-background-ratio="0.8" data-image="https://c2.staticflickr.com/8/7883/44598947050_6eee8008cb_b.jpg">
                <div className="gla_over" data-color="#282828" data-opacity="0.4"></div>
                
                <div className="container text-center">
                    <p><img src={JustWhGif} height="150" alt=""/></p>
                    <h3>You’re wonderful. Can you be wonderful forever?"</h3>
                    <p className="gla_subtitle">— Abhas. A true master of words.</p>
                </div>
            </section>
        );
    };

    renderGallery = () => {
        return (
            <section className="gla_section gla_image_bck" id="gallery">
            <div className="container text-center">
                <p><img src={Flower3Gif} height="130" alt=""/></p>
                <h2>Gallery</h2>
                
                <div className="button-group filter-button-group">
                    <a data-filter=".engagement">Engagement</a>
                </div>
                <div className="gla_portfolio_no_padding grid">
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4901/45666947864_fe3874cb21_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4901/45666947864_fe3874cb21_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4833/45666936684_4476b764c1_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4833/45666936684_4476b764c1_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4825/45666934204_996d11b996_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4825/45666934204_996d11b996_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4805/44573153590_eda1ca0c2a_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4805/44573153590_eda1ca0c2a_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4914/45666939594_8825f3326b_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4914/45666939594_8825f3326b_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4886/45666938234_786af65391_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4886/45666938234_786af65391_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4851/46390312681_8e4e01c05e_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4851/46390312681_8e4e01c05e_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4808/45477707295_e70f342580_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4808/45477707295_e70f342580_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4892/45477706225_50d6367784_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4892/45477706225_50d6367784_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4855/46390313641_a684367558_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4855/46390313641_a684367558_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4882/44573174540_24b8ea8f13_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4882/44573174540_24b8ea8f13_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4900/46390316611_408eb86d43_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4900/46390316611_408eb86d43_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4891/45477713745_58c3571f2d_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4891/45477713745_58c3571f2d_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4871/45477714605_24e0be8154_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4871/45477714605_24e0be8154_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 gla_anim_box grid-item engagement">
                        <div className="gla_shop_item">
                            <a href="https://c1.staticflickr.com/5/4901/45666947864_fe3874cb21_b.jpg" className="lightbox">
                                <img src="https://c1.staticflickr.com/5/4901/45666947864_fe3874cb21_b.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
        );
    };

    renderThankyou = () => {
        return (
            <section className="gla_section gla_image_bck gla_fixed gla_wht_txt" data-stellar-background-ratio="0.8" data-image="https://c2.staticflickr.com/8/7839/31476159217_ee8a169282_b.jpg">
                <div className="gla_over" data-color="#282828" data-opacity="0.4"></div>
                <div className="container text-center">
                    <p><img src={ThankyouGif} alt="" height="200"/></p>
                </div>
            </section>
        );
    };
}

export default Home;