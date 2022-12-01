import React, { useEffect,useState } from "react";
import AddNote from "./Components/AddNote";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
    let initNote;
    if( localStorage.getItem("notes") === null){
      initNote = [];
    } 
    else{
      initNote=JSON.parse(localStorage.getItem("notes"));
    }


    const [notes, setNotes] = useState(initNote);
    useEffect(()=>{
      localStorage.setItem("notes",JSON.stringify(notes));
    },[notes])



    const onDelete = (note) => {
        setNotes(notes.filter((e) => {
            return e !== note;
        }));
    }

    const addnote = (title,desc) =>{
      let sno;
      if(notes.length==0){
        sno=1;
      }else{
        sno= notes[notes.length-1].sno+1;
      }
      let myNote = {
        sno:sno,
        title:title,
        desc:desc
      }
      setNotes([...notes,myNote]);

    }


    return (




                <> 
                <Router>
                  <Header  /> 
                  <Routes>
                  <Route exact path='/' element= {<><Home /></>}/>
<Route exact path='/about' element= {<><About /></>}/>
<Route exact path='/addnote' element= {<><AddNote addnote={addnote}/></>}/>
<Route exact path='/viewallnotes' element= {<><Notes allnotes={notes} onDelete={onDelete}/></>}/>
                    </Routes> 
                  <Footer />
                </Router>
                </>
    );
}

export default App;
