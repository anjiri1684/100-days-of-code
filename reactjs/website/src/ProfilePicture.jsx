import ProfilePic from "./assets/vin.jpg";

const ProfilePicture = () => {
  const handleImageClick = (e) => {
    console.log("Image clicked");
    e.target.style.display = "none";
  };

  return (
    <div>
      <img
        width={300}
        onClick={(e) => handleImageClick(e)}
        src={ProfilePic}
        alt="Profile Picture"
      />
    </div>
  );
};

export default ProfilePicture;
