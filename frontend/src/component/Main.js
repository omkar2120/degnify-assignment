import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Menu, Select, MenuItem, InputLabel } from "@mui/material";
import Swal from "sweetalert2";


function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  
  const theme = useTheme();


const [data , setData] = React.useState ({
              fname:"",
              lastname: "",
              mno: "",
              email: "",
              age: "",
              address: "",
})
const getData = (e) => {
    const {name,value} = e.target;
    setData({ ...data,[name]:value});
}


const [bdata ,setBdata] = React.useState({
    bname:"",
    bcname:"",
    gstno:"",
    baddress:"",

})

const sendBdata = (e) => {
    const {name,value}= e.target;
    setBdata({ ...bdata,[name]:value})
}

const [ldata, setLdata] = React.useState({
    accountno:"",
    accountname:"",
    interest:""

})
const sendLdata = (e) => {
    const{name,value}=e.target;
    sendLdata({...ldata,[name]:value})
}
  const [value, setValue] = React.useState(0);

  const handlesChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handlesChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Personal Details" {...a11yProps(0)} />
          <Tab label="Business Details" {...a11yProps(1)} />
          <Tab label="Loan Details" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4">
              Personal Details
            </Typography>
            <Box component="form" sx={{ mt: 1, width: "50%" }}>
             <TextField
                 margin="normal"
                 required
                 fullWidth
                 name="name"
                 label="Firstname"
                 type="name"
                 value={data.fname}
                 onChange={getData}

             />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastname"
                label="LastName"
                type="name"
                id="name"
                autoComplete="current-name"
                onChange={getData}
                value={data.lastname}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="mno"
                label="Mobile No"
                type="number"
                id="number"
                autoComplete="off"
                onChange={getData}
                value={data.mno}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Id"
                type="email"
                id="email"
                autoComplete="current-number"
                onChange={getData}
                value={data.email}
              />
              <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={data.age}
                onChange={getData}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>0 - 18</MenuItem>
                <MenuItem value={20}>18 - 35</MenuItem>
                <MenuItem value={30}>35 - Above</MenuItem>
              </Select>
              <TextField
                margin="normal"
                required
                fullWidth
                name="address"
                label="Enter your Address"
                type="name"
                id="name"
                autoComplete="current-name"
                  onChange={getData}
                  value={data.address}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                  onSubmit={getData}
                sx={{ mt: 3, mb: 2 }}
              >
                Done
              </Button>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4">
              Business  Details
            </Typography>
            <Box component="form" sx={{ mt: 1, width: "50%" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Company Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={bdata.bname}
                onChange={sendBdata}
              />
            
              <TextField
                margin="normal"
                required
                fullWidth
                name="mno"
                label="Account Holder Name"
                type="name"
                id="number"
                autoComplete="off"
                value={bdata.bcname}
                onChange={sendBdata}
               
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="mno"
                label="GST number"
                type="number"
                id="number"
                autoComplete="off"
                value={bdata.gstno}
                onChange={sendBdata}
               
              />

               
              <TextField
                margin="normal"
                required
                fullWidth
                name="address"
                label="Business Address"
                type="text"
                id="name"
                autoComplete="current-address"
                 
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                  onSubmit={sendBdata}
                sx={{ mt: 3, mb: 2 }}
              >
                Done
              </Button>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
       <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4">
              Loan Application
            </Typography>
            <Box component="form" sx={{ mt: 1, width: "50%" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Account Number"
                name="number"
                autoComplete="off"
                autoFocus
                
              />
            
              <TextField
                margin="normal"
                required
                fullWidth
                name="details"
                label="Account Holder Name"
                type="name"
                id="number"
                autoComplete="off"
               
              />
               
              <TextField
                margin="normal"
                required
                fullWidth
                name="adderss"
                label="Interest rate"
                type="number"
                id="name"
                autoComplete="current-name"
                 
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                  onSubmit={sendLdata}
                sx={{ mt: 3, mb: 2 }}
              >
                Done
              </Button>
            </Box>
          </Box>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
