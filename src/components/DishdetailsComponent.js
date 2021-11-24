import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        
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
        } else return(<div></div>)
    }

    function RenderComments({comments}) {

        if (comments!=null)
        {
            const com = comments.map((comments)=>{

                    return(
                    <React.Fragment>
                    <li>{comments.comment}</li><br />
                    <li>-- {comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</li><br />
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
        else return(<div></div>)
    }
                    
    const  Dishdetail = (props) => {
        console.log("Dishdetail component render invoked")
        const {dish} = this.props;
        return ( 
            <div class="container">
            <div class="row">

            {this.renderDish(dish)}

            </div>
            </div>
        );
    }

export default Dishdetail;