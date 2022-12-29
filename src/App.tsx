import { TabContext } from "@mui/lab";
import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { DetailsTab } from "./components/DetailsTab";
import { FullWidthTabPanel } from "./components/FullWidthTabPanel";
import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { Users } from "./components/Users";
function App() {
  const [display, setDisplay] = useState("user");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  function handleChangeDisplay(
    _event: React.MouseEvent<HTMLElement>,
    value: string | null
  ) {
    if (value !== null) {
      setDisplay(value);
    }
  }

  return (
    <Container maxWidth="xl">
      <Header onChangeDisplay={handleChangeDisplay} value={display} />
      <TabContext value={display}>
        <Grid container>
          <Grid item xs={12}>
            <FullWidthTabPanel value="user">
              <Users />
            </FullWidthTabPanel>
          </Grid>
          <Grid item xs={12}>
            <FullWidthTabPanel value="post">
              <Posts />
            </FullWidthTabPanel>
          </Grid>
        </Grid>
      </TabContext>
      <Grid container>
        <Grid item xs={12}>
          <DetailsTab selectedIds={selectedIds} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
