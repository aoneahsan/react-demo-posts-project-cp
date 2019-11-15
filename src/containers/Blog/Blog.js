import React, { Component } from 'react';
import './Blog.css';

import { Route, Link } from 'react-router-dom';

import Posts from './../Posts/Posts';
import NewPost from './../NewPost/NewPost';

class Blog extends Component {

    render () {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to={{
                                pathname: "/new-post",
                                hash: 'submit',
                                search: 'new=value'
                                }}>New Posts</Link></li>
                        </ul>
                    </nav>
                </header>
                <section>
                    <Route path='/posts' component={Posts} />
                    <Route path='/new-post' exact component={NewPost} />
                </section>
            </div>
        );
    }
}

export default Blog;