import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './/MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent'
import Dishdetail from './DishdetailsComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


    const mapStateToProps = state => {
      return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
      }
    }

class Main extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          dishes: DISHES,
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS
        };
    }
    
    onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});    }
    
    render() {
        
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    
    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
          
      return (
        <div>
          <Header />
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path='/contactus' component={Contact} />} />
              <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Redirect to="/home" />
          </Switch>
        <Footer />
        </div>
      );
    }
    }

//export default Main;
export default withRouter(connect(mapStateToProps)(Main));