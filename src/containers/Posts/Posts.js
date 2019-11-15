import React, {Component} from 'react';
import './Posts.css';

import axios from 'axios';
import {Route} from 'react-router-dom';

import Post from './Post/Post';
import FullPost from './../FullPost/FullPost';

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
        // this.setState({
        //     selectedPostId: newSelectedPostId
        // })
        // this.props.history.push('/posts/'+newSelectedPostId);
        this.setState({
            selectedPostId: null
        });
        this.props.history.push({
            pathname: '/posts/'+newSelectedPostId,
            hash: "hashValue"
        });
    }

    render() {

        const postsArr = this.state.posts.map(post => {
            return (
                // <Link to={'/posts/'+ post.id} key={post.id} >
                    <Post 
                        title={post.title} 
                        author={post.author}
                        key={post.id}
                        clicked={() => {this.postSelectHandler(post.id)}} />
                // </Link>
            );
        })
        return (
            <div>
                <section className="Posts">
                {postsArr}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;