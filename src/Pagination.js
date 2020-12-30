import React from 'react'

const Pagination = ({length, pagesize,selectednumber,activebutton}) => {

    
    const numberofpages = Math.ceil(length/pagesize) 
     const pagenumber = []
    for(let i=1; i<=numberofpages; i++){
        pagenumber.push(i)
    }

    const display =pagenumber.map((item)=><button key={item} onClick={()=>selectednumber(item)}
    className={item===activebutton ? 'activebtn':'btn'}
    >{item}</button>)
  return (
    <div>
      <h1>Pagination component</h1>
        <button> <i class="material-icons">arrow_back</i></button>  {display}<button> <i class="material-icons">arrow_forward</i></button> 
    </div>
  )
}

export default Pagination
