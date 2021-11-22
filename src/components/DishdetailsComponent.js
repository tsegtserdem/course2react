import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"

class Dishdetail extends Component {  
    render() {
        const {dish} = this.props;
       return (
            <div  className="row">
                {this.renderDish(dish)}
              </div>
        ); 
        }
        
    renderDish=(dish)=> 
    {
        if (dish != null)
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
//                <div className="col-12 col-md-5 m-1">
//                <h4>Comments</h4>
//                {this.renderComments(dish.comments)}
//                </div>
            );
        else
            return(
                <div></div>
            );
    }
    
//    console.log('Dishy Component render is invoked');
        
//    renderComments =(comments) =>
//    {
//
//        if (comments!=null)
//        {
//            const com = comments.map(co=>{
//
//                    return(
//                    <React.Fragment>
//                    <li>{co.comment}</li><br />
//                    <li>-- {co.author}, {this.formatDate(co.date)}</li><br />
//                    </React.Fragment>
//                )
//
//                }
//                );
//            return(
//                <ul className="list-unstyled">
//                {com}
//                </ul>
//            )
//        }
//        else{
//            return(<div></div>)
//        }
//    }
//
//        return (
//            <div className="container">
//                <div className="row">
//                    {dishy}
//                </div>
//                <div className="row">
//                  <div  className="col-12 col-md-5 m-1">
//                    {this.renderDish(this.state.selectedDish)}
//                  </div>
//                </div>
//            </div>
//        );
//        }
    }

export default Dishdetail;