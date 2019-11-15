import React, { Component } from 'react';
import './Blog.css';

import { Route, Link } from 'react-router-dom';

import Posts from './../Posts/Posts';
import NewPost from './../NewPost/NewPost';
import FullPost from './../FullPost/FullPost';

class Blog extends Component {

    render () {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: "/new-post",
                                hash: 'submit',
                                search: 'new=value'
                                }}>New Posts</Link></li>
                        </ul>
                    </nav>
                </header>
                <section>
                    <Route path='/' exact component={Posts} />
                    <Route path='/new-post' exact component={NewPost} />
                    <Route path='/posts/:id' exact component={FullPost} />
                </section>
            </div>
        );
    }
}

export default Blog;