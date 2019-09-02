import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const MentorCard = styled.div`
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
  box-shadow: 2px 3px #352f2f;
  width: 45%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
`;

export default function CharacterCard(props) {
  return (
    <MentorCard>
      <Card>
        <Image src={props.mentorInfo.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.mentorInfo.username}</Card.Header>
          <Card.Meta>{props.mentorInfo.email}</Card.Meta>
          <Card.Description>{props.mentorInfo.expertise}</Card.Description>
          <Card.Description>{props.mentorInfo.yearsOfExperience}</Card.Description>
          <Card.Description>{props.mentorInfo.age}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            Mentors
          </a>
        </Card.Content>
      </Card>
    </MentorCard>
  );
}