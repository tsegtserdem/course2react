import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailsComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            selectedDish: null
        }   
        console.log('Menu Component constructor is invoked');
    }
    
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});    }
        
    render() {
            
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        console.log('Menu Component render is invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail dish={this.state.selectedDish} />
            </div>
        );
        }
    }

export default Menu;