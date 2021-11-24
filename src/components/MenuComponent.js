import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

     function RenderMenuItem ({dish, onClick}) {
        return (
            <Card
                onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }
    
    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

    

    
export default Menu;
//class Menu extends Component {
//
//    render() {
//            
//        const menu = this.props.dishes.map((dish) => {
//            return (
//              <div  className="col-12 col-md-5 m-1">
//                <Card onClick={() => this.props.onClick(dish.id)}>
//                  <CardImg width="100%" src={dish.image} alt={dish.name} />
//                  <CardImgOverlay>
//                      <CardTitle>{dish.name}</CardTitle>
//                  </CardImgOverlay>
//                </Card>
//              </div>
//            );
//        });
//
//        console.log('Menu Component render is invoked');
//        return (
//            <div className="container">
//                <div className="row">
//                    {menu}
//                </div>
//            </div>
//        );
//        }
//    }
//
//export default Menu;
    