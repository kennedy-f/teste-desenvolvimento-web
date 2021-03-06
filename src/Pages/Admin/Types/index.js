import React, { Component } from 'react';
import SideBar from 'Components/SideBar';
import {
	Col,
	Container,
	Card,
	Row
} from 'react-bootstrap';

import api from 'services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default class Types extends Component {
	constructor(props) {
		super(props);
		this.state = {
			types: [],
		};
	}

	componentDidMount() {
		this.getTypes();
	}

	getTypes() {
		api.get('/types').then(response => {
			const { data } = response;
			this.setState({ types: data });
		});
	}

	render() {
		return (
			<SideBar>
				<Col className='mt-5'>
					<Container>
						<Card>
							<Card.Header className='pb-5 pt-5'>
								Pokemons
							</Card.Header>
							<Card.Body>
								<Row className='border-bottom pb-2 text-center text-capitalize'>
									<Col>
										name
									</Col>
									<Col></Col>
								</Row>
								{this.state.types.map(type => (
									<Row className="text-center pb-2 pt-2 border-bottom text-capitalize " key={ type.id }>
										<Col> {type.name} </Col>
										<Col>
											<Link
												to={`/admin/types/edit/${type.id}`}>
												<FontAwesomeIcon
													icon={faEdit}
												/>
											</Link>
										</Col>
									</Row>
								))}
							</Card.Body>
						</Card>
					</Container>
				</Col>
			</SideBar>
		);
	}
}
