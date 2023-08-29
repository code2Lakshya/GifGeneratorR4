import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useGif from './useGif';

const Tag = () => {
  const {gif,loader,findd}=useGif(true);
  const [data,setData]=useState('');
  function clickHandler(){
    findd(data);
  }
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border
     border-black flex flex-col items-center gap-y-[5px] mt-[15px]'>
      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>Random {data} Gif</h1>
      {loader?(<div className='spinner'></div>):(<img src={gif} alt='GIF' width='450'/>)}
      <input className='w-10/12 py-[5px] text-bold text-center' 
      type='text' value={data} onChange={(e)=>setData(e.target.value)}/>
      <button className='mb-[20px] w-10/12 mt-4 bg-slate-400 text-lg py-2 rounded-lg' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag