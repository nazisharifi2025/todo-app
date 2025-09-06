export default function InsertImg(){
    return(
       <div className="h-[80%] w-full font-serif bg-[url(/public/bg4.jpeg)]  bg-no-repeat bg-cover">
      <div className="h-full w-full bg-[rgba(0,0,0,0.5)]">
          <div className="w-[45%] text-white py-5 mx-auto flex flex-col h-full justify-center items-center gap-9">
            <div className="w-full">
        <h1 className="font-bold text-2xl w-[60%] mx-auto text-center pb-2 border-b border-gray-200">OUR GALLERY</h1>
        <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <form className="w-full h-fit  flex flex-col gap-9">
        <input type="text" placeholder="Search your fevrite image" className="w-[70%] py-3 px-4 border rounded-md outline-0 border-gray-300 mx-auto" />
        <select name="" className="w-[70%] py-3 text-gray-300 px-4 border rounded-md outline-0 border-gray-300 mx-auto" id="">
            <option className="text-gray-500" value="net">Netcher</option>
            <option className="text-gray-500" value="sni">Animal</option>
            <option className="text-gray-500" value="tec">Tecnologe</option>
            <option className="text-gray-500" value="art">Art</option>
            <option className="text-gray-500" value="wor">World</option>
        </select>
        <button className="border border-gray-300 rounded-md py-3 px-12 w-fit mx-auto shadow-md hover:shadow-inner shadow-gray-400">Save</button>
        </form>
      </div>
      </div>
      </div>
    )
}