import React, { Component } from 'react';
import GlanzLogo from '../images/glanz_logo.png';

class Navbar extends Component {
    render() {
        return (
            <div>
            <header>       

                <nav className="gla_light_nav gla_transp_nav">

                    <div className="container">
                        
                        <div className="gla_logo_container clearfix">
                            <img src={GlanzLogo} alt="" className="gla_logo_rev" />
                            <div className="gla_logo_txt">
                                <a href="/" className="gla_logo">Akshay &amp; Selena</a>
                                
                                <div className="gla_logo_und">August 10, 2019</div>
                            </div>
                        </div>

                        <div className="gla_main_menu gla_main_menu_mobile">
                            
                            <div className="gla_main_menu_icon">
                                <i></i><i></i><i></i><i></i>
                                <b>Menu</b>
                                <b className="gla_main_menu_icon_b">Back</b>
                            </div>
                        </div>
                        
                        <div className="gla_main_menu_content gla_image_bck main-img" data-color="rgba(0,0,0,0.9)">
                            <div className="gla_over" data-color="#000" data-opacity="0.7"></div>
                        </div>

                        <div className="gla_main_menu_content_menu gla_wht_txt text-right">
                            <div className="container">
                                <ul>
                                    <li className="gla_parent"><a href="#date">Date</a>
                                    
                                    </li>
    
                                    <li className="gla_parent"><a href="#story">Story</a>
                                        
                                    </li>
    
                                    <li className="gla_parent"><a href="#venue">Venue</a>
                                        
                                    </li>
    
                                    <li className="gla_parent"><a href="#gallery">Gallery</a>
                                        
                                    </li>

                                
                                </ul>
                                <div className="gla_main_menu_content_menu_copy">
                                    <br />
                                    <p>Made with <i className="ti ti-heart gla_icon_box"></i> by Abhas </p>
                                </div>
                            </div>
                        </div>

                        <div className="gla_default_menu">
                            <ul>
                                <li className="gla_parent"><a href="#date">Date</a>
                                    
                                </li>

                                <li className="gla_parent"><a href="#story">Story</a>
                                    
                                </li>

                                <li className="gla_parent"><a href="#venue">Venue</a>
                                    
                                </li>

                                <li className="gla_parent"><a href="#gallery">Gallery</a>
                                    
                                </li>
                            </ul>
                        </div>    
                    </div>
                </nav>
                
            </header>
            </div>
        );
    }
}

export default Navbar;