import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';

class App extends Component {
   state = {
      body: '',
   };

   bodyChangeHandler = e => {
      this.setState({ body: e });
   };

   render() {
      return (
         <div className="text-editor" style={{ width: '80%' }}>
            <label htmlFor="body">Section Body</label>
            <ReactQuill
               label="Section Body"
               modules={App.modules}
               formats={App.formats}
               id="body"
               name="body"
               onChange={this.bodyChangeHandler}
                value={this.state.body}
            />

            <br />
            <br />
            <br />
            <br />
            {renderHTML(this.state.body)}
         </div>
      );
   }
}

App.modules = {
   toolbar: [
      [{ header: '1' }, { header: '2' }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ color: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
   ],
};

App.formats = [
   'header',
   'font',
   'size',
   'bold',
   'italic',
   'underline',
   'strike',
   'blockquote',
   'list',
   'bullet',
   'color',
];

export default App;
