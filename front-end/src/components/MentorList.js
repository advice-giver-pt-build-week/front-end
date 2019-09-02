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
  width: 250px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-around; */
  color: hotpink;
  /* color: #3b3b89; */
  font-size: 20px;
  font-family: "Oswald", sans-serif;
  @media screen {max-width: 968px}
`;

// export default function MentorList() {
//   const [mentorData, setMentorData] = useState([]);

//   useEffect(() => {
//     axios
// .get(ADVISER_URL)
//       .then(response => {
//         setMentorData(response.data.results);
//       })
//       .catch(error => {
//         console.log("error", error);
//       });
//   }, []);

//   console.log(mentorData);

//   return (
//     <section className="mentor-list grid-view">
//       {mentorData.map(mentor => {
//         return <MentorCard mentorInfo={mentor} />;
//       })}
//     </section>
//   );
// }

// const initialMentorState = {
//   username: "",
//   password: "",
//   email: "",
//   adviceGiver: false,
//   expertise: "",
//   yearsOfExperience: 0,
//   age: 0
// };

// const MentorUser = () => {
//   const [mentorState, setMentorState] = useState(initialMentorState);

//   const handleChange = event => {
//     console.log(event.target);
//     const newState = mentorState;

//     newState[event.target.name] = event.target.value;

//     setMentorState({ ...newState });
//   };

//   const handleCheckbox = event => {
//     const newState = mentorState;

//     newState[event.target.name] = !mentorState[event.target.name];

//     setMentorState({ ...newState });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     axios
//       .get(ADVISER_URL, mentorState)
//       .then(response => {
//         console.log(response);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   const {
//     username,
//     password,
//     email,
//     expertise,
//     adviceGiver,
//     age,
//     yearsOfExperience
//   } = mentorState;

//   return (
//   <div>
//       <MentorForm onSubmit={handleSubmit}>
//         Email
//         <input
//           name="email"
//           value={email}
//           type="email"
//           onChange={handleChange}
//         />
//           Username
//           <input
//             name="username"
//             value={username}
//             type="text"
//             onChange={handleChange}
//           />
//           Password
//           <input
//             name="password"
//             value={password}
//             type="password"
//             onChange={handleChange}
//           />
//         Expertise
//         <input
//           name="expertise"
//           value={expertise}
//           type="text"
//           onChange={handleChange}
//         />
//         Age
//         <input name="age" value={age} type="number" onChange={handleChange} />
//         Years Of Experience
//         <input
//           name="yearsOfExperience"
//           value={yearsOfExperience}
//           type="number"
//           onChange={handleChange}
//         />
//         Advice Giver?
//         <input
//           name="adviceGiver"
//           type="checkbox"
//           onChange={handleCheckbox}
//           checked={adviceGiver}
//         />
//         <button name="submit" value="Submit">
//           Submit
//         </button>
//       </MentorForm>
//     </div>
//   );
// };

// export default MentorUser;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { ADVISER_URL } from "../constants";

const MentorUser = () => {
  const [mentorData, setMentorData] = useState([]);

  useEffect(() => {
    axios
      .get("https://advice-giver-backend.herokuapp.com/myMentors/")
      .then(response => {
        setMentorData(response.data.results);
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
