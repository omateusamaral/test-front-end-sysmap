import { TabPanel, TabPanelProps } from "@mui/lab";

interface FullWidthTabPanelProps {
  props?: TabPanelProps;
  value: string;
  children: React.ReactNode;
}
export function FullWidthTabPanel({
  value,
  props,
  children,
}: FullWidthTabPanelProps) {
  return (
    <TabPanel
      {...props}
      sx={{
        paddingX: 0,
      }}
      value={value}
    >
      {children}
    </TabPanel>
  );
}
