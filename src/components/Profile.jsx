import React from 'react';
const Profile = (props) => {

  // insert <br /> at the end of every single line.
  const texts = props.introduction.split('\n').map((item, index) => {
    return (
      <React.Fragment key={index}>{item}<br /></React.Fragment>
    );
  })

  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <p>{texts}</p>
    </div>
  )
};

export default Profile;
