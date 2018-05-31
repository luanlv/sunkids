import React from 'react';

import {Title, BreadCrumb, Widget, FormEmail} from './components'

class Contact extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      key: 1,
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14914.656587373818!2d105.96689523679275!3d20.845264380800383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ba79feda6c43%3A0x495ec61c8e98bfe6!2zQW4gVsSpLCBLaG_DoWkgQ2jDonUsIEh1bmcgWWVuLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1527556736669'
    }
  }

  render() {

    const contact = this.props.data.information.value.contact

    return (
      <div className="container" style={{paddingTop: 100}}>
        <h3 style={{color: 'orange', textAlign: 'center'}}>HỆ THỐNG CHI NHÁNH ĐÀO TẠO</h3>
        {/*<h4 className="sub-header">Accordions</h4>*/}
        <div className="row" style={{textAlign: 'center', marginBottom: 20}}>
          <img src="/themes/demo/assets/sunkids_logo.png" alt="" style={{width: '40%', margin: '0 auto'}}/>
        </div>
        <div className="col-md-6">
          <h3 style={{textAlign: 'center'}}>Bản đồ</h3>
          <iframe src={this.state.map} frameBorder={0} style={{border: 0, width: '100%', height: 400}} allowFullScreen />
        </div>
        <div className="col-md-6">
          <div className="panel-group" id="accordion">
            {/* Question 1 */}
            <div className="panel">
              <div className="panel-heading">
                <h6 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true">TP. Hưng Yên [9 cơ sở]</a>
                </h6>
              </div>
              {/* /panel-heading */}
              <div id="collapse1" className="panel-collapse collapse in" aria-expanded="true" style={{}}>
                <div className="panel-body">
                  <div className="list-group">
                    <a href="#" className={"list-group-item " + (this.state.key === 1 ? "active":"")}
                      onClick={() => {
                        this.setState({
                          key: 1,
                          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14914.656587373818!2d105.96689523679275!3d20.845264380800383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ba79feda6c43%3A0x495ec61c8e98bfe6!2zQW4gVsSpLCBLaG_DoWkgQ2jDonUsIEh1bmcgWWVuLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1527556736669'
                        })
                      }}
                    >Sunkids Khoái Châu</a>

                    <a href="#" className={"list-group-item " + (this.state.key === 2 ? "active":"")}
                       onClick={() => {
                         this.setState({
                           key: 2,
                           map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.036912974316!2d106.05642241534233!3d20.668077186195028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c72be2f1b23b%3A0x2309aa80707d23aa!2zNTI3IE5ndXnhu4VuIFbEg24gTGluaCwgSGnhur9uIE5hbSwgSMawbmcgWcOqbiwgVmlldG5hbQ!5e0!3m2!1sfr!2s!4v1527795561239'
                         })
                       }}
                    >Sunkids Phố Hiến</a>

                    <a href="#" className={"list-group-item " + (this.state.key === 3 ? "active":"")}
                       onClick={() => {
                         this.setState({
                           key: 3,
                           map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.8616426989333!2d105.99737521534625!3d20.958070686036635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a5a356169129%3A0x84cf23b7ea526482!2zQ2jhu6MgxJDGsOG7nW5nIEPDoWk!5e0!3m2!1sfr!2s!4v1527795805065'
                         })
                       }}
                    >Sunkids Văn Lâm</a>

                    <a href="#" className={"list-group-item " + (this.state.key === 4 ? "active":"")}
                       onClick={() => {
                         this.setState({
                           key: 4,
                           map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.1891590450878!2d106.00862936534438!3d20.82406668610959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ba33ff96242d%3A0xab7c544d7d37275a!2zQsO0IFRo4budaSwgS2hvw6FpIENow6J1LCBIxrBuZyBZw6puLCBWaWV0bmFt!5e0!3m2!1sfr!2s!4v1527795937450'
                         })
                       }}
                    >Sunkids Bô Thời</a>

                    <a href="#" className={"list-group-item " + (this.state.key === 5 ? "active":"")}
                       onClick={() => {
                         this.setState({
                           key: 5,
                           map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119168.87817798225!2d105.83499675085847!3d21.031587909905685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a4f449248ed9%3A0xad1fbc0907723e86!2zdHQuIELhuqduIFnDqm4gTmjDom4sIE15IEhhbywgSMawbmcgWcOqbiwgVmlldG5hbQ!5e0!3m2!1sfr!2s!4v1527796030612'
                         })
                       }}
                    >Sunkids Mỹ Hào</a>

                    <a href="#" className={"list-group-item " + (this.state.key === 6 ? "active":"")}
                       onClick={() => {
                         this.setState({
                           key: 6,
                           map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14903.36452476939!2d106.00697973619862!3d20.95889417657896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a5b2c3a95555%3A0x6c5690fcf3b03d17!2zTOG6oWMgSOG7k25nLCBWxINuIEzDom0sIEjGsG5nIFnDqm4sIFZpZXRuYW0!5e0!3m2!1sfr!2s!4v1527796142311'
                         })
                       }}
                    >Sunkids Lạc Hồng</a>

                    <a href="#" className={"list-group-item " + (this.state.key === 7 ? "active":"")}
                       onClick={() => {
                         this.setState({
                           key: 7,
                           map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1936557673703!2d106.02059031534672!3d20.984872986022225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a42c018cc635%3A0xf99ab6a572a12271!2zUsawxqHMo3UgTGHMo2MgxJBhzKNvIC0gQ8ahIHPGocyJIHNhzIluIHh1w6LMgXQgcsawxqHMo3UgcXXDqiBTYcyBdSBCacyAbmg!5e0!3m2!1sfr!2s!4v1527796182217'
                         })
                       }}
                    >Sunkids Lạc Đạo</a>


                    <a href="#" className={"list-group-item " + (this.state.key === 11 ? "active":"")}
                       onClick={() => {
                         this.setState({
                           key: 11,
                           map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59729.584573895634!2d106.02846943978486!3d20.665549466138412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c12ae1ec71a3%3A0x4d32999e6a9bb398!2zSMawbmcgWcOqbiwgVmlldG5hbQ!5e0!3m2!1sfr!2s!4v1527796356290'
                         })
                       }}
                    >Mầm non Vipkids</a>

                    <a href="#" className={"list-group-item " + (this.state.key === 12 ? "active":"")}
                       onClick={() => {
                         this.setState({
                           key: 12,
                           map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59729.584573895634!2d106.02846943978486!3d20.665549466138412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135c12ae1ec71a3%3A0x4d32999e6a9bb398!2zSMawbmcgWcOqbiwgVmlldG5hbQ!5e0!3m2!1sfr!2s!4v1527796356290'
                         })
                       }}
                    >Mầm non Mayday</a>
                  </div>

                </div>
              </div>
            </div>
            {/*/panel */}
            {/* Question 2 */}
            <div className="panel">
              <div className="panel-heading">
                <h6 className="panel-title">
                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false">Bắc Giang  [1 cơ sở]</a>
                </h6>
              </div>
              {/* /panel-heading */}
              <div id="collapse2" className="panel-collapse collapse" aria-expanded="false" style={{height: 0}}>
                <div className="panel-body">
                  <div className="list-group">

                    <a href="#" className={"list-group-item " + (this.state.key === 10 ? "active":"")}
                       onClick={() => {
                         this.setState({
                           key: 10,
                           map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238084.6437332541!2d105.7363058035676!3d21.189276386939987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31351a7b1b7b2ac1%3A0x7a90cb6a6f9a0bd3!2zSGnhu4dwIEjDsmEsIELhuq9jIEdpYW5nLCBWaWV0bmFt!5e0!3m2!1sfr!2s!4v1527796283794'
                         })
                       }}
                    >Sunkids Hiệp Hoà</a>

                  </div>
                </div>
              </div>
            </div>
            {/*/panel */}
            {/* Question 3 */}
            <div className="panel">
              <div className="panel-heading">
                <h6 className="panel-title">
                  <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false">Hà Nội  [1 cơ sở]</a>
                </h6>
              </div>
              <div id="collapse3" className="panel-collapse collapse" aria-expanded="false">
                <div className="panel-body">
                  <div className="list-group">

                    <a href="#" className={"list-group-item " + (this.state.key === 9 ? "active":"")}
                       onClick={() => {
                         this.setState({
                           key: 9,
                           map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119409.5794865136!2d105.82802494633796!3d20.728516278817317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b61ef300321f%3A0xc854c156fa4ae7ee!2zUGjDuiBYdXnDqm4sIEhhbm_DrywgVmlldG5hbQ!5e0!3m2!1sfr!2s!4v1527796217512'
                         })
                       }}
                    >Sunkids Phú Xuyên </a>

                  </div>

                </div>
              </div>
            </div>
            {/*/panel */}
          </div>

        </div>
        {/* /.accordion */}
      </div>
    );
  }
}

export default Contact
