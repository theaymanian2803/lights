import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";

export const navBarStyle: BoxProps = {
  pos: "fixed",
  w: "100%",
  bgColor: "white",
  mb: "1rem",
  zIndex: 10,
};

export const deskTopStyle: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2rem ",
  py: "1rem",
  borderBottomWidth: "1px",
  borderColor: "gray.200",
};

export const logoSectionStyle: StackProps = {
  direction: "row",
  gap: "2rem",
  flex: 1,
  alignItems: "center",
};
export const cartSectionStyle: StackProps = {
  direction: "row",
  spacing: " 2rem",
};
