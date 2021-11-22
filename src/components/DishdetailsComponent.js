import React, { Component } from 'react';
import {Card,CardImg,CardText,CardTitle,CardBody} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

class Dishdetail extends Component {

    render() { 
        const {dish} = this.props;
        return ( 
            <div className="row">

            {this.renderDish(dish)}

            </div>
        );
    }


    renderDish=(dish)=>
    {
        if (dish!=null)
        {
            return(
            <React.Fragment>
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            <div className="col-12 col-md-5 m-1" >
            <h4>Comments</h4>
            {this.renderComments(dish.comments)}
            </div>
            </React.Fragment>
            )
        } else {
            return(<div></div>)
        };
    }

    renderComments =(comments) =>
    {

        if (comments!=null)
        {
            const com = comments.map((comments)=>{

                    return(
                    <React.Fragment>
                    <li>{comments.comment}</li><br />
                    <li>-- {comments.author}, {comments.date}</li><br />
                    </React.Fragment>
                )

                }
                );
            return(
                <ul className="list-unstyled">
                {com}
                </ul>
            )
        }
        else{
            return(<div></div>)
        }
    }

    }

export default Dishdetail;