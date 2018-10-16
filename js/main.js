//sideNav 

const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});  
//slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 6000
});
//autoComplete 
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Nigeria Market": null,
        "Ghana Market": null,
        "Africa Market": null,
        "Google": null,
        "Congo market": null,
        "Enugu Main Market": 'ogbete',
        "Onitsha Main Market": null,
        "Aba market Nigeria": null,
        "Food Market": null
        
    }
});

//Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

//scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});