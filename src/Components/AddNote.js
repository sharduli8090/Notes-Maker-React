import React from "react";
const AddNote = () => {
    return (
        <>
            <form className="container my-5">
                <p className="display-3">
                    Add a Note
                </p>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" autoComplete='off'/>
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" id="desc" autoComplete='off'/>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </>
    );
}

export default AddNote;
