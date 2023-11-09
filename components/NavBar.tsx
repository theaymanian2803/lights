import { Box } from "@chakra-ui/react";
import { navBarStyle } from "./style";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";

function NavBar() {
  return (
    <div>
      <DeskNav />
      <MobileNav />
    </div>
  );
}

export default NavBar;
