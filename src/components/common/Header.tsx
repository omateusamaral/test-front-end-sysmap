import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import {
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

interface HeaderProps {
  onChangeDisplay: (
    event: React.MouseEvent<HTMLElement>,
    value: string | null
  ) => void;

  value: string;
}
export function Header({ onChangeDisplay, value }: HeaderProps) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" fontWeight="bold">
          SysMap
        </Typography>
      </Grid>
      <Grid item xs={6} mt={4}>
        <ToggleButtonGroup value={value} exclusive onChange={onChangeDisplay}>
          <ToggleButton value="user">
            <PersonRoundedIcon />
          </ToggleButton>

          <ToggleButton value="post">
            <ChatRoundedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}