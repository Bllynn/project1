let id=6;
let cars=[
    {name: 'Brandon', id:1, make: 'Toyota', model:'Camry', year: 2005,status:'broken'},
    {name: 'Charlie', id: 2,make: 'Mazda', model:'323', year: 2017,status:'fixed'},
    {name: 'Melissa', id:3, make: 'Volkswagon', model:'Beetle', year: 2005,status:'broken'},
    {name: 'Michaela', id:4, make: 'Toyota', model:'Camry', year: 2005,status:'fixed'},
    {name: 'Cameron', id:5, make: 'Ford', model:'Ranger', year: 2010,status:'broken'}
]
let brokenCars = cars.filter((e) =>{
    e.status ==='broken';
})
let fixedCars = cars.filter((e) =>{
    e.status ==='fixed';

})
let carChange = cars.filter((e) =>{
    if(e.status === 'broken'){
        e.status='fixed';
        e.push(fixedCars);
        alert('Check the lot for your car')
    }else{
        if(e.status === 'fixed'){
            e.status='broken';
            e.push(brokenCars);
            alert('Check the garage for your car')
        }
    }
    res.status(200).send(fixedCars,brokenCars)

})

module.exports = {
    changeStatus: (req,res) => {
        res.status(200).send(carChange)
    },

    brokenCars: (req,res) =>{
        res.status(200).send(brokenCars)
    },

    fixedCars:(req,res) =>{
        res.stats(200).send(fixedCars)
    },

    read:(req,res) =>{
        res.status(200).send(cars);
    },

    create:(req,res) =>{
        const{name,make,model,year}=req.body
        let car= {
            status:'broken',
            id:id,
            name:name,
            make:make,
            model:model,
            year:year
        }
        cars.push(car);
        id +=1;
        res.status(200).send(cars);
    },
    // update:(req,res) =>{}takes the cars.STATUS 
    //and updates it from 'broken' to 'fixed'
    // delete:(req,res) => {}

}