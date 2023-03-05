import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyClubs from "./pages/MyClubs";
import Members from "./pages/Members";
// import { createTheme } from "@mui/material";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/MyClubs" element={<MyClubs />} />
                <Route exact path="/Members" element={<Members />} />
            </Routes>
        </Router>
    );
}

// const theme = createTheme({
//     palette: {
//         primary: {
//             light: "#88CBED",
//             main: "#1F87BC",
//             contrastText: "#FFFFFF",
//         },
//         secondary: {
//             light: "#BCBCBC",
//             main: "#7F7F7F",
//             contrastText: "#FFFFFF",
//         },

//         success: {
//             light: "#A5DEB8",
//             main: "#70C18C",
//             contrastText: "#FFFFFF",
//         },
//         danger: {
//             light: "#EBB4B4",
//             main: "#EB8C8C",
//             contrastText: "#FFFFFF",
//         },
//         warning: {
//             light: "#F6DEAF",
//             main: "#F4CC7E",
//         },
//         info: {
//             light: "#A7E8F1",
//             main: "#57B9C6",
//             contrastText: "#FFFFFF",
//         },
//         contrastThreshold: 3,
//         tonalOffset: 0.2,
//     },
//     danger: {
//       light: '#EBB4B4',
//       main: '#EE7171',
//       contrastText: '#FFFFFF',
//     },
//     warning: {
//       light: '#F6DEAF',
//       main: '#F4CC7E',
//     },
//     info: {
//       light: '#A7E8F1',
//       main: '#57B9C6',
//       contrastText: '#FFFFFF',
//     },
//     contrastThreshold: 3,
//     tonalOffset: 0.2,
//   },
// );

export default App;
