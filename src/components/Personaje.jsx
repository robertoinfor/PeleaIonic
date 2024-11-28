import './Personaje.css';

const Character = ({ name, image, stats }) => {
    return (
        <div className="character">
            <h2 className="character-name">{name}</h2>
            <img src={image} alt={name} className="character-img" />
            <div className="stats">
                {stats.map((stat, index) => (
                    <div key={index} className="stat">
                        <label>{stat.label}: </label>
                        <span>{stat.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Character;