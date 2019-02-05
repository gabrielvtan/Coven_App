import React, {Component} from 'react';
import Post from '../Post/Post';
import PostEditor from '../PostEditor/PostEditor';

class ThreadDisplay extends Component {
    state = {
        posts: [],
      }

    addPost = this.addPost.bind(this);

    addPost (newPostBody) {
        const newState = Object.assign({}, this.state);
        newState.posts.push(newPostBody);
        this.setState(newState);
    }
    
    render () {
        return (
            <div>
                <PostEditor addPost={this.addPost}/>
                {this.state.posts.map(postBody=> {
                    return (
                        <Post children={postBody}/>
                    )
                })
            }
            </div>
        )
    }
}

export default ThreadDisplay;