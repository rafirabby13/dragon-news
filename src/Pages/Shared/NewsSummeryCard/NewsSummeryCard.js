import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './NeasSummery.css'
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShare, FaShareAlt, FaStar, } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
  const { _id, title, total_view,rating, author, details, image_url } = news;
  console.log(news);
  return (
    <Card className="mb-5">
        
      <Card.Header className="d-flex justify-content-between align-items-center">
        
            <div className="d-flex">
            <Image
            roundedCircle
            className="me-2"
            src={author?.img}
            style={{height:'60px'}}
            ></Image>
            <div>
            <p className="mb-0 font-weight-bold">{author?.name}</p>
            <p>{author?.published_date}</p>
            </div>
            </div>
            <div>
                <FaRegBookmark className="me-2"></FaRegBookmark>
                <FaShareAlt></FaShareAlt>

            </div>

        
        </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>read more</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center ">
        <div >
            <FaStar className="text-warning me-2"></FaStar>
            <span>{rating?.number}</span>
        </div>
        <div className="me-2">
            
            <span> <FaEye></FaEye> { total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummeryCard;
