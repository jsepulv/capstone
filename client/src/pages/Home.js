import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag'
import {Grid} from 'semantic-ui-react'

import PostCard from '../components/PostCard'

function Home() {
    const {loading, error, data} = useQuery(FETCH_POST_QUERY);
    let posts = data ? data.getPosts:false;
const test = loading? (
    <h1>LOADING...</h1>
) : (
    posts && posts.map(post =>(
        <Grid.Column key={post.id} style={{marginBottom:20}}>
            <PostCard post = {post}/>
        </Grid.Column>
    ))
)
error ? console.error(error):console.log('wegucci');
    return (
    <Grid columns={3}>
        <Grid.Row className="card__title">
            <h1>Latest Finds</h1>
        </Grid.Row>
    <Grid.Row>
      {test}
    </Grid.Row>
    </Grid>
    )
}
const FETCH_POST_QUERY = gql`
    {
        getPosts{
            id
            body
            createdAt
            username
            likeCount
            likes{
                username
            }
            commentCount
            comments{
                id
                username
                createdAt
                body
            }
        }
    }
`


export default Home
