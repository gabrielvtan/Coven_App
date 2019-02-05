import React, {Component} from 'react';
import './PostEditor.css';

class PostEditor extends Component {
    state = {
        newPostBody: '',
        }

    onPostEditorInputHandler = this.onPostEditorInputHandler.bind(this);
    createPost = this.createPost.bind(this);
      
    onPostEditorInputHandler (event) {
        this.setState({
            newPostBody: event.target.value
        });
    }

    createPost () {
        this.props.addPost(this.state.newPostBody);
        this.setState({
            newPostBody: '',
        });
    }

    render () {
        return (
            <div className="panel panel-default post-editor">
                <div className="panel-body">
                    <textarea 
                        className="form-control post-editor-input"
                        value={this.state.newPostBody}
                        onChange={this.onPostEditorInputHandler}/>
                    <button
                        className="btn btn-success post-editor-button"
                        onClick={this.createPost}>Post</button>    
                </div>
            </div>
        )
    }
}

export default PostEditor;