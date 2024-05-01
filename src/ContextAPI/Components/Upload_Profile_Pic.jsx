import { useState } from 'react';
import { UpdateProfilePic } from '../APIs/api';

import { useAuth } from './auth';
import { useToast } from './toast';
import { profilePicUrl } from '../../helpers/data';
import profile from '../../assets/profile.svg';

function Upload_Profile_Pic() {
  const { alert } = useToast();
  const { user, getLoggedInUser } = useAuth();

  const [logo, setLogo] = useState(null);
  const [showLogo, setShowLogo] = useState([]);

  const onSelectLogo = (event) => {
    const selectedFiles = event.target.files;
    setLogo(selectedFiles[0]);
    setShowLogo(URL.createObjectURL(selectedFiles[0]));

    // FOR BUG IN CHROME
    event.target.value = '';
  };

  function deleteLogo(image, e) {
    e.preventDefault();
    setLogo(null);
    URL.revokeObjectURL(image);
    setShowLogo([]);
  }

  async function handleImage(e) {
    e.preventDefault();

    const myForm = new FormData();
    myForm.append('profile', logo);
    const res = await UpdateProfilePic(myForm);
    // const res = {}
    if (res.success) {
      getLoggedInUser();
      setLogo(null);
      return alert(res.message, res.success);
    } else return alert(res.message, res.success);
  }

  return (
    <>
      <form>
        <div className="profile_picture mb-4">
          <div
            className={`profile-image image ${
              user.profilepic && user.profilepic != '' ? 'p-0' : 'pt-2'
            }`}
          >
            {showLogo && showLogo != '' ? (
              <img src={showLogo} alt="logo 1" className="img-fluid" />
            ) : user.profilepic && user.profilepic != '' ? (
              <img
                src={`${profilePicUrl}/${user.profilepic}`}
                alt="logo 3"
                className="img-fluid"
              />
            ) : (
              <img src={profile} alt="logo 4" className="img-fluid" />
            )}
          </div>

          <label className="mb-0">
            <input
              accept=".jpg,.png,.jpeg,.gif"
              type="file"
              name=""
              className="upload_image_input"
              id=""
              style={{ display: 'none' }}
              onChange={onSelectLogo}
            />
            {/* <div className="overlay"> */}

            <div className="d-flex jc-center ai-center text-center">
              {!user.profilepic || user.profilepic == ''
                ? (typeof logo == 'undefined' || logo === null) && (
                    <div
                      className="upload_image_btn ml-2"
                      style={{
                        color: '#525f7f',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        display: 'inline-block',
                        marginBottom: '0.5rem',
                        cursor: 'pointer',
                      }}
                    >
                      Upload
                    </div>
                  )
                : (typeof logo == 'undefined' || logo === null) && (
                    <div className="icon">
                      <i className="fas fa-pen"></i>
                    </div>
                  )}

              {typeof logo !== 'undefined' && logo !== null && (
                <>
                  <div className="icon d-flex jc-center">
                    <div onClick={(e) => deleteLogo(logo.image, e)}>
                      <i className="fas fa-trash"></i>
                    </div>
                    <div onClick={(e) => handleImage(e)}>
                      <i className="fas fa-check"></i>
                    </div>
                  </div>
                </>
              )}
            </div>
          </label>
        </div>
      </form>
    </>
  );
}

export default Upload_Profile_Pic;
