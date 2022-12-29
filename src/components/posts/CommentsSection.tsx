import { CircularProgress, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useAsyncCallback } from "react-async-hook";
import { listComments } from "../../api";
import { ErrorDialog } from "../common/ErrorDialog";
interface CommentsSectionProps {
  selectedId: string;
}
export function CommentsSection({ selectedId }: CommentsSectionProps) {
  const listCommentsCallback = useAsyncCallback(listComments);

  React.useEffect(() => {
    listCommentsCallback.execute(selectedId);
  }, [selectedId]);

  return (
    <List
      sx={{
        width: "100%",
        maxHeight: 200,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        "& ul": { padding: 0 },
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          {listCommentsCallback.loading && <CircularProgress />}
          {!listCommentsCallback.loading && listCommentsCallback.error && (
            <Typography variant="body1">error loading section</Typography>
          )}
          {listCommentsCallback.result?.length &&
            listCommentsCallback.result.map((comment) => (
              <ListItem
                alignItems="flex-start"
                sx={{
                  width: `100%`,
                }}
                key={comment.id}
              >
                <ListItemAvatar>
                  <Avatar>{comment.name.substring(0, 1).toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={comment.email}
                  secondary={<React.Fragment>{comment.body}</React.Fragment>}
                />
              </ListItem>
            ))}
        </Grid>
      </Grid>

      <ErrorDialog
        error={listCommentsCallback.error}
        onClose={listCommentsCallback.reset}
        title="Could not list the comments"
      />
    </List>
  );
}
