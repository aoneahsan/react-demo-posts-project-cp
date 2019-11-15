import React, { Component } from 'react';
import './FullPost.css';

import axios from 'axios';

class FullPost extends Component {

    state = {
        newSelectedPost: null
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            axios.get('/posts/' + this.props.match.params.id)
            .then(resultData => {
                this.setState({
                    newSelectedPost: resultData.data
                });
            });
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.postId)
                .then(response => {
                    console.log("Delete Post Request Response = ", response);
                });
    }
        
    render () {
        console.log(this.props.match);
        console.log();
        let post = <p style={{textAlign: 'center', background: 'red', color: 'white', padding: '5px 0'}}><strong>Please select a Post!</strong></p>;
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center', background: 'red', color: 'white', padding: '5px 0'}}><strong>Loading...</strong></p>;
        }
        if (this.state.newSelectedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.newSelectedPost.title}</h1>
                    <p>{this.state.newSelectedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;