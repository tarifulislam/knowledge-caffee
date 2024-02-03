import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToMark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-full md:w-2/3 ">
            <h2> Blogs : {blogs.length}</h2>
            {
                blogs.map(blogData=> <Blog key={blogData.id} blogData={blogData} handleAddToMark={handleAddToMark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

export default Blogs;