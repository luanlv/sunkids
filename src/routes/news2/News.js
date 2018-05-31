import React from 'react';
import Link from '../../components/Link'
import moment from 'moment'
// import {Title, BreadCrumb} from './components'

class News extends React.Component {
  render() {
    let news = this.props.data.allNews.value
    let recentNews = this.props.data.recentNews.value
    let categories = this.props.data.categories.value

    let category = undefined

    if(this.props.slug){
      category = categories.find(p => p.slug === this.props.slug)
    }

    // console.log(categories)

    return (
      <div id="page-width" style={{marginTop: 60}}>
        <div id="page-section">
          <section id="blog">
            <div className="container-fluid">
              <div className="jumbo-heading">
                {/* Heading */}
                <h1>Trang tin tức của Sunkids</h1>
                <ul className="breadcrumb">
                  <li><a href="/">Trang chủ</a> <span className="divider" /></li>
                  <li className="active" style={{color: 'white'}}>Tin tức</li>
                </ul>
              </div>
              {/* /jumbo-heading */}
              {/* Blog Home */}
              <div className="container">

                    <div  id="blog-container" className="col-md-9">
                      {news.map((el, idx) => {
                        return (
                      <div key={idx} className="blog-post row">
                        <div className="img-date">
                          <div className="img-blog">
                            <a href={"/p/" + el.slug} >
                              <img className="img-responsive" src={el.coverUrl} />
                            </a>
                          </div>
                        </div>
                        <div className="col-md-12">
                          {/* Post header */}
                          <h3>
                            <a href={"/p/" + el.slug} >{el.title}</a>
                          </h3>
                          <p>
                            {el.description}
                          </p>
                          <a className="btn" href={"/p/" + el.slug} >Xem thêm <i className="fa fa-angle-right" /></a>
                        </div>
                      </div>)
                      })}
                    </div>

                {/* /blog-container */}
                {/* Sidebar Starts */}
                <div className="sidebar col-md-3">
                  {/* About Us Widget */}
                  <div className="well">
                    <h4 className="sidebar-header">Hệ thống Anh Ngữ Quốc Tế Sunkids</h4>
                    <h5 style={{color: 'orange'}}>
                      Education for future
                    </h5>
                  </div>
                  {/* Blog Search */}
                  {/* /well */}
                  <div className="well">
                    <h4 className="sidebar-header">Tin tức mới nhất</h4>
                    <div className="row">

                      {recentNews.map((el, idx) => {
                        return (
                          <div key={idx} className="blog-latest col-xs-12">
                            <a href={"/p/" + el.slug}>
                              <div className="col-xs-4">
                                <img src={el.coverUrl} alt className="img-circle img-responsive" />
                              </div>
                              <div className="col-xs-8">
                                <span>
                                  {el.title}
                                </span>
                              </div>
                            </a>
                          </div>
                        )
                      })}

                    </div>
                  </div>
                  {/* /well */}
                  {/* Blog Categories */}
                  <div className="well">
                    <h4 className="sidebar-header">Danh mục</h4>
                    <div className="row">
                      <ul className="list-unstyled">
                        {categories.map((el, idx) => {
                          return (
                            <li key={idx}><a href="#">{el.title}</a></li>
                          )
                        })}
                      </ul>
                      {/* /ul */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /well */}
                  {/* Tags Widget */}
                  <div className="well">
                    <div className="fb-page" data-href="https://www.facebook.com/sunkidsvietnam/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/sunkidsvietnam/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/sunkidsvietnam/">Sunkids Khoái Châu</a></blockquote></div>
                  </div>

                </div>
                <div className="text-center col-md-12">
                  <ul className="pagination">
                    <li className="active"><a href="#">1</a></li>
                    {/*<li><a href="#">2</a></li>*/}
                    {/*<li><a href="#">3</a></li>*/}
                    {/*<li><a href="#">4</a></li>*/}
                    {/*<li><a href="#">5</a></li>*/}
                    <li><a href="#">»</a></li>
                  </ul>
                </div>
                {/* /text-center */}
              </div>
              {/* /container*/}
            </div>
            {/* /container-fluid*/}
          </section>
          {/*Section Blog ends */}
        </div>
        {/*/page-section*/}
        {/* Newsletter */}
        {/* /Section ends */}
        {/* Footer starts */}

      </div>

    );
  }
}
//
// function findCategoryBySlug(slug, categories) {
//   for (let i = 0; i < categories.length; i++){
//     if(categories[i].slug === slug) {
//       return categories[i]
//     }
//   }
//   return {slug:'/', title: 'Không tồn tại'}
// }

export default News
