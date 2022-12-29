import { CircularProgress, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useAsyncCallback } from "react-async-hook";
import { getUser } from "../../api";
import image from "../../assets/spider.jpg";
import { ErrorDialog } from "../common/ErrorDialog";

interface UserSectionProps {
  selectedId: string;
}
export default function UserSection({ selectedId }: UserSectionProps) {
  const getUserCallback = useAsyncCallback(getUser);

  useEffect(() => {
    getUserCallback.execute(selectedId);
  }, [selectedId]);
  return (
    <Card sx={{ maxWidth: 345 }} data-testid="UserSectionCard">
      <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
      {getUserCallback.loading ? (
        <Grid container>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Grid>
        </Grid>
      ) : (
        <>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {getUserCallback.result?.name} {getUserCallback.result?.username}
            </Typography>

            <Typography gutterBottom variant="h6" component="div">
              Company
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="text.secondary"
            >
              {getUserCallback.result?.company.name ?? ""}
            </Typography>

            <Typography gutterBottom variant="h6" component="div">
              Address
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${getUserCallback.result?.address.street ?? ""}, ${
                getUserCallback.result?.address.suite ?? ""
              }, ${getUserCallback.result?.address.city ?? ""},${
                getUserCallback.result?.address.zipcode ?? ""
              }`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              target="_blank"
              href={`https://maps.google.com/maps?q=${getUserCallback.result?.address.geo.lat},${getUserCallback.result?.address.geo.lng}`}
            >
              Click here to see the geo location
            </Button>
          </CardActions>
        </>
      )}
      <ErrorDialog
        error={getUserCallback.error}
        onClose={getUserCallback.reset}
        title="Could not get the user info"
      />
    </Card>
  );
}
