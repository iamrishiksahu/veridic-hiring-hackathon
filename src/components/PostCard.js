import React from 'react'
import { format } from 'date-fns'
import './postCard.css'


const PostCard = (props) => {


  const { data } = props;

  const redirect = () => {
    window.location.assign(data.link)
  }



  return (
    <div className='mainPostCard' onClick={redirect}>
      <div className="postCardContent">
        <img className='featuredImage' src={data.parselyMeta?.['parsely-image-url']} alt={data.id}/>

        <div className='metaContainer'>

          <p className='authorName'>{data.parselyMeta?.['parsely-author'][0]}</p>
          <p className='dateText' >{format(new Date(data.date), 'dd-MMM-yyyy')}</p>

        </div>
        <h3>{data.title.rendered}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
      </div>
    </div>
  )
}

export default PostCard