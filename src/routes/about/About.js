import React from 'react';

import {Title, BreadCrumb} from './components'

class About extends React.Component {

  render() {

    const about = this.props.data.information.value.about

    return (
      <div>
        <div className="main-contents">
          {/* Breadcrumb*/}
          <section className="banner about">
            <div className="container">
              <div className="morepage-banner">
                <h2 className="title">Happy Green</h2>
              </div>
            </div>
          </section>
          {/* history*/}
          <section className="history padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                <h1 className="title">Câu chuyện Happy Green</h1></div>
              <div className="main-content">
                <div className="tab-vertical">
                  <div className="tab-list-wrapper">
                    <ul role="tablist" className="tab-list">
                ..............      <li role="presentation" className="active"><a href="#tab-1" role="tab" data-toggle="tab" className="link">2017</a></li>
                      <li role="presentation"><a href="#tab-2" role="tab" data-toggle="tab" className="link">Cuối 2017 </a></li>
                      <li role="presentation"><a href="#tab-3" role="tab" data-toggle="tab" className="link">2018</a></li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div id="tab-1" role="tabpanel" className="tab-pane fade in active">
                      <div className="text-content">
                        <h2>Cô chủ nhỏ Hoàng
                          Phương thành lập nên
                          cửa hàng Happy Green
                          đầu tiên tại khu B khu đô
                          thị Sarimi, chủ đạo việc
                          cung cấp rau xanh hữu cơ
                          sạch có nguồn gốc rõ ràng
                        </h2>
                      </div>
                      <div className="text-image"><img src="/assets/images/news/image-3.jpg" alt className="img-responsive"

                        style={{maxHeight: 300, width: 'auto'}}
                      /></div>
                    </div>
                    <div id="tab-2" role="tabpanel" className="tab-pane fade">
                      <div className="text-content">
                        <h2>Happy Green xây dựng
                          thành công chuỗi cung
                          ứng các nguồn thực phẩm
                          rau củ quả hữu cơ, nguồn
                          thực phẩm đánh bắt, chăn
                          nuôi, làm thủ công tự
                          nhiên, nguồn sản phẩm
                          khô hữu cơ đóng gói</h2>
                      </div>
                      <div className="text-image"><img src="/assets/images/news/image-5.jpg" alt className="img-responsive" /></div>
                    </div>
                    <div id="tab-3" role="tabpanel" className="tab-pane fade">
                      <div className="text-content">
                        <h2>
                          Happy Green xây dựng
                          chiến lược mở chuỗi cửa
                          hàng thực phẩm hữu cơ
                          trong khu vực thành phố
                          Hồ Chí Minh với tầm nhìn
                          đem đến cho hàng ngàn
                          bà nội trợ và gia đình
                          thành phố những bữa ăn
                          an toàn, ngon và sạch với
                          chi phí hợp lý.
                        </h2>
                      </div>
                      <div className="text-image"><img src="/assets/images/news/image-8.jpg" alt className="img-responsive" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About us*/}
          <section className="about-us padding-bottom-100">
            <div className="container">
              <div className="main-titles">
                <h1 className="title">Giá trị Happy Green</h1></div>
              <div className="main-content">
                <div className="about-us-wrapper">
                  <div className="about-left">
                    <div data-wow-delay="0.8s" className="block-icon-1 wow fadeInLeft">
                      <div className="table-cell">
                        <div className="gamba-circles">
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                        </div><i className="icons flaticon-broccoli" /></div>
                      <div className="table-cell">
                        <h4 className="title">100% Tự nhiên</h4>
                        <p className="description">Happy Green mang đến
                          những thức rau củ quả
                          không sử dụng bất cứ
                          hàm lượng thuốc bảo
                          quản thực vật nào. Đảm
                          bảo độ tự nhiên tối đa cho
                          thực phẩm người dùng</p>
                      </div>
                    </div>
                    <div data-wow-delay="1.3s" className="block-icon-1 wow fadeInLeft">
                      <div className="table-cell">
                        <div className="gamba-circles">
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                        </div><i className="icons flaticon-lemon" /></div>
                      <div className="table-cell">
                        <h4 className="title">Luôn tươi</h4>
                        <p className="description">Happy Green cam kết
                          mang đến cho khách hàng
                          những thức dùng luôn
                          tươi và xanh. Những thực
                          phẩm được chọn lựa mỗi
                          ngày từ nhiều nguồn cung
                          cấp uy tín đảm bảo tươi
                          mới, xanh mơn đúng chất</p>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.3s" className="about-center wow zoomIn"><img src="/assets/images/more-image/about-us-2.jpg" alt className="img-responsive" /></div>
                  <div className="about-right">
                    <div data-wow-delay="0.8s" className="block-icon-1 wow fadeInRight">
                      <div className="table-cell">
                        <div className="gamba-circles">
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                        </div><i className="icons flaticon-groceries" /></div>
                      <div className="table-cell">
                        <h4 className="title">Quy Chuẩn Hữu Cơ</h4>
                        <p className="description">Happy Green cung cấp những sản phẩm đảm bảo quy chuẩn hữu cơ nghiêm ngặt. Áp dụng những quy ước về hữu cơ nhằm hướng đến đảm bảo an toàn cho người tiêu dùng và môi sinh

                        </p>
                      </div>
                    </div>
                    <div data-wow-delay="1.3s" className="block-icon-1 wow fadeInRight">
                      <div className="table-cell">
                        <div className="gamba-circles">
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                          <div className="circle" />
                        </div><i className="icons flaticon-flour" /></div>
                      <div className="table-cell">
                        <h4 className="title">Chất Lượng Tốt Nhất</h4>
                        <p className="description">Happy Green nói không với các mặt hàng thứ cấp. Những thực phẩm bày bán đã được chọn lọc kỹ lưỡng từ những nhà cung cấp uy tín. Những tiêu chuẩn về tươi ngon và tốt nhất cho sức khỏe được chúng tôi đặt lên hàng đầu</p>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    );
  }
}

export default About
