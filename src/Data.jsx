import React,{useState} from 'react'
import './data.css'
import Receive from './receive.json' 

const Data = () => {
  return (
    <div className='container' >
      <div class="object-position: center"><ul className='Topic'>Edit Received</ul></div>
      {Receive.students.map(each => <div> 

          <div className='container-people'>
              <p1> ID: {each.user_id} </p1>
              <p1> First name: {each.first_name}</p1>
              <p1> Last name: {each.last_name}</p1>
              <p4>Gender: {each.gender_id === 'a1' ? 'male' : 'female'}</p4>
              <div>Adore car: {Receive.cars.map(c => {
                                if (each.adore_car ===  c.car_id) return<div>(
                                    <div>Brand:  {c.car_brand}</div>
                                    <div>From:  {c.car_make}</div>
                                  {/* loop add array 'c' */}
                                )</div>})}

                  <div> Car_Brand: {each.car_brand.map(b => <p4>{
                            Receive.cars.map(d => {
                              if (b === d.car_id) return <p4 className='Brand'>
                                {d.car_brand} 
                              </p4>
                            })
                  }</p4>) }</div>

                  <p4> Countries: {Receive.countries.map(t => <p4>{
                      t.user_ids.map(u => {
                        if (parseInt(u.userId) === each.user_id) return <p4>{t.label}</p4>
                      })
                  }</p4>)} </p4>
                
                              <div>Color: [
                    {/* Return twice  ---------> */}
                    <p3>  {each.color.map(l => <div> {
                      
                      Receive.rgbCode.map(r => {
                        // console.log(l)
                        // console.log(r.label)
                        // console.log(r.label === l)
                        if (l === r.label) return <div><ul><li>hex: {r.hex}</li> <li>label: {r.label}</li> <li>rgb: {r.rgb}</li></ul></div>
                      })}</div>)}</p3>
                                          ]</div>
                      </div>

          </div>

        </div>)}
    </div>
  )
}

export default Data