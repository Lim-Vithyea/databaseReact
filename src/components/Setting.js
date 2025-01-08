import React from 'react'
const Setting = ({handlelogout}) => {
  return (
    <div>
         <div>
      <div>
      <div className="pt-[300px] text-center content-center " >
            <button type="submit" onClick={handlelogout} className="bg-red-600 rounded-[5px] w-[300px] h-[50px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] border-none">
                <span className="font-bold text-white">SignOut</span>
            </button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Setting
