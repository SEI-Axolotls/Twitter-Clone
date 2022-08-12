import './Post.css'

const Post = () =>{
    return (
        <div className="post-container">    
            <h1>Post</h1>
            <div className="sub-post-container">
                <p> 
                    YOUR TEXT GOES HERE
                    <br></br>
                    YOUR TEXT GOES HERE
                    <br></br>
                    YOUR TEXT GOES HERE
                    <br></br>
                    YOUR TEXT GOES HERE
                </p>

            </div>
            <input type="text" placeholder="Add post"></input><br/>
            <button type="submit">POST</button>
        </div>
    )
}

export default Post