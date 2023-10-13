import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {logo} from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: "#000", top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
      <img src={logo} alt="logo"  width={43}/>
    </Link>
    <SearchBar/>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti impedit earum accusamus id voluptatem voluptatibus reiciendis libero sunt, provident in dolorem iure hic minus cumque cupiditate ducimus explicabo ipsam quisquam.
  </Stack>
)

export default Navbar