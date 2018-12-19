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
                                
                                <div className="gla_logo_und">August 10, 2017</div>
                            </div>
                        </div>

                        <div className="gla_main_menu gla_main_menu_mobile">
                            
                            <div className="gla_main_menu_icon">
                                <i></i><i></i><i></i><i></i>
                                <b>Menu</b>
                                <b className="gla_main_menu_icon_b">Back</b>
                            </div>
                        </div>
                        
                        <div className="gla_main_menu_content gla_image_bck" data-color="rgba(0,0,0,0.9)" data-image="http://placehold.it/1400x800">
                            <div className="gla_over" data-color="#000" data-opacity="0.7"></div>
                        </div>

                        <div className="gla_main_menu_content_menu gla_wht_txt text-right">
                            <div className="container">
                                <ul>
                                    <li className="gla_parent"><a href="#">Demos</a>
                                        <ul>
                                            <li><a href="01_01_home_simple_flowers.html">Home 1 - Animated Flowers</a></li>
                                            <li><a href="01_02_home_pink_flowers.html">Home 2- Pink Animated Flowers</a></li>
                                            <li><a href="01_03_home_golden.html">Home 3 - Golden Badges</a></li>
                                            <li><a href="01_04_home_flbg.html">Home 4 - Great Flowers</a></li>
                                            <li><a href="01_05_home_flbg.html">Home 5 - Great Flowers</a></li>
                                            <li><a href="01_06_home_flbg.html">Home 6 - Great Flowers</a></li>
                                            <li><a href="01_10_home_parallax.html">Home 7 - Parallax</a></li>
                                            <li><a href="01_09_home_land.html">Home 8 - Landing</a></li>
                                        </ul>
                                    </li>

                                    <li className="gla_parent"><a href="#">Business</a>
                                        <ul>
                                            <li><a href="01_07_wedding_planner.html">Wedding Planner</a></li>
                                            <li><a href="01_08_wedding_flowers.html">Wedding Flowers</a></li>
                                            <li><a href="01_11_wedding_cakes.html">Wedding Cakes</a></li>
                                        </ul>
                                    </li>

                                    <li className="gla_parent"><a href="#">Invitations</a>
                                        <ul>
                                            <li><a href="02_01_invitation.html">Invitation 1</a></li>
                                            <li><a href="02_02_invitation.html">Invitation 2</a></li>
                                            <li><a href="02_03_invitation.html">Invitation 3</a></li>
                                            <li><a href="02_04_invitation.html">Invitation 4</a></li>
                                        </ul>
                                    </li>

                                    <li className="gla_parent"><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="03_01_blog_sidebar.html">Blog with Sidebar</a></li>
                                            <li><a href="03_02_blog_1col.html">Blog Full Width</a></li>
                                            <li><a href="03_03_blog_single_sidebar.html">Single Post with Sidebar</a></li>
                                            <li><a href="03_04_blog_single_col1.html">Single Post Full Width</a></li>
                                        </ul>
                                    </li>
                                    <li className="gla_parent"><a href="#">Shop</a>
                                        <ul>
                                            <li><a href="04_01_shop_category_col1.html">Shop Category</a></li>
                                            <li><a href="04_02_shop_category_sidebar.html">Shop Category with Sidebar</a></li>
                                            <li><a href="04_03_shop_single_sidebar.html">Shop Item Page</a></li>
                                            <li><a href="04_04_shop_cart.html">Shop Cart</a></li>
                                            <li><a href="04_05_shop_checkout.html">Shop Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li className="gla_parent"><a href="#">Elements</a>
                                        <ul className="mega-menu">
                                            
                                            <li className="mega-menu-col">
                                                <ul>
                                                    <li className="mega-menu-col-header">Shortcodes</li>
                                                    <li><a href="05_01_shortcodes.html#accordions"><i className="ti ti-layout-accordion-separated"></i> Accordions</a></li>
                                                    <li><a href="05_01_shortcodes.html#tabs"><i className="ti ti-layout-tab"></i> Tabs</a></li>
                                                    <li><a href="05_01_shortcodes.html#buttons"><i className="ti ti-layout-grid2"></i> Buttons</a></li>
                                                    <li><a href="05_01_shortcodes.html#labels"><i className="ti ti-comment"></i> Labels</a></li>
                                                    <li><a href="05_01_shortcodes.html#alerts"><i className="ti ti-alert"></i> Alerts</a></li>
                                                    <li><a href="05_01_shortcodes.html#lightbox"><i className="ti ti-plus"></i> Lightbox</a></li>
                                                    <li><a href="05_01_shortcodes.html#progress_bars"><i className="ti ti-layout-list-post"></i> Progress Bars</a></li>
                                                    <li><a href="05_01_shortcodes.html#counters"><i className="ti ti-timer"></i> Counters &amp; Charts</a></li>
                                                    <li><a href="05_01_shortcodes.html#twitter"><i className="ti ti-twitter"></i> Twitter Feeds</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-col">
                                                <ul>
                                                    <li className="mega-menu-col-header">Wedding Elements</li>
                                                    <li><a href="05_14_when_where.html">When &amp; Where Blocks</a></li>
                                                    <li><a href="05_15_friends.html">Friends Blocks</a></li>
                                                    <li><a href="05_16_about.html">About Us Blocks</a></li>
                                                    <li><a href="05_17_save.html">Save the Date Blocks</a></li>
                                                    <li><a href="05_18_rsvp.html">RSVP Blocks</a></li>
                                                    <li><a href="05_19_badges.html">All Animated Badges</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-col">
                                                <ul>
                                                    <li className="mega-menu-col-header">Other</li>
                                                    <li><a href="05_02_testimonials.html">Testimonials Page</a></li>
                                                    <li><a href="05_03_passpartu.html">Passpartu Page</a></li>
                                                    <li><a href="05_04_preloader.html">Preloader Page</a></li>
                                                    <li><a href="05_05_videointro.html">Video Intro Page</a></li>
                                                    <li><a href="05_06_video_slider.html">Video Slider Page</a></li>
                                                    <li><a href="05_07_video_section.html">Video Section Page</a></li>
                                                    <li><a href="05_08_slider.html">Slider Page</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-col">
                                                <ul>
                                                    <li className="mega-menu-col-header">Headers &amp; Footers</li>
                                                    <li><a href="05_09_header_transparent.html">Transparent Header</a></li>
                                                    <li><a href="05_10_header_white.html">White Header</a></li>
                                                    <li><a href="05_11_header_black.html">Black Header</a></li>
                                                    <li><a href="05_12_header_image.html">Image Header</a></li>
                                                    <li><a href="05_13_footers.html#grey">Grey Footer</a></li>
                                                    <li><a href="05_13_footers.html#black">Black Footer</a></li>
                                                    <li><a href="05_13_footers.html#white">White Footer</a></li>
                                                    <li><a href="05_13_footers.html#simple">Simple Footer</a></li>
                                                </ul>
                                            </li>

                                            
                                        </ul>
                                    </li>

                                
                                </ul>
                                <div className="gla_main_menu_content_menu_copy">
                                    <br />
                                    <p>© GlanzThemes 2017</p>
                                    <div className="gla_footer_social">
                                        <a href="#"><i className="ti ti-facebook gla_icon_box"></i></a>
                                        <a href="#"><i className="ti ti-instagram gla_icon_box"></i></a>
                                        <a href="#"><i className="ti ti-google gla_icon_box"></i></a>
                                        <a href="#"><i className="ti ti-youtube gla_icon_box"></i></a>
                                        <a href="#"><i className="ti ti-twitter gla_icon_box"></i></a>
                                        <a href="#"><i className="ti ti-pinterest gla_icon_box"></i></a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="gla_default_menu">
                            <ul>
                                <li className="gla_parent"><a href="#">Demos</a>
                                    <ul>
                                        <li><a href="01_01_home_simple_flowers.html">Home 1 - Animated Flowers</a></li>
                                        <li><a href="01_02_home_pink_flowers.html">Home 2- Pink Animated Flowers</a></li>
                                        <li><a href="01_03_home_golden.html">Home 3 - Golden Badges</a></li>
                                        <li><a href="01_04_home_flbg.html">Home 4 - Great Flowers</a></li>
                                        <li><a href="01_05_home_flbg.html">Home 5 - Great Flowers</a></li>
                                        <li><a href="01_06_home_flbg.html">Home 6 - Great Flowers</a></li>
                                        <li><a href="01_10_home_parallax.html">Home 7 - Parallax</a></li>
                                        <li><a href="01_09_home_land.html">Home 8 - Landing</a></li>
                                    </ul>
                                </li>

                                <li className="gla_parent"><a href="#">Business</a>
                                    <ul>
                                        <li><a href="01_07_wedding_planner.html">Wedding Planner</a></li>
                                        <li><a href="01_08_wedding_flowers.html">Wedding Flowers</a></li>
                                        <li><a href="01_11_wedding_cakes.html">Wedding Cakes</a></li>
                                    </ul>
                                </li>

                                <li className="gla_parent"><a href="#">Invitations</a>
                                    <ul>
                                        <li><a href="02_01_invitation.html">Invitation 1</a></li>
                                        <li><a href="02_02_invitation.html">Invitation 2</a></li>
                                        <li><a href="02_03_invitation.html">Invitation 3</a></li>
                                        <li><a href="02_04_invitation.html">Invitation 4</a></li>
                                    </ul>
                                </li>

                                <li className="gla_parent"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="03_01_blog_sidebar.html">Blog with Sidebar</a></li>
                                        <li><a href="03_02_blog_1col.html">Blog Full Width</a></li>
                                        <li><a href="03_03_blog_single_sidebar.html">Single Post with Sidebar</a></li>
                                        <li><a href="03_04_blog_single_col1.html">Single Post Full Width</a></li>
                                    </ul>
                                </li>
                                <li className="gla_parent"><a href="#">Shop</a>
                                    <ul>
                                        <li><a href="04_01_shop_category_col1.html">Shop Category</a></li>
                                        <li><a href="04_02_shop_category_sidebar.html">Shop Category with Sidebar</a></li>
                                        <li><a href="04_03_shop_single_sidebar.html">Shop Item Page</a></li>
                                        <li><a href="04_04_shop_cart.html">Shop Cart</a></li>
                                        <li><a href="04_05_shop_checkout.html">Shop Checkout</a></li>
                                    </ul>
                                </li>
                                <li className="gla_parent"><a href="#">Elements</a>
                                    <ul className="mega-menu">

                                        <li className="mega-menu-col">
                                            <ul>
                                                <li className="mega-menu-col-header">Wedding Elements</li>
                                                <li><a href="05_14_when_where.html">When &amp; Where Blocks</a></li>
                                                <li><a href="05_15_friends.html">Friends Blocks</a></li>
                                                <li><a href="05_16_about.html">About Us Blocks</a></li>
                                                <li><a href="05_17_save.html">Save the Date Blocks</a></li>
                                                <li><a href="05_18_rsvp.html">RSVP Blocks</a></li>
                                                <li><a href="05_19_badges.html">All Animated Badges</a></li>
                                            </ul>
                                        </li>
                                        
                                        <li className="mega-menu-col">
                                            <ul>
                                                <li className="mega-menu-col-header">Shortcodes</li>
                                                <li><a href="05_01_shortcodes.html#accordions"><i className="ti ti-layout-accordion-separated"></i> Accordions</a></li>
                                                <li><a href="05_01_shortcodes.html#tabs"><i className="ti ti-layout-tab"></i> Tabs</a></li>
                                                <li><a href="05_01_shortcodes.html#buttons"><i className="ti ti-layout-grid2"></i> Buttons</a></li>
                                                <li><a href="05_01_shortcodes.html#labels"><i className="ti ti-comment"></i> Labels</a></li>
                                                <li><a href="05_01_shortcodes.html#alerts"><i className="ti ti-alert"></i> Alerts</a></li>
                                                <li><a href="05_01_shortcodes.html#lightbox"><i className="ti ti-plus"></i> Lightbox</a></li>
                                                <li><a href="05_01_shortcodes.html#progress_bars"><i className="ti ti-layout-list-post"></i> Progress Bars</a></li>
                                                <li><a href="05_01_shortcodes.html#counters"><i className="ti ti-timer"></i> Counters &amp; Charts</a></li>
                                                <li><a href="05_01_shortcodes.html#twitter"><i className="ti ti-twitter"></i> Twitter Feeds</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-col">
                                            <ul>
                                                <li className="mega-menu-col-header">Other</li>
                                                <li><a href="05_02_testimonials.html">Testimonials Page</a></li>
                                                <li><a href="05_04_preloader.html">Preloader Page</a></li>
                                                <li><a href="05_05_videointro.html">Video Intro Page</a></li>
                                                <li><a href="05_06_video_slider.html">Video Slider Page</a></li>
                                                <li><a href="05_07_video_section.html">Video Section Page</a></li>
                                                <li><a href="05_08_slider.html">Slider Page</a></li>
                                            </ul>
                                        </li>
                                        <li className="mega-menu-col">
                                            <ul>
                                                <li className="mega-menu-col-header">Headers &amp; Footers</li>
                                                <li><a href="05_09_header_transparent.html">Transparent Header</a></li>
                                                <li><a href="05_10_header_white.html">White Header</a></li>
                                                <li><a href="05_11_header_black.html">Black Header</a></li>
                                                <li><a href="05_12_header_image.html">Image Header</a></li>
                                                <li><a href="05_13_footers.html#grey">Grey Footer</a></li>
                                                <li><a href="05_13_footers.html#black">Black Footer</a></li>
                                                <li><a href="05_13_footers.html#white">White Footer</a></li>
                                                <li><a href="05_13_footers.html#simple">Simple Footer</a></li>
                                            </ul>
                                        </li>

                                        
                                    </ul>
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