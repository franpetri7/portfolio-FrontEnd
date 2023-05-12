import Card from './Card';

const Cards = ({characters}) => {
 return (<div>
         {
         characters.map(({id,name,species,gender,image,origin,status,onClose}) => {
            return (<Card
            key={id} 
            name={name}
            species={species}
            gender={gender}
            image={image}
            origin={origin.name}
            status={status}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />)
         })
         }
       </div>
      );
}
export default Cards