import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';

class Dishdetails extends Component {

    renderComments(comments) {
        if (comments.length != 0) {
            return comments.map(comment => {
                return (
                    <div>
                        <li className="media">{comment.comment}</li>
                        <li className="media">-- {comment.author}, {(new Date(comment.date)).toDateString()}</li>
                    </div>
                )
            })
        } else {
            return (
                <div></div>
            )
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle><strong>{this.props.dish.name}</strong></CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div class="container">
                    <div className="card-group row">
                        <div key={this.props.dish.id} className="col-12 col-sm-12 col-md-5 mt-5 m-1">
                            <Card >
                                {this.renderDish(this.props.dish)}
                            </Card>
                        </div>
                        <div key={this.props.dish.comments.id} className="col-12 col-sm-12 col-md-5 mt-5 m-1" >
                            <Card >
                                <CardBody>
                                    <h4><strong>Comments</strong></h4>
                                    <ul className="list-unstyled">
                                        {this.renderComments(this.props.dish.comments)}
                                    </ul>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    };
}

export default Dishdetails;