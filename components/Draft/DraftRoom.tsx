import * as React from "react";
import { useState } from "react";
import { FantasyTeam } from "../../classes/fantasyTeam";
import { draftees } from "../../data";
import { slotConfiguration } from "../Roster/config";
import DraftList from "./DraftList";
import MyTeam from "./MyTeam";

const DraftRoom = () => {
  const [team, setTeam] = useState<FantasyTeam>(
    new FantasyTeam({
      name: "Home Deebo",
      roster: slotConfiguration,
      database: draftees
    })
  );

  const handleTeam = (t: FantasyTeam) => {
    setTeam(t);
  };

  team.draftPlayer("deebo-samuel-wr", handleTeam);

  return (
    <>
      <DraftList players={team.database} />
      <MyTeam team={team} />
    </>
  );
};

export default DraftRoom;
