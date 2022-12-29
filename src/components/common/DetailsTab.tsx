// interface

import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { Comments } from "../posts/Comments";
import UserExtraInformation from "../users/UserExtraInfomartion";
import { FullWidthTabPanel } from "./FullWidthTabPanel";
import { PleaseSelectOne } from "./PleaseSelectOne";
export interface DetailsTabProps {
  selectedIds: string[];
}
export function DetailsTab({ selectedIds }: DetailsTabProps) {
  const [detailTab, setDetailTab] = useState("detail");
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setDetailTab(newValue);
  };

  if (selectedIds.length === 0 || selectedIds.length > 1) {
    return <PleaseSelectOne value={detailTab === "detail" ? "user" : "post"} />;
  }
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={detailTab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Details" value="detail" />
            <Tab label="Comments" value="comment" />
          </TabList>
        </Box>
        <FullWidthTabPanel value="detail">
          <UserExtraInformation
            data={{
              id: 1,
              name: "Leanne Graham",
              username: "Bret",
              email: "Sincere@april.biz",
              address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                  lat: "-37.3159",
                  lng: "81.1496",
                },
              },
              phone: "1-770-736-8031 x56442",
              website: "hildegard.org",
              company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets",
              },
            }}
          />
        </FullWidthTabPanel>
        <FullWidthTabPanel value="comment">
          <Comments />
        </FullWidthTabPanel>
      </TabContext>
    </Box>
  );
}
