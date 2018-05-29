import React from 'react';

import {Title, BreadCrumb, Widget, FormEmail} from './components'
import axios from 'axios'

class CheckOut extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      cart: [],
      hoten: "",
      phone: "",
      email: "",
      diachi: "",
    }
  }

  componentDidMount(){
    let that = this;
    if(process.env.BROWSER) {
      let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
      let cart = JSON.parse(sessionStorage.getItem("cart") || '[]')
      that.setState({cart: cart})
      console.log(cart)
    }
  }

  render() {
    let sum = 0
    this.state.cart.map(el => {
      sum += el.number * el.product.price
    })
    return (
      <div>
        <div className="main-contents">
          {/* Breadcrumb*/}
          <section className="banner check-out">
            <div className="container">
              <div className="morepage-banner">
                <h2 className="title">Thanh toán</h2>
              </div>
            </div>
          </section>
          <section className="info-form padding-top-100">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-xs-12 billdingForm">
                  <div className="main-titles-2">
                    <h1 className="title">Thông tin</h1></div>
                  <form id="billdingForm" noValidate="novalidate" className="checkout-form">
                    <div className="row">
                      <div className="col-xs-12">
                        <div className="form-group"><label className="form-label">Họ tên <span className="highlight">*</span></label>
                          <input id="last-name" type="text" required="required"  className="form-control"
                                 defaultValue={this.state.hoten}
                                 onChange={(e) => {
                                   let value = e.target.value
                                   this.setState({hoten: value})
                                 }}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <div className="form-group"><label className="form-label">PHONE</label>
                          <input id="phone" type="text" required="required" className="form-control"
                                 defaultValue={this.state.phone}
                                 onChange={(e) => {
                                   let value = e.target.value
                                   this.setState({phone: value})
                                 }}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <div className="form-group"><label className="form-label">EMAIL <span className="highlight">*</span></label>
                          <input id="email" type="email" required="required" className="form-control"
                                 defaultValue={this.state.email}
                                 onChange={(e) => {
                                   let value = e.target.value
                                   this.setState({email: value})
                                 }}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="col-xs-12">
                        <div className="form-group"><label className="form-label">Địa chỉ shíp hàng <span className="highlight">*</span></label>
                          <textarea id="message-2" required="required"  className="form-control form-textarea"
                                    defaultValue={this.state.diachi}
                                    onChange={(e) => {
                                      let value = e.target.value
                                      this.setState({diachi: value})
                                    }}
                          />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="your-order padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="main-titles-2">
                    <h1 className="title">Đơn hàng</h1></div>
                </div>
                <div className="col-xs-12">
                  <form action="#" method="post">
                    <table className="shop-table cart">
                      <thead>
                      <tr>
                        <th colSpan={3} className="product-name">Sản phẩm</th>
                        <th className="product-subtotal">Thành tiền</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td colSpan={4}>
                          <div className="spacing-table" />
                        </td>
                      </tr>
                      {this.state.cart.map((p, idx) => {
                        return (
                          <tr className="cart-item" key={idx}>
                            <td className="product-thumbnail">
                              <div className="wrapper-thumbnail">
                                <a href={`/sp/${p.product.slug}`}><img src={p.product.coverUrl} alt className="img-product" /></a>
                              </div>
                            </td>
                            <td className="product-name">
                              <a href={`/sp/${p.product.slug}`} className="woocommerce-name">{p.product.title}</a><span className="woocommerce-Price amount">{p.product.price.toLocaleString()}<span className="woocommerce-Price-currencySymbol">đ</span></span>
                            </td>
                            <td className="product-quantity">
                              <div className="quantity"><span className="woocommerce-puantity">{p.number}</span></div>
                            </td>
                            <td className="product-subtotal"><span className="woocommerce-Price">{(p.number * p.product.price).toLocaleString()}<span className="woocommerce-Price-currencySymbol">đ</span></span>
                            </td>
                          </tr>
                        )
                      })}

                      </tbody>
                    </table>
                    <div className="cart-totals">
                      <div className="row">
                        <div className="col-md-7 col-xs-7">
                          <div className="subtotal">Thành tiền:</div>
                          <div className="shipping">Phí Shipping:</div>
                          <div className="total">Tổng cộng: </div>
                        </div>

                        <div className="col-md-5 col-xs-5 text-center">
                          <div className="subtotal"><span className="woocommerce-Price">{sum.toLocaleString()}<span className="woocommerce-Price-currencySymbol">đ</span></span>
                          </div>
                          <div className="shipping"><span className="woocommerce-Price">0<span className="woocommerce-Price-currencySymbol">đ</span></span>
                          </div>
                          <div className="total"><span className="woocommerce-Price amount">{sum.toLocaleString()}<span className="woocommerce-Price-currencySymbol">đ</span></span>
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div className="row">
                        <div
                          className="btn btn-maincolor"
                          onClick={() => {
                            axios.post('/api/cart/new', this.state)
                              .then(res => {
                                if (process.env.BROWSER) {
                                  let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
                                  sessionStorage.removeItem('cart');
                                  alert("Đơn hàng đã được gửi đi! Chúng tôi sẽ liên lạc với bạn sớm nhất có thể!")
                                  document.location.href = '/'
                                }
                              }).catch(err => {
                                alert('có lỗi')
                            })
                          }}
                          style={{float: 'right'}}
                        >Xác nhận</div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default CheckOut
