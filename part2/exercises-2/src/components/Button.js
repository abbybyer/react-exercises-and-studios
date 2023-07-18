import './styles.css';

function Button() {
   function onLearnMore(){
      alert("Fish are friends, not food");
   };

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;