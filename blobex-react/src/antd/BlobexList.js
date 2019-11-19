import React, { Component } from 'react'
import data from '../blobex.json'
import { Row, Col, Form, Input, Button, Select } from 'antd'
import { DatePicker } from 'antd'
import moment from 'moment'

import 'antd/dist/antd.css'
import './antd.css'

const dateFormat = 'DD MMMM YYYY'
const { Option } = Select
const { Search } = Input

class BlobexList extends Component {
  state = {
    validation: false,
    fields: [true, true, true],
  }

  onChange = e => {
    let newFields = this.state.fields
    newFields[e] = false

    this.setState({ fields: [...newFields] })
  }

  render() {
    return (
      <div className="full-screen">
        <div className="form-container">
          {data.Widgets.map(widgets => {
            return (
              <Row key={data.Widgets.indexOf(widgets) * 9} gutter={[50, 5]}>
                <Col span={24} className="form-header">
                  <Button
                    className="btn"
                    style={{ border: 0, color: 'salmon' }}
                  >
                    Cancel
                  </Button>
                  <h1>{widgets.name}</h1>
                  <Button className="btn" style={{ border: 0, color: 'green' }}>
                    Save
                  </Button>
                </Col>

                {widgets.items.map(details => {
                  return (
                    <Col span={24} key={widgets.items.indexOf(details) * 6}>
                      <Col span={24} className="form-sub-header">
                        <h2>{details.header}</h2>
                      </Col>
                      <Col span={12}>
                        {details.items.map(obj => {
                          return (
                            <Form.Item
                              key={details.items.indexOf(obj) * 69}
                              label={obj.label}
                              vertical="true"
                              className="text-muted"
                              validateStatus={
                                this.state.fields[details.items.indexOf(obj)]
                                  ? ''
                                  : 'error'
                              }
                              help={
                                obj.symbol === 'EUR' ||
                                this.state.fields[details.items.indexOf(obj)]
                                  ? ''
                                  : `Should be combination of numbers & alphabets`
                              }
                            >
                              <Input
                                // min="0"
                                // max="140000"
                                required
                                id="error"
                                onChange={() =>
                                  this.onChange(details.items.indexOf(obj))
                                }
                                style={
                                  obj.required
                                    ? { borderLeft: '0.2rem solid green' }
                                    : {}
                                }
                                className="form-placeholder"
                                type={
                                  obj.type === 'currency' ? 'number' : 'text'
                                }
                                placeholder={
                                  obj.symbol === 'EUR'
                                    ? `€  ${obj.value}`
                                    : `${obj.value}`
                                }
                              />
                            </Form.Item>
                          )
                        })}
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="Stage + Probability (%)"
                          vertical="true"
                          className="text-muted"
                        >
                          <Select
                            showSearch
                            style={{
                              width: '100%',
                            }}
                            placeholder="Proposal/Price Quote"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            filterOption={(input, option) =>
                              option.props.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            <Option value="10%" style={{ color: 'salmon' }}>
                              10%
                            </Option>
                            <Option value="25%" style={{ color: 'grey' }}>
                              25%
                            </Option>
                            <Option value="50%" style={{ color: 'black' }}>
                              50%
                            </Option>
                          </Select>
                        </Form.Item>
                        <Form.Item
                          minLength="4"
                          required
                          label="Close Date"
                          vertical="true"
                          className="text-muted"
                        >
                          <DatePicker
                            defaultValue={moment(new Date(), dateFormat)}
                            format={dateFormat}
                            className="date-picker"
                          />
                        </Form.Item>
                      </Col>
                      <Col span={24} className="form-sub-header">
                        <h2>Additional Information</h2>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          label="Opportunity Owner"
                          vertical="true"
                          className="text-muted"
                        >
                          <Search placeholder="Dolores G. Smith(May 23, 2014 12:45)" />
                        </Form.Item>
                      </Col>

                      <Col span={12}>
                        <Form.Item
                          label="Type"
                          vertical="true"
                          className="text-muted"
                        >
                          <Input placeholder="New Customer" />
                        </Form.Item>
                      </Col>
                    </Col>
                  )
                })}
              </Row>
            )
          })}
        </div>
      </div>
    )
  }
}
export default BlobexList
