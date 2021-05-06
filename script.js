
function corona(){
    fetch("/data.json")
    .then(response => response.json())
    .then(data =>{
        //console.log(data.data)
        // loop through the json data to fetch each object
        data.data.forEach(element=>{
            lat = element.latitude
            long = element.longitude
            infect = element.infected
            let clr;
            clr = `rgb(${infect},0,0)`
            marker = new mapboxgl.Marker({
                draggable: false,
                color:clr
                })
                .setLngLat([long, lat])
                .addTo(map);
                
        })
    });

    
};

corona();


