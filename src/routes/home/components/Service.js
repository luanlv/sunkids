import React from 'react'
import Link from '../../../components/Link'

class Service extends React.Component {

  render () {

    const home = this.props.data.information.value.home
    const services = this.props.data.information.value.services

    return (
      <div className="container" role="main">
        <div className="row jumbotron-overlap first">
          <div className="col-sm-3">
            <div className="featured-widget">
              <h3 className="widget-title">{home.aboutTitle}</h3>
              <p>
                {home.aboutBody}
              </p>
              <p>
                <Link className="read-more" to="/about">XEM THÊM</Link>
              </p>
            </div>
          </div>
          <div className="col-sm-3">
            <Link to={home.about1.path}>
              <img alt={home.about1.title} className="post-image"  src={home.about1.img} />
            </Link>
            <h5 className="page-box__title"><Link to={home.about1.path}>{home.about1.title}</Link></h5>
            <p>
              {home.about1.body} ...
            </p>
            <p>
              <Link className="read-more" to={home.about1.path}>Xem thêm</Link>
            </p>
          </div>

          <div className="col-sm-3">
            <Link to={home.about2.path}>
              <img alt={home.about2.title} className="post-image"  src={home.about2.img} />
            </Link>
            <h5 className="page-box__title"><Link to={home.about2.path}>{home.about2.title}</Link></h5>
            <p>
              {home.about2.body} ...
            </p>
            <p>
              <Link className="read-more" to={home.about2.path}>Xem thêm</Link>
            </p>
          </div>

          <div className="col-sm-3">
            <Link to={home.about3.path}>
              <img alt={home.about3.title} className="post-image"  src={home.about3.img} />
            </Link>
            <h5 className="page-box__title"><Link to={home.about3.path}>{home.about3.title}</Link></h5>
            <p>
              {home.about3.body} ...
            </p>
            <p>
              <Link className="read-more" to={home.about3.path}>Xem thêm</Link>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h3 className="widget-title big lined">
              <span>CÁC DỊCH VỤ CỦA CHÚNG TÔI</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="widget_pw_icon_box margin-bottom-30">
              <Link  to={home.service1.path} className="icon-box">
                <i className="fa fa-dropbox" />
                <h4 className="icon-box__title">{home.service1.title}</h4>
                <span className="icon-box__subtitle">{home.service1.description}</span>
              </Link>
            </div>
            <div className="widget_pw_icon_box margin-bottom-30">
              <Link to={home.service2.path} className="icon-box">
                <i className="fa fa-archive" />
                <h4 className="icon-box__title">{home.service2.title}</h4>
                <span className="icon-box__subtitle">{home.service2.description}</span>
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="widget_pw_icon_box margin-bottom-30">
              <Link to={home.service3.path} className="icon-box">
                <i className="fa fa-truck" />
                <h4 className="icon-box__title">{home.service3.title}</h4>
                <span className="icon-box__subtitle"> {home.service3.description} </span>
              </Link>
            </div>
            <div className="widget widget_pw_icon_box margin-bottom-30">
              <Link to={home.service4.path} className="icon-box">
                <i className="fa fa-home" />
                <h4 className="icon-box__title"> {home.service4.title} </h4>
                <span className="icon-box__subtitle">{home.service4.description}</span>
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="widget_pw_icon_box margin-bottom-30">
              <Link to={home.service5.path} className="icon-box">
                <i className="fa fa-truck" />
                <h4 className="icon-box__title">{home.service5.title}</h4>
                <span className="icon-box__subtitle"> {home.service5.description} </span>
              </Link>
            </div>
            <div className="widget widget_pw_icon_box margin-bottom-30">
              <Link to={home.service6.path} className="icon-box">
                <i className="fa fa-home" />
                <h4 className="icon-box__title"> {home.service6.title} </h4>
                <span className="icon-box__subtitle">{home.service6.description}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Service
