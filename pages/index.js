import styles from '../styles/Home.module.scss';
import Intro from '../components/intro';
import Scapegoat from '../components/scapegoat';
import Delay from '../components/delay';
import React from 'react';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showExcuse: false,
		};

		this.handleClick = this.handleClick.bind(this);
	}
	//TODO: When user clicks "generate" btn create random excuse using "intro", "scapegoat", and "delay" structure ::DONE::

	handleClick = () => {
		let current = this.state.showExcuse;
		this.setState({
			showExcuse: !current,
		});
	};

	//TODO: Excuse element should appear once and stay on screen as user generates new excuses

	render() {
		return (
			<div className={styles.homeContainer}>
				<h1 className={styles.message}>
					Greetings! This is your random excuse generator! This tool
					will help you get out of any situation
				</h1>
				<button onClick={this.handleClick}>Generate!</button>
				{this.state.showExcuse === true ? (
					<div className={styles.excuse}>
						<Intro className={styles.child}/>
						<Scapegoat className={styles.child}/>
						<Delay className={styles.child}/>
					</div>
				) : null}
			</div>
		);
	}
}

export default Home;
