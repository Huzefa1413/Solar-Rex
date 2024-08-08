import { useState } from 'react';
import { UpdateProfilePic } from '../APIs/api';
import { useAuth } from './auth';
import { useToast } from './toast';
import { profilePicUrl } from '../../helpers/data';
import profile from '../../assets/profile.svg';

function UploadProfilePic() {
  const { alert } = useToast();
  const { user, getLoggedInUser } = useAuth();

  const [logo, setLogo] = useState(null);
  const [showLogo, setShowLogo] = useState(
    user.profilepic && user.profilepic !== ''
      ? `${profilePicUrl}/${user.profilepic}`
      : profile
  );

  const onSelectLogo = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setLogo(selectedFile);
      setShowLogo(URL.createObjectURL(selectedFile));
      // FOR BUG IN CHROME
      event.target.value = '';
    }
  };

  const deleteLogo = (e) => {
    e.preventDefault();
    if (logo) {
      URL.revokeObjectURL(showLogo);
    }
    setLogo(null);
    setShowLogo(
      user.profilepic && user.profilepic !== ''
        ? `${profilePicUrl}/${user.profilepic}`
        : profile
    );
  };

  const handleImage = async (e) => {
    e.preventDefault();
    if (!logo) {
      alert('Please upload an image first.', false);
      return;
    }

    const formData = new FormData();
    formData.append('profile', logo);

    try {
      const res = await UpdateProfilePic(formData);
      if (res.success) {
        getLoggedInUser();
        setLogo(null);
        setShowLogo(
          user.profilepic && user.profilepic !== ''
            ? `${profilePicUrl}/${user.profilepic}`
            : profile
        );
        alert(res.message, true);
      } else {
        alert(res.message, false);
      }
    } catch (error) {
      alert('An error occurred while uploading the image.', false);
      console.error('Image upload error:', error);
    }
  };

  return (
    <form>
      <div className="profile_picture mb-4">
        <div
          className={`profile-image image ${user.profilepic ? 'p-0' : 'pt-2'}`}
        >
          <img src={showLogo} alt="Profile" className="img-fluid" />
        </div>

        <label className="mb-0">
          <input
            accept=".jpg,.png,.jpeg,.gif"
            type="file"
            className="upload_image_input"
            style={{ display: 'none' }}
            onChange={onSelectLogo}
          />
          <div className="d-flex jc-center ai-center text-center">
            {!logo && (
              <div
                className="upload_image_btn ml-2"
                style={{
                  color: '#525f7f',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                  cursor: 'pointer',
                  gap: '5px',
                }}
              >
                <i className="fas fa-pen"></i>
                Upload New Image
              </div>
            )}

            {logo && (
              <div className="icon d-flex jc-center">
                <div onClick={deleteLogo} style={{ cursor: 'pointer' }}>
                  <i className="fas fa-trash"></i>
                </div>
                <div onClick={handleImage} style={{ cursor: 'pointer' }}>
                  <i className="fas fa-check"></i>
                </div>
              </div>
            )}
          </div>
        </label>
      </div>
    </form>
  );
}

export default UploadProfilePic;
