import { useState } from "react"

export default function InsertImg(){
  // مدیریت فورم
  const [image,setImage] = useState("");
  const [catagori,setCatagori] = useState("");
  const [gallery,setgallery] = useState([]);

  // مرحله دوم  oncheng
  // مرحله سوم مدریت  ازسال فورم
  function handelclick(e){
    e.preventDefault();
    const newGallery = {
      src: image,
      catagori: catagori,
    }
    setgallery([...gallery,newGallery]);
    setImage("");
    setCatagori("");
  }
    return(
      <div className="w-full h-screen overflow-y-scroll">
       <div className="h-[87%] w-full font-serif bg-[url(/public/bg4.jpeg)]  bg-no-repeat bg-cover">
      <div className="h-full w-full bg-[rgba(0,0,0,0.5)]">
          <div className="w-[45%] text-white py-5 mx-auto flex flex-col h-full justify-center items-center gap-9">
            <div className="w-full">
        <h1 className="font-bold text-2xl w-[60%] mx-auto text-center pb-2 border-b border-gray-200">OUR GALLERY</h1>
        <p className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <form className="w-full h-fit  flex flex-col gap-9">
        <input value={image} onChange={(e)=> setImage(e.target.value)} name="image" type="text" placeholder="Search your fevrite image" className="w-[70%] py-3 px-4 border rounded-md outline-0 border-gray-300 mx-auto" />
        <select value={catagori} onChange={(event) => setCatagori(event.target.value)} className="w-[70%] py-3 text-gray-300 px-4 border rounded-md outline-0 border-gray-300 mx-auto" id="">
            <option className="text-gray-500" value="netcher">Catagori</option>
            <option className="text-gray-500" value="netcher">Netcher</option>
            <option className="text-gray-500" value="Animal">Animal</option>
            <option className="text-gray-500" value="Tecnologi">Tecnologe</option>
            <option className="text-gray-500" value="art">Art</option>
            <option className="text-gray-500" value="world">World</option>
        </select>
        <button onClick={handelclick} className="border border-gray-300 rounded-md py-3 px-12 w-fit mx-auto shadow-md hover:shadow-inner shadow-gray-400">Save</button>
        </form>
      </div>
      </div>
      </div>
      <h1 className="font-bold text-5xl text-center my-6 font-family">Images with Cutagory</h1>
      <div className="h-fit w-[80%]  mx-auto p-4 flex gap-4 items-center flex-wrap justify-center">
        {gallery.map((item,index) =>(
            <div key={index} className="group  h-[40vh] w-[300px] flex flex-col gap-3 relative">
              <img src={item.src} className="h-full w-full" alt="" />
              <div className="w-full font-medium text-2xl hover:h-full duration-1000 transition-all group-hover:h-full flex flex-col justify-end absolute text-white bottom-0 left-0 bg-[rgba(53,52,52,0.8)] py-3 px-3">
                <div className="w-full group-hover:h-1/2 flex flex-row group-hover:flex-col group-hover:justify-between">
                <i className="fas fa-search mx-auto text-4xl opacity-0 group-hover:opacity-100"></i>
                <span className="float-left absolute bottom-2 left-3">{item.catagori}</span>
                </div>
                </div>
                
            </div>
          ))
        }
      </div>
      </div>
    )
}