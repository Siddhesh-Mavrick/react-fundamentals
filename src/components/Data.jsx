import React from 'react'
import Product from './Product'

const Data = () => {
    const another = []
    const arr = ['siddhesh', 'siddheshbhise04@gmail.com', 'siddhesh@123', 'Pune, Hadapsar']
    return (
      <div>
        {arr.map((i) => (
          <Product value={i} key={i} />
        ))}
      </div>
    )
}

export default Data;
