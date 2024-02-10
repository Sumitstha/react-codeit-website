import React from 'react';
import Card from '../component/card';
import img1 from '../assets/images/nft-1.png';
import img2 from '../assets/images/nft-2.png';
import img3 from '../assets/images/nft-3.png';
import img4 from '../assets/images/nft-4.png';
import img5 from '../assets/images/nft-5.png';
import img6 from '../assets/images/nft-6.png';
import H2 from '../component/h2';

// import './card.css';

const cardData=[
  {
    id:1,
    btnlabel:'View More',
    description:'Welcome to our blog! Explore a wealth of articles covering a diverse range of topics, from technology and science to lifestyle and travel.',
    title:'First Blog',
    image:img1,
  },
  {
    id:2,
    btnlabel:'View More',
    description:'Our team of writers brings you insightful and engaging content that aims to inform, inspire, and entertain.',
    title:'Second Blog',
    image:img2,
    
  },
  {
    id:3,
    btnlabel:'View More',
    description:'Dive into our collection of thought-provoking articles, stay updated on the latest trends, and discover new perspectives.',
    title:'Third Blog',
    image:img3,
  },
  {
    id:4,
    btnlabel:'View More',
        description:'Whether you are a tech enthusiast, a travel junkie, or simply looking for a good read, our blog has something for everyone.',
        title:'Fourth Blog',
        image:img4,

  },
  {
    id:5,
    btnlabel:'View More',
    description:'Feel free to tailor this description to better fit the specific focus and tone of your blog.',
    title:'Fifth Blog',
    image:img5,
  },
  {
    id:6,
    btnlabel:'View More',
        description:'Enjoy the journey through our virtual pages and join the conversation!',
        title:'Sixth Blog',
        image:img6,

  },
]

const Blog = () => {
  return (
    <>
    <div className="container">
    <H2 title='BLOG'/>
    </div>
   
    
    <div className="container" style={{
      
      padding:"20px  0px",
      display:"flex",
      // alignItems:"center",
      justifyContent:"center",
      gap:"1rem",
    }} >
    <div className='row' >
        {cardData?.map((item,index)=>(
          <div key={index} className="col-md-4" style={{ marginBottom: "50px " }}>
          <Card
             btnlabel={item.btnlabel}
        description={item.description}
        title={item.title}
        image={item.image}
        id={item.id}

          />
          </div>
        ))}
</div>
      {/* <Card 
        btnlabel='View More'
        description='Welcome to our blog! Explore a wealth of articles covering a diverse range of topics, from technology and science to lifestyle and travel.'
        title='First Blog'
        image={img1}
      />

      <Card 
        btnlabel='View More'
        description='Our team of writers brings you insightful and engaging content that aims to inform, inspire, and entertain.'
        title='Second Blog'
        image={img2}
        />
        <Card 
        btnlabel='View More'
        description='Dive into our collection of thought-provoking articles, stay updated on the latest trends, and discover new perspectives.'
        title='Third Blog'
        image={img3}
        />
         <Card 
        btnlabel='View More'
        description='Whether you are a tech enthusiast, a travel junkie, or simply looking for a good read, our blog has something for everyone.'
        title='Fourth Blog'
        image={img4}
        /> */}

    
    </div>
    </>
  )
}

export default Blog;

