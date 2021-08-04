import React, { useState, useEffect } from "react";
import Layout from "../components/layout/MainLayout";
import { Client } from "espn-fantasy-football-api";

const ProtestPoints = () => {
  const [leagueData, setLeagueData] = useState();
  useEffect(() => {
    const myClient = new Client({ leagueId: 719860 });
    myClient.setCookies({
      espnS2:
        "AEAgCRQpUq120Bit8MnkKigJur16SISyllqSbx%2BlTLvv5WMDfsnhsil09lKrcx3XLk3us9eJNOwsZgeN2ywPqKFswKZ7WHTuKB0yDbRjXb3HterNoYhEhaTTR2qpPvFr7XSvBiUf8kHq98FuX7qtDGye%2Fe4qbUxy3BQIdHWgI23AD0Yduz3kY5%2BtSbzYwbINsLOL5Xz%2FukHg%2BnxyolmiGAitnne%2BxC9gRoAOeb1CgFjw2xlkiBgPa1il0GW7raqYNko%3D",
      SWID: "{2028F1FD-64B5-495F-AFD8-02DE2562AE3D}",
    });
    console.log(myClient);
  });

  //     const year = 2020;
  //     const leagueId = 719860; //34758593;
  //     const path = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${leagueId}`;
  //     fetch(path, {
  //       credentials: "include",
  //       cookies: {
  //         espn_s2:
  //           "AEAgCRQpUq120Bit8MnkKigJur16SISyllqSbx%2BlTLvv5WMDfsnhsil09lKrcx3XLk3us9eJNOwsZgeN2ywPqKFswKZ7WHTuKB0yDbRjXb3HterNoYhEhaTTR2qpPvFr7XSvBiUf8kHq98FuX7qtDGye%2Fe4qbUxy3BQIdHWgI23AD0Yduz3kY5%2BtSbzYwbINsLOL5Xz%2FukHg%2BnxyolmiGAitnne%2BxC9gRoAOeb1CgFjw2xlkiBgPa1il0GW7raqYNko%3D",
  //         swid: "{2028F1FD-64B5-495F-AFD8-02DE2562AE3D}",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   });
  return <Layout>protest points</Layout>;
};

export default ProtestPoints;
