import styles from '../styles/Card.module.scss';

const Delay = () => {
    const text = [
        " just shit the bed...",
        " just died in front of me",
        " won't stop telling me knock knock jokes",
        " is having a nervous breakdown",
        " gave me syphilis",
        " poured lemonade in my gas tank",
        " stabbed me",
        " found my box of human teeth",
        " stole my bicylcle",
        " posted my nudes on Instagram",
    ];

    const random = Math.floor(Math.random() * (text.length - 1));

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Delay</h3>
            <p className={styles.body}>{text[random]}</p>
        </div>
    )
}

export default Delay;