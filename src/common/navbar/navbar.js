import React, { Component } from 'react';
import { Grid, Box,Typography, Link } from '@mui/material';
import "../../common/navbar/navbar.css"

class navbar extends Component {
    render() {
        return (
            <div>
                 <Grid style={{ background: "#005555", display: "flex", justifyContent: "space-evenly", alignItems: "center", width: "100%" }}>
                    <Box>
                        {/* <img src={LOGO} /> */}
                        <Typography style={{color:"white"}}>hello</Typography>
                    </Box>
                    <Box>
                        <ul className='main-list'>


                            
                               
                                    
                                    <Link style={{ textDecoration: "none" }} className='tab-act' to="/Dashboard">
                                    <span><img src={''} style={{marginBottom:"-6px"}} /></span>
                                   <span> Dashboard </span>
                                   </Link>
                               
                            <Link style={{ textDecoration: "none" }} className='tab-act' to="/Spacemain">
                               
                                    <span><img src={''} style={{marginBottom:"-6px"}} /></span>
                                    <span>Spaces</span>
                                   
                            </Link>
                            
                            <Link style={{ textDecoration: "none" }} className='tab-act' to="/user">
                               
                                    <span><img src={''} style={{marginBottom:"-6px"}} /></span>
                                    <span>Users</span>
                                
                            </Link>



                        
                        </ul>


                    </Box>
                    <Box>
                        {/* <img src={Profilimg} /> */}
                        <Typography>Contact</Typography>

                    </Box>
                </Grid>
            </div>
        );
    }
}

export default navbar;