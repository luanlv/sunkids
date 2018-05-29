import React from 'react'
import Link from '../../../components/Link'

 class Partner extends React.Component {
  render () {
    const partners = this.props.data.information.value.home.partners
    return (
      <div className="container" style={{marginTop: 60}}>
        <div className="row margin-bottom-60 margin-top-60">
          <div className="col-sm-12">
            <div className="widget_text">
              <h3 className="widget-title lined big">
                <span>CÁC ĐỐI TÁC</span>
              </h3>
              <div className="logo-panel">
                <div className="row">
                  <div className="col-xs-12  col-sm-2">
                    <Link to={partners.url1}><img alt="Client" src={partners.img1} /></Link>
                  </div>
                  <div className="col-xs-12  col-sm-2">
                    <Link to={partners.url2}><img alt="Client" src={partners.img2} /></Link>
                  </div>
                  <div className="col-xs-12  col-sm-2">
                    <Link to={partners.url3}><img alt="Client" src={partners.img3} /></Link>
                  </div>
                  <div className="col-xs-12  col-sm-2">
                    <Link to={partners.url4}><img alt="Client" src={partners.img4} /></Link>
                  </div>
                  <div className="col-xs-12  col-sm-2">
                    <Link to={partners.url5}><img alt="Client" src={partners.img5} /></Link>
                  </div>
                  <div className="col-xs-12  col-sm-2">
                    <Link to={partners.url6}><img alt="Client" src={partners.img6} /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Partner
