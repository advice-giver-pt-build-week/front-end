// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import MentorCard from "./MentorCard";

// const MentorList = () => {
//   const [mentorData, setMentorData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://advice-giver-backend.herokuapp.com/#api-Auth")
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
// };

// export default MentorList;
