import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Nav from './Nav'
function SearchFood() {
    let [food, setFood] = useState({
        fid: "",
        fname: "",
        price: 0
    })
    let [data, setData] = useState({
        fid: "",
        fname: "",
        price: ""
    })
    const getData = (fid) => {
        axios.get(`http://localhost:1005/food/fetch/${fid}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
                alert("SOMETHING WENT WRONG");
            })
    }

    return (
        <div style={{ width: "45%", margin: "50px auto" }}>
            <Nav/>
            <h2 className='text-primary'>SEARCH FOOD</h2>
            <input type="text" className='form-control' placeholder='ENTER THE FOOD ID'
                value={food.fid} onChange={(event) => {
                    setFood({ ...food, fid: event.target.value })
                }} />

            <button className='btn btn-outline-primary' style={{ marginTop: "5px" }}
                onClick={() => {
                    getData(food.fid);
                }}>SEARCH</button>&nbsp;&nbsp;
                <div>
                    <table className='table table-hover table-bordered'>
                        <thead className='table table-dark'>
                            <tr>
                                <th>FOOD ID</th>
                                <th>FOOD NAME</th>
                                <th>PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.fid}</td>
                                <td>{data.fname}</td>
                                <td>{data.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default SearchFood
