import React from 'react';

import {Title, BreadCrumb} from './components'
import moment from 'moment'

class About extends React.Component {

  render() {
    let recentNews = this.props.data.recentNews.value
    let allProducts = this.props.data.allProducts.value
    let allHotdeals = this.props.data.allHotdeals.value
    let productCategories = this.props.data.productCategories.value
    let category = undefined

    if(this.props.slug){
      category = productCategories.find(p => p.slug === this.props.slug)
    }

    return (
      <div>
        <div className="main-contents">
          {/* Breadcrumb*/}
          <section className="banner shop">
            <div className="container">
              <div className="morepage-banner">
                {!this.props.slug && <h2 className="title">Happy Green Market</h2>}
                {this.props.slug && <h2 className="title">{category.title}</h2>}
              </div>
            </div>
          </section>
          <section className="page-main padding-top-100 padding-bottom-100">
            <div className="container">
              <div className="row">
                <h2
                  style={{textAlign: 'center', fontSize: 28}}
                  onClick={() => {
                    console.log('click click')
                  }}
                >
                  Hot deal
                </h2>
                <hr/>
                <div className="col-md-12 col-xs-12 main-left">
                  <div className="list-block column-3">
                    {allHotdeals.map((p, idx) => {
                      return (
                        <div className="item" key={idx}>
                          <div className="block-4">
                            <div className="block-image">
                              <div className="square">
                                <img src={p.coverUrl} alt className="img-full" />
                              </div>
                              <a href={`/sp/${p.slug}`} className="link" />
                            </div>
                            <div className="block-content"><a href="javascript:void(0)" className="title">{p.title}</a>
                              <div className="prices-wrapper">
                                <div className="prices"><span className="number">{p.price.toLocaleString()}</span><sup>đ</sup></div><span className="unit">/{p.donvi}</span></div>
                              <ul className="list-icons">
                                <li><span  className="link" style={{cursor: 'pointer'}}
                                       onClick={() => {
                                         let that = this
                                         if(process.env.BROWSER) {
                                           let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
                                           let cart = JSON.parse(sessionStorage.getItem("cart") || '[]')
                                           let index = cart.findIndex(el => {
                                             return el.slug === p.slug
                                           })
                                           if (index >= 0) {
                                             cart[index].number = cart[index].number + 1
                                             sessionStorage.setItem('cart', JSON.stringify(cart))
                                             console.log(cart)
                                             // $(".cart-counter").text(cart.length)
                                           } else {
                                             cart.push({
                                               slug: p.slug,
                                               number: 1,
                                               product: p
                                             })
                                             sessionStorage.setItem('cart', JSON.stringify(cart))
                                             // $(".cart-counter").text(cart.length)
                                           }
                                           // $(".cart-counter").text(cart.length)
                                           document.location.href = '/gio-hang'
                                         }
                                       }}
                                ><i className="icons fa fa-cart-plus" /></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  {/*<nav className="pagination-list margin-top-70">*/}
                    {/*<ul className="pagination">*/}
                      {/*<li><a href="javascript:void(0)" aria-label="Previous" className="btn-pagination previous"><span aria-hidden="true" className="fa fa-angle-left" /></a></li>*/}
                      {/*<li><a href="javascript:void(0)" className="btn-pagination active">01</a></li>*/}
                      {/*<li><a href="javascript:void(0)" className="btn-pagination">02</a></li>*/}
                      {/*<li><a href="javascript:void(0)" className="btn-pagination">...</a></li>*/}
                      {/*<li><a href="javascript:void(0)" className="btn-pagination">09</a></li>*/}
                      {/*<li><a href="javascript:void(0)" aria-label="Next" className="btn-pagination next"><span aria-hidden="true" className="fa fa-angle-right" /></a></li>*/}
                    {/*</ul>*/}
                  {/*</nav>*/}
                </div>
              </div>
              <div className="row">
                <h2
                  style={{textAlign: 'center', fontSize: 28}}
                >
                  Tất cả sản phẩm
                </h2>
                <hr/>
                <div className="col-md-12 col-xs-12 main-left">
                  <div className="list-block column-3">
                    {allProducts.map((p, idx) => {
                      return (
                        <div className="item" key={idx}>
                          <div className="block-4">
                            <div className="block-image">
                              <div className="square">
                                <img src={p.coverUrl} alt className="img-full" />
                              </div>
                              <a href={`/sp/${p.slug}`} className="link" />
                            </div>
                            <div className="block-content"><a href="javascript:void(0)" className="title">{p.title}</a>
                              <div className="prices-wrapper">
                                <div className="prices"><span className="number">{p.price.toLocaleString()}</span><sup>đ</sup></div><span className="unit">/{p.donvi}</span></div>
                              <ul className="list-icons">
                                <li><span  className="link" style={{cursor: 'pointer'}}
                                       onClick={() => {
                                         let that = this
                                         if(process.env.BROWSER) {
                                           let sessionStorage = (window && window.sessionStorage) ? window.sessionStorage : {}
                                           let cart = JSON.parse(sessionStorage.getItem("cart") || '[]')
                                           let index = cart.findIndex(el => {
                                             return el.slug === p.slug
                                           })
                                           if (index >= 0) {
                                             cart[index].number = cart[index].number + 1
                                             sessionStorage.setItem('cart', JSON.stringify(cart))
                                             console.log(cart)
                                             // $(".cart-counter").text(cart.length)
                                           } else {
                                             cart.push({
                                               slug: p.slug,
                                               number: 1,
                                               product: p
                                             })
                                             sessionStorage.setItem('cart', JSON.stringify(cart))
                                             // $(".cart-counter").text(cart.length)
                                           }
                                           // $(".cart-counter").text(cart.length)
                                           document.location.href = '/gio-hang'
                                         }
                                       }}
                                ><i className="icons fa fa-cart-plus" /></span></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  {/*<nav className="pagination-list margin-top-70">*/}
                    {/*<ul className="pagination">*/}
                      {/*<li><a href="javascript:void(0)" aria-label="Previous" className="btn-pagination previous"><span aria-hidden="true" className="fa fa-angle-left" /></a></li>*/}
                      {/*<li><a href="javascript:void(0)" className="btn-pagination active">01</a></li>*/}
                      {/*<li><a href="javascript:void(0)" className="btn-pagination">02</a></li>*/}
                      {/*<li><a href="javascript:void(0)" className="btn-pagination">...</a></li>*/}
                      {/*<li><a href="javascript:void(0)" className="btn-pagination">09</a></li>*/}
                      {/*<li><a href="javascript:void(0)" aria-label="Next" className="btn-pagination next"><span aria-hidden="true" className="fa fa-angle-right" /></a></li>*/}
                    {/*</ul>*/}
                  {/*</nav>*/}
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
