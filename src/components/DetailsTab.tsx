// interface

import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import { Comments } from "./Comments";
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

  if (selectedIds.length === 0) {
    return <PleaseSelectOne value={detailTab === "detail" ? "user" : "post"} />;
  }
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={detailTab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Details" value="detail" />
            <Tab label="Comments" value="comment" />
          </TabList>
        </Box>
        <FullWidthTabPanel value="detail">
          <Comments />
        </FullWidthTabPanel>
        <FullWidthTabPanel value="comment">
          <Comments />
        </FullWidthTabPanel>
      </TabContext>
    </Box>
  );
}
