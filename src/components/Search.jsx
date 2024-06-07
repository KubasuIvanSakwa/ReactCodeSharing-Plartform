import { useState } from 'react'
import SearchLogo from '../../public/search-svg.svg'
import drop from '../../public/drop-down.svg'
// import { db } from '../firebase'
// import { addDoc, collection } from 'firebase/firestore'

function Search() {

    const [ToggleSearch, setToggleSearch] = useState(false)
    const [searchParam, setSearchParam] = useState({
        "value": ''
    })

    document.addEventListener("keydown", (e) => {
        if((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault()
            setToggleSearch(!ToggleSearch)
        }
    })


    return (
        <>
            <section className="absolute z-50 top-[3rem] p-2 w-full flex justify-center cursor-pointer">
                <div 
                    className="flex w-[50%] justify-center h-[3.5rem] p-1 "
                    onClick={() => {
                        setToggleSearch(!ToggleSearch)
                    }}
                >
                    <div className="bg-[#4A4D54]  w-[10%] flex justify-center items-center p-3">
                        <img src={SearchLogo} alt="S"/>
                    </div>
                    <input placeholder='Search' className="w-[40%] outline-none p-1 bg-[#4A4D54] text-white placeholder:text-white/50 cursor-pointer"/>
                    <div className="bg-[#4A4D54]  w-[15%] flex justify-center items-center p-1">
                        <span
                            className='bg-[#949596]  rounded-xl w-[50%] flex justify-center items-center text-white/70'
                        >
                            ctrl
                        </span>&nbsp;
                        <span
                            className='bg-[#949596]  rounded-xl w-[30%] flex justify-center items-center text-white/70'
                        >k</span>&nbsp;
                    </div>
                    <div 
                        className="bg-[#4A4D54] relative w-[18%] flex justify-center items-center p-1"
                        onClick={(e) => {
                             e.stopPropagation() // stops the onClick on the parent section
                        }}
                    >
                    <div className='border border-[#808080] h-[2rem] absolute left-0'></div>
                    <div className='flex justify-center'>
                        <p className='mr-1 text-[#F3E5E5]'>Categories</p>
                        <img className="w-[1.2rem]" src={drop} alt='...' />
                    </div>
                    </div>
                </div>
            </section>
            <section
                onClick={() => {
                    setToggleSearch(false)
                }}  
                className={`${ToggleSearch === false ? 'hidden' : "flex"} fixed z-[55] w-full h-full bg-[#23272F]/70 backdrop-blur-sm justify-center p-2`}
            >
                <div
                onClick={(e) => {
                    e.stopPropagation() // stops the onClick on the parent section
                }}
                    className='w-[50%] h-[99%]  bg-[#35383F] rounded-2xl p-3 flex items-center flex-col relative border border-white/20 shadow-xl'
                >
                    <div className="flex w-full justify-center h-[2.5rem] p-1">
                        <div className="bg-[#4A4D54]  w-[8%] h-[2.5rem] rounded-l-3xl flex justify-center items-center p-2">
                            <img src={SearchLogo} alt="S" className='cursor-pointer'/>
                        </div>
                        <input placeholder='Search Projects' 
                            onChange={(e) => {
                                const { value } = e.target
                                        setSearchParam({
                                            ...searchParam,
                                            value,
                                        })
                                    }} 
                            className="w-[80%] h-[2.5rem] rounded-r-3xl outline-none p-1 bg-[#4A4D54]  text-white/90 placeholder:text-white/50"
                        />
                    </div>
                    <div className='w-full h-[29rem] p-1'>
                        <div className='w-full flex justify-center'>
                            <span className='text-white/40 pt-6'>No recent searches</span>
                        </div>
                        <div>
                            {searchParam.value}
                        </div>
                    </div>
                    <div className='w-full bottom-1 h-[5rem] rounded-bl-2xl rounded-br-2xl border-t border-white/20'>
                        {/* footer */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search