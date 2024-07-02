import { IoClose } from "react-icons/io5";


const CloseBtn=(props:any)=>{
    return(
        // eslint-disable-next-line react/prop-types
        <button onClick={props.onClick}
        className='my-auto mx-0 p-0 bg-transparent cursor-pointer'>
            <IoClose 
                className='text-teal-900 text-3xl lg:text-4xl font-bold rounded-lg p-2'/>
          </button>
    );
};

export default CloseBtn;