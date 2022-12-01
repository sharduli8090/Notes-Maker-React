import React from "react";
import AddNote from "./Components/AddNote";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Notes from "./Components/Notes";

function App() {
    let allnotes = [
        {
            sno: 1,
            title: "Note1",
            desc: "Note Description will be added here"
        }, {
            sno: 2,
            title: "Note2",
            desc: "Note Description will be added here"
        }, {
            sno: 3,
            title: "Note3",
            desc: "Note Description will be added here"
        }, {
            sno: 4,
            title: "Note4",
            desc: "Note Description will be added here"
        }
    ];
    return (
        <>
            <Header/>
            <AddNote/>
            <Notes allnotes={allnotes}/>
            <Footer/>
        </>
    );
}

export default App;
