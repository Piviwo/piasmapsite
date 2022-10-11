import './leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function Map({selection}) {
  const widthVar = window.innerWidth > 768 ? '850px': '100%';
  return (
      <MapContainer center={[52.52, 13.40]} zoom={1.5} scrollWheelZoom={false} style={{height:'500px', width: widthVar, border: '1.5px solid  rgb(46, 57, 60)'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selection === 'HOME' && 
        <Marker position={[52.52, 13.40]}>
          <Popup>
            This is where I live. <br /> Berlin, Germany.
          </Popup>
        </Marker>
        }
        {selection === 'HOME' && 
        <Marker position={[54.07, 9.98]}>
          <Popup>
            This is where I grew up. <br /> Neumünster, Germany.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[-33.86, 151.20]}>
          <Popup>
            This is where I've spent my exchange. <br /> Sydney, Australia.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[-31.95, 115.86]}>
          <Popup>
            This is where I've spent my exchange. <br /> Perth, Australia.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[40.71, -74.00]}>
          <Popup>
            This is where I did an internship. <br /> New York, USA.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[12.11, -86.23]}>
          <Popup>
            This is where I went on excursion. <br /> Managua, Nicaragua.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[5.60, -0.18]}>
          <Popup>
          This is where I went on excursion. <br /> Accra, Ghana.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[-34.60, -58.38]}>
          <Popup>
          This is where I went on holiday. <br /> Buenos Aires, Argentina.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[14.62, -90.52]}>
          <Popup>
          This is where I went on excursion. <br /> Guatemala City, Guatemala.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[14.08, -87.20]}>
          <Popup>
          This is where I went on excursion. <br /> Tegucigalpa, Honduras.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[33.88, 35.49]}>
          <Popup>
          This is where I went on holiday. <br /> Beirut, Lebanon.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[39.57, 2.65]}>
          <Popup>
          This is where I went on holiday. <br /> Campos, Mallorca, Spain.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[55.67, 12.56]}>
          <Popup>
          This is where I went on holiday. <br /> Copenhagen, Denmark.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[59.33, 18.06]}>
          <Popup>
          This is where I went on holiday. <br /> Stockholm, Sweden.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[44.97, -1.07]}>
          <Popup>
          This is where I went on holiday. <br /> Lacanau, France.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[-8.40, 115.18]}>
          <Popup>
          This is where I went on holiday. <br /> Bali, Indonesia.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[-17.95, 122.23]}>
          <Popup>
          This is where I went on holiday. <br /> Broome, Australia.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[-37.84, 144.94]}>
          <Popup>
          This is where I went on holiday. <br /> Melbourne, Australia.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[-20.87, 55.44]}>
          <Popup>
          This is where I spent my highschool exchange. <br /> Reunion Island, France.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[-20.27, 57.36]}>
          <Popup>
          This is where I went on holiday. <br /> Flic en Flac, Mauritius.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[45.43, 12.32]}>
          <Popup>
          This is where I went on holiday. <br /> Venice, Italy.
          </Popup>
        </Marker>
        }
        {selection === 'TRAVEL' &&
        <Marker position={[-22.27, 166.45]}>
          <Popup>
          This is where I went on holiday. <br /> Noumea, New Caledonia.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' &&
        <Marker position={[28.53, -81.37]}>
          <Popup>
            This is where my friend Caro lives. <br /> Orlando, USA.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' &&
        <Marker position={[48.20, 16.37]}>
          <Popup>
            This is where my friend Lea lives. <br /> Vienna, Austria.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' &&
        <Marker position={[38.72, -9.13]}>
          <Popup>
            This is where my friend Marie lives. <br /> Lissabon, Portugal.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' &&
        <Marker position={[54.32, 10.12]}>
          <Popup>
            This is where my friend Reema lives. <br /> Kiel, Germany.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' &&
        <Marker position={[48.13, 11.58]}>
          <Popup>
            This is where my friend Lotti lives. <br /> Munich, Germany.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' &&
        <Marker position={[4.62, -74.06]}>
          <Popup>
            This is where my friend Alex lives. <br /> Bogota, Colombia.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' &&
        <Marker position={[32.10, 34.85]}>
          <Popup>
            This is where my friend Lina lives. <br /> Tel Aviv, Israel.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' &&
        <Marker position={[35.10, -106.62]}>
          <Popup>
            This is where my family friends live. <br /> Albuquerque, USA.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' &&
        <Marker position={[-33.86, 151.20]}>
          <Popup>
            This is where my friend Georgia lives. <br /> Sydney, Australia.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' && 
        <Marker position={[52.52, 13.40]}>
          <Popup>
            This is where many of my friends live. <br /> Berlin, Germany.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' && 
        <Marker position={[52.39, 13.06]}>
          <Popup>
            This is where my friends Lara and Hannah live. <br /> Potsdam, Germany.
          </Popup>
        </Marker>
        }
        {selection === 'FRIENDS' && 
        <Marker position={[59.91, 10.75]}>
          <Popup>
            This is where my friend Elin lives. <br /> Oslo, Norway.
          </Popup>
        </Marker>
        }
      </MapContainer>
  );
}

export default Map;
