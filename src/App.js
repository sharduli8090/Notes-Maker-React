import React from "react";
import AddNote from "./Components/AddNote";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import {useState} from 'react';

function App() {

    const [notes, setNotes] = useState(
      [
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
    ]
    );

    const onDelete = (note)=>{
      console.log("I am ondelete of todo", note);
       setNotes(notes.filter((e)=>{
        return e!==note;
       }) );
       console.log("deleted", note )
    }


    return (
        <>
            <Header/>
            <AddNote/>
            <Notes allnotes={notes} onDelete={onDelete}/>
            <Footer/>
        </>
    );
}

export default App;
