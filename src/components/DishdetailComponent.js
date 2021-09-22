import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


import { Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }

        this.toggleModel = this.toggleModel.bind(this);
    }

    toggleModel() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleCommentSubmit(values) {
        this.toggleModel();
        //console.log("Current state is : " + JSON.stringify(values));
        // alert("Current state is : " + this.props.dishId + " "+ values.rating + " " +  values.username + " " +  values.comments);
        this.props.addComment(this.props.dishId, values.rating, values.username, values.comments);
        
    }

    render() {
        return (
            <div className="col-12 col-md-9">
                <Button outline color="secondary" onClick={this.toggleModel}> <span className="fa fa-edit fa-lg"></span>Submit Comment </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModel}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleCommentSubmit(values)} className="m-1">
                            <Row className="form-group m-1">
                                <Label htmlFor="rating" >Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating"
                                    className="form-control m-1"
                                    defaultValue="1"
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group m-1">
                                <Label htmlFor="username">Your Name</Label>
                                <Control.text model=".username" id="username" name="username"
                                    placeholder="Your Name"
                                    className="form-control m-1"
                                    validators={
                                        {
                                            required, maxLength: maxLength(15), minLength: minLength(3)
                                        }
                                    }
                                />
                                <Errors
                                    className="text-danger"
                                    model=".username"
                                    show="touched"
                                    messages={
                                        {
                                            reqired: 'Rquired',
                                            minLength: 'Must be greater than 3 characters',
                                            maxLength: 'Must be less than 15 characters'
                                        }
                                    }
                                />
                            </Row>
                            <Row className="form-group m-1">
                                <Label htmlFor="comments">Comment</Label>
                                <Control.textarea model=".comments" id="comments" name="comments"
                                    rows="12"
                                    className="form-control m-1" />
                            </Row>
                            <Row className="form-group m-1">
                                <Col >
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


const RenderComments = (props) => {
    if (props.comments.length != 0) {
        return props.comments.map(comment => {
            return (
                <div>
                    <li className="media m-4">{comment.comment}</li>
                    <li className="media m-4">-- {comment.author}, {(new Date(comment.date)).toDateString()}</li>
                </div>
            )
        })
    } else {
        return (
            <div></div>
        )
    }
}

const RenderDish = (props) => {
    if (props.dish != null) {
        return (
            <div>
                <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                <CardBody>
                    <CardTitle><strong>{props.dish.name}</strong></CardTitle>
                    <CardText>{props.dish.description}</CardText>
                </CardBody>
            </div>
        )
    } else {
        return <div></div>
    }
}

const Dishdetails = (props) => {
   
    if (props.dish != null) {
        return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="card-group row">
                    <div key={props.dish.id} className="col-12 col-sm-12 col-md-5 mt-5 m-1">
                        <Card >
                            <RenderDish dish={props.dish} />
                        </Card>
                    </div>
                    <div key={props.comments.id} className="col-12 col-sm-12 col-md-5 mt-5 m-1"  >
                        <Card className="border-0" >
                            <CardBody>
                                <h4><strong>Comments</strong></h4>
                                <ul className="list-unstyled">
                                    <RenderComments comments={props.comments} />
                                </ul>
                            </CardBody>
                        </Card>
                        <CommentForm addComment={props.addComment} dishId={props.dish.id}  className="m-2" />
                    </div>

                </div>
            </div>
        )
    } else {
        return <div></div>
    }
};


export default Dishdetails;