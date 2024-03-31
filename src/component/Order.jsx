
import React, { useState } from 'react';
import { Button, Space, Table, Row, Col } from 'antd';
import CountUp from 'react-countup';
function Order() {
    const data = [];
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        Action: `<EditOutlined />`
      });
    }

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
                   
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title:'Action',
          key: 'Action',
         
        }
      ];
    return (
    
        <div className='wrapper'>
            <div className='container' >
              <div className='row'>
                <div className='col-md-4'>
                  <div className='CardItem'>
                    <div div className='title'>Total user </div>
                    <p className='title' style={{color:'orange'}}><CountUp end={100} /></p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='CardItem'>
                    <div div className='title'>
                        Total order                        
                      </div>
                      <p className='title' style={{color:'orange'}}><CountUp end={150} /></p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='CardItem'>
                    <div div className='title'>
                        Total product
                      </div>
                      <p className='title' style={{color:'orange'}}><CountUp end={50} /></p>
                  </div>
                </div>
              </div>
            </div>
          <div className='container'>
              <Table columns={columns} dataSource={data} className='mt-5'  />            
          </div>          
        </div>
    );
}

export default Order;