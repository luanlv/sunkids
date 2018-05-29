/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import UniversalRouter from 'universal-router'
import history from '../../../history'
import Link from '../../../components/Link'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button, DatePicker, Table, Icon, Popconfirm, message} from 'antd';
import axios from 'axios'

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      page: 1,
      totalPage: 1,
      data: []
    }
    this.getProducts(1)
  }
  render() {
    return (
        <div>
          <Table columns={columns} rowKey={record => record.slug} dataSource={this.state.data} />
        </div>
    );
  }
  async getProducts(page) {

    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{getProducts(page:'+ page +' ){page,totalPage,data{coverUrl, slug, title, body, view, price, donvi, hotdeal, created_at}}}',
      }),
      credentials: 'include',
    });

    const {data} = await resp.json();
    // console.log(data.getProducts)
    this.setState(prev => {
      return {
        ...prev,
        loading: false,
        page: data.getProducts.page,
        totalPage: data.getProducts.totalPage,
        data: data.getProducts.data
      }
    })
  }
}

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => <span>{text.length > 53 ? (text.slice(0, 50) + '...') : (text)}</span>,
}, {
  title: 'Giá',
  dataIndex: 'price',
  key: 'price',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>

      <Link to={"/admin/product?v=edit&slug=" + record.slug }>
        <Button type="danger">
        Sửa
        </Button>
      </Link>
      <Popconfirm placement="right"
                  onConfirm={() => {
                    let that = this;
                    axios.post('/api/product/delete', {slug: record.slug})
                      .then(res => {
                        message.success('Xoá thành công')
                        location.reload();
                      })
                      .catch(err => {
                        message.error('Có lỗi')
                      })
                  }}
                  okText="Chắc chắn xóa" cancelText="Hủy">
      <Button
        type="primary"
      >Xóa</Button>
    </Popconfirm>


    </span>
  ),
}];

export default List
