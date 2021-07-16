import styles from '../styles/Home.module.scss';
import Intro from '../components/intro';
import Scapegoat from '../components/scapegoat';
import Delay from '../components/delay';
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showExcuse: false
    }

  }
	//TODO: When user clicks "generate" btn create random excuse using "intro", "scapegoat", and "delay" structure
	render() {
		return (
			<div className={styles.homeContainer}>
				<h1 className={styles.message}>
					Greetings! This is your random excuse generator! This tool
					will help you get out of any situation
				</h1>
				<button>Generate!</button>
				<Intro />
				<Scapegoat />
				<Delay />
			</div>
		);
	}
}

export default Home;