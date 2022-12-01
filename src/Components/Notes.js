import React from "react";

const Notes = (props) => {
    return (
        <>
            <div className="container my-5">
                <p className="text-center display-3">All Notes</p>
                <p className="display-6 my-5 "> {
                    props.allnotes.map((e) => {
                        return (
                            <div key={
                                e.sno
                            }>
                                
                                <div className="my-2">
                                    {e.sno} <span> - </span>
                                {e.title}
                                </div>
                                <div className="my-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {e.desc}
                                </div> 
                            </div>
                        )
                    })
                } </p>
            </div>

        </>
    );
}

export default Notes;
