import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Runes from "./components/Runes";
import Abilities from "./components/Abilities";
import RuneImage1 from "./rune-images/RuneImage1.PNG";
import RuneImage2 from "./rune-images/RuneImage2.PNG";
import Showcase from "./components/Showcase";
import Showcase1 from "./hero-images/image3.jpg";
import Video from "./components/Video";
import abilityInfo from "./data/AbilityInfo";

function App() {
  const desc = [
    "If you are going midlane, generally speaking the keystone that you want to take in your games is electrocute. It provides the most amount of burst potential onto your target. Ghost Poro can be switched out depending on your playstyle, but as ekko you generally do not want to stay in your lane, since most matchups in the current meta do beat you. Ravenous Hydra is also very important, as it stands right now this single keystone is basically the bread and butter of all ekko players, since this provides you massive healing whenever you abuse your ultimae in teamfights allowing you to dive the backline, heal back to full hp, and engage a 4v5. Inspiration is taken as a secondary because this provides a great start to allow you to save gold in your build, of course this can also be switched out depending on your playstyle.",

    "Domination is the keystone that you take if you are going jungle, the reason being is because ekko in the jungle's primary goal is to snowball your lead, and domination provides a much better burst setup when you are openly avaliable to roam and take skrimishes into other people's lanes. The fact is from what a lot of people do no know is that dark harvest actually provides better burst even through the early game, the only reason that we do not take it mid is that is it very dificult to be able to proc it, but even having as few as 4-5 stacks can provide a much better burst within the 15 minute mark of the game, all other runes are still the same from electrocute, as ravenous is standard, and inspiration basically enables you to gain a small lead when you snowball."
  ];

  return (
    <div id="top">
      <Navbar />
      <Showcase img={Showcase1} />
      <div
        id="runes"
        style={{
          paddingTop: "100px",
          background: "rgba(72, 121, 255, 0.979)"
        }}>
        <h1 className="text-center text-light" style={{ marginBottom: "60px" }}>
          Runes
        </h1>
        <div>
          <Runes title={"Electrocute"} img={RuneImage1} desc={desc[0]} />
          <Runes title={"Domination"} img={RuneImage2} desc={desc[1]} />
        </div>
        <div
          id="abilities"
          style={{ background: "rgb(245, 137, 38)", height: "100%" }}>
          <h1
            className="text-center text-light"
            style={{ paddingTop: "75px", paddingBottom: "75px" }}>
            Abilities
          </h1>
          <Abilities
            abilityName={abilityInfo.Passive.title}
            title={abilityInfo.Passive.name}
            video={abilityInfo.Passive.video}
            desc={abilityInfo.Passive.desc}
          />
          <Abilities
            abilityName={abilityInfo.Q.title}
            title={abilityInfo.Q.name}
            video={abilityInfo.Q.video}
            desc={abilityInfo.Q.desc}
          />
          <Abilities
            abilityName={abilityInfo.W.title}
            title={abilityInfo.W.name}
            video={abilityInfo.W.video}
            desc={abilityInfo.W.desc}
          />
          <Abilities
            abilityName={abilityInfo.E.title}
            title={abilityInfo.E.name}
            video={abilityInfo.E.video}
            desc={abilityInfo.E.desc}
          />
          <Abilities
            abilityName={abilityInfo.R.title}
            title={abilityInfo.R.name}
            video={abilityInfo.R.video}
            desc={abilityInfo.R.desc}
          />
        </div>
        <div
          id="videos"
          style={{ background: "rgb(129, 34, 165)", height: "100%" }}>
          <h1
            className="text-center text-light"
            style={{ paddingTop: "75px", paddingBottom: "75px" }}>
            Videos
          </h1>
          <Video />
        </div>
      </div>
    </div>
  );
}

export default App;
