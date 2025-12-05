import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, updateUser } from "../Redux/Store";
import api from "../services/axios.config";
import { toast } from "react-toastify";
import '../Styles/profile.css';

const Profile = () => {
  const user = useSelector((state) => state.counter.user); // logged in user from redux
  const dispatch = useDispatch();
  const router = useNavigate();

  // Local state to hold form data
  const [editMode, setEditMode] = useState(false);

  // Initialize form data from user info on component mount or user changes
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
  });

  // Sync form data with user when component mounts or user changes
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.name || "",
        lastName: user.lastName || "",
        dob: user.dob || "",
        gender: user.gender || "",
        email: user.email || "",
        mobile: user.mobile || "",
      });
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      const response = await api.get("/auth/logout");
      if (response.data.success) {
        dispatch(logout());
        toast.success(response.data.message);
        router("/");
      }
    } catch {
      toast.error("Logout failed");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await api.put("/auth/update-profile", formData);

      if (response.data.success) {
        toast.success("Profile updated!");

        console.log("UPDATED USER:", response.data.updatedUser);

        dispatch(login(response.data.updatedUser));

        setEditMode(false);
      }
    } catch (err) {
      toast.error("Error updating profile");
    }
};


  if (!user?.userId) {
    return (
      // <div className="profile-container no-user">
      //   <h2>Please sign in to view your profile</h2>
      //   <button onClick={() => router("/login")} className="signIn">
      //     SIGN IN
      //   </button>
      // </div>
      <div id="alpha">
        <div id="bag">
          <span style={{ marginTop: "20px" }}>Sign in now</span>
                            
            <button onClick={() => router("/login")} id="sign">SIGN IN</button>
          </div>
        </div>
    );
  }

  return (
    <div className="profile-page">
      <nav className="sidebar">
        <h3>Account</h3>
        <ul>
          <li className="active">My Profile</li>
          <li onClick={() => router("/orders")}>My Orders</li>
          <li onClick={() => router("/delivery-addresses")}>Delivery Addresses</li>
          <li onClick={handleLogout} className="logout">Logout</li>
        </ul>
      </nav>

      <main className="profile-main">
        <h2>My Profile</h2>

        <div className="profile-details">
          <div className="section-header">
            <h3>Personal Details</h3>
            <button
              className="edit-btn"
              onClick={() => (editMode ? handleSave() : setEditMode(true))}
            >
              {editMode ? "Save" : "Edit Profile"}
            </button>
          </div>

          <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                disabled={!editMode}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                disabled={!editMode}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Date of Birth
              <input
                type="date"
                name="dob"
                value={formData.dob}
                disabled={!editMode}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Gender
              <select
                name="gender"
                value={formData.gender}
                disabled={!editMode}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled // Usually email is not editable
              />
            </label>

            <label>
              Mobile Number
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                disabled={!editMode}
                onChange={handleInputChange}
              />
            </label>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;









// import React, { useEffect } from "react";
// import '../Styles/cart.css';
// // import add from "../assets/add_.svg";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../Redux/Store";
// import api from "../services/axios.config";
// import { toast } from "react-toastify";


// const Profile = () => {
//     const dispatch = useDispatch()
//     const user = useSelector((state) => state.counter.user);
//     const router = useNavigate();

//     async function Logout() {
//         try {
//             const response = await api.get("/auth/logout");
//             if (response.data.success) {
//                 dispatch(logout());
//                 toast.success(response.data.message);
//                 router("/");
//             }
//         } catch (error) {
//             console.log(error, "do not logout");
//         }
//     }

//     // useEffect(() => {
//     //     if (user?.userId) {
//     //         router("/")
//     //     }
//     // }, [user])

//     return (
//         <div id="cart">
//             <div id="msg">
//                 <div id="message">
//                     {user?.userId ?  (
//                         <div>
//                             <div id="bag">User Profile <br /> <p>Welcome <br />{user?.name} - {user?.role}</p></div>
//                             <button onClick={Logout} id="sign">SIGN OUT</button>
//                         </div>
//                     ) : (
//                         <div id="alpha">
//                             <div id="bag">
//                                 <span style={{ marginTop: "20px" }}>Sign in now</span>
                            
//                             <button onClick={() => router("/login")} id="sign">SIGN IN</button>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//             </div>
//             <div id="hmlink"><span style={{ color: "gray" }}>HM.COM /</span> Profile</div>
//         </div>

//     );
// };

// export default Profile;