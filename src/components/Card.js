import React from 'react'

export default function Card() {
  return (
    <div>
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="card my-3" style={{"width": "", "maxHeight":""}}>
                  <img src="/dishes/food.jpg" className="card-img-top" alt="food"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Description of the Producct.</p>
                    <div className='container w-100 p-0'>
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
              <div className="col-md-4">
                <div className="card my-3" style={{"width": "", "maxHeight":""}}>
                  <img src="/dishes/food.jpg" className="card-img-top" alt="food"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Description of the Producct.</p>
                    <div className='container w-100 p-0'>
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
              <div className="col-md-4">
                <div className="card my-3" style={{"width": "", "maxHeight":""}}>
                  <img src="/dishes/food.jpg" className="card-img-top" alt="food"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Description of the Producct.</p>
                    <div className='container w-100 p-0'>
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
          </div>
        </div>
    </div>
  )
}
