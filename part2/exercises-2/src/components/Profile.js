import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

function Profile() {
   
   const listItem = oceans.map((creatures) => (
      <div key={creatures.id} className={`${creatures.fishCheck === 'true' ? 'isAFish' : 'profile'}`}>
         <h1>{creatures.name}</h1>
         <img alt={creatures.name} src={creatures.image} className='img'/>
         <h4>Fun Facts!</h4>
         <ol>
            <li>{creatures.fact1}</li>
            <li>{creatures.fact2}</li>
            <li>{creatures.fact3}</li>
         </ol>
         <Button />
      </div>
   ));

   return(
      <ul>
         {listItem}
      </ul>  
   );
}

export default Profile;