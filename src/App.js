import React, { Component } from 'react';
import spoken from "../node_modules/spoken/build/spoken";
import Note from './Components/Note';
import logo from './logo.svg';
import './App.css';
class App extends Component {

  state = {
    value: '',
    notes: [],
    support: true
  }

  onChangeHandler = (event) => {
    this.setState({ value: event.target.value })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    spoken.say(this.state.value);
    this.setState({
      value: '',
      notes: [...this.state.notes, this.state.value]
    })
  }

  deleteNotesHandler = (noteIndex) => {
    let notes = [...this.state.notes];
    notes.splice(noteIndex, 1);
    this.setState({ notes: notes })
  }

  speakNotesHandler = () => {
    spoken.say(this.state.notes)
  }

  render() {
    return (
      <div>
        <div className="App my-5 pt-5">
          <div className="card col-sm-4 m-auto h-100">
            <img src={logo} className="App-logo card-img-top" alt="logo" />

            <div className="card-body">
              <form onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                  <div className="row no-gutters">
                    <div className="col-sm-11 d-flex flex-row">
                      <input type="text" placeholder="add note" value={this.state.value} onChange={this.onChangeHandler} className="form-control" />
                      <button className="btn btn-danger btn-sm ml-2" onClick={this.onSubmitHandler}>
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <Note
                    notes={this.state.notes}
                    delete={this.deleteNotesHandler}
                    speak={this.speakNotesHandler}
                  />
                </div>
              </form>
            </div>


          </div>
        </div>
      </div>

    );
  }
}

export default App;
