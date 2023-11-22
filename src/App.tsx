import '../index.css'
import exampleImage from './assets/example.jpg'

function App() {

  return (
    <>
      <section className='grid h-auto w-10/12 items-center p-10 gap-8 text-center rounded-lg grid-cols-1 bg-green-400 md:grid-cols-2  md:items-center bg-yellow-400 md:text-left md:bg-orange-400 lg:bg-blue-300 '>

        <div>
          <img src={exampleImage} alt="" className='w-full rounded-lg' />
        </div>

        <div>
          <h1 className='mb-2 text-4xl font-black'>Headline</h1>
          <div className='gap-10 grid grid-cols-1'>
          <p className='font-thin text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus cum quidem odio dicta ipsam nesciunt earum numquam ex nulla facere. 
            Laborum est qui quasi animi cum alias tempore, sint ut. Lore</p>

            <div className='gap-1 grid grid-cols-1'>
              <button className='bg-blue-500 text-white text-base sm:text-lg md:text-xl lg:text-2xl border-2 border-blue-600 rounded-md p-4'>Test 1</button>
              <button className='bg-white text-blue-500 sm:text-lg md:text-xl lg:text-2xl border-2 border-blue-600 rounded-md p-4'>Test 2</button>
            </div>
          </div>
        </div>

      </section>    
    </>
  )
}

export default App
