import React from 'react'
import Link from '../Link'
import * as C from './components/index'

class Header extends React.Component {
  render () {
    // const services = this.props.data.information.value.services
    // const common = this.props.data.information.value.common
    const en = this.props.data && this.props.data.lang === 'en'

    return (
      <div>

        <div className="wrapper-menu-mobile-background" />
        <div className="wrapper-menu-mobile">
          <div className="mb-social-wrapper">
            <div className="mb-socials">
              <ul className="list-unstyled list-inline">
                <li><a href="https://www.facebook.com/HappyGreen.vn/" className="link facebook"><i className="fa fa-facebook" /></a></li>
              </ul>
            </div>
            <div className="mb-button-close"><i className="icons fa fa-times" /></div>
            <div className="clearfix" />
          </div>

          <ul className="nav navbar-nav mb-nav">
            {!en && <li className="dropdown active"><a href="/" className="main-menu"><span className="text">Trang chủ</span></a></li>}
            {en && <li className="dropdown active"><a href="/" className="main-menu"><span className="text">Home</span></a></li>}

            {!en && <li className="dropdown active"><a href="/gioi-thieu" className="main-menu"><span className="text">Giới thiệu</span></a></li>}
            {en && <li className="dropdown active"><a href="/gioi-thieu" className="main-menu"><span className="text">About</span></a></li>}

            {!en && <li className="dropdown active"><a href="/cua-hang" className="main-menu"><span className="text">Sản phẩm</span></a></li>}
            {en && <li className="dropdown active"><a href="/cua-hang" className="main-menu"><span className="text">Product</span></a></li>}

            {/*<li className="dropdown active"><a href="#" className="main-menu"><span className="text">Hot Deal</span></a></li>*/}

            {!en && <li className="dropdown active"><a href="/tin-tuc" className="main-menu"><span className="text">Tin tức</span></a></li>}
            {en && <li className="dropdown active"><a href="/tin-tuc" className="main-menu"><span className="text">News</span></a></li>}

            {!en && <li className="dropdown active"><a href="/lien-he" className="main-menu"><span className="text">Liên hệ</span></a></li>}
            {en && <li className="dropdown active"><a href="/lien-he" className="main-menu"><span className="text">Contact</span></a></li>}
          </ul>
          {/*<div>*/}
            {/*<ul className="list-unstyled list-inline" style={{marginLeft: 35}}>*/}
              {/*{!en && <a href="?lang=en"><img src="/flag_en.jpg" alt=""/></a>}*/}
              {/*{en && <a href="?lang=vi"><img src="/flag_vn.jpg" alt=""/></a>}*/}
            {/*</ul>*/}
          {/*</div>*/}
        </div>


      </div>
    )
  }
}

export default Header
