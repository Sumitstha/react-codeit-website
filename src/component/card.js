import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.css'
//this is a card component




const Card = (props) => {
  const{title,image,description,btnlabel,id}=props;
 
  return (
 
  <div className="card" style={{width:"18rem"}}>
  <img className="card-img-top" alt="card-img" src={image}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <Link to={`/blog/${id}`}>
    <p href="#" className="btn btn-primary">{btnlabel}</p>
    </Link>
  </div>
</div>
 
    
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnlabel: PropTypes.string.isRequired,
  id:PropTypes.number,
};

export default Card;