'use strict';

//styling function  
function getStyle(feature) {

    const property = feature.properties.ccos;
    const upperProperty = property.toUpperCase();

    if (upperProperty.indexOf("EASTERN OREGON") > -1) {
        return {
            fillColor: "rgb(0, 195, 255)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("JACKSON CARE") > -1) {
        return {
            fillColor: "rgb(192, 33, 51)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("ADVANCED HEALTH - 100") > -1) {
        return {
            fillColor: "rgb(255, 255, 189)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("ALLCARE CCO - 100") > -1) {
        return {
            fillColor: "rgb(0, 230, 168)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("ALLCARE CCO - 60.4") > -1) {
        return {
            fillColor: "rgb(0, 230, 168)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("CASCADE HEALTH ALLIANCE - 95.9") > -1) {
        return {
            fillColor: "rgb(204, 145, 25)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("COLUMBIA PACIFIC - 100") > -1) {
        return {
            fillColor: "rgb(189, 232, 255)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("HEALTH SHARE OF OREGON") > -1) {
        return {
            fillColor: "rgb(255, 189, 189)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("INTERCOMMUNITY") > -1) {
        return {
            fillColor: "rgb(194, 157, 215)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("PACIFICSOURCE CENTRAL - 100") > -1) {
        return {
            fillColor: "rgb(205, 205, 101)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("PACIFICSOURCE GORGE") > -1) {
        return {
            fillColor: "rgb(210, 255, 189)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("PACIFICSOURCE LANE") > -1) {
        return {
            fillColor: "rgb(39, 117, 0)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("PACIFICSOURCE MARION") > -1) {
        return {
            fillColor: "rgb(255, 189, 232)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("UMPQUA HEALTH ALLIANCE") > -1) {
        return {
            fillColor: "rgb(241, 89, 19)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else if (upperProperty.indexOf("YAMHILL COMMUNITY HEALTH - 100") > -1) {
        return {
            fillColor: "rgb(189, 255, 232)",
            color: 'black',
            weight: 1,
            opacity: 0.5,
            //            dashArray: '3',
            fillOpacity: 0.7
        };
    } else {
        return {
            fillColor: 'white',
            color: 'black',
            weight: 2,
            opacity: 1,
            dashArray: '3',
            fillOpacity: 0.7
        };
    }
}

//helper function for popup content
function createPopupContent(val) {
    const splitString = val.split("%");
    const joinString = splitString.join("% <br>");
    return joinString
}

//add functionality on mouseover  
function highlightFeature(e) {
    const layer = e.target;
    //    console.log(layer.feature.properties.ccos);

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    //to deal with old browsers  
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    // grab text and create html block
    const property = layer.feature.properties.ccos;
    const popupContent = createPopupContent(property)


    //finally fill in the name
    const mapLegend = document.getElementById('map-legend');
    mapLegend.innerHTML = popupContent;

    //    if (layer.feature.properties.ccos) {
    //        mapLegend.innerHTML = property.toUpperCase;
    //        mapLegend.style = 'color: blue';
    //    } else if (layer.feature.properties.ccos === 'Jackson Care - 73.9% AllCare CCO - 26.1%') {
    //        mapLegend.innerHTML = layer.feature.properties.ccos;
    //        mapLegend.style = 'color: red';
    //    } else {
    //        mapLegend.innerHTML = null;
    //    }
}

///// Button testing
const button = document.querySelector("button")
button.addEventListener("click", () => {
    map.fitBounds([
    [46, -124],
    [42, -116]
])
})
/////

//reset style after hover  
function resetHighlight(e) {
    districts.resetStyle(e.target);

    //reset the div
    document.getElementById("map-legend").innerHTML = null;
}

//function after a click  
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}


////parent function to set layer interactivity  
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });

    //popup
    //does this feature have properties?
    if (feature.properties) {

        //create the content
        const popupContent = createPopupContent(feature.properties.ccos);
        console.log(popupContent);

        layer.bindPopup(`
        <h3>County Name: ${feature.properties.NAME}</h3>
        ${popupContent} <br>
        `);
    }
}

//Stamen example  
const stamenToner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> — Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});

//ESRI leaflet example  
const esriTopo = L.esri.basemapLayer('Topographic');

//esri feature layer  
const districts = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/Oregoncountyccos/FeatureServer/0',
    simplifyFactor: 0.5,
    precision: 2,
    style: getStyle,
    onEachFeature: onEachFeature
});


//build map with layers  
const map = L.map('map', {
    center: [44, -120.7],
    zoom: 7,
    layers: [stamenToner, districts]
});



//setup the layer controller options  
const baseLayers = {
    'Stamen toner': stamenToner,
    'ESRI topo': esriTopo
};

//const overlays = {
//    'U.S. Districts': districts
//};

//finally call layer controller  
L.control.layers(baseLayers, overlays).addTo(map)