import React, { useState } from 'react'

const Multipleinputs = () => {

    const [userRegisteration, setUserRegisteration] = useState({
        warehouseid: "",
        lotnumber: "",
        quantityforwarded: "",
        password: ""
    });

    const [records, setRecords ] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegisteration({...userRegisteration, [name] : value })

    }

  const handleSubmit = (e) => {
      //send data 
      e.preventDefault();

      const newRecord = {...userRegisteration, id: new Date().getTime().toString()}
       
      console.log(records);
      
      setRecords([...records, newRecord]);
      console.log(records);


  }

  return (
    <>
        <h1>Warehouse Forwarding Form</h1>

        <form class="form-container" action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor='warehouseid'>Warehouse ID</label>
                <input className='form-field' type="text" autoComplete='off'
                value={userRegisteration.warehouseid}
                onChange={handleInput} 
                name="warehouseid" id="warehouseid" />
            </div>

            <div>
                <label htmlFor='lotnumber'>Lot Number (Medicine ID) </label>
                <input  className='form-field' type="text" autoComplete='off' 
                value={userRegisteration.lotnumber}
                onChange={handleInput} 
                name="lotnumber" id="lotnumber" />
            </div>

            <div>
                <label htmlFor='quantityforwarded'>Quantity Forwarded</label>
                <input  className='form-field' type="text" autoComplete='off' 
                value={userRegisteration.quantityforwarded}
                onChange={handleInput} 
                name="quantityforwarded" id="quantityforwarded" />
            </div>

            <div>
                <label htmlFor='password'>Password</label>
                <input  className='form-field' type="password" autoComplete='off'
                value={userRegisteration.password}
                onChange={handleInput} 
                name="password" id="password" />
            </div>

            <button type="submit"> Submit   </button>
        </form>
    </>
  )
}

export default Multipleinputs