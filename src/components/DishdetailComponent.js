import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';

class Dishdetails extends Component {

    render() {

        const comment = this.props.dish.comments.map(comment => {
            return (<div>
                <li className="media">{comment.comment}</li>
                <li className="media">-- {comment.author}, {(new Date(comment.date)).toDateString()}</li>
            </div>
            )
        })

        return (
            <div className="card-group">
                <div key={this.props.dish.id} className="col-12 col-sm-12 col-md-5 mt-5">
                    <Card className="ml-5">
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle><strong>{this.props.dish.name}</strong></CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div key={this.props.dish.comments.id} className="col-12 col-sm-12 col-md-5 mt-5 ml-5" >
                    <Card className="ml-5">
                        <CardBody>
                            <h4><strong>Comments</strong></h4>
                            <ul className="list-unstyled">
                                {comment}
                            </ul>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    };
}

export default Dishdetails;