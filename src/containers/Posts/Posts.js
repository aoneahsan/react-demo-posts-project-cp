import React, {Component} from 'react';
import './Posts.css';

import axios from 'axios';

import {Link} from 'react-router-dom';

import Post from './Post/Post';

class Posts extends Component {
    
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        // console.log("ok");
        axios.get('/posts')
                .then(resultData => {
                    const newPosts = resultData.data.slice(0, 4);
                    const updatedPosts = newPosts.map(post => {
                        return {
                            ...post,
                            author: "Ahsan"
                        };
                    });
                    this.setState({
                        posts: updatedPosts
                    });
                });
    }

    postSelectHandler = (newSelectedPostId) => {
        this.setState({
            selectedPostId: newSelectedPostId
        })
    }

    render() {

        const postsArr = this.state.posts.map(post => {
            return (
                <Link to={'/posts/'+ post.id} key={post.id} >
                    <Post 
                        title={post.title} 
                        author={post.author}
                        clicked={() => {this.postSelectHandler(post.id)}} />
                </Link>
            );
        })
        return (
            <section className="Posts">
                {postsArr}
            </section>
        )
    }
}

export default Posts;