import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import About from "./pages/About/About";


const App = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    window.location ="./pages/About/About.js";
    // setAnchorEl(event.currentTarget);
  };

 
  
  return (
 
    <div
      style={{
        marginLeft: "40%",
      }}
    >
      <h2>How to use Menu Component in ReactJS?</h2>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}

      >
        Open Menu List
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClick}>My Account</MenuItem>
        {/* <MenuItem onClick={handleClick}>Settings</MenuItem> */}
        {/* <MenuItem onClick={handleClick}>Profile</MenuItem> */}
        {/* <MenuItem onClick={handleClick}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
};
  
export default App;
