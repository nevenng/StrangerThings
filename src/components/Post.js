import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';


const Post = ({fetchPosts,token}) => {


const [posts, setPosts] = useState([]);


useEffect(() => {    
    async function getPost(){
        const results = await fetchPosts();    
        setPosts(results.data.posts);
    }
    getPost();
   
},[])

    return  (
        <>

     <h1>Welcome!</h1>
     <Link to="/posts/createpost"> Create a post here!</Link>
     <Search posts={posts} token={token} fetchPosts={fetchPosts} />
           
   </> 
);

}
export default Post;