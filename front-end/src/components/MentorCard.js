import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const CharCard = styled.div`
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
  box-shadow: 2px 3px #352f2f;
  width: 45%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
`;

const MentorCard = props => {
  return (
    <Card>
      <Image src={props.characterInfo.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.mentorInfo.name}</Card.Header>
        <Card.Meta>{props.mentorInfo.location.name}</Card.Meta>
        <Card.Description>{props.mentorInfo.status}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default MentorCard;
