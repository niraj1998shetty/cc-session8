const Cars=({gearBox=5, ...rest })=>{
    const other={...rest};
    return(
        <div>
<p>there will be {gearBox} in every cars. For Example {other.type}</p>
        </div>
    )

}
export default Cars;


/* 

const car = 
  {
    engine: "hfhfhfh",
    gearBox: "5555",
    type: "55",
    spareWheel: "222",
    seatingCapacity: "666",
    bhp: "111",
    torque: "sdfghj"
  }
function App() {
    <Cars {...car} />
}
export default app;

------------or-------

const Cars=({engine, torque })=>{
    return(
        <div>
<p>engine:{engine}and torque:{torque}</p>
        </div>
    )

}
export default Cars;

-----------or----------

const Cars=({engine, ...rest })=>{
    const other={...rest};
    return(
        <div>
<p>{engine}22222{other.torque}</p>
        </div>
    )

}
export default Cars;

--------- And--------------

const Cars=({gearBox=5, ...rest })=>{
    const other={...rest};
    return(
        <div>
<p>there will be {gearBox} in every cars. For Example {other.type}</p>
        </div>
    )

}
export default Cars;



*/