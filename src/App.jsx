
import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {


const [blogData, setBlogData] = useState([])
const [readingTime, setReadingTime] = useState(0)


const handleAddToMark = blog => {
  const preveousBlogData = [...blogData, blog]
        setBlogData(preveousBlogData);
}

const handleMarkAsRead = (id,time) => {
  const previousTime = (readingTime + time)
      setReadingTime(previousTime)

      // for remove data from bookmark ---
  // console.log("remove data from bookmark", id);

  const remaingBookmark = blogData.filter(bookmark => bookmark.id !== id);
      setBlogData(remaingBookmark)

}
  return (
    <div className='px-[4%] md:px-[0%]'>
      <Header></Header>
      <div className='flex flex-col md:flex-row flex-col-reverse container mx-auto gap-6'>
        <Blogs handleAddToMark={handleAddToMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <BookMarks blogData={blogData} readingTime={readingTime}></BookMarks>
      </div>
    </div>
  )
}

export default App
