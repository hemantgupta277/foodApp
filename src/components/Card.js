import React from 'react'

export default function Card() {
  return (
    <div>
        <div>
          <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Description of the Producct.</p>
              <div className='container w-100'>
                <select className='m-2 h-100 bg dark'>
                  {Array.from(Array(6), (e, i)=>{
                    return(
                      <option key={i+1} value={i+1}> {i+1} </option>
                    )})}
                </select>
                <select className='m-2 h-100 bg dark'>
                  <option key="half">Half</option>
                  <option key="full">Full</option>
                </select>
                <div className='d-inline h-100 fs-5'>Price</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
