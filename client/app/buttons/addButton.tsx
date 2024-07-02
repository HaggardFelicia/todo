import { IoAdd } from "react-icons/io5";
const AddBtn=(props:any)=>{
    return(
        // eslint-disable-next-line react/prop-types
        <button onClick={props.onClick} 
        className=' my-auto mx-0 p-0 bg-transparent cursor-pointer'
        >
            <IoAdd
                className='text-teal-900 text-5xl lg:text-6xl font-bold rounded-lg p-2'/>
          </button>
    );
};

export default AddBtn;