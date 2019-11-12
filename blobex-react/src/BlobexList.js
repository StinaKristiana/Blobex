import React, { Component } from 'react';
import data from './blobex.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class BlobexList extends Component {
	state = {
		startDate: new Date()
	};

	handleChange = (date) => {
		this.setState({
			startDate: date
		});
	};

	render() {
		console.log(this.state.startDate);
		return (
			<div className="full-screen">
				<div className="form-container">
					{data.Widgets.map((widgets) => {
						return (
							<Form>
								<Row className="form-header" style={{ margin: 0 }}>
									<Button style={{ border: 0 }} variant="outline-danger" size="sm">
										Cancel
									</Button>
									<h1>{widgets.name}</h1>
									<Button style={{ border: 0 }} variant="outline-success" size="sm">
										Save
									</Button>
								</Row>
								<div>
									{widgets.items.map((details) => {
										return (
											<div>
												<Row style={{ margin: 0 }} className="form-sub-header">
													<h2>{details.header}</h2>
												</Row>
												<Row style={{ margin: 0 }}>
													<Col>
														{details.items.map((obj) => {
															return (
																<Form.Group
																	controlId="formBasicEmail"
																	className="form-group"
																>
																	<Form.Label />
																	<Form.Text className="text-muted">
																		{obj.label}
																		{obj.header}
																	</Form.Text>
																	<Form.Control
																		type={obj.type}
																		placeholder= {obj.value }
																	/>
																</Form.Group>
															);
														})}
													</Col>

													<Col>
														<Form.Group
															controlId="exampleForm.ControlSelect1"
															className="form-group"
														>
															<Form.Text className="text-muted">
																Stage + Probability (%)
															</Form.Text>
															<Form.Control as="select">
																<option>Proposal/Price Quote</option>
																<option>2</option>
																<option>3</option>
																<option>4</option>
																<option>5</option>
															</Form.Control>
														</Form.Group>
														<Form.Group controlId="formBasicEmail" className="form-group">
															<Form.Text className="text-muted">Close Date</Form.Text>

															<Form.Label className="form-lable">
																<DatePicker
																	className="form-date"
																	selected={this.state.startDate}
																	onChange={this.handleChange}
																	dateFormat="dd MMMM,yyyy"
																/>
																
															</Form.Label>
															<Form.Text className="text-muted" />
														</Form.Group>
													</Col>
												</Row>

												<Row style={{ margin: 0 }} className="form-sub-header">
													<h2>Additional Information</h2>
												</Row>
												<Row style={{ padding: 0,  margin: 0}}>
															<Col  >
																<Form.Group>
																	<Form.Text className="text-muted">
																		Opportunity Owner
																	</Form.Text>
																	<Form.Control
																		className="search"
																		placeholder="Dolores G. Smith(May 23, 2014 12:45)"
																	/>
																</Form.Group>
															</Col>

																<Col  >
																<Form.Group>
																	<Form.Text className="text-muted">
																		Type
																	</Form.Text>
																	<Form.Control
																		className="search"
																		placeholder=" New Costomer"
																	/>
																</Form.Group>
															</Col>
														</Row>
											</div>
										);
									})}
								</div>
							</Form>
						);
					})}
				</div>
			</div>
		);
	}
}
export default BlobexList;
