import React from 'react'
import {useParams} from 'react-router-dom'

function UserComp() {
    const {id} = useParams()
  return (
    <div className="bg-gray-800 text-white text-4xl p-5">UserComp:{id}</div>
  )
}

export default UserComp