import React from 'react';

import {Title, BreadCrumb, Widget, FormEmail} from './components'

class Cart extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      cart: []
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

    const contact = this.props.data.information.value.contact
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
                <h2 className="title">Giỏ hàng</h2>
              </div>
            </div>
          </section>
          <section className="shopping-cart padding-top-100">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <form action="#" method="post">
                    <table className="shop-table cart">
                      <thead>
                      <tr>
                        <th colSpan={2} className="product-name">Sản phẩm</th>
                        <th className="product-price">Giá</th>
                        <th className="product-quantity">Số lượng</th>
                        <th className="product-subtotal">Thành tiền</th>
                        <th className="product-remove" />
                      </tr>
                      </thead>
                      <tbody>

                      {this.state.cart.map((el, idx) => {
                        return (
                          <tr className="cart-item" key={idx}>
                            <td className="product-thumbnail">
                              <div className="wrapper-thumbnail">
                                <a href="javascript:void(0)"><img src={el.product.coverUrl} alt className="img-product" /></a>
                              </div>
                            </td>
                            <td className="product-name"><a href="javascript:void(0)" className="woocommerce-name">{el.product.title}</a></td>
                            <td className="product-price"><span className="woocommerce-Price">{el.product.price.toLocaleString()}<span className="woocommerce-Price-currencySymbol">đ</span><span className="woocommerce-Price-unit">/KG</span></span>
                            </td>
                            <td className="product-quantity">
                              <div className="quantity">
                                <div className="quantity-button quantity-down"
                                     onClick={() => {
                                       let that = this
                                       if(process.env.BROWSER) {
                                         let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
                                         let cart = JSON.parse(sessionStorage.getItem("cart") || '[]')
                                         let index = idx
                                         if (index >= 0) {
                                           if(cart[index].number > 1) {
                                             cart[index].number = cart[index].number - 1
                                           } else {
                                             cart.splice(index, 1)
                                           }
                                           sessionStorage.setItem('cart', JSON.stringify(cart))
                                           $(".cart-counter").text(cart.length)
                                         } else {
                                           cart.push({
                                             slug: that.state.product.slug,
                                             number: that.state.number,
                                             product: that.state.product
                                           })
                                           sessionStorage.setItem('cart', JSON.stringify(cart))
                                           $(".cart-counter").text(cart.length)
                                         }
                                         // $(".cart-counter").text(cart.length)
                                         this.setState({cart: cart})
                                       }
                                     }}
                                ><i className="glyphicon glyphicon-minus" /></div>
                                <input type="number" step={1} min={0} max={999} value={el.number} className="input-text qty text"
                                  onChange={(e) => {
                                    let value = parseInt(e.target.value)
                                    let that = this
                                    if(process.env.BROWSER) {
                                      let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
                                      let cart = JSON.parse(sessionStorage.getItem("cart") || '[]')
                                      let index = idx
                                      if (index >= 0) {
                                        cart[index].number = value
                                        sessionStorage.setItem('cart', JSON.stringify(cart))
                                        $(".cart-counter").text(cart.length)
                                      }
                                      // $(".cart-counter").text(cart.length)
                                      this.setState({cart: cart})
                                    }
                                  }}
                                />
                                <div className="quantity-button quantity-up"
                                     onClick={() => {
                                       let that = this
                                       if(process.env.BROWSER) {
                                         let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
                                         let cart = JSON.parse(sessionStorage.getItem("cart") || '[]')
                                         let index = idx
                                         if (index >= 0) {
                                           cart[index].number = cart[index].number + 1
                                           sessionStorage.setItem('cart', JSON.stringify(cart))
                                           $(".cart-counter").text(cart.length)
                                         } else {
                                           cart.push({
                                             slug: that.state.product.slug,
                                             number: that.state.number,
                                             product: that.state.product
                                           })
                                           sessionStorage.setItem('cart', JSON.stringify(cart))
                                           $(".cart-counter").text(cart.length)
                                         }
                                         // $(".cart-counter").text(cart.length)
                                         this.setState({cart: cart})
                                       }
                                     }}
                                ><i className="glyphicon glyphicon-plus"
                                /></div>
                              </div>
                            </td>
                            <td className="product-subtotal"><span className="woocommerce-Price amount">{(el.product.price * el.number).toLocaleString()}<span className="woocommerce-Price-currencySymbol">đ</span></span>
                            </td>
                            <td className="product-remove"><a href="javascript:void(0)" title="Remove this item" className="remove"

                            ><span
                              onClick={() => {
                                let that = this
                                if(process.env.BROWSER) {
                                  let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
                                  let cart = JSON.parse(sessionStorage.getItem("cart") || '[]')
                                  let index = idx
                                  if (index >= 0) {
                                    cart.splice(index, 1)
                                    sessionStorage.setItem('cart', JSON.stringify(cart))
                                    $(".cart-counter").text(cart.length)
                                  }
                                  // $(".cart-counter").text(cart.length)
                                  this.setState({cart: cart})
                                }
                              }}
                            ><i className="glyphicon glyphicon-remove" /></span></a></td>
                          </tr>
                        )
                      })}

                      </tbody>
                    </table>
                    <div className="cart-totals">
                      <div className="row">
                        <div className="col-md-7 col-xs-12">
                          <a href="/cua-hang">
                            <div type="submit" className="btn btn-maincolor">Tiếp tục mua hàng</div>
                          </a>
                          <a href="/thanh-toan">
                            <div type="submit" className="btn btn-maincolor">Thanh toán</div>
                          </a>
                        </div>
                        <div className="col-md-5 col-xs-12 text-center">
                          <div className="subtotal">Tổng tiền:<span className="woocommerce-Price">{sum.toLocaleString()}<span className="woocommerce-Price-currencySymbol">đ</span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="discount-shipping-payment padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="row">

              </div>
            </div>
          </section>
        </div>

      </div>
    );
  }
}

export default Cart
