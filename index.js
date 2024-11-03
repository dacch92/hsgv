import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

const map = new ArcGISMap({
    basemap:'osm'
});

const view =new MapView({
    map,
    container: 'viewDiv',
    center: [-75.0512,-9.1900],
    zoom:5
    
});
view.when(()=>{
    console.log('view ready');
});