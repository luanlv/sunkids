/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

import {Header, Footer} from '../Partial'
import LoadingBar from 'react-redux-loading-bar';

class Layout extends React.Component {

  componentDidMount() {
    if(process.env.BROWSER) {
      window.init();
    }
  }

  render() {
    return (<div>
      <LoadingBar showFastActions  maxProgress={80} progressIncrease={40} style={{ backgroundColor: 'red', zIndex: 1000, height: '2px' }} />


      <nav className="navbar navbar-custom navbar-fixed-top" id="navbar-custom">
        <div className="container">
          {/* Logo and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand">
              <i className="fa fa-bars" />
            </button>
            {/* Logo */}
            <div className="navbar-brand page-scroll" style={{}}>
              <a href="/"><img src="/themes/demo/assets/sunkids_logo.png" className="img-responsive" alt /></a>
            </div>
          </div>
          {/* /.navbar-header */}
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="navbar-brand">
            <ul className="nav navbar-nav page-scroll navbar-right">
              <li><a href="/">Trang chủ</a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Giới thiệu
                  <b className="caret" /></a>
                <ul className="dropdown-menu">
                  {/*<li><a href="/lich-su-phat-trien">Lịch sử phát triển</a></li>*/}
                  <li><a href="/p/co-so-vat-chat">Cơ sở vật chất</a></li>
                  <li><a href="/p/phuong-phap-giang-day">Phương pháp giảng dạy</a></li>
                  {/*<li><a href="#">Đội ngũ giáo viên</a></li>*/}
                  {/*<li><a href="/hop-tac-tuyen-sinh">Hợp tác tuyển sinh</a></li>*/}
                  <li><a href="/p/nhuong-quyen-thuong-hieu">Nhượng quyền thuơng hiệu</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Khóa học
                  <b className="caret" /></a>
                <ul className="dropdown-menu">
                  <li><a href="/p/tieng-anh-mam-non">Tiếng anh mầm non</a></li>
                  <li><a href="/p/tieng-anh-tieu-hoc">Tiếng anh tiểu học</a></li>
                  <li><a href="/p/tieng-anh-thieu-nien">Tiếng anh thiếu niên</a></li>
                </ul>
              </li>
              {/*<li><a href="/hoa-hoc">Khóa học</a></li>*/}
              <li><a href="/chi-nhanh">Chi nhánh</a></li>
              <li><a href="/tin-tuc">Tin tức</a></li>
              {/*<li><a href="#">Tuyển dụng</a></li>*/}
              <li><a href="/lien-he">Liên hệ</a></li>
              {/* <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Pages<b class="caret"></b></a>
                  <ul class="dropdown-menu">
                     <li><a href="blog.html">Blog Home</a></li>
                     <li><a href="blog-single.html">Blog Post</a></li>
                     <li><a href="elements.html">Elements</a></li>
                  </ul>
               </li> */}
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /container */}
      </nav>

      {this.props.children}

      <footer>
        <div className="container">
          <div className="col-md-4">
            <h6>Anh ngữ quốc tế Sunkids</h6>
            <p>
              Trực thuộc: CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN SUNKIDS VIỆT NAM
            </p>
          </div>
          {/* /.col-md-4 */}
          <div className="col-md-4 res-margin">
            <ul className="list-unstyled footer-icons">
              <li><i className="fa fa-phone" />0976.909.201-‭0169.876.3095</li>
              <li><i className="fa fa-envelope" />Email: <a href="mailto:Sunkidsvnedu@gmail.com">Sunkidsvnedu@gmail.com</a></li>
              <li><i className="fa fa-map-marker" /> 527 - Nguyễn Văn Linh - Phuờng An Tảo - TP Hưng Yên</li>
              <li><i className="fa fa-clock-o" />Thứ 2 - thứ 7 từ 08:00 sáng tới 21:00 tối</li>
            </ul>
          </div>
          {/* /.col-md-4 */}
          <div className="col-md-4 text-center">
            {/* Footer logo */}
            <img src="/themes/demo/assets/sunkids_logo.png" alt className="res-margin center-block img-responsive" />
            {/*Social icons */}
            <div className="social-media smaller">
              <a href="#" title><i className="fa fa-twitter" /></a>
              <a href="#" title><i className="fa fa-facebook" /></a>
              <a href="#" title><i className="fa fa-linkedin" /></a>
              <a href="#" title><i className="fa fa-pinterest" /></a>
              <a href="#" title><i className="fa fa-instagram" /></a>
            </div>
          </div>
          {/* Credits*/}
          <div className="credits col-md-12 text-center">
            <hr />
            Copyright © 2018 - Designed by <a href="#">Luận</a>
            {/* Go To Top Link */}
            <div className="page-scroll hidden-sm hidden-xs">
              <a href="#page-top" className="back-to-top"><i className="fa fa-angle-up" /></a>
            </div>
          </div>
        </div>
      </footer>

    </div>);
  }
}

export default Layout
