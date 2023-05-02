import react from "react";
import {Link} from 'react-router-dom'
import { BASE_URL } from "../api";
import { useState,useEffect } from "react";
const Profile = ({fetchPosts,token,Delete,posts,setPosts}) => {
    const [user,setUser] = useState('');
    
     const myData = async (token) => {
        try {
          const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });
          const result = await response.json();
      
          if (response.ok) {
            return result;
          } else {
          }
        } catch (err) {
          console.error(err);
        }
      };
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await myData(token);
      
            setUser(response.data);
            setPosts(response.posts);
          } catch (err) {
            // handle the error, e.g. show an error message to the user
          }
        };
      
        fetchData();
        // call fetchPosts() here if necessary
      
      }, [token]);
    
      return (
        <>

          {user.username && (
            <div>
              <h2> Welcome {user.username}!</h2>
              <h1>Inbox</h1>
              <h1>Your Messages</h1>
              {user.messages && user.messages.map((message) => (
                <div className="messagebox" key={message._id}>
                  <h4>Subject: {message.post.title}</h4>
                  <h4>Message: {message.content}</h4>
                  <h4>From User: {message.fromUser.username}</h4>
                  {user._id === message.fromUser._id && (
                    <h4>Sent to: {message.post.author.username}</h4>
                  )}
                  {user._id !== message.fromUser._id && (
                    <h5>Sent by: {message.fromUser.username}</h5>
                  )}
                  <br />
                </div>
              ))}
            </div>
          )}
          
        </>
      );
}
export default Profile;

//Tried doing this but messages would not pop up sadly :<
{/* <div>
        {       
             posts
                ? posts.map(
                ({_id, isAuthor, title, description, price, author, messages, idx}) => (
                <div className="contentcontainer" key = {_id ?? idx}>
               {
                isAuthor ?
                <>  
                    <h1>{title}</h1>
                    <p>Description: {description}</p>
                    <h3>price: {price}</h3>
                    <h3>Created By: {author.username}</h3>
                     {
                        isAuthor && messages.content
                            ? (
                            <>
                               
                               
                            </>
                            )
                            : <h4>No messages yet</h4>
                    }
                    
                    <Link to="/edit">
                    <button type="button" className="edit">Edit</button>          
                    </Link>
                    
                    <Delete id={_id} token={token} fetchPosts={fetchPosts} />

                    
                </> :null
                    }
                    </div>
                ) 

            ) : <b>Nothing Here Yet Mate</b> 
             
        }
       
        </div> */}