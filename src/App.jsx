import Random from './Random';
import Tag from './Tag';


export default function App() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center background">
      <h1 className=' bg-white rounded-lg w-11/12 text-4xl font-bold px-10 py-2
      text-center mt-[40px]  mx-auto overflow-hidden'>Random Gifs</h1>
      <div className='flex flex-col items-center w-full gap-y-10 mt-[30px] '>
        <Random />
        <Tag />
      </div>
    </div>
  );
}
