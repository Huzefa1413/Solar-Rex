import { useState } from "react";
import { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { useAuth } from "../../ContextAPI/Components/auth";
import { getAppDocuments } from "../../ContextAPI/APIs/api";


export function FileViewerAdmin(props) {
    // const { fileData } = useAuth();

    const [data,setData] = useState({})

    const getDocument = async ()=>
    {
        try{ 
            const response = await getAppDocuments({id:props.id})
            console.log("RESPONSE23",response);
       if(response.success)
       {
        setData(response?.message)
        console.log("AAA",response?.message);
       }
        }
        catch(e)
        {
            console.log(e);
        }
    }
useEffect(()=>
{
    getDocument()
},[])

    return <>
        <label className="form-label">{props.text}</label>
        <div className='upload_file image mb-4' style={{ width: "fit-content" }}>
            <div class="dz-message position-relative text-start">
                {/* <label htmlFor="">Hello</label> */}
                {
                    data[props.keyName] ?
                        <a href={`${props.url}/${data[props.keyName]}`} className="m-2" target="_blank">
                            <FaFilePdf className='purple_icons file_icon' />
                        </a>
                        :
                        <div>
                            <p class="mb-0 fw-semibold text-dark">Upload File</p>
                            <small class="mb-0 fw-semibold text-gray">PDF, DOC, PPT, JPG, PNG</small>
                        </div>
                }
            </div>
        </div>
    </>
}