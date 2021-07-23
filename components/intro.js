import styles from '../styles/Card.module.scss';

const Intro = (props) => {
	const text = [
		"Sorry I can't come",
		'Please forgive my absence',
		'This is going to sound crazy but',
		'Get this:',
		"I can't go because",
		"I know you're going to hate me but",
		'I was minding my own business and BOOM!',
		'I feel terrible but',
		'I regrefully cannot attend,',
		'This is going to sound like an excuse but',
	];

	const random = Math.floor(Math.random() * (text.length - 1));

	return (
		<div className={styles.card}>
			<h3 className={styles.title}>Intro</h3>
			<p className={styles.body}>{text[random]}</p>
		</div>
	);
};

export default Intro;
