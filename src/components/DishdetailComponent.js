import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const RenderComments = (props) => {
    if (props.comments.length != 0) {
        return props.comments.map(comment => {
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
                    <div key={props.comments.id} className="col-12 col-sm-12 col-md-5 mt-5 m-1" >
                        <Card >
                            <CardBody>
                                <h4><strong>Comments</strong></h4>
                                <ul className="list-unstyled">
                                    <RenderComments comments={props.comments} />
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