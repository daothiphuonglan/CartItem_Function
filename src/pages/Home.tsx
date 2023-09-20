
import HeaderHome from "../components/HeaderHome";
import Map from "../components/Map";
import SearchLocationInput from '../components/Address_Map'
import {useState} from 'react'
export function Home () {
    const [selectedLocation, setSelectedLocation] = useState({
        lat: 28.7041,
        lng: 77.1025,
      });
    return (
        <div>
            <HeaderHome></HeaderHome>
           
        <SearchLocationInput setSelectedLocation={setSelectedLocation} />
        <Map selectedLocation={selectedLocation} />
    </div>
        
    )
}