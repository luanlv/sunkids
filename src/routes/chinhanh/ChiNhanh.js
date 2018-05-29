import React from 'react';

import {Title, BreadCrumb, Widget, FormEmail} from './components'

class Contact extends React.Component {
  render() {

    const contact = this.props.data.information.value.contact

    return (
      <div className="container" style={{paddingTop: 100}}>
        <h3 style={{color: 'orange', textAlign: 'center'}}>HỆ THỐNG CHI NHÁNH ĐÀO TẠO</h3>
        {/*<h4 className="sub-header">Accordions</h4>*/}
        <div className="col-md-10 col-md-offset-1">
        <div className="panel-group" id="accordion">

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false">
                  Sunkids Khoái Châu
                </a>
              </h6>
            </div>
            <div id="collapse2" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>Địa chỉ: Khu dãn dân - thị trấn Khoái Châu.</p>
                <h5 style={{textAlign: 'center'}}>Bản đồ</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14914.656587373818!2d105.96689523679275!3d20.845264380800383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ba79feda6c43%3A0x495ec61c8e98bfe6!2zQW4gVsSpLCBLaG_DoWkgQ2jDonUsIEh1bmcgWWVuLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1527556736669" frameBorder={0} style={{border: 0, width: '100%', height: 'auto'}} allowFullScreen />
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="false">
                  Sunkids Phố Hiến
                </a>
              </h6>
            </div>
            <div id="collapse1" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>Địa chỉ: 527 Nguyễn Văn Linh - Tp Hưng Yên.</p>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false">
                  Sunkids Văn Lâm
                </a>
              </h6>
            </div>
            <div id="collapse3" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>Địa chỉ: Chợ Đường Cái - Văn Lâm - Hy.</p>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false">
                  Sunkids Bô Thời
                </a>
              </h6>
            </div>
            <div id="collapse4" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>
                  Địa chỉ: Bô Thời - khoái Châu- Hy
                </p>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false">
                  Sunkids Mỹ Hào
                </a>
              </h6>
            </div>
            <div id="collapse5" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>
                  Địa chỉ: Bần - Mỹ Hào - Văn Lâm
                </p>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="false">
                  Sunkids Lạc Hồng
                </a>
              </h6>
            </div>
            <div id="collapse6" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>
                  Địa chỉ: Lạc Hồng - Văn Lâm - Hưng Yên
                </p>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse7" aria-expanded="false">
                  Sunkids Lạc Đạo
                </a>
              </h6>
            </div>
            <div id="collapse7" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>
                  Địa chỉ: Lạc Đạo -Văn Lâm - Hưng Yên
                </p>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse8" aria-expanded="false">
                  Sunkids Phú Xuyên
                </a>
              </h6>
            </div>
            <div id="collapse8" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>
                  Địa chỉ: Thi trấn Phú Xuyên - Hà Nội
                </p>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse9" aria-expanded="false">
                  Sunkids Hiệp Hoà
                </a>
              </h6>
            </div>
            <div id="collapse9" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>
                  Địa chỉ: Phố Thắng - Hiệp Hoà - Bắc Giang
                </p>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse10" aria-expanded="false">
                  Sunkids Mầm Non Vipkids
                </a>
              </h6>
            </div>
            <div id="collapse10" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>
                  Địa chỉ: Mầm non Vipkids - TP Hưng Yên
                </p>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-heading">
              <h6 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse11" aria-expanded="false">
                  Sunkids Mầm non Mayday
                </a>
              </h6>
            </div>
            <div id="collapse11" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
              <div className="panel-body">
                <p>
                  Địa chỉ: Mầm non Mayday - TP Hưng Yên
                </p>
              </div>
            </div>
          </div>

        </div>
        </div>
        {/* /.accordion */}
      </div>
    );
  }
}

export default Contact
