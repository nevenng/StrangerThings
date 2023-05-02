import react from 'react';
import { BASE_URL } from '../api';
import { useHistory } from 'react-router-dom';

const Delete = ({token,fetchPosts, id}) => {
    const history = useHistory();

const handleDelete = async () => {


try{    
    const response = await fetch(`${BASE_URL}/posts/${id}`,{
      headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
      },
      method: 'DELETE',
 
    });
    const data = await response.json();
     alert('Deleted!')
     history.push('/posts');
     return data;

    } catch(error){
        console.log(error);
    }
  }

  return (
    
        <button className="delete" onClick = {handleDelete}>Delete</button>
  )


}




export default Delete;