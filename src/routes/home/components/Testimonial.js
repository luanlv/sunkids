import React from 'react'

class Testimonial extends React.Component {
  render () {

    const testimonials = this.props.data.information.value.home.testimonials

    return (
      <div className="testimonials">
        <div className="container">
          <div className="row margin-bottom-60">
            <div className="col-sm-12">
              <div className="testimonial">
                <h3 className="widget-title lined big">
                  <span>KHÁCH HÀNG ĐÁNH GIÁ</span>
                </h3>
                <div className="testimonial__carousel">
                  <a data-slide="prev" href="#testimonalCarousel" className="testimonial__carousel--left">
                    <i aria-hidden="true" className="fa fa-caret-left" />
                    <span role="button" className="sr-only">Next</span>
                  </a>
                  <a data-slide="next" href="#testimonalCarousel" className="testimonial__carousel--right">
                    <i aria-hidden="true" className="fa fa-caret-right" />
                    <span role="button" className="sr-only">Previous</span>
                  </a>
                </div>
                <div data-interval="false" data-ride="carousel" className="carousel slide" id="testimonalCarousel">
                  <div role="listbox" className="carousel-inner">
                    <div className="item">
                      <div className="row">
                        <div className="col-xs-12  col-sm-6">
                          <blockquote>
                            <p className="testimonial__quote">
                              {testimonials.testimonial1}
                            </p>
                            <cite className="testimonial__author">
                              {testimonials.name1}<span className="testimonial__author-description">, {testimonials.job1}</span>
                            </cite>
                          </blockquote>
                        </div>
                        <div className="col-xs-12  col-sm-6">
                          <blockquote>
                            <p className="testimonial__quote">
                              {testimonials.testimonial2}
                            </p>
                            <cite className="testimonial__author">
                              {testimonials.name2}<span className="testimonial__author-description">, {testimonials.job2}</span>
                            </cite>
                          </blockquote>
                        </div>
                      </div>
                    </div>{/* /.item */}
                    <div className="item active">
                      <div className="row">
                        <div className="col-xs-12  col-sm-6">
                          <blockquote>
                            <p className="testimonial__quote">
                              {testimonials.testimonial3}
                            </p>
                            <cite className="testimonial__author">
                              {testimonials.name3}<span className="testimonial__author-description">, {testimonials.job3}</span>
                            </cite>
                          </blockquote>
                        </div>
                        <div className="col-xs-12  col-sm-6">
                          <blockquote>
                            <p className="testimonial__quote">
                              {testimonials.testimonial4}
                            </p>
                            <cite className="testimonial__author">
                              {testimonials.name4}<span className="testimonial__author-description">, {testimonials.job4}</span>
                            </cite>
                          </blockquote>
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
    )
  }
}

export default Testimonial
