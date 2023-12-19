// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// interface Members {
//   clusterid: string;
//   id: number;
//   title: string
// }
  
// const fetchPosts = async (): Promise<Post[]> => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     const data: Post[] = await response.json();
//     return data;
//   } 
  
//   catch (error) {
//     // Handle fetch error
//     console.error('Error fetching data:', error);
//     return [];
//   }
// };

// export { fetchPosts };

const downloadPdf = () => {
  const anchor = document.createElement('a');
  anchor.href = '../assets/Turnkey-For-Quotation-Revised1.1.pdf';
  anchor.download = 'Turnkey-For-Quotation-Revised1.1.pdf'; 

  return anchor.click();
}

export { downloadPdf }

const handleClick = () => {
  return null;
}

export { handleClick }

const showOverlay = () => {
  let bool = true;
  console.log(bool);

  return bool;
}

export { showOverlay }

const getMembersData = async () => {
  try {
    const response = await fetch('https://filipizen.com/cloud-server/json/partner/CloudPartnerService.getList');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
  } 
  
  catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export { getMembersData };