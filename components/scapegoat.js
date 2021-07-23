import styles from '../styles/Card.module.scss';

const Scapegoat = () => {
	const text = [
		' my nephew',
		' the ghost of Hitler',
		' the Pope',
		' my ex',
		' an entire marching band',
		' Dan Rather',
		' a sad clown',
		' the kid from Air Bud',
		' a professional cricket team',
		' my Tinder date',
	];

	const random = Math.floor(Math.random() * (text.length - 1));

	return (
		<div className={styles.card}>
			<h3 className={styles.title}>Scapegoat</h3>
			<p className={styles.body}>{text[random]}</p>
		</div>
	);
};

export default Scapegoat;
