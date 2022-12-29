import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import { CommentsSection } from "../posts/CommentsSection";
import UserExtraInformation from "../users/UserExtraInfomartion";
import { FullWidthTabPanel } from "./FullWidthTabPanel";
import { PleaseSelectOne } from "./PleaseSelectOne";
export interface DetailsTabProps {
  selectedIds: string[];
  currentTab: string;
}
export function DetailsTab({ selectedIds, currentTab }: DetailsTabProps) {
  const [detailTab, setDetailTab] = useState("detail");
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setDetailTab(newValue);
  };

  useEffect(() => {
    setDetailTab(currentTab === "user" ? "detail" : "comment");
  }, [currentTab]);
  if (selectedIds.length === 0 || selectedIds.length > 1) {
    return <PleaseSelectOne />;
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={detailTab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab
              label="Details"
              value="detail"
              disabled={currentTab === "post"}
            />
            <Tab
              label="Comments"
              value="comment"
              disabled={currentTab === "user"}
            />
          </TabList>
        </Box>
        <FullWidthTabPanel value="detail">
          <UserExtraInformation selectedId={selectedIds[0]} />
        </FullWidthTabPanel>
        <FullWidthTabPanel value="comment">
          <CommentsSection selectedId={selectedIds[0]} />
        </FullWidthTabPanel>
      </TabContext>
    </Box>
  );
}
