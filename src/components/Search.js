import React from 'react'

export default function Search(props) {
  let sno=1
  return (
    <>
    <div className='row'>
      <div className='col-md-12'>
        <button class='float-end button2'><i class="fa-solid fa-microphone"></i></button>
        <button class='float-end button1'><i class="fa-solid fa-magnifying-glass"></i></button>
        <input type="text" className='searchbox float-end' placeholder='search..'/>
      </div>
    </div>
  
    <table className='table table-bordered sample' style={{color:"white"}}>
      <thead>
        <tr>
          <th>sno</th>
          <th>Name</th>
          <th>Rollno</th>
          <th>Branch</th>
        </tr>
      </thead>
      <tbody>
        {
         <tr>
          <td>101</td>
          <td>asd</td>
          <td>e0</td>
          <td>cse</td>
         </tr>
          
        }
      </tbody>
      <tbody>
        {
         <tr>
          <td>102</td>
          <td>qwe</td>
          <td>e1</td>
          <td>ece</td>
         </tr>
          
        }
      </tbody>

    </table>
    </>
  )
}