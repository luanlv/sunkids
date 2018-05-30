import React from 'react';
import Link from '../../components/Link'
import {Title, BreadCrumb} from './components'
import moment from 'moment'

class NewsDetail extends React.Component {
  render() {

    const news = this.props.data.news.value
    const recentNews = this.props.data.recentNews.value
    const categories = this.props.data.categories.value

    return (
      <div id="page-width" style={{marginTop: 60}}>
        <div id="page-section">
          <section id="blog">
            <div className="container-fluid">
              <div className="jumbo-heading">
                {/* Heading */}
                <h1 style={{fontSize: 32}}>{news.title}</h1>
              </div>
              {/* /jumbo-heading */}
              {/* Blog Home */}
              <div className="container">

                <div  id="blog-container" className="col-md-9" dangerouslySetInnerHTML={{__html: news.body}}>
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


function findCategoryBySlug(slug, categories) {
  for (let i = 0; i < categories.length; i++){
    if(categories[i].slug === slug) {
      return categories[i]
    }
  }
  return {slug:'/', title: 'Không tồn tại'}
}

export default NewsDetail
