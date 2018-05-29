import React from 'react'
import Link from '../../../components/Link'

class News extends React.Component {
  render () {

    const recentNews = this.props.data.recentNews.value
    const news1 = recentNews.slice(0,2)
    const news2 = recentNews.slice(2)

    return (
      <div className="news">
        <div className="container">
          <div className="row">
            {news1.map((news, index) => {
              return(
                <div key={index} className="col-sm-4 margin-bottom-30">
                  <div className="widget_pw_latest_news">
                    <Link className="latest-news" to={'/news/' + news.slug}>
                      <div className="latest-news__date">
                        <div className="latest-news__date__month">May</div>
                        <div className="latest-news__date__day">6</div>
                      </div>
                      <img alt="Top benefits of hiring our trucking service" className="wp-post-image"  src={news.coverUrl} />
                      <div className="latest-news__content">
                        <h4 className="latest-news__title">{news.title}</h4>
                        <div className="latest-news__author">Đăng bởi Admin</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            })}

            <div className="col-sm-4 margin-bottom-30">
              <div className="widget_pw_latest_news">
                {news2.map((news, index) => {
                  return (
                    <Link key={index} className="latest-news  latest-news--inline" to={'/news/' + news.slug}>
                      <div className="latest-news__content">
                        <h4 className="latest-news__title">{news.title}</h4>
                        <div className="latest-news__author">Đăng bởi Admin</div>
                      </div>
                    </Link>
                  )
                })}

                <Link className="latest-news  latest-news--more-news" to={'/news'}>
                  Xem Thêm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News;
