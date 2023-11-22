import '../index.css'
import exampleImage from './assets/example.jpg'

function App() {

  return (
    <>
      <section className='grid h-auto w-10/12 items-center p-10 gap-8 text-center rounded-lg grid-cols-1 bg-green-400 md:grid-cols-2 md:items-center md:text-left md:max-lg:bg-orange-400 lg:bg-blue-300 '>

        <div className="">
          <img src={exampleImage} alt="" className='w-full rounded-lg' />
        </div>

        <div>
          <h1 className='mb-2 text-4xl font-medium'>Headline</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatibus cum quidem odio dicta ipsam nesciunt earum numquam ex nulla facere. 
            Laborum est qui quasi animi cum alias tempore, sint ut. Lore</p>
        </div>

      </section>    
    </>
  )
}

export default App
