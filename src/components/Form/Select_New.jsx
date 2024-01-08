import React from 'react'
import Select from 'react-select'



export default function SelectNew(props) {

    return <>
        <label className='form-label' style={{ textTransform: "capitalize" }}>{props?.label}</label>

        <Select
            {...props}
        />
    </>

}



// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
//     { value: '', label: 'Mango' }
// ]

// export default function SelectNew(props) {

//     return <>
//         <Select
//             options={options}
//             isOptionDisabled={(option) => option.value == ''}
//             isSearchable={false}
//             loadingMessage={"Loading..."}
//             required
//             value={{ value: 'strawberry', label: 'Strawberry' }}
//         />
//     </>

// }