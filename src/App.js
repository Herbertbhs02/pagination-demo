import {useEffect, useState} from 'react'
import './App.css';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios'

function App() {
 
  const [posts, setPosts]= useState([])
  const [length, setLength] = useState(1)
  const [pagesize, setPagesize] = useState(10)
  const [selectedpage, setSelectedpage] = useState(1)
  const [activebutton, setActivebutton] = useState(1)
  
  useEffect(()=>{
    const getposts = async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(res.data)
    setLength(res.data.length)
    }
    getposts()
  },[])
 const startPosition = (selectedpage-1)*pagesize
 const endPosition = selectedpage*pagesize
 const postTorender = posts.slice(startPosition, endPosition)

 const selectednumber = (e)=>{setSelectedpage(e); setActivebutton(e)}

  return (
    <div className="App">
    <h1>List below</h1>
    <Posts posts ={postTorender}/>
    <Pagination length ={length} pagesize={pagesize} 
    selectednumber={selectednumber} 
    activebutton={activebutton}/>

    </div>
  );
}

export default App;
