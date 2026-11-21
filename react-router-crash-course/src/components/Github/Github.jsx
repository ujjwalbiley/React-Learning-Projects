import React, {useEffect, useState} from 'react'

function Github() {

  const [data, setData] = useState({})

  useEffect(()=>{
    fetch('https://api.github.com/users/ujjwalbiley')
    .then(res=>res.json())
    .then(data => {
      setData(data)
    })
  }, [])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-5 text-4xl">Github Followers: {data.followers}
    <img src={data.avatar_url} alt="github profile" className="rounded-full w-32 h-32 mx-auto"/>
    </div>
  )
}

export default Github