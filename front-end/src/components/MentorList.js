import React, { useEffect, useState } from "react";
import { isEmail, isNumeric } from "validator";
import axios from "axios";
import { ADVISER_URL } from "../constants";
import MentorCard from "./MentorCard";
import styled from "styled-components";

const MentorForm = styled.div`
  margin: 15px 15px 15px 25px;
  padding: 15px 15px 15px 25px;
  border: 5px solid hotpink;
  width: 350px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  color: hotpink;
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  @media screen {
    max-width: 968px;
  }
`;

const MentorUser = () => {
  const [mentorData, setMentorData] = useState([]);

  useEffect(() => {
    axios
      .get(ADVISER_URL, {
        headers: {
          authorization: `${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        console.log(response)
        setMentorData(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  }, []);

  console.log(mentorData);

  return (
    <div>
      <MentorForm>
        <section className="mentor-list grid-view">
          {mentorData.map(mentor => {
            return <MentorCard mentorInfo={mentor} />;
          })}
        </section>
      </MentorForm>
    </div>
  );
};

export default MentorUser;
