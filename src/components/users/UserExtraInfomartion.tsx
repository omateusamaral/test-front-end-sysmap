import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { User } from "../../api";
import image from "../../assets/spider.jpg";

interface UserExtraInformationProps {
  data: User;
}
export default function UserExtraInformation({
  data,
}: UserExtraInformationProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 200 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name} {data.username}
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
          {data.company.name}
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
          Address
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${data.address.street}, ${data.address.suite}, ${data.address.city},${data.address.zipcode}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          target="_blank"
          href={`https://maps.google.com/maps?q=${data.address.geo.lat},${data.address.geo.lng}`}
        >
          Click here to see the geo location
        </Button>
      </CardActions>
    </Card>
  );
}
