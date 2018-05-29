/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { Button, DatePicker, Table, Timeline, Icon, Row, Col} from 'antd';
import moment from 'moment'
import axios from 'axios'


const { Column, ColumnGroup } = Table;

class Admin extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cart: []
    }
    this.init()
  }

  init = async () => {
    let that = this
    axios.get('/api/cart')
      .then(res => {
        that.setState({cart: res.data})
      })
      .catch(err => {
        alert('Có lỗi')
      })
  }

  render() {
    return (
        <div>
          <Row className="padding-5">
            <Table dataSource={this.state.cart} size="small"
                   pagination={{pageSize: 100}}
                   onRowDoubleClick={(record, index, event) => {
                     // info(record, this.state.danhsachthauphuObj)
                     console.log(record)
                   }}
                   // onChange={this.handleChange}
                   bordered={true}
            >


              <Column
                title="Họ tên"
                dataIndex="hoten"
                key="hoten"
                render={(text, record) => (
                  <span
                  >
                    {record.hoten}
                  </span>
                )}
              />
              <Column
                title="Số điện thoại"
                dataIndex="phone"
                key="phone"
                render={(text, record) => (
                  <span
                  >
                    {record.phone}
                  </span>
                )}
              />
              <Column
                title="Email"
                dataIndex="email"
                key="email"
                render={(text, record) => (
                  <span
                  >
                    {record.email}
                  </span>
                )}
              />
              <Column
                title="Địa chỉ"
                dataIndex="diachi"
                key="diachi"
                render={(text, record) => (
                  <span
                  >
                    {record.diachi}
                  </span>
                )}
              />
              <Column
                title="Đơn hàng"
                dataIndex="cart"
                key="cart"
                render={(text, record) => (
                  <span
                  >
                    {record.cart.map((el, idx) => {
                      return (
                        <div key={idx}>
                          {el.number} x {el.product.title} = {(el.product.price * el.number).toLocaleString()} đ
                        </div>
                      )
                    })}
                    <div>
                      <span>Total: </span>
                      <span style={{color: 'red'}}>
                        {record.cart.reduce((prev, next) => {
                          return prev + (next.number * next.product.price)
                          // console.log(prev)
                          // console.log(next)
                        }, 0).toLocaleString()} đ
                      </span>
                    </div>
                  </span>
                )}
              />
            </Table>
          </Row>
        </div>
    );
  }
}


const columns = [
  {
    title: 'Thời gian đặt hàng',
    dataIndex: 'created_at',
    key: 'created_at',
    render: text => <span><span style={{color: 'blue'}}>{moment(text).format('LT')}</span>, <b>{moment(text).format('L')}</b></span>,
  },
  {
  title: 'Tên',
  dataIndex: 'name',
  key: 'name',
  render: text => <span>{text}</span>,
},
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    key: 'phone',
    render: text => <span><a href={"tel:" + text}><Button>Gọi điện</Button></a> {text}</span>,
  },
  {
    title: 'Số lượng (kg)',
    dataIndex: 'quantity',
    key: 'quantity',
    render: text => <span>{text}</span>,
  },
  {
    title: 'Sản phẩm',
    key: 'action',
    render: (text, record) => (
      <span>
        {mapProduct(record.product)}
      </span>
    ),
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
    render: text => <span>{text}</span>,
  }
];

function mapProduct(slug){
  switch(slug){
    case 'com-kho-hoa-vang':
      return 'Cốm khô hoa vàng'
      break;
    case 'Chả Cốm':
      return 'Chả Cốm'
      break;
    case 'com-non-me-tri':
      return 'Cốm Non Mễ Trì'
      break;
    default:
      return ''
      break;
  }
}

export default Admin
