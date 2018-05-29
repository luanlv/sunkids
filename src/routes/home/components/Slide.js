import React from 'react';
import Link from '../../../components/Link'

class Slide extends React.Component {
  render() {
    const home = this.props.data.information.value.home
    return (
      <div className="jumbotron jumbotron--with-captions">
        <div data-interval={5000} data-ride="carousel" id="headerCarousel" className="carousel slide">
          <div className="carousel-inner">
            <div className="item">
              <img alt={home.slideTitle1} src={home.slideImg1} />
              <div className="container">
                <div className="jumbotron-content">
                  <div className="jumbotron-content__title">
                    <h1>{home.slideTitle1}</h1>
                  </div>
                  <div className="jumbotron-content__description">
                    <p className="p1">
                      <span className="s1">{home.slideBody1}</span>
                    </p>
                    <p>
                      <Link to="/service" className="btn btn-primary">DỊCH VỤ CỦA CHÚNG TÔI</Link> &nbsp;
                      <Link to="/contact" className="btn btn-secondary">LIÊN HỆ</Link>
                    </p>
                    <div className="w69b-screencastify-mouse" />
                  </div>
                </div>
              </div>
            </div>
            <div className="item active">
              <img alt={home.slideTitle2} src={home.slideImg2} />
              <div className="container">
                <div className="jumbotron-content">
                  <div className="jumbotron-content__title">
                    <h1>{home.slideTitle2}</h1>
                  </div>
                  <div className="jumbotron-content__description">
                    <p className="p1">
                      <span className="s1">{home.slideBody2}</span>
                    </p>
                    <Link target="_self" to="/about" className="btn btn-primary">CHI TIẾT</Link>
                    <div className="w69b-screencastify-mouse" />
                  </div>
                </div>
              </div>
            </div>{/* /.item */}
          </div>{/* /.carousel-inner */}
          <div className="container">
            <a data-slide="prev" role="button" href="#headerCarousel" className="left jumbotron__control">
              <i className="fa  fa-caret-left" />
            </a>
            <a data-slide="next" role="button" href="#headerCarousel" className="right jumbotron__control">
              <i className="fa  fa-caret-right" />
            </a>
          </div>
        </div>
      </div>


    );
  }
}

export default Slide;
