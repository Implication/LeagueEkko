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
import Showcase2 from "./hero-images/image1.jpg";

function App() {
  const desc = [
    "If you are going midlane, generally speaking the keystone that you want to take in your games is electrocute. It provides the most amount of burst potential onto your target. Ghost Poro can be switched out depending on your playstyle, but as ekko you generally do not want to stay in your lane, since most matchups in the current meta do beat you. Ravenous Hydra is also very important, as it stands right now this single keystone is basically the bread and butter of all ekko players, since this provides you massive healing whenever you abuse your ultimae in teamfights allowing you to dive the backline, heal back to full hp, and engage a 4v5. Inspiration is taken as a secondary because this provides a great start to allow you to save gold in your build, of course this can also be switched out depending on your playstyle.",

    "Domination is the keystone that you take if you are going jungle, the reason being is because ekko in the jungle's primary goal is to snowball your lead, and domination provides a much better burst setup when you are openly avaliable to roam and take skrimishes into other people's lanes. The fact is from what a lot of people do no know is that dark harvest actually provides better burst even through the early game, the only reason that we do not take it mid is that is it very dificult to be able to proc it, but even having as few as 4-5 stacks can provide a much better burst within the 15 minute mark of the game, all other runes are still the same from electrocute, as ravenous is standard, and inspiration basically enables you to gain a small lead when you snowball."
  ];

  const abilityInfo = {
    Passive: {
      title: "Passive",
      name: "Z-Drive Resonance",
      desc:
        "Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return",
      video:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_P1.webm"
    },
    Q: {
      title: "Q",
      name: "Timewinder",
      desc:
        "Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return.",
      video:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_Q1.webm"
    },
    W: {
      title: "W",
      name: "Parallel Convergence",
      desc:
        "Ekko's basic attacks deal bonus magic damage to low health enemies. He can cast Parallel Convergence to split the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and stuns enemies by suspending them in time.",
      video:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_W1.webm"
    },
    E: {
      title: "E",
      name: "Phase Dive",
      desc:
        "Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target.",
      video:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_E1.webm"
    },
    R: {
      title: "R",
      name: "Chronobreak",
      desc:
        "Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage.",
      video:
        "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_R1.webm"
    }
  };
  return (
    <div>
      <Navbar />
      <Showcase img={Showcase1} />
      <div
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
        <div style={{ background: "rgb(196, 126, 40)" }}>
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
      </div>
    </div>
  );
}

export default App;
