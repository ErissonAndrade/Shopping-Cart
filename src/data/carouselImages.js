import necklace from '../assets/images/necklace.jpg';
import pendant from '../assets/images/pendant.JPG';
import ring from '../assets/images/ring.jpeg';
import earring from '../assets/images/earring.jpeg';
import bracelet from '../assets/images/bracelet.jpeg';

const carouselImages = [
    {
        title: "Necklace",
        image: <img src={necklace} alt="necklace" />
    },
    {
        title: "Pendant",
        image: <img src={pendant} alt="pendant" />
    },
    {
        title: "Ring",
        image: <img src={ring} alt="necklace" />
    },
    {
        title: "Earring",
        image: <img src={earring} alt="necklace" />
    },
    {
        title: "Bracelet",
        image: <img src={bracelet} alt="necklace" />
    }
];

export default carouselImages;