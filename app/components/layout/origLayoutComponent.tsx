// 'use client'
// import React, { useEffect, useState } from 'react';
// import Title from '../ui/Title';
// import Text from '../ui/Text';
// import Button from '../ui/Button';
// import { fetchPosts } from '../../utils/helpers';
// import Container from './Container';

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// interface ClassNames {
//   titleText: string;
//   descText: string;
//   titleStyle: string;
//   descStyle: string;
// }

// const LayoutComponent: React.FC<ClassNames> = ({ titleText, descText, titleStyle, descStyle }) => {
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchPosts();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleButtonClick = async () => {
//     try {
//       const data = await fetchPosts();
//       setPosts(data);
//     } 
    
//     catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <Container>
//       <Title text={titleText} style={titleStyle} />
//       <Text text={descText} style={descStyle} />
//       <Button btnText='Click here' onClick={handleButtonClick} compName={''} btnStyle={''}/>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <h3 className='font-bold'>{post.title}</h3>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </Container>
//   );
// };

// export default LayoutComponent;