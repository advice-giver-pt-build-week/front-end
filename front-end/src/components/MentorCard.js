import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const MentorCard = styled.div`
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
  width: 95%;
  height: 85%;
  display: flex;
  flex-wrap: wrap;
`;

export default function CharacterCard(props) {
  return (
    <div>
    <MentorCard>
      <Card>
        <Image src={props.mentorInfo.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.mentorInfo.username} here to advise!</Card.Header>
          <Card.Meta>{props.mentorInfo.email}</Card.Meta>
          <Card.Description>{props.mentorInfo.expertise} Expert</Card.Description>
          <Card.Description>{props.mentorInfo.yearsOfExperience} Years Of Experience</Card.Description>
          <Card.Description>{props.mentorInfo.age} Yrs Old</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="mentors" />
            I'm Here to Help!
          </a>
        </Card.Content>
      </Card>
    </MentorCard>
    </div>
  );
}