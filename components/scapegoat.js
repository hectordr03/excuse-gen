const Scapegoat = () => {
    const text = [
        " my nephew",
        " the ghost of Hitler",
        " the Pope",
        " my ex",
        " an entire marching band",
        " Dan Rather",
        " a sad clown",
        " the kid from Air Bud",
        " a professional cricket team",
        " my Tinder date",
    ];
    
    const random = Math.floor(Math.random() * (text.length - 1));

    return (
        <div>
            <p>{text[random]}</p>
        </div>
    )
}

export default Scapegoat;