import React, {useState, useEffect} from 'react';
// import Article from "./components/Article";
import {Article, Profile} from "./components/index";

import './App.css'
// import {TextInput, Counter, ToggleButton} from "./components";

function App() {
  return (
    <div className="wrap">
      <header>
        <div className="video-area">
          <video
            className="background"
            src='night.mp4'
            muted
            autoPlay
            loop
          >
          </video>
        </div>
      </header>
      <div className="container">
        <h1>React basic</h1>
        <br />
        <Article
          title={'New comprehensive React tutorial ver2.0'}
          content='About passing data by using props'
        />
        <br />
        <Article
          title={'Second Title'}
          content={'Second Content'}
        />
        <br />
        <Article
          title={'Third Title'}
          content={'Third Content'}
        />
        <br />
        <br />
        <Profile
          name="Kazoo"
          title="技術の楽しさを共有できるエンジニア👩‍💻"
          introduction={`
            Language： Ruby / JavaScript / ShellScript / Vim script / TOML / HTML / CSS / C# / PostgreSQL

            Framework/Library ：Ruby on Rails /  React.js / Vue.js / Bootstrap /

            Infrastructure/Cloud：Ansible / Firebase / AWS ：EC2 / S3

            etc. ：Git / GitHub / vim / neovim / tmux / RSpec /

            OS： Mac/Unix/Windows

            こだわっていること ：vimとalacrittyを使った自分好みの開発環境のカスタマイズ

            プログラミングは未経験でしたが、2017年11月よりDIVE INTO CODEにて入社。
            教育メンターから始まり、現在では講師も兼任しています。

            メンターの他にRailsの開発案件にも携わっています。
            技術を実務の内容に絡めて受講生さんに伝えることで、実務を想定した技術習得の一助になるよう心がけています。

            受講生さん一人一人の学習機会を最大化し、技術を楽しむ仲間として共に成長する事で、楽しさを共有することに常に高いモチベーションを持っています。

            趣味にとことんのめり込むタイプなので、カスタマイズしたvimや開発環境Ansibleを用いて自動化したり、Rails関連ではデバッグやRSpecを書くことに没頭しています。
          `} />
      </div>
    </div>
  );
}

export default App;
// exporting a component without name.
