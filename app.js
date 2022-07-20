let data=[

    {
        name:'Dhananjay',
        age:'23'
    },
    {
        name:'Abhay',
        age:'23'
    },
    {
        name:'Rohan',
        age:'23'
    },
    {
        name:'Rakesh',
        age:'23'
    },
    {
        name:'Sanket',
        age:'23'
    },
    {
        name:'Sunil',
        age:'23'
    },
];
const info= document.querySelector('#info')

let details=data.map(function ( item) {
    return '<div>'+item.name+' ' +item.age+ '</div>';

});

info.innerHTML=details.join('\n');