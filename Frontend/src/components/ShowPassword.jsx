
// import React, { useState } from 'react';

// const ShowPassword = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isdardark, setIsDark] = useState(false);

//   return (
//     <div className="flex flex-col gap-3 bg-amber-400 p-5 w-1/3 mx-auto mt-10 rounded-md">
//         <button onClick={() => setIsDark(!isdardark)} className={`px-3 py-1 rounded ${isdardark ? 'bg-black text-white' : 'bg-white text-black'}  ` }>
//         {isdardark ? 'Light Mode' : 'Dark Mode'}
//       </button>
//       <input
//         type={showPassword ? "text" : "password"}
//         className="border bg-amber-50 px-4 text-center"
//       />
//       <button
//         onClick={() => setShowPassword(!showPassword)}
//         className="bg-white px-3 py-1 rounded"
//       >
//         {showPassword ? "Hide" : "Show"}
//       </button>
//     </div>
//   );
// };

// export default ShowPassword;





import React,{useState} from 'react';

const showPassword =() =>{
    const [showPassword, setShowPassword]=useState(false)
 return(
    <div>
        <div className='flex  flex-col gap-3 bg-amber-400 p-5 w-1/3 mx-auto mt-10 rounded-md'>
        <input type={showPassword ? "text" : "password" } className='border bg-amber-50 px-4 text-center'/>
        <button onClick={() => setShowPassword(!showPassword)} className='bg-white px-3 py-1 rounded'>
            {showPassword ? 'Hide' : 'Show'}
        </button>
   
        </div> 
    </div>
 )
}
export default showPassword;












