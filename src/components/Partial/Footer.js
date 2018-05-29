import React from 'react'
import Link from '../Link'

class Footer extends React.Component {
  render () {

    const services = this.props.data.information.value.services
    const common = this.props.data.information.value.common

    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <p>
                  <img alt="logo-footer" src={common.logo2} className="Colombus logo 2" />
                </p>
                <div dangerouslySetInnerHTML={{__html: common.footer1}}/>
                <p>
                  <a target="_blank" href={common.facebook} className="icon-container icon-container--square">
                    <span className="fa fa-facebook" />
                  </a>
                  <a target="_blank" href={common.google} className="icon-container icon-container--square">
                    <span className="fa fa-youtube-play" />
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-md-2">
                <div className="widget_nav_menu">
                  <h6 className="footer-top__headings">DỊCH VỤ</h6>
                  <ul>
                    <li>
                      <Link to="/service">Tất cả dịch vụ</Link>
                    </li>

                    <li>
                      <Link to={"/service/" + services.groundtransport.slug}>{services.groundtransport.title}</Link>
                    </li>
                    <li>
                      <Link to={"/service/" + services.cargo.slug}>{services.cargo.title}</Link>
                    </li>
                    <li>
                      <Link to={"/service/" + services.warehousing.slug}>{services.warehousing.title}</Link>
                    </li>
                    <li>
                      <Link to={"/service/" + services.logisticservice.slug}>{services.logisticservice.title}</Link>
                    </li>
                    <li>
                      <Link to={"/service/" + services.trackingservice.slug}>{services.trackingservice.title}</Link>
                    </li>
                    <li>
                      <Link to={"/service/" + services.storage.slug}>{services.storage.title}</Link>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <h6 className="footer-top__headings">Liên Hệ</h6>
                <div dangerouslySetInnerHTML={{__html: common.footer2}}/>
                <p>
                  <Link to="/contact#form" className="btn btn-info">Gửi tin nhắn</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom__left">
              {/*Made by <a target="_blank" href="http://vnguy.com">VnGuy.Com</a>*/}
            </div>
            <div className="footer-bottom__right">
              Copyright © 2017 Colombus.Vn. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
