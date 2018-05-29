import React from 'react';

import {Title, BreadCrumb, Widget, FormEmail} from './components'

class Contact extends React.Component {
  render() {

    const contact = this.props.data.information.value.contact

    return (
      <div>
        <section id="contact" className="bg-lightcolor1 container-fluid nobg-small">
          {/* Parallax object */}
          <div className="parallax-object1 hidden-sm hidden-xs" data-0="opacity:1;" data-100="transform:translatex(-310%);" data-center-center="transform:translatex(30%);">
            {/* Image */}
            <img src="/themes/demo/assets/img/birdornament.png" alt />
          </div>
          {/* Section heading */}
          <div className="section-heading margin1">
            <h2>Liên hệ</h2>
            {/* divider */}
            <div className="hr" />
          </div>
          {/* Contact */}
          <div className="container">
            {/* Contact Form */}
            <div className="col-md-5">
              {/* Form Starts */}
              <div id="contact_form">
                <h4>Gửi liên hệ</h4>
                <div className="form-group">
                  <label>Họ tên:</label><input type="text" name="name" className="form-control input-field" required />
                  <label>Email:</label><input type="email" name="email" className="form-control input-field" required />
                  <label>Tựa đề:</label><input type="text" name="subject" className="form-control input-field" required />
                </div>
                <label>Lời nhắn:</label>
                <textarea name="message" id="message" className="textarea-field form-control" rows={4} required defaultValue={""} />
                <button type="submit" id="submit_btn" value="Submit" className="btn center-block">
                  Gửi liên hệ
                </button>
              </div>
              {/* Contact results */}
              <div id="contact_results" />
            </div>
            <div className="res-margin">
              <div className="col-md-6 col-md-offset-1 well text-center">
                <h4>Hoặc bạn có thể liên hệ qua</h4>
                {/* contact info */}
                <div className="contact-info ">
                  <p><i className="fa fa-envelope margin-icon" /><a href="mailto:daycare@emailsite.com">sunkidsvn@gmail.com</a></p>
                  <p><i className="fa fa-phone margin-icon" />Hotline: 0976.909.201-‭0221 6521999</p>
                  <p><i className="fa fa-map-marker margin-icon" />Địa chỉ: Khu giãn dân An Vỹ- Khoái Châu - Hưng Yên</p>
                </div>
              </div>
            </div>
            {/* /res-margin */}
          </div>
          {/* /container */}
        </section>
      </div>
    );
  }
}

export default Contact
