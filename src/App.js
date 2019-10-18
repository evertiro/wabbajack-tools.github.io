import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

// Components
import Header from './components/Header/Header';
import Parallax from './components/Extra/Parallax';

// Sections
import InfoSection from './sections/InfoSection';
import ModlistGallery from './sections/ModlistGallery';

import styles from './assets/js/indexStyle';

const useStyles = makeStyles(styles);

export default function App() {
  const classes = useStyles();
  return (
    <Router>
    <div>
    <Header
      color="transparent" // can change to dark
      changeColorOnScroll={{
        height: 400,
        color: "dark" // can change to transparent
      }}/>
      <Parallax /*filter*/ image={require("./assets/img/banner_dark.png")}/>
      <div className={clsx(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
        <Route exact path="/" component={InfoSection}/>
        <Route path="/gallery" component={ModlistGallery}/>
        </div>
      </div>
    </div>
    </Router>
  );
}

