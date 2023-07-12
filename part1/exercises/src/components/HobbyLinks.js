import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
    let hobbyLinks = ["https://www.mynxacademy.com/", "https://www.steezy.co/"];
    return (
        <div>
            <h3 className='hobbiesHeader'>Hobbies</h3>
            <ol>
                <li><a href={hobbyLinks[0]} target="_blank">Pole Dancing</a></li>
                <li><a href={hobbyLinks[1]} target="_blank">Dancing</a></li>
            </ol>
        </div>
    );
}