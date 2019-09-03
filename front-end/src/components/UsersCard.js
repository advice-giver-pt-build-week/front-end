import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";


const UserCard = styled.div`
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
  width: 85%;
  height: 85%;
  display: flex;
  flex-wrap: wrap;
`;

export default function UsersCard(props) {
  return (
    <div>
    <UserCard>
      <Card>
        <Image src={props.usersInfo.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Hello! I'm {props.usersInfo.username}</Card.Header>
          <Card.Meta>{props.usersInfo.email}</Card.Meta>
          <Card.Description>{props.usersInfo.age} Yrs Old</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="users" />
            Looking for Advice!
          </a>
        </Card.Content>
      </Card>
    </UserCard>
    </div>
  );
}