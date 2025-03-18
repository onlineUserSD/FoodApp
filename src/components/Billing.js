import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import NavClient from './NavClient'
function Billing() {
    let [user, setUser] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:1005/order/billing")
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((error) => {
                console.log(error);
                alert("SOME THING WENT WRONG ON FETCHING DATA");
            })
    }, [])
    return (
        <div>
            <h2 className='text-primary'>FOOD BILLING</h2>
            <NavClient/>
            {
                user.length > 0 ?
                    <div style={{ width: "60%", margin: "50px auto" }}>
                        <table className='table table-hover table-striped '>
                            <thead className='table table-dark'>
                                <tr>
                                    <td>ORDER ID</td>
                                    <td>ORDER DATE</td>
                                    <td>FOOD ID</td>
                                    <td>QUANTITY ORDERED</td>
                                    <td>FOOD NAME</td>
                                    <td>PRICE</td>
                                    <td>TOTAL COST</td>
                                    <td>USER NAME</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((element, index) => {
                                        return (
                                            <tr>
                                                <td>{element[0]}</td>
                                                <td>{element[1]}</td>
                                                <td>{element[2]}</td>
                                                <td>{element[3]}</td>
                                                <td>{element[4]}</td>
                                                <td>{element[5]}</td>
                                                <td>{element[6]}</td>
                                                <td>{element[7]}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    : <h2 style={{ color: "red" }}>NO DATA FOUND</h2>
            }
        </div>
    )
}


export default Billing