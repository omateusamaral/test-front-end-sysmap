import { TabContext } from "@mui/lab";
import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useAsyncCallback } from "react-async-hook";
import { listPosts, listUsers } from "./api";
import { DetailsTab } from "./components/common/DetailsTab";
import { ErrorDialog } from "./components/common/ErrorDialog";
import { FullWidthTabPanel } from "./components/common/FullWidthTabPanel";
import { Header } from "./components/common/Header";
import { PostTable } from "./components/posts/PostTable";
import { UserTableProps } from "./components/users/UserTable";
function App() {
  const [display, setDisplay] = useState("user");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const listUsersCallback = useAsyncCallback(listUsers);
  const listPostsCallback = useAsyncCallback(listPosts);

  function handleChangeDisplay(
    _event: React.MouseEvent<HTMLElement>,
    value: string | null
  ) {
    if (value !== null) {
      setDisplay(value);
      setSelectedIds([]);
    }
  }

  useEffect(() => {
    if (display === "user") {
      listUsersCallback.execute();
    } else {
      listPostsCallback.execute();
    }
  }, [display]);

  return (
    <Container maxWidth="xl">
      <Header onChangeDisplay={handleChangeDisplay} value={display} />
      <TabContext value={display}>
        <Grid container>
          <Grid item xs={12}>
            <FullWidthTabPanel value="user">
              <UserTableProps
                data={listUsersCallback.result}
                loading={listUsersCallback.loading}
                setSelectedIds={setSelectedIds}
              />
            </FullWidthTabPanel>
          </Grid>
          <Grid item xs={12}>
            <FullWidthTabPanel value="post">
              <PostTable
                data={listPostsCallback.result}
                loading={listPostsCallback.loading}
                setSelectedIds={setSelectedIds}
              />
            </FullWidthTabPanel>
          </Grid>
        </Grid>
      </TabContext>
      <Grid container>
        <Grid item xs={12}>
          <DetailsTab selectedIds={selectedIds} currentTab={display} />
        </Grid>
      </Grid>
      <ErrorDialog
        error={listUsersCallback.error}
        onClose={listUsersCallback.reset}
        title="Could not list the users"
      />
      <ErrorDialog
        error={listPostsCallback.error}
        onClose={listPostsCallback.reset}
        title="Could not list the posts"
      />
    </Container>
  );
}

export default App;
