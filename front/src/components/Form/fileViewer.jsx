import { useState } from "react";
import { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { useAuth } from "../../ContextAPI/Components/auth";


export function FileViewer(props) {
    const { fileData } = useAuth();
    return <>
        <label className="form-label">{props.text}</label>
        <div className='upload_file image mb-4' style={{ width: "fit-content" }}>
            <div class="dz-message position-relative text-start">
                {/* <label htmlFor="">Hello</label> */}
                {
                    fileData[props.keyName] ?
                        <a href={`${props.url}/${fileData[props.keyName]}`} className="m-2" target="_blank">
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