import React from 'react';
import {useState, useEffect} from 'react'
const url= 'https://reqres.in/api/users?page=2'
const About_Staff = () => {
    
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [value, setValue] = useState(0)
  
    const fetchJobs = async () => {
      const reponse = await fetch(url)
      const newJobs = await reponse.json()
      setJobs(newJobs.data)
      setLoading(false)

      console.log(newJobs.data)
    }

    useEffect(()=>{
        fetchJobs()
    },[])
   
    if (loading) {
      return (
        <section className="section loading">
          <h1>Loading...</h1>
        </section>
      )
    }

    const {is,email,first_name,last_name,avatar}=jobs[value]
   
    return (
      <section className="section">
        
        <div className="jobs-center">
        
          <div className="btn-container">
            {jobs.map((item, index) => {
              return (
                <div className="w-full flex justify-between">
                    <img className="py-5" src={item.avatar}/>
                    <h3 className="text-center py-5" >{item.first_name} {item.last_name}</h3> 
                    <p className="py-5">{item.email}</p>

                </div>
                
              )
            })}
          </div>
         
        </div>
       
      </section>
    )
};

export default About_Staff;