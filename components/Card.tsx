import Image from 'next/image';


export function Card() {
  return (
    <div className='flex flex-col'>

      <div className='grid grid-cols-10 bg-red-200'>

        <div className=" w-[450px] p-4 mx-auto col-start-3">
            <div className="bg-gray-200 p-4">
                <img 
                className='rounded-lg w-full h-64 object-center'
                src="/landingpage.png" alt="card" />
                <h1 className='text-2xl uppercase '>Natura Verde</h1>
                <h2 className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro 
                  distinctio in cum quos adipisci alias voluptatem eos expedita! Aliquid
                 aperiam illum reprehenderit optio, ducimus quasi explicabo vero dolore mollitia perspiciatis.</h2>
                
            </div>
        </div>
        <div className=" w-[450px] p-4 mx-auto col-start-6">
            <div className="bg-gray-200 p-4">
                <img 
                className='rounded-lg w-full h-64 object-center'
                src="/landingpage.png" alt="card" />
                <h1 className='text-2xl uppercase '>Natura Verde</h1>
                <h2 className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro 
                  distinctio in cum quos adipisci alias voluptatem eos expedita! Aliquid
                 aperiam illum reprehenderit optio, ducimus quasi explicabo vero dolore mollitia perspiciatis.</h2>
                
            </div>
        </div>
      </div>

        <div className=" w-[450px] p-4 mx-auto ">
            <div className="bg-gray-200 p-4">
                <img 
                className='rounded-lg w-full h-64 object-center'
                src="/landingpage.png" alt="card" />
                <h1 className='text-2xl uppercase '>Natura Verde</h1>
                <h2 className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro 
                  distinctio in cum quos adipisci alias voluptatem eos expedita! Aliquid
                 aperiam illum reprehenderit optio, ducimus quasi explicabo vero dolore mollitia perspiciatis.</h2>
                
            </div>
        </div>
        <div className=" w-[450px] p-4 mx-auto ">
            <div className="bg-gray-200 p-4">
                <img 
                className='rounded-lg w-full h-64 object-center'
                src="/landingpage.png" alt="card" />
                <h1 className='text-2xl uppercase '>Natura Verde</h1>
                <h2 className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro 
                  distinctio in cum quos adipisci alias voluptatem eos expedita! Aliquid
                 aperiam illum reprehenderit optio, ducimus quasi explicabo vero dolore mollitia perspiciatis.</h2>
                
            </div>
        </div>
    </div>
  )
}