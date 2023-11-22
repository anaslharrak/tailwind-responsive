import '../index.css'
import exampleImage from './assets/example.jpg'

function App() {

  return (
    <>
      <div className="grid h-[auto] w-[90vw] items-center p-[2vmax] gap-[1vmax] bg-green-500 text-white text-center rounded-[0.5vw] grid-cols-1 sm:grid-cols-2">
  <div>
    <img src={exampleImage} alt="" className="h-[35vmax] w-auto max-w-full rounded-[2vw] object-cover" />
  </div>
  <div>
    <h1 className="m-0 text-[4.5vmax] font-bold">Headline</h1>
    <div className="gap-1 grid grid-cols-1">
      <p className="font-light text-[2.5vmax]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum quidem odio dicta ipsam nesciunt earum numquam ex nulla facere. Laborum est qui quasi animi cum alias tempore, sint ut. Lore
      </p>
      <div className="grid gap-1 grid-cols-1">
        <button className="text-[2.5vmax] border-2 bg-green-600 border-green-800 rounded-md">Test 1</button>
        <button className="text-[2.5vmax] border-2 bg-white text-green-600 border-green-800 rounded-md">Test 2</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App
