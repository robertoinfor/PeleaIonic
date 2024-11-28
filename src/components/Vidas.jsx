import './Vidas.css'
import healthIcon from '../assets/images/health.png';


const Lifes = ({ lives, character }) => {
    const lifeIcons = [];

    for (let i = 0; i < lives; i++) {
        lifeIcons.push(<img src={healthIcon} alt={`${character} Life ${i + 1}`} className="life-img" key={i} />);
    }
    return (
        <div className='life-container'>
            {lifeIcons}
        </div>
    );
};

export default Lifes;