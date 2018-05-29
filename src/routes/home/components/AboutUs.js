import React from 'react'
import Link from '../../../components/Link'

class AboutUs extends React.Component {
  render () {
    const aboutUs = this.props.data.information.value.home.aboutUs
    const form = this.props.data.information.value.home.form
    return (
      <div className="container">
        <div className="row margin-bottom-60">
          <div className="col-sm-6">
            <h3 className="widget-title big lined">
              <span>{aboutUs.title}</span>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: aboutUs.body }} />
            <p>
              <Link to="/about" className="read-more">Xem thêm</Link>
            </p>
          </div>
          <div className="col-sm-6" id="quickQuoteForm_wrapper">
            <div className="featured-widget">
              <h3 className="widget-title">
                {form.header}
              </h3>
              <p>
                {form.body}
              </p>
              <form data-toggle="validator" method="post" action="form.php" id="quickQuoteForm" className="aSubmit">
                <div style={{display: 'none'}}><input type="text" name="maximus"  /></div>
                <input type="hidden" name="subject" defaultValue="CargoPress: Quick Quote Request" />
                <div className="contact-form-small">
                  <div className="row">
                    <div className="col-xs-12  col-md-6">
                      <div className="form-group">
                        <input type="text" placeholder="First and Last Name *" aria-invalid="false" aria-required="true" size={40}  name="name" required />
                      </div>
                      <div className="form-group">
                        <input type="email" placeholder="E-mail address" aria-invalid="false" aria-required="true" size={40}  name="email" required />
                      </div>
                      <div className="form-group">
                        <input type="text" placeholder="Phone" aria-invalid="false" aria-required="true" size={40}  name="phone" required />
                      </div>
                    </div>
                    <div className="col-xs-12  col-md-6">
                      <div className="form-group">
                        <input type="text" placeholder="Subject *" aria-invalid="false" aria-required="true" size={40}  name="subject" required />
                      </div>
                      <div className="form-group">
                        <textarea placeholder="Message *" aria-invalid="false" rows={10} cols={40} name="message" required defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-xs-12  col-md-12">
                      <input type="submit" className="btn btn-primary pull-right" defaultValue="GỬI TIN NHẮN" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs
