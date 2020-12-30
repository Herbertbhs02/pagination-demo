import React from 'react'
import './App.css'
const Posts = ({posts}) => {
  return (
      <ul className='list'>
       {posts.map(item =>(<li key={item.id}className='list'><span className='id'>{item.id} </span> {item.title}</li>))}
      </ul>
  )
}

export default Posts

