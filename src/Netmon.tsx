import React, { useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Graph from "./Graph";

const NodeContainer = styled(Grid)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 25px;
  width: 100%;
  padding: 0 20px;
  padding-bottom: 15px;
`;

const NodeName = styled(Typography)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const DataContainer = styled(Grid)`
  display: grid;
  row-gap: 15px;
  grid-template-rows: 1fr 1fr 1fr;
  height: calc(100% - 40px);
`;

const DataBox = styled(Grid)``;

const SystemNode = () => {
  // get parents node's width, height
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const div = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return (
    <NodeContainer>
      <NodeName variant="h6">Node 1</NodeName>
      <DataContainer container>
        <DataBox container>
          <Grid item xs={3} sx={{ backgroundColor: "#222222" }}></Grid>
          <Grid
            item
            xs={9}
            sx={{
              backgroundColor: "#222222",
            }}
            ref={div}
          >
            <Graph width={width} height={height} />
          </Grid>
        </DataBox>
        <DataBox container>
          <Grid item xs={3} sx={{ backgroundColor: "#222222" }}></Grid>
          <Grid
            item
            xs={9}
            sx={{
              backgroundColor: "#222222",
            }}
            ref={div}
          >
            <Graph width={width} height={height} />
          </Grid>
        </DataBox>
        <DataBox container>
          <Grid item xs={3} sx={{ backgroundColor: "#222222" }}></Grid>
          <Grid
            item
            xs={9}
            sx={{
              backgroundColor: "#222222",
            }}
            ref={div}
          >
            <Graph width={width} height={height} />
          </Grid>
        </DataBox>
      </DataContainer>
    </NodeContainer>
  );
};

const Container = styled(Box)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: calc(100vh - 70px);
  padding: 20px;
`;

const Netmon = () => {
  return (
    <Grid item sx={{ width: "calc(100vw - 91px)" }}>
      <Header />
      <Container>
        <SystemNode />
        <SystemNode />
        <SystemNode />
        <SystemNode />
        <SystemNode />
        <SystemNode />
      </Container>
    </Grid>
  );
};

export default Netmon;
