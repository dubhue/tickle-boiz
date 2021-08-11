import * as React from "react";

const Roster = ({ team }) => {
  const teamRoster = Object.keys(team.roster).reduce((all, key) => {
    console.log(team,team[key]);
    return all;
  }, []);
  console.log("roster:", teamRoster);
  return <></>;
};

export default Roster;
