import { Show_Profile_Pic } from "./Profile/upload_profilePic";
import TooltipComponent from '../components/tooltip';
import Badges from "./Badges";
import { Link } from "react-router-dom";



export function UserCard(props) {

    console.log("User Data", props.data);

    return <div className="card">
        <div className="profile_info">

            <div className="d-flex ai-center mb-3" style={{ minHeight: "70px" }}>
                <Show_Profile_Pic src={props?.data?.profilepic} role={props?.data?.role} classes="profile-image md" />
                <div className="ml-3">
                    <TooltipComponent className="" placement="top" tooltipText={props?.data?.fullName}>
                        <h6 className="limit-text sm text-capital" style={{ fontWeight: 600, color: "var(--btnBgColor)" }}>{props?.data?.fullName}</h6>
                    </TooltipComponent>
                </div>
            </div>

            <div className="d-flex ai-center mb-2">
                <h6>Email :</h6>
                <p className="limit-text sm">{props?.data?.email || "NA"}</p>
            </div>

            <div className="d-flex ai-center mb-2">
                <h6>Contact :</h6>
                <p>{props?.data?.phone || "NA"}</p>
            </div>

            <div className="d-flex ai-center mb-2">
                <h6>Account Status :</h6>
                <p className="limit-text sm text-capital">
                    <Badges text={props?.data?.status || "NA"} classes={`${props?.data?.status || "pending"} sm`} />
                </p>
            </div>

            {
                props?.data?.role !== "university" &&
                <div className="d-flex ai-center mb-2">
                    <h6>Gender :</h6>
                    <p className="text-capital">{props?.data?.gender || "NA"}</p>
                </div>
            }

            {
                (props?.data?.role == "student" || props?.data?.role == "university") &&
                <div className="d-flex ai-center mb-2">
                    <h6>City :</h6>
                    <p className="limit-text sm text-capital">{props?.data?.profile?.city || "NA"}</p>
                </div>
            }

            {
                props?.data?.role == "student" &&
                <div className="d-flex ai-center mb-2">
                    <h6>Uni./Inst. :</h6>
                    <p className="limit-text sm text-capital">{props?.data?.profile?.university?.fullName || "NA"}</p>
                </div>
            }

            {
                props?.data?.role == "university" &&
                <div className='mt-4'>
                    <Link to={`/university-profile/${props.data._id}`} >
                        <button className='btn view_profile_btn me-2'>View Profile</button>
                    </Link>
                </div>
            }

            {
                props?.data?.role == "student" &&
                <div className='mt-4'>
                    <Link to={`/student-report/${props?.data?._id}`} >
                        <button className='btn view_profile_btn me-2'>View Profile</button>
                    </Link>
                </div>
            }

        </div>
    </div>
}