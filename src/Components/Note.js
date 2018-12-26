import React from "react";

const deleted = {
    marginLeft: "200px"
}

const note = (props) => {
    return (
        <div>
            <ul className="list-unstyled text-left pl-5 mt-3 ml-4">
                {
                    props.notes.map((note, index) => {
                        return (
                            <li key={index} className="my-2">
                                <input type="checkbox" className="mr-2" />
                                {note}
                                <span style={deleted} className="btn btn-danger btn-sm" onClick={props.delete.bind(index)}>
                                    delete
                                </span>
                            </li>
                        )
                    })
                }
                <span style={deleted} className="btn btn-danger btn-sm mt-4" onClick={props.speak}>
                    say all notes
                </span>
            </ul>
        </div>
    );
}

export default note;