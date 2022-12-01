import React from "react";

const Notes = ({allnotes,onDelete}) => {
    return (
        <>
            <div className="container my-5">
                <div className="text-center display-3">All Notes</div>
                <div className="display-6 my-5 "> {
                    allnotes.map((e) => {
                        return (
                            <div key={
                                e.sno
                            }>
                                <div className="card">
                            <div className="card-body">
                              <h5 className="card-title"> {e.title}</h5>
                              <p className="card-text"> {e.desc}</p>
                                <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(e)}}>Delete</button>
                            </div>

                            </div></div>
                          
                        )
                    })
                } </div>
            </div>

        </>
    );
}

export default Notes;
