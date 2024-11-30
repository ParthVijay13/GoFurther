// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { increment,decrement } from '../redux/slices'
// const Counter = () => {
//     const count  = useSelector((state)=> state.counter.value);
//     const dispatch = useDispatch();
//   return (
//     <div>
//         <h1>counter:{count}</h1>
//         <button onClick={()=>dispatch(increment())}>increment</button>
//         <button onClick={()=>dispatch(decrement())}>decrement</button>
//         <button onClick={()=>dispatch(increment())}>increment</button>
//         <button onClick={()=>dispatch(decrement())}>decrement</button>
//         <button onClick={()=>dispatch(increment())}>increment</button>
//         <button onClick={()=>dispatch(decrement())}>decrement</button>
//     </div>
//   )
// }

// export default Counter;

// import React from 'react'
// import { Link } from 'react-router'
// import {Search} from './svgs/search.svg'
const Navbar = () => {
    return (
        <>
            <nav className='navbar flex justify-between w-[1374px] h-[84px] bg-white border rounded-[23px] items-center bottom-[45px] mt-[23px] m-auto '>
                <div className='ml-[65px] flex'>
                    <input type="text" placeholder='search'  className='border rounded-[22px] bg-[#DEDEDE] pl-[15px] py-[6px]'  />
                    <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    
                </div>
                <div className='mr-[65px]'>
                    <ul className='flex gap-4'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>


            </nav>
        </>

    )
}

export default Navbar;
