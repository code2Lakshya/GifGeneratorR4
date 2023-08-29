import React from 'react'
import useGif from './useGif';

const Random = () => {
  const {gif,loader,findd}=useGif(false);
  function clickHandler(){
    findd();
  }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border
     border-black flex flex-col items-center gap-y-[5px] mt-[15px]'>
      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random Gif</h1>
      {loader?(<div className='spinner'></div>):(<img src={gif} alt='GIF' width='450'/>)}
      <button className='mb-[20px] w-10/12 bg-slate-400 text-lg py-2 rounded-lg' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random