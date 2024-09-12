import React from 'react'; // Importing React to define the component
import loading from './loading.gif'; // Importing the loading spinner GIF image

// Functional component to display a loading spinner
const Spinner = () => {
    return (
        // Centering the spinner on the screen
        <div className='text-center'>
            {/* Displaying the loading GIF image */}
            <img className="my-3" src={loading} alt="loading" />
        </div>
    );
}

export default Spinner;
