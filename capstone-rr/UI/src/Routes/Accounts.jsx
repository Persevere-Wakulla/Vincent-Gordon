import React from 'react'
import BasketCard from '../components/BasketCard'
import CustomerInfo from '../components/CustomerInfo'
import {useLoaderData} from 'react-router-dom'
export default function Accounts() {
    const account = useLoaderData()
  return (
    <div>
        <h1>hey</h1>
        <CustomerInfo item={account}/>
    </div>
  )
}
