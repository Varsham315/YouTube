import React from 'react'
import {useContext} from 'react'
import {store} from '../App'
export default function Home() {
  const [data,setData]=useContext(store)
  let sno=1;
  return (
    <>
    <div >
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>s.no</th>
            <th>Name</th>
            <th>Rollno</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i)=>{
              return(
            <tr>
            <td>s.no</td>
            <td>Name</td>
            <td>Rollno</td>
            <td>Branch</td>
          </tr>
              )
          })
        }
        </tbody>
      </table>
    </div>
    
    </>
  )
}
