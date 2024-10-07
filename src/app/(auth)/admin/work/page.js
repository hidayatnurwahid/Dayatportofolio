"use client"
import { useState } from 'react';
import Card from '../../../../components/card';

export default function AdminWork() {
  const [data, setData] = useState({
    title:'',
    employeType:'',
    companyName:'',
    location:'',
    startDate:'',
    endDate:'',
  });

  const optEmployeType = [
    {label:'Full Time', value:'full-time'},
    {label:'Part Time', value:'part-time'},
    {label:'Contract', value:'contract'},
    {label:'Internship', value:'internship'}
  ]

  const inputHandler= (e) =>{
    setData({...data, [e.target.name]: e.target.value })
  }

  return (<>
      <Card title="Work Form" className="pb-5">
        <div className="w-full my-2">
            <label>Title</label> 
            <input 
              type="text" 
              name='title'
              value={data.title}
              onChange={inputHandler}
              className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>Employe Type</label>
            <select  
              name='employeType' 
              onChange={inputHandler}
              className="w-full border my-input-text">
              {
                optEmployeType && 
                  optEmployeType.map((item, key)=>
                    <option key={key} value={item.value}>{item.label}</option>
                  )
              }
            </select>
        </div>

        <div className="w-full my-2">
            <label>Company Name</label>
            <input type="text" className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>Location</label>
            <select  className="w-full border my-input-text">
              <option>Onsite</option>
            </select>
        </div>

        <div className="w-full my-2">
            <label>Start Date</label>
            <input type="date" className="w-full border my-input-text"/>
        </div>

        <div className="w-full my-2">
            <label>End Date</label>
            <input type="date" className="w-full border my-input-text"/>
        </div>

        <button className="mx-1 h-9 items-center justify-center px-4  rounded-md bg-amber-500">
            <label>Submit Data</label>
        </button>
      </Card>
      
      <Card title="List of Work" style="mt-5">
        asdf
      </Card>
    </>
  );
}
  