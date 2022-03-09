import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

const Chatpage = () => {

  const [Chat, setChat] = useState([])

    const fetchData = async () => {
        try {
            console.log("i am called")
          const  {data}  = await axios.get("/api")
          console.log(data)
          if (data) {
            setChat([...data])
          }
            
        } catch (error) {
            console.log(error)
        }
      
      // try {
      //   console.log("called")
      //   let data = await fetch("/api", {
      //     method: "GET",
      //     headers: { "Content-type": "application/json" }
      //   })
      //   console.log(data)

      //   let data2 = await data.json()
      //   console.log(data2)
      // } catch (error) {
      //   console.log(error)
      // }
    }

    useEffect(() => {
      fetchData()
    }, [])
    
  return (
    <>
      {Chat.map(item => (
        <div key={item._id}>{item.chatName}</div>
      )
    )}
    </>

    
  )
}

export default Chatpage