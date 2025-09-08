export default function Image({item,index}){
    return(
         <div key={index} onClick={() => openModal(index)} className="group  h-[40vh] w-[300px] flex flex-col gap-3 relative">
              <img src={item.src} className="h-full w-full" alt="" />
              <div className="w-full font-medium text-2xl hover:h-full duration-1000 transition-all group-hover:h-full flex flex-col justify-end absolute text-white bottom-0 left-0 bg-[rgba(53,52,52,0.8)] py-3 px-3">
                <div className="w-full group-hover:h-1/2 flex flex-row group-hover:flex-col group-hover:justify-between">
                <i className="fas fa-search mx-auto text-4xl opacity-0 group-hover:opacity-100"></i>
                <span className="float-left absolute bottom-2 left-3">{item.catagori}</span>
                </div>
                </div>
            </div>
    )
}