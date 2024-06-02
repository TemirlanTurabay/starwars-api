import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Planet = () => {
  //https://swapi.py4e.com/api/planets
  //https://starwars-visualguide.com/assets/img/planets/2.jpg
  const params = useParams();
  console.log(params.id);
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/planets/${params.id}`).then((res) => {
      setPlanet(res.data);
    });
  }, []);
  console.log(planet);

  if (planet === null) {
    return <>no data</>;
  }
  return (
    <div className='item-list-layout'>
      <>
        <div>
          <p>name: {planet.name}</p>
          <p>gravity: {planet.gravity}</p>
          <p>diameter: {planet.diameter}</p>
        </div>
        <div className='item-image-layout'>
          <img
            className='item-image'
            src={`https://starwars-visualguide.com/assets/img/planets/${
              params.id + 2
            }.jpg`}
            alt='planet'
          />
        </div>
      </>
    </div>
  );
};
