import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
import BrandCarousal from "../BrandCarousel/BrandCarousal.js";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider.js";

const RightSideNav = () => {
  const {loginWithGoogle, logInWithGitHub, facebookLogin}=useContext(AuthContext);

  const handleSignIn=()=>{
    loginWithGoogle()
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
    })
  };

  const handleSubmit=()=>{
    logInWithGitHub()
    .then(result=>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
    })
  };
  const handleSignInWithFacebook=()=>{
      facebookLogin()
      .then(result=>{
        const user = result.user;
        console.log(user);
      })
      .catch(error=>{
        console.error("error",error);
      })
  }
  return (
    <div>
      <h2>Right side Nav</h2>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary" onClick={handleSignIn}>
          
          <FaGoogle /> Login with Google
        </Button>

        {/* <Button className="mb-2" variant="outline-primary" onClick={handleSignInWithFacebook}>
          
          <FaGoogle />  Login with FaceBook
        </Button> */}

        <Button onClick={handleSubmit} variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>

      </ButtonGroup>
      <div>
        <h5 className="mt-4">Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube></FaYoutube> YouTube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
        </ListGroup>

        <div>
          <BrandCarousal></BrandCarousal>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
