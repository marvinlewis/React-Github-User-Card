import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';




const FollowersCard = ({ followers }) => {

    //console.log(followers);

  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={followers.avatar_url} alt="Card image cap" />
        <CardImgOverlay>
          <CardTitle>{followers.login}</CardTitle>
          <CardText></CardText>

        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default FollowersCard;
