import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishy extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedDish: null
        }   
        console.log('Dishy Component constructor is invoked');
    }
    
    componentDidMount(){
        console.log('Dishy Component constructorDidMount is invoked');
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    
    render() {
            return (
            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );

        console.log('Menu Component render is invoked');
        
        }
    }

export default Dishy;