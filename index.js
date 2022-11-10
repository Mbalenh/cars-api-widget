const vehicleTemplateText = document.querySelector('.vehicleTemplate');
const userTemplate = Handlebars.compile(vehicleTemplateText.innerText);

const carsElem = document.querySelector('.cars');
const makeElem = document.querySelector('.make');
const colorElem = document.querySelector('.color');



axios
    .get("http://api-tutor.herokuapp.com/v1/cars")
    .then(result => {
        const cars = result.data;
        
        carsElem.innerHTML = userTemplate({
            cars
        });

    });

    axios
    .get("http://http://api-tutor.herokuapp.com/v1/colors")
    .then(result => {
        const color = result.data;
        
        colorElem.innerHTML = userTemplate({
            color
        });

    });

     axios
    .get("http://http://api-tutor.herokuapp.com/v1/make")
    .then(result => {
        const brand = result.data;
        
        makeElem.innerHTML = userTemplate({
           brand
        });

    });

    