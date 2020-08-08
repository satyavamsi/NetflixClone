import React, { useState } from 'react';
import './App.css';

import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';

import requests from './requests';


import { Dialog, DialogContent, Avatar, Button, Divider, Typography } from '@material-ui/core';

import avatar from './avatar.png'

function App() {

  const [intro, setIntro] = useState(true);

  return (
    <div className="app">
      <Dialog classes={{ paper: 'app_dialog' }} open={intro}>

        <DialogContent classes={{ root: 'app_dialog_content' }} >
          <div className="app_avatar">
            <Avatar alt="Satya Vamsi" classes={{ root: 'app_avatar_image' }} src={avatar} />
            <p className="app_profile_name">Satya Vamsi</p>
            <p className="app_intro_description">
              I am a full stack developer skilled in React.js,  Node.js and PostgreSQL.
              Experience in building end-to-end web applications using PostgreSQL, React, Material-UI, Express.js  <br /><br />
              Check out my profile <a className="app_profile_link" href="https://www.linkedin.com/in/satyavamsi/" target="_blank">here</a>
              <Divider style={{ backgroundColor: '#fff', margin: 20 }} />
              This Netflix Clone is built using React.js, TMDB API.
          </p>

          </div>
          <button onClick={() => { setIntro(false) }} className="app_button">
            Lets Go!!
          </button>




        </DialogContent>

      </Dialog>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow />
    </div>
  );
}
export default App;
