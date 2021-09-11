import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';

   const RenderComments = (comments) =>{
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

    const RenderDish = (dish) => {
        if (dish != null) {
            return (
                <div>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </div>
            )
        } else {
            return <div></div>
        }
    }

    const Dishdetails = (props)=> {
        if (props.dish != null) {
            return (
                <div class="container">
                    <div className="card-group row">
                        <div key={props.dish.id} className="col-12 col-sm-12 col-md-5 mt-5 m-1">
                            <Card >
                                {RenderDish(props.dish)}
                            </Card>
                        </div>
                        <div key={props.dish.comments.id} className="col-12 col-sm-12 col-md-5 mt-5 m-1" >
                            <Card >
                                <CardBody>
                                    <h4><strong>Comments</strong></h4>
                                    <ul className="list-unstyled">
                                        {RenderComments(props.dish.comments)}
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


export default Dishdetails;