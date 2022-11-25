import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/logo.svg";
import { useResponsive } from "../../hooks/useResponsive";
import LogoFooter from "../../assets/logo-footer.svg";
import TelegramIcon from "../../assets/telegram-icon.svg";
import Wahtsupcon from "../../assets/whatsup-icon.svg";
import BurgerIcon from "../../assets/burger-icon.svg";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import style from "./Header.module.css";


const drawerWidth = 240;
const navItems = [
  { name: "Home", to: "toHome" },
  { name: "How to rent", to: "toSimpleSteps", offset: -100 },
  { name: "About us", to: "toAboutUs" },
  { name: "Contac", to: "toContact", offset: -670 },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img style={{ margin: "16px 0" }} src={LogoFooter} alt={"rent auto"} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center", justifyContent: "center", padding: "16px" }}>
              <Link
                onClick={handleDrawerToggle}
                className={style.colorLink}
                style={{ fontSize: "18px", alignItems: "center" }}
                to={item.to}
                activeClass={style.active}
                spy
                smooth={true}
                offset={item.offset}
              >
                {item.name}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ justifyContent: "center", marginTop: "30px" }}>
          <Box display={"flex"} gap={"32px"}>
            <Link to={"https://google.com"}>
              <img src={TelegramIcon} alt="telegram" />
            </Link>
            <Link to={"https://google.com"}>
              <img src={Wahtsupcon} alt="whatsup" />
            </Link>
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box component={"header"} id={"toHome"}>
      <AppBar
        component="nav"
        position={"relative"}
        sx={
          {
            background: "transparent",
            boxShadow: "none",
            height: isMobile ? "54px" : "104px",
            justifyContent: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }
        }>
        <Toolbar sx={{ justifyContent: { sm: "center", xs: "end" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={
              {
                ml: 2,
                mt: 4,
                display: { sm: "none" },
                position: "fixed",
                zIndex: 100,
                border: "1px solid transparent",
                borderRadius: "50%",
                background: "rgba(36, 36, 36, 0.2)",
                width: "56px",
                height: "56px",
              }}
          >
            <img src={BurgerIcon} alt={"burger"} style={{ width: "24px" }} />
          </IconButton>
          <Box className="nav-links" alignItems={"center"} justifyContent={"space-between"} width={"100%"}
               maxWidth={"790px"}
               sx={{ display: { xs: "none", sm: "flex" } }}>
            <Link
              className="cursor"
              style={{ fontSize: "18px" }}
              to={"toHome"}
              activeClass={style.active}
              spy
              smooth={true}
            >
              Home
            </Link>
            <Link
              className="cursor"
              style={{ fontSize: "18px" }}
              to={"toSimpleSteps"}
              activeClass={style.active}
              spy
              smooth={true}
              offset={-100}
            >
              How to rent
            </Link>
            <img src={Logo} alt={"rent auto"} />
            <Link
              className="cursor"
              style={{ fontSize: "18px" }}
              to={"toAboutUs"}
              activeClass={style.active}
              spy
              smooth={true}
            >
              About us
            </Link>
            <Link
              className="cursor"
              style={{ fontSize: "18px" }}
              to={"toContact"}
              activeClass={style.active}
              spy
              smooth={true}
            >
              Contact
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor={"right"}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, background: "#242424" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
