import { FaTrashCan } from "react-icons/fa6";


const AddBtn=(props: any)=>{
    return(
        // eslint-disable-next-line react/prop-types
        <button onClick={props.onClick} 
        className=' my-auto bg-transparent cursor-pointer'
        >
            <FaTrashCan
                className='text-red-700 text-5xl lg:text-6xl font-bold rounded-lg p-2' />
          </button>
    );
};

export default AddBtn;