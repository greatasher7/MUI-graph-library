import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Container = styled(Grid)`
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Header = () => {
  return (
    <Container container sx={{ paddingTop: "10px" }}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontSize: "40px",
              }}
            >
              System Monitor
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                fontSize: "40px",
                textAlign: "right",
              }}
            >
              Netmon
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
