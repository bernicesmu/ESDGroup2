import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyClubs from "./pages/MyClubs";
import Members from "./pages/Members";
import Events from "./pages/Events";
import EventIndiv from "./pages/EventIndiv";
import EventCreate from "./pages/EventCreate";
import MemberCreate from "./pages/MemberCreate";
import Calendar from "./pages/Calendar";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/MyClubs" element={<MyClubs />} />
                <Route exact path="/Members" element={<Members />} />
                <Route exact path="/Events" element={<Events />} />
                <Route exact path="/Event" element={<EventIndiv />} />
                <Route exact path="/EventCreate" element={<EventCreate />} />
                <Route exact path="/MemberCreate" element={<MemberCreate />} />
                <Route exact path="/Calendar" element={<Calendar />} />
            </Routes>
        </Router>
        </ThemeProvider>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            light: "#C69BF3",
            main: "#943AF1",
            contrastText: "#FFFFFF",
        },
        secondary: {
            light: "#FFF2A6",
            main: "#FFE137",
            contrastText: "#000000",
        },

        // bernice: did not edit the below colour palette from my OOP project
        success: {
            light: "#A5DEB8",
            main: "#70C18C",
            contrastText: "#FFFFFF",
        },
        danger: {
            light: "#EBB4B4",
            main: "#EB8C8C",
            contrastText: "#FFFFFF",
        },
        warning: {
            light: "#F6DEAF",
            main: "#F4CC7E",
        },
        info: {
            light: "#A7E8F1",
            main: "#57B9C6",
            contrastText: "#FFFFFF",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
  },
);

export default App;
