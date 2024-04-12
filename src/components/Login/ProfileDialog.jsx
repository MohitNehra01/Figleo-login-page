import { ArrowBack } from "@mui/icons-material";
import React, { useContext, useEffect } from "react";
import { Box, Drawer, Typography, styled } from "@mui/material";
import ProfileDetail from "../Profile/ProfileDetail";


const Header = styled (Box)`
     background: blue;
     height: 60px;
     width: 100%;
     color: #ffffff;
     display: flex;
    
    
     
     & > svg , &  p{
        margin-top: auto;
        
        font-weight: 700;
        margin-bottom: 10px;
        padding-left: 10px
     }


`

const Component = styled(Box)`
       background: #ededed;
       height: 85%;
`
const Text = styled(Typography)`
   font-size:18px;
`

const drawerStyle = {
    right: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'

}

function ProfileDialog({openProfile , setOpenProfile}) {
   
  return (
    <>
  <Drawer
      open={openProfile}
      onClose={() => setOpenProfile(false)}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1300 }}
      anchor={'right'}
    >  

      <Header>
        <ArrowBack onClick = {()=> {setOpenProfile(false)}} style={{fontSize:"30px"}}/>
        <Text>Profile</Text>
      </Header>

      <Component>
        <ProfileDetail  />
      </Component>
    </Drawer>
    
    </>
  )
}

export default ProfileDialog