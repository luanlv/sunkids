/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.css';
import {Modal, Input, Button, Switch, Select, Row, Col, Card, Tabs, message, Affix, InputNumber} from 'antd';
import axios from 'axios';
import history from '../../../history'
import CustomTag from '../Components/Tags'
import ImageUpload from '../Components/ImageUpload'
import ImageSelect from '../Components/ImageSelect'
const TabPane = Tabs.TabPane;
import CKEditor from '../Components/CKEditor'
const Option = Select.Option;

class EditComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: [],
        hotdeal: false,
        donvi: 'KG'
      },
      // categories: []
    }
    if(this.props.isEdit)
      this.init(this.props.slug)
    else
      this.init2()
  }

  async init (slug) {
    let categories = 'getProductCategories{title, slug, created_at}'
    let productBySlug = 'getOneProduct(slug: "'+ slug +'"){ coverUrl, category, slug, title, body, price, donvi, view, hotdeal, created_at}'
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{ ' + productBySlug + ','+ categories +' }',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();
    this.setState(prev => {
      return {
        ...prev,
        loading: false,
        data: data.getOneProduct,
        categories: data.getProductCategories
      }
    })
  }

  async init2 (slug) {
    let categories = 'getProductCategories{title, slug, created_at}'
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{ ' + categories +' }',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();
    this.setState(prev => {
      return {
        ...prev,
        loading: false,
        categories: data.getProductCategories
      }
    })
  }

  handleCoverUpload (img) {
    this.setState(prevState => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          coverUrl: '/image/' + img.name
        }
      }
    })
  }

  showModalSelectImage = (type) => {
    this.setState(prev => {
      return {
        ...prev,
        modalSelectImage: true,
        selectImageType: type
      }
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      modalSelectImage: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      modalSelectImage: false,
    });
  }

  handleSelectImage(img){
    if(this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
          data: {
            ...prevState.data,
            coverUrl: '/image/' + img.name
          }
        }
      })
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name)
      this.setState(prevState => {
        return {
          ...prevState,
          modalSelectImage: false,
        }
      })
    }
  }

  addNews(post){
    axios.post('/api/product/new', post)
      .then(res => {
        message.success('Thêm mới thành công!')
        history.push({
          pathname: '/admin/product',
          search: '?v=edit&slug=' + res.data.slug
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateNews(post){
    axios.post('/api/product/update', post)
      .then(res => {
        message.success('Cập nhập thành công!')
      })
      .catch(err => {
        message.error('Cập nhập thất bại')
      })
  }

  render() {
    if(this.props.loading){
      return (<div>loading...</div>)
    }

    let listCategory = []

    let allCategory = []
    if(this.state.categories) allCategory = this.state.categories

    allCategory.map(el => {
      listCategory.push(<Option key={el.slug}>{el.title}</Option>);
    })

    return (
      !this.state.loading && <div className="admin-editor">
        <Row className="padding-5" style={{marginBottom: 15}}>
          <Affix
            offsetTop={10}
          >
            {this.props.isEdit && <Button type="primary" style={{float: 'right'}}
                                          size="large"
              onClick={() => {
                this.updateNews(this.state.data)
              }}
            >Cập nhập</Button>}
            {!this.props.isEdit && <Button type="primary" style={{float: 'right'}}
                                           size="large"
              onClick={() => {
                this.addNews(this.state.data)
              }}
            >Thêm mới</Button>}
          </Affix>
        </Row>
        <Row>
          <Tabs type="card">
            <TabPane tab="Thông tin bài viết" key="1">
              <Row>
                <Col sm={12} className="padding-5" >
                  <div style={{ marginBottom: 16 }}>
                    <label><b>Tên:</b></label>
                    <Input
                      placeholder="Tên"
                      defaultValue={this.state.data.title}
                      onChange={(e) => {
                        let that = this
                        let value = e.target.value
                        let newSlug = function(){
                          if(that.props.isEdit)
                            return that.state.data.slug
                          else {
                            return slugify(value)
                          }
                        }
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              title: value,
                              slug: newSlug()
                            }
                          }
                        })
                      }}
                    />
                  </div>

                  {this.state.categories &&
                    <div style={{marginBottom: 16}}>
                      <label><b>Danh mục:</b></label>
                      <Select
                        mode="multiple"
                        style={{width: '100%'}}
                        placeholder="Chọn danh mục"
                        defaultValue={this.state.data.category}
                        onChange={(value) => {
                          this.setState(prev => {
                            return {
                              ...prev,
                              data: {
                                ...prev.data,
                                category: value
                              }
                            }
                          })
                        }}
                      >
                        {listCategory}
                      </Select>
                    </div>
                  }

                  <div style={{ marginBottom: 16 }}>
                    <label><b>slug:</b></label>
                    <Input
                      placeholder="Slug"
                      disabled={this.props.isEdit}
                      value={this.state.data.slug}
                      onChange={(e) => {
                        let value = e.target.value
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              slug: value
                            }
                          }
                        })
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label><b>Giá :</b></label>
                    <InputNumber
                      min={0}
                      formatter={value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
                      parser={value => value.replace(/(,*)/g, '')}
                      style={{width: '100%'}}
                      placeholder="giá"
                      defaultValue={this.state.data.price}
                      onChange={(value) => {
                        if(parseInt(value).isNaN){
                          value = 0;
                        }
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              price: value
                            }
                          }
                        })
                      }}
                    />


                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label><b>Đơn vị :</b></label>
                    <Select
                      defaultValue={this.state.data.donvi}
                      style={{width: '100%'}}
                      onChange={(value) => {
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              donvi: value
                            }
                          }
                        })
                      }}
                    >
                      <Option value="KG">KG</Option>
                      <Option value="500g">500g</Option>
                      <Option value="100g">100g</Option>
                      <Option value="Hộp">Hộp</Option>
                      <Option value="Chậu">Chậu</Option>
                      <Option value="Suất">Suất</Option>
                      <Option value="Combo">Combo</Option>
                    </Select>
                  </div>

                </Col>
                <Col sm={12} className="padding-5">
                  <div style={{ marginBottom: 16 }}>
                    <label><b>Ảnh đại diện:</b></label>
                    {!this.state.data.coverUrl && <ImageUpload
                      isMultiple={false}
                      handleUpload={(img) => this.handleCoverUpload(img)}
                    />}
                    {this.state.data.coverUrl && <Card bordered={false} className="imgWr"
                                                       onClick={() => this.showModalSelectImage('cover')}
                    >
                      <img src={this.state.data.coverUrl} />
                    </Card>}
                  </div>
                  <Button style={{marginRight: 10}}
                          onClick={() => this.showModalSelectImage('cover')}
                  >Chọn ảnh từ thư viện</Button>
                  {this.state.data.coverUrl && <Button
                    onClick={() => {
                      this.setState(prevState => {
                        return {
                          ...prevState,
                          data: {
                            ...prevState.data,
                            coverUrl: null
                          }
                        }
                      })
                    }
                    }
                  >Xóa ảnh </Button>}
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Nội dung" key="2">
              <Row >
                <div style={{maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto'}}>
                  <Col className="padding-5">
                    <CKEditor
                      id={1}
                      value={this.state.data.body || ''}
                      onChange={(value) => {
                        console.log(value)
                        this.setState(prev => {
                          return {
                            ...prev,
                            data: {
                              ...prev.data,
                              body: value
                            }
                          }
                        })
                      }}
                    />
                  </Col>

                </div>
              </Row>
            </TabPane>
          </Tabs>
        </Row>
        <Modal
          style={{top: 30}}
          width="90%"
          title="Basic Modal" visible={this.state.modalSelectImage}
               onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <ImageSelect handleSelect={(img) => this.handleSelectImage(img)} />
        </Modal>
      </div>
    )
  }
}

function slugify(str)
{
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

export default withStyles(s)(EditComponent)
