import React from 'react'; 

//create an interface to define name type
interface Props {
    name:string
}

//Assign the interface Props to name
const Greeting = ({ name }: Props):JSX.Element => {

return (

    <div>
        Hello, {name} !
    </div>

    )
};
 export default Greeting;
