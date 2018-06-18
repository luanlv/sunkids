/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Header, Footer} from '../../components/Partial'
import * as C from './components/index'
import moment from 'moment'

class Home extends React.Component {

  componentDidMount () {
    // init();
  }

  render() {
    let recentNews = this.props.data.recentNews.value;
    // let productCategories = this.props.data.productCategories.value;
    // let allHotdeals = this.props.data.allHotdeals.value || []
    // let recentProduct = this.props.data.recentProduct.value
    // let isEn = this.props.data && this.props.data.lang === 'en'
    return (
        <div id="page-width">
          <div id="main" className="home">
            {/* Slider */}
            <div id="layerslider">
              {/* Slide 1 */}
              <div className="ls-slide" data-ls="transition2d:48;timeshift:-2000;">
                {/* Background image */}
                <img src="/banner/banner3.jpg" className="ls-bg" alt="Slide background"  style={{width: '100%', height: 'auto'}}/>
              </div>
              <div className="ls-slide" data-ls="transition2d:48;timeshift:-2000;">
                {/* Background image */}
                <img src="/banner/banner1.jpg" className="ls-bg" alt="Slide background"  style={{width: '100%', height: 'auto'}}/>
              </div>
              {/* Slide 2 */}
              <div className="ls-slide" data-ls="transition2d:48;timeshift:-2000;">
                {/* Background image */}
                <img src="/banner/banner2.jpg" className="ls-bg" alt="Slide background" style={{width: '100%', height: 'auto'}}/>
                {/* Text */}
              </div>
            </div>
            {/* /Layerslider ends*/}
            {/* Section Services */}
            <section id="services" className="container">
              {/* Section heading */}
              <div className="section-heading">
                <h1 style={{color: 'orange'}}>Anh ngữ quốc tế Sunkids</h1>
                <p style={{fontSize: 20}}>Education for future</p>
                {/* divider */}
                <div className="hr" />
              </div>
              <div className="col-md-6">
                <img src="/themes/demo/assets/img/services.jpg" className="img-responsive img-curved center-block" alt />
              </div>
              {/* main text */}
              <div className="col-md-12 col-md-6 res-margin">
                <h3>8 lý do vì sao bố mẹ chọn hệ thống anh ngữ quốc tế Sunkids </h3>
                {/* <p>
            Little Ones Daycare will provide a stimulating and safe environment for children ages three months to ten years. Run by an experienced former elementary school educator (Jane Doe).
            </p> */}
                {/* Custom List */}
                <ul className="custom no-margin">
                  <li>
                    Chúng tôi có nhiều năm kinh nghiệm giảng dạy Tiếng Anh mầm non, tiểu học.
                  </li>
                  <li>
                    Chương trình Tiếng Anh chuyên biệt đầu tiên cho trẻ từ 3 - 15 tuổi.
                  </li>
                  <li>
                    Môi trường Tiếng Anh hàng ngày đa phương tiện: "Hear -Say - See - Do".
                  </li>
                  <li>
                    100% giảng dạy theo tiêu chuẩn quốc tế, tổ chức thi và lấy chứng chỉ Cambridge.
                  </li>
                  <li>
                    Hệ thống giáo trình, phương pháp giảng dạy, cơ sở vật chất tiêu chuẩn dành riêng cho trẻ em.
                  </li>
                  <li>
                    100% giáo viên nước ngoài, Việt Nam đạt tiêu chuẩn bằng cấp, trẻ trung, nhiệt tình, năng động, yêu và hiểu trẻ.
                  </li>
                  <li>
                    Cam kết đầu ra khi đăng kí khoá học 1 năm.
                  </li>
                  <li>
                    Chi phí hợp lý, hiệu quả chất lượng.
                  </li>
                </ul>
              </div>
              {/* /col-md-12*/}
              {/* Services Boxes */}
              <div id="services-slider" className="owl-carousel margin1 col-lg-12">
                {/* service box */}
                <div className="serviceBox bg-color2">
                  {/* service image*/}
                  <img src="/themes/demo/assets/img/service1.jpg" className="img-responsive img-circle" alt />
                  {/* service content */}
                  <div className="service-content text-light">
                    <h4 className="title">Tiếng anh mầm non (Từ 3 - 5 tuổi)</h4>
                    <p className="description">
                      Khóa học tạo cho các em nhỏ một môi trường học tự nhiên nhất. Trong khóa học tiếng anh mần non này, các em nhỏ bước đầu làm quen với bảng chữ cái, các từ, cụm từ và luôn được tiếp xúc với ngôn ngữ thường xuyên nhất thông qua các bài hát, các hoạt động sôi nổi, viết và kể chuyện.
                    </p>
                  </div>
                </div>
                {/* /col-md-6 col-lg-3 */}
                {/* service box */}
                <div className="serviceBox bg-color1">
                  {/* service image*/}
                  <img src="/themes/demo/assets/img/service2.jpg" className="img-responsive img-circle" alt />
                  {/* service content */}
                  <div className="service-content text-light">
                    <h4 className="title">Tiếng anh tiểu học (Từ 6 - 10 tuổi)</h4>
                    <p className="description">
                      Đến với lớp học Tiếng Anh Tiểu học các Bé sẽ được học đầy đủ các kỹ năng: Nghe, Nói, Đọc, Viết thông qua nhiều hình thức học tập khác nhau: ngôn ngữ cơ thể, thẻ tranh từ...giúp Bé học tập, làm quen với Tiếng Anh một cách tự nhiên, thoải mái, yêu thích Tiếng Anh và đầy cảm hứng học Tiếng Anh.
                    </p>
                  </div>
                </div>
                {/* /service box */}
                {/* /col-md-6 col-lg-3 */}
                {/* service box */}
                <div className="serviceBox bg-color3">
                  {/* service image*/}
                  <img src="/themes/demo/assets/img/service3.jpg" className="img-responsive img-circle" alt />
                  {/* service content */}
                  <div className="service-content text-light">
                    <h4 className="title">Tiếng anh thiếu niên (Từ 11 - 15 tuổi)</h4>
                    <p className="description">
                      Đến với lớp học Tiếng Anh Thiếu Niên các Bé sẽ được học đầy đủ các kỹ năng Nghe, Nói, Đọc, Viết thông qua nhiều hình thức học tập khác nhau giúp Bé học tập, làm quen với Tiếng Anh một cách tự nhiên, thoải mái, yêu thích Tiếng Anh và đầy cảm hứng học Tiếng Anh.
                    </p>
                  </div>
                </div>
              </div>
              {/* /services-slider */}
            </section>
            {/* /section  */}
            {/* Section Call to Action 1 */}
            <section id="call-to-action1" className="container-fluid small-section" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -20px;" data-bottom-top="background-position: 50% 20px;" style={{minHeight: 400}}>
              {/* <div class="text-center col-md-12">

            <div class="well col-lg-5 col-lg-offset-6">
               <h4>Nhượng quyền trung tâm Anh ngữ trên toàn quốc</h4>
               <p style="text-align: left">
               Hệ thống nhượng quyền trung tâm đảm bảo các thành viên được vận hành một cách đồng bộ cả hình thức và nội dung.
               </p>
               <p style="text-align: left">
               Ưu điểm lớn nhất của mô hình chuyển nhượng này là giảm thiểu rủi ro đầu tư, rút ngắn thời gian khởi động, tiếp thu kinh nghiệm từ những thành viên khác sử dụng.
               </p>
               <div class="page-scroll">
                  <a class="btn" href="#contact">Liên Hệ</a>
                  <a class="btn margin-btn" href="#">Chi Tiết</a>
               </div>
            </div>

         </div> */}
              {/* /text-center*/}
            </section>
            {/* /section */}
            {/* Clouds divider */}
            <svg id="cloud1" className="colored hidden-xs hidden-sm" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height={100} viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M-5 100 Q 0 20 5 100 Z M0 100 Q 5 0 10 100 M5 100 Q 10 30 15 100 M10 100 Q 15 10 20 100 M15 100 Q 20 30 25 100 M20 100 Q 25 -10 30 100 M25 100 Q 30 10 35 100 M30 100 Q 35 30 40 100 M35 100 Q 40 10 45 100 M40 100 Q 45 50 50 100 M45 100 Q 50 20 55 100 M50 100 Q 55 40 60 100 M55 100 Q 60 60 65 100 M60 100 Q 65 50 70 100 M65 100 Q 70 20 75 100 M70 100 Q 75 45 80 100 M75 100 Q 80 30 85 100 M80 100 Q 85 20 90 100 M85 100 Q 90 50 95 100 M90 100 Q 95 25 100 100 M95 100 Q 100 15 105 100 Z" />
            </svg>
            {/* /Clouds divider */}
            {/* Section Testimonials */}
            <section id="testimonials" className="container-fluid small-section">
              {/* Parallax object */}
              <div className="parallax-object1 hidden-sm hidden-xs" data-0="opacity:1;" data-100="transform:translatey(40%);" data-center-center="transform:translatey(-60%);">
                {/* Image */}
                <img src="/themes/demo/assets/img/sunbg.png" alt />
              </div>
              {/* Section heading */}
              <div className="section-heading">
                <h2 className="text-light">Phụ huynh Sunkids chia sẻ</h2>
                {/* divider */}
                <div className="hr" />
              </div>
              {/* Testimonial Slider */}
              <div className="container">
                <div id="testimonial-slider" className="owl-carousel ">
                  {/* Testimonial 1 */}
                  <div className="testimonial">
                    <div className="description">
                      <p>
                        Mình đã cho con làm quen với với tiếng Anh từ năm 3 tuổi nhưng chỉ khi được học Sunkids thì con mới thực sự yêu thích tiếng Anh. Vừa được học, vừa được chơi nên con rất hào hứng, hằng ngày đều tự học mà không cần bố mẹ phải nhắc nhở. Bây giờ, con phát âm rất chuẩn, còn chỉnh được cho cả bố mẹ nữa. Cám ơn Sunkids rất nhiều!
                      </p>
                    </div>
                    <div className="testimonial-review" style={{maxWidth: '100px'}}>
                      {/* Testimonial image */}
                      <img src="/imgs/3.png" className="img-circle" alt />
                      {/* Testimonial title*/}
                    </div>
                    <h3 className="testimonial-title" style={{display: 'inline-block', fontSize: 18, marginTop: 30}}>
                      Chị Ngọc Mai
                      <small style={{color: 'white'}}>Hưng Yên</small>
                    </h3>

                  </div>
                  {/* /Testimonial 1 */}
                  {/* Testimonial 2 */}
                  <div className="testimonial">
                    <div className="description">
                      <p>
                        Sunkids có hình ảnh rất sinh động, hấp dẫn phù hợp với tâm lý của trẻ nên mình không mất nhiều thời gian để giúp con làm quen. Đến giờ con mới chỉ 5 tuổi nhưng đã có vốn từ vựng tiếng Anh rất phong phú. Mình rất tâm đắc và đã giới thiệu rất nhiều bạn bè mình đưa con đi học tại Sunkids.
                      </p>
                    </div>
                    <div className="testimonial-review" style={{maxWidth: '100px'}}>
                      {/* Testimonial image */}
                      <img src="/imgs/5.png" className="img-circle" alt />
                      {/* Testimonial title */}
                    </div>
                    <h3 className="testimonial-title" style={{display: 'inline-block', fontSize: 18, marginTop: 30}}>
                      Chị Vũ Huệ
                      <small style={{color: 'white'}}>Hưng Yên</small>
                    </h3>
                  </div>
                  {/* /Testimonial 2 */}
                  {/* Testimonial 3 */}
                  {/*<div className="testimonial">*/}
                    {/*<div className="description">*/}
                      {/*<p>*/}
                        {/*Nam enim neque, mattis ut fermentum vitae, venenatis id tortor. Sed consectetur tortor ut arcu pharetra faucibus. In tristique sollicitudin mi ac congue. Praesent efficitur feugiat nisl, nec facilisis leo sollicitudin sed. Integer egestas porttitor massa, ut dapibus sapien feugiat eget. Nam.*/}
                      {/*</p>*/}
                    {/*</div>*/}
                    {/*<div className="testimonial-review">*/}
                      {/*/!* Testimonial image *!/*/}
                      {/*<img src="/themes/demo/assets/img/testimonial3.jpg" className="img-circle" alt />*/}
                      {/*/!* Testimonial title *!/*/}
                      {/*<h3 className="testimonial-title">*/}
                        {/*Mika Kelly*/}
                        {/*<small>Personal Trainer</small>*/}
                      {/*</h3>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                  {/* /Testimonial 3 */}
                  {/* Testimonial 4 */}
                  {/*<div className="testimonial">*/}
                    {/*<div className="description">*/}
                      {/*<p>*/}
                        {/*Nam enim neque, mattis ut fermentum vitae, venenatis id tortor. Sed consectetur tortor ut arcu pharetra faucibus. In tristique sollicitudin mi ac congue. Praesent efficitur feugiat nisl, nec facilisis leo sollicitudin sed. Integer egestas porttitor massa, ut dapibus sapien feugiat eget. Nam.*/}
                      {/*</p>*/}
                    {/*</div>*/}
                    {/*<div className="testimonial-review">*/}
                      {/*/!* Testimonial image *!/*/}
                      {/*<img src="/themes/demo/assets/img/testimonial4.jpg" className="img-circle" alt />*/}
                      {/*/!* Testimonial title *!/*/}
                      {/*<h3 className="testimonial-title">*/}
                        {/*Joan and Lucas Smith*/}
                        {/*<small>Teachers</small>*/}
                      {/*</h3>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                  {/* /Testimonial 4 */}
                </div>
                {/*/Testimonial Slider */}
              </div>
              {/*/container */}
            </section>
            {/* /Section */}
            {/* Clouds divider */}
            <svg id="cloud2" className="hidden-xs hidden-sm" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height={100} viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M-5 100 Q 0 20 5 100 Z M0 100 Q 5 0 10 100 M5 100 Q 10 30 15 100 M10 100 Q 15 10 20 100 M15 100 Q 20 30 25 100 M20 100 Q 25 -10 30 100 M25 100 Q 30 10 35 100 M30 100 Q 35 30 40 100 M35 100 Q 40 10 45 100 M40 100 Q 45 50 50 100 M45 100 Q 50 20 55 100 M50 100 Q 55 40 60 100 M55 100 Q 60 60 65 100 M60 100 Q 65 50 70 100 M65 100 Q 70 20 75 100 M70 100 Q 75 45 80 100 M75 100 Q 80 30 85 100 M80 100 Q 85 20 90 100 M85 100 Q 90 50 95 100 M90 100 Q 95 25 100 100 M95 100 Q 100 15 105 100 Z" />
            </svg>
            {/* /clouds divider */}
            {/* Section about */}
            <section id="about" className="container-fluid">
              {/* Section heading */}
              <div className="section-heading">
                <h2>Về chúng tôi</h2>
                {/* divider */}
                {/*<div className="hr" />*/}
              </div>
              {/* Parallax object */}
              <div className="parallax-object2 hidden-sm hidden-xs" data-0="opacity:1;" data-100="transform:translatey( 40%);" data-center-center="transform:translatey(-60%);">
                {/* Image */}
                <img src="/themes/demo/assets/img/boy1ornament.png" alt />
              </div>
              <div className="container">
                <div className="col-md-12 col-centered">
                  <div className="tab" role="tabpanel">
                    {/* Nav tabs */}
                    {/*<ul className="nav nav-tabs" role="tablist">*/}
                      {/*<li role="presentation" className="active"><a href="#Section1" role="tab" data-toggle="tab">Giới thiệu</a></li>*/}
                      {/*<li role="presentation"><a href="#Section2" role="tab" data-toggle="tab">Các hoạt động</a></li>*/}
                      {/*<li role="presentation"><a href="#Section3" role="tab" data-toggle="tab">Daily Meals</a></li>*/}
                    {/*</ul>*/}
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active in fade col-lg-12" id="Section1">
                        <div className="col-lg-7">
                          <h3 className="text-center">Sunkids Việt Nam</h3>
                          <p>
                            Hệ thống Anh ngữ quốc tế Sunkids được thành lập với sứ mệnh trở thành tổ chức giáo dục Tiếng Anh trẻ em số 1 tại Việt Nam từ nghiên cứu, dạy học cho đến cung cấp hệ thống giáo trình tiêu chuẩn, các thiết bị học tập tiếng Anh hiệu quả. Từ đó tạo ra môi trường học tập Tiếng Anh toàn diện nhất cho trẻ em Việt Nam.
                          </p>
                          <p>
                            Tại Sunkids, chúng tôi cung cấp các khóa học Tiếng Anh trẻ em theo tiêu chuẩn quốc tế, bao gồm:
                            <br/>
                            - Tiếng anh mầm non (Từ 3-5 tuổi)
                            <br/>
                            - Tiếng anh tiểu học (Từ 6-10 tuổi)
                            <br/>
                            - Tiếng anh thiếu niên (Từ 11-15 tuổi)
                          </p>
                        </div>
                        <div className="col-lg-5">
                          <img src="/themes/demo/assets/img/about1.jpg" alt className="img-curved  center-block img-responsive" />
                        </div>
                      </div>
                      {/* /tab-panel */}
                      <div role="tabpanel" className="tab-pane fade col-lg-12" id="Section2">
                        <h4 className="text-center">
                          Tại Sunkids, các em sẽ được chơi và tham gia rất nhiều các hoạt động bổ trợ cho việc học Tiếng Anh một cách hiệu quả như:
                        </h4>
                        <div className="col-lg-5 margin1">
                          <img src="/themes/demo/assets/img/about2.jpg" alt className="img-curved center-block img-responsive" />
                        </div>
                        <div className="panel-group col-lg-7 margin1" id="accordion">
                          {/* Question 1 */}
                          <div className="panel">
                            <div className="panel-heading">
                              <h6 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1">Spanish Classes</a>
                              </h6>
                            </div>
                            {/* /panel-heading */}
                            <div id="collapse1" className="panel-collapse collapse in">
                              <div className="panel-body">

                                <p>
                                  Hệ thống Anh ngữ quốc tế Sunkids được thành lập với sứ mệnh trở thành tổ chức giáo dục Tiếng Anh trẻ em số 1 tại Việt Nam từ nghiên cứu, dạy học cho đến cung cấp hệ thống giáo trình tiêu chuẩn, các thiết bị học tập tiếng Anh hiệu quả. Từ đó tạo ra môi trường học tập Tiếng Anh toàn diện nhất cho trẻ em Việt Nam.
                                </p>
                                <p>
                                  Tại Sunkids, chúng tôi cung cấp các khóa học Tiếng Anh trẻ em theo tiêu chuẩn quốc tế, bao gồm:
                                  <br/>
                                  - Tiếng anh mầm non (Từ 3-5 tuổi)
                                  <br/>
                                  - Tiếng anh tiểu học (Từ 6-10 tuổi)
                                  <br/>
                                  - Tiếng anh thiếu niên (Từ 11-15 tuổi)
                                </p>

                              </div>
                            </div>
                          </div>
                          {/*/panel */}
                          {/* Question 2 */}
                          <div className="panel">
                            <div className="panel-heading">
                              <h6 className="panel-title">
                                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Music Classes</a>
                              </h6>
                            </div>
                            {/* /panel-heading */}
                            <div id="collapse2" className="panel-collapse collapse">
                              <div className="panel-body">
                                <p>Felis tiam non metus Placerat a ultricies a, posuere lorem ipseut lincas psuiem t volut pat phas ellus ac
                                  sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis a nibh fusce mollis
                                  eget metus auguen unc vel mauris ultricies, vest ibulum
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*/panel */}
                          {/* Question 3 */}
                          <div className="panel">
                            <div className="panel-heading">
                              <h6 className="panel-title">
                                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse3">Nap time</a>
                              </h6>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse">
                              <div className="panel-body">
                                <p>Felis tiam non metus Placerat a ultricies a, posuere lorem ipseut lincas psuiem t volut pat phas ellus ac
                                  sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id omnis a nibh fusce mollis
                                  eget metus auguen unc vel mauris ultricies, vest ibulum
                                </p>
                              </div>
                            </div>
                          </div>
                          {/*/panel */}
                        </div>
                        {/* /.accordion */}
                      </div>
                      {/* /tab-panel */}
                      <div role="tabpanel" className="tab-pane fade col-lg-12" id="Section3">
                        <h3 className="text-center">Daily Meals</h3>
                        <div className="panel-group col-lg-7 margin1" id="accordion2">
                          {/* Question 1 */}
                          <div className="panel">
                            <div className="panel-heading">
                              <h6 className="panel-title">
                                <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse4">Breakfast</a>
                              </h6>
                            </div>
                            {/* /panel-heading */}
                            <div id="collapse4" className="panel-collapse collapse in">
                              <div className="panel-body">
                                <div className="col-sm-6">
                                  <ul className="custom no-margin">
                                    <li>Fruits</li>
                                    <li>Cheese Sandwich (Gluten Free Option Available)
                                    </li>
                                    <li>Fresh Orange Juice</li>
                                    <li>Crackers
                                    </li>
                                    <li>Fruit Salad
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm-6">
                                  <ul className="custom no-margin">
                                    <li>Fruits</li>
                                    <li>Cheese Sandwich (Gluten Free Option Available)
                                    </li>
                                    <li>Fresh Orange Juice</li>
                                    <li>Crackers
                                    </li>
                                    <li>Fruit Salad
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*/panel */}
                          {/* Question 2 */}
                          <div className="panel">
                            <div className="panel-heading">
                              <h6 className="panel-title">
                                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapse5">Lunch</a>
                              </h6>
                            </div>
                            {/* /panel-heading */}
                            <div id="collapse5" className="panel-collapse collapse">
                              <div className="panel-body">
                                <div className="col-sm-6">
                                  <ul className="custom no-margin">
                                    <li>Fruits</li>
                                    <li>Cheese Sandwich (Gluten Free Option Available)
                                    </li>
                                    <li>Fresh Orange Juice</li>
                                    <li>Crackers
                                    </li>
                                    <li>Fruit Salad
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm-6">
                                  <ul className="custom no-margin">
                                    <li>Fruits</li>
                                    <li>Cheese Sandwich (Gluten Free Option Available)
                                    </li>
                                    <li>Fresh Orange Juice</li>
                                    <li>Crackers
                                    </li>
                                    <li>Fruit Salad
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*/panel */}
                          {/* Question 3 */}
                          <div className="panel">
                            <div className="panel-heading">
                              <h6 className="panel-title">
                                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion2" href="#collapse6">Snacks</a>
                              </h6>
                            </div>
                            <div id="collapse6" className="panel-collapse collapse">
                              <div className="panel-body">
                                <div className="col-sm-6">
                                  <ul className="custom no-margin">
                                    <li>Fruits</li>
                                    <li>Cheese Sandwich (Gluten Free Option Available)
                                    </li>
                                    <li>Fresh Orange Juice</li>
                                    <li>Crackers
                                    </li>
                                    <li>Fruit Salad
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm-6">
                                  <ul className="custom no-margin">
                                    <li>Fruits</li>
                                    <li>Cheese Sandwich (Gluten Free Option Available)
                                    </li>
                                    <li>Fresh Orange Juice</li>
                                    <li>Crackers
                                    </li>
                                    <li>Fruit Salad
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*/panel */}
                        </div>
                        {/* /.accordion */}
                        <div className="col-lg-5 margin1">
                          <img src="/themes/demo/assets/img/about3.jpg" alt className="img-curved center-block img-responsive" />
                        </div>
                      </div>
                      {/* /tab-panel */}
                    </div>
                    {/* /tab-content */}
                  </div>
                  {/* /tab */}
                </div>
                {/* /col-md-11 */}
              </div>
              {/* /container */}
            </section>
            {/* /section ends*/}
            <section id="call-to-action2" className="container-fluid small-section" data-center="background-position: 50% 0px;" data-top-bottom="background-position: 50% -20px;" data-bottom-top="background-position: 50% 20px;" style={{minHeight: 400}}>
              {/* <div class="text-center col-md-12">
            <div class="well col-md-5 col-md-offset-1">
               <h4>Visit Us Today!</h4>
               <p>Lorem av ipsum dolor sit amet, dorem ipsuem ore consectetur adipisicing elit. Lorem isuem amorem semprem Ratione, voluptatem, dolorem animi nisi autem blanditiis enim culpa reiciendis et em explicabo tenetur lore apsuet!</p>
               <div class="page-scroll">
                  <a class="btn" href="#contact">Contact us</a>
               </div>
            </div>
         </div> */}
              {/* /text-center*/}
            </section>
            {/* /section ends */}
            {/* Section Tuition */}
            <section id="tuition" className="container-fluid">
              {/* Section heading */}
              <div className="section-heading">
                <h2>Khóa học</h2>
                {/* divider */}
                <div className="hr" />
              </div>
              <div className="container">
                {/* Price table 1 */}
                <div className="col-md-4 col-sm-6">
                  <div className="pricingTable">
                    {/* header */}
                    <div className="pricingTable-header">
                      <span className="title">Tiếng anh mầm non (từ 3 đến 5 tuổi)</span>
                      <span className="price-value">chỉ từ 1.500.000 vnđ</span>
                      <span className="month">cho 3 tháng</span>
                    </div>
                    {/* pricing content */}
                    <ul className="pricing-content">
                      <li>Ưu đãi khai trương giảm 40% còn 950.000 vnđ</li>
                      <li>Tặng sổ liên lạc trị giá 30.000 VNĐ</li>
                      <li>Tặng 1 áo phông xinh xắn trị giá 150.000 VNĐ</li>
                      <li>Tặng 1 balo xinh xắn trị giá 160.000 VNĐ (đăng ký 6 tháng)</li>
                      <li>Tặng 1 bộ giáo trình trị giá 300.000 VNĐ (đăng ký 12 tháng)</li>
                    </ul>
                    {/* /ul */}
                    {/* button */}
                    {/*<a href="#" className="btn">Đăng ký ngay</a>*/}
                  </div>
                  {/* /pricingTable */}
                </div>
                {/* /col-sm */}
                {/* Price table 2 */}
                <div className="col-md-4 col-sm-6 res-margin">
                  <div className="pricingTable">
                    {/* header */}
                    <div className="pricingTable-header">
                      <span className="title">Tiếng anh tiểu học (từ 6 đến 10 tuổi)</span>
                      <span className="price-value">Chỉ từ 2.650.000 vnđ</span>
                      <span className="month">cho 3 tháng</span>
                    </div>
                    {/* pricing content */}
                    <ul className="pricing-content">
                      <li>Ưu đãi khai trương giảm 40% còn 1.580.000 vnđ</li>
                      <li>Tặng sổ liên lạc trị giá 30.000 VNĐ</li>
                      <li>Tặng 1 áo phông xinh xắn trị giá 150.000 VNĐ</li>
                      <li>Tặng 1 balo xinh xắn trị giá 160.000 VNĐ (đăng ký 6 tháng)</li>
                      <li>Tặng 1 bộ giáo trình trị giá 300.000 VNĐ (đăng ký 12 tháng)</li>
                    </ul>
                    {/* /ul */}
                    {/* button */}
                    {/*<a href="#" className="btn">Đăng ký ngay</a>*/}
                  </div>
                  {/* /pricingTable */}
                </div>
                {/* /col-sm */}
                {/* Price table 3 */}
                <div className="col-md-4 col-sm-6">
                  <div className="pricingTable">
                    {/* header */}
                    <div className="pricingTable-header">
                      <span className="title">Tiếng anh thiếu niên (từ 11 đến 15 tuổi)</span>
                      <span className="price-value">Chỉ từ 2.650.000 vnđ</span>
                      <span className="month">cho 3 tháng</span>
                    </div>
                    {/* pricing content */}
                    <ul className="pricing-content">
                      <li>Ưu đãi khai trương giảm 40% còn 1.580.000 vnđ</li>
                      <li>Tặng sổ liên lạc trị giá 30.000 VNĐ</li>
                      <li>Tặng 1 áo phông xinh xắn trị giá 150.000 VNĐ</li>
                      <li>Tặng 1 balo xinh xắn trị giá 160.000 VNĐ (đăng ký 6 tháng)</li>
                      <li>Tặng 1 bộ giáo trình trị giá 300.000 VNĐ (đăng ký 12 tháng)</li>
                    </ul>
                    {/* /ul */}
                    {/* button */}
                    {/*<a href="#" className="btn">Đăng ký ngay</a>*/}
                  </div>
                  {/* /pricingTable */}
                </div>
                {/* /col-sm */}
                {/* /pricingTable */}
              </div>
              {/* /col-sm */}
            </section></div>
          <section id="blog-preview" className="container-fluid">
            {/* Parallax object */}
            <div className="parallax-object2 hidden-sm hidden-xs" data-0="opacity:1;" data-100="transform:translatey(70%);" data-center-center="transform:translatey(-70%);">
              {/* Image */}
              <img src="/themes/demo/assets/img/boy2ornament.png" alt />
            </div>
            {/* Section heading */}
            <div className="section-heading">
              <h2>Tin tức mới nhất</h2>
              {/* divider */}
              <div className="hr" />
            </div>
            {/* Blog Slider */}
            <div id="blog-slider" className="owl-carousel">
              {recentNews.map((el, idx) => {
                return (
                  <div className="col-md-12" key={idx}>
                    <div className="blog-prev">
                      {/* Blog Post Image  */}
                      <img src={el.coverUrl} alt />
                      {/* Blog Post date */}
                      {/*<div className="date"><span className="day">22</span><span className="month">Jul</span></div>*/}
                      {/* Blog Caption */}
                      <div className="blog-caption">
                        <h4>{el.title}</h4>
                        <p className="hidden-xs">
                          {el.description.slice(0, 70)}...
                        </p>
                      </div>
                      <div className="hover" />
                      <a href={"/p/" + el.slug} />
                    </div>
                    {/* /Blog Post Prev */}
                  </div>
                )
              })}

            </div>
            {/* /blog-slider */}
          </section>
          <section id="gallery" className="container-fluid bg-color1">
            {/* Section heading */}
            <div className="section-heading">
              <h2 className="text-light">Gallery</h2>
              {/* divider */}
              <div className="hr light" />
            </div>
            {/* Navigation */}
            {/* <div class="text-center">
            <ul class="nav nav-pills category text-center" role="tablist" id="gallerytab">
               <li class="active"><a href="#" data-toggle="tab" data-filter="*">All</a>
               <li><a href="#" data-toggle="tab" data-filter=".facilities">Our Facilities</a></li>
               <li><a href="#" data-toggle="tab" data-filter=".staff">Our Staff</a></li>
            </ul>
         </div> */}
            {/* Gallery */}
            <div className="polaroids margin1">
              <div id="lightbox">
                {/* image1 */}

                {/* image2 */}
                <div className="staff col-lg-3 col-md-6 col-sm-6">
                  <div className="polaroid-item">
                    <a href="#themes/demo/assets/img/gallery/anh2.jpg" data-gal="prettyPhoto[gallery]">
                      <img alt src="/themes/demo/assets/img/gallery/anh2.jpg" className="img-responsive" />
                      {/*<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..</p>*/}
                    </a>
                  </div>
                </div>
                {/* image3 */}
                {/* image4 */}
                <div className="staff  col-lg-3 col-md-6 col-sm-6">
                  <div className="polaroid-item">
                    <a href="#themes/demo/assets/img/gallery/anh4.jpg" data-gal="prettyPhoto[gallery]">
                      <img alt src="/themes/demo/assets/img/gallery/anh4.jpg" className="img-responsive" />
                      {/*<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..</p>*/}
                    </a>
                  </div>
                </div>

                <div className="staff col-lg-3 col-md-6 col-sm-6">
                  <div className="polaroid-item">
                    <a href="#themes/demo/assets/img/gallery/anh6.jpg" data-gal="prettyPhoto[gallery]">
                      <img alt src="/themes/demo/assets/img/gallery/anh6.jpg" className="img-responsive" />
                      {/*<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..</p>*/}
                    </a>
                  </div>
                </div>
                <div className="facilities col-lg-3 col-md-6 col-sm-6">
                  <div className="polaroid-item">
                    <a href="#themes/demo/assets/img/gallery/anh7.jpg" data-gal="prettyPhoto[gallery]">
                      <img alt src="/themes/demo/assets/img/gallery/anh7.jpg" className="img-responsive" />
                      {/*<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..</p>*/}
                    </a>
                  </div>
                </div>
                <div className="facilities col-lg-3 col-md-6 col-sm-6">
                  <div className="polaroid-item">
                    <a href="#themes/demo/assets/img/gallery/anh1.jpg" data-gal="prettyPhoto[gallery]">
                      <img alt src="/themes/demo/assets/img/gallery/anh1.jpg" className="img-responsive" />
                      {/*<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..</p>*/}
                    </a>
                  </div>
                </div>
                <div className="facilities col-lg-3 col-md-6 col-sm-6">
                  <div className="polaroid-item">
                    <a href="#themes/demo/assets/img/gallery/anh3.jpg" data-gal="prettyPhoto[gallery]">
                      <img alt src="/themes/demo/assets/img/gallery/anh3.jpg" className="img-responsive" />
                      {/*<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..</p>*/}
                    </a>
                  </div>
                </div>
                <div className="facilities col-lg-3 col-md-6 col-sm-6">
                  <div className="polaroid-item">
                    <a href="#themes/demo/assets/img/gallery/anh5.jpg" data-gal="prettyPhoto[gallery]">
                      <img alt src="/themes/demo/assets/img/gallery/anh5.jpg" className="img-responsive" />
                      {/*<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..</p>*/}
                    </a>
                  </div>
                </div>

                {/* image8 */}
                <div className="staff col-lg-3 col-md-6 col-sm-6">
                  <div className="polaroid-item">
                    <a href="#themes/demo/assets/img/gallery/anh8.jpg" data-gal="prettyPhoto[gallery]">
                      <img alt src="/themes/demo/assets/img/gallery/anh8.jpg" className="img-responsive" />
                      {/*<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..</p>*/}
                    </a>
                  </div>
                </div>
              </div>
              {/* /lightbox */}
            </div>
            {/* /polaroids */}
          </section>
          <svg id="curveDownColor1" className="hidden-xs" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height={100} viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0 C 50 100 80 100 100 0 Z" />
          </svg>

    </div>
    );
  }
}

export default Home;
