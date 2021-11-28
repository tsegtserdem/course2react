import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Label,Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    function RenderDish({dish}) {
        return(
            <div>
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

  function RenderComments({comments, addComment, dishId}) {
        if (comments != null)
            return(
                <div >
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map(comment => {
                            return (
                                <li key={Comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat("en-US",{
                                    year: "numeric",
                                    month:"short",
                                    day:"2-digit",
                                }).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                <CommentForm dishId={dishId} addComment={addComment} />
                </div>
            );
        else 
            return(
                <div></div>
            );
    }
    
    const Dishdetail = (props) => {
        const {dish}=props
        
        
        if (dish!=null) {
            
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                              <RenderComments comments={props.comments}
                                addComment={props.addComment}
                                dishId={props.dish.id}
                              />
                        
                    </div>
                </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
        
    }
    class CommentForm extends Component {

        constructor(props) {
            super(props);

                this.state = {
                    isModalOpen:false
                };
            this.toggleModal = this.toggleModal.bind(this);
        }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
        }

        handleSubmit(values) {
            this.toggleModal();
            console.log('Current State is: ' + JSON.stringify(values));
//            alert('Current State is: ' + JSON.stringify(values));
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        }

        render(){
            return (
                <React.Fragment>
                    <Button outline onClick={this.toggleModal}>
                        <span></span>Submit Comment
                    </Button>

                    <Modal isOpen={this.state.isModalOpen} toggleModal={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm className="m-2" onSubmit={(values) => this.handleSubmit(values)}>

                                <Row className="form-group">
                                    <Label htmlFor="Yourname">Rating</Label>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor="yourname" >Your Name</Label>

                                        <Control.text model=".yourname" id="yourname" name="yourname"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                            />
                                        <Errors
                                            className="text-danger"
                                            model=".yourname"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />

                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor="comment" >Comment</Label>

                                        <Control.textarea model=".comment" id="comment" name="comment"
                                            rows="12"
                                            className="form-control"
                                            />

                                </Row>

                                <Row className="form-group">

                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>

                                </Row>

                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </React.Fragment>
            );
        }
}

export default Dishdetail;