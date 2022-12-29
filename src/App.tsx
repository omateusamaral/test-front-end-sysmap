import { TabContext } from "@mui/lab";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useAsyncCallback } from "react-async-hook";
import { listUsers } from "./api";
import { DetailsTab } from "./components/common/DetailsTab";
import { ErrorDialog } from "./components/common/ErrorDialog";
import { FullWidthTabPanel } from "./components/common/FullWidthTabPanel";
import { Header } from "./components/common/Header";
import { Posts } from "./components/posts/Posts";
import { Users } from "./components/users/Users";
function App() {
  const [display, setDisplay] = useState("user");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const listUsersCallback = useAsyncCallback(listUsers);
  function handleChangeDisplay(
    _event: React.MouseEvent<HTMLElement>,
    value: string | null
  ) {
    if (value !== null) {
      setDisplay(value);
    }
  }

  useEffect(() => {
    listUsersCallback.execute();
  }, [display === "user"]);

  return (
    <Container maxWidth="xl">
      <Header onChangeDisplay={handleChangeDisplay} value={display} />
      <TabContext value={display}>
        <Grid container>
          <Grid item xs={12}>
            <FullWidthTabPanel value="user">
              <Users
                data={listUsersCallback.result}
                loading={listUsersCallback.loading}
                setSelectedIds={setSelectedIds}
              />
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
      <ErrorDialog
        error={listUsersCallback.error}
        onClose={listUsersCallback.reset}
        title="Could not list the users"
      />
    </Container>
  );
}

export default App;
