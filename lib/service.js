
  const projects = [
    {
      id: 1,
      title: 'Estate Management Platform',
      category:'Nextjs/Tailwind CSS',
      description: 'A comprehensive platform for estate management, showcasing properties with high-quality visuals and detailed information.',
      imageUrl: 'https://estate-admin.vercel.app',
      alt: 'A sophisticated UI design display on a large monitor in a brightly lit, minimalist office setting. The screen shows clean typography, ample whitespace, and a monochromatic color scheme with slate blue accents.'
    },
    {
      id: 2,
      title: 'NaijaWiki 2.0',
      category: 'Nextjs/Tailwind CSS',
      description: 'A comprehensive platform for Nigerian culture and history, showcasing properties with high-quality visuals and detailed information.',
      imageUrl: 'https://naijawiki2-0.vercel.app',
      alt: 'A minimalist architectural detail of a concrete and glass structure during the golden hour. The image features sharp lines, geometric shadows, and a neutral color palette of greys and soft warm light.'
    },
    {
      id: 3,
      title: 'Liora Styles',
      category: 'Nextjs/Tailwind CSS',
      description: 'A comprehensive ecommerce platform for fashion.',
      imageUrl: 'https://liorastyles-8daa.vercel.app',
      alt: 'High-end electronic hardware components arranged in a neat, symmetrical bento-grid style on a matte white surface.'
    },
    {
      id: 4,
      title: 'Estate Management Platform',
      category: 'Nextjs/Tailwind CSS',
      description: 'An interactive platform for visualizing real-time estate management',
      imageUrl: 'https://estate2-0.vercel.app',
      alt: 'An artistic representation of digital data flow, visualized as elegant, thin glowing lines weaving through a dark, minimalist space.'
    },
     {
      id: 5,
      title: 'Xpacy',
      category: 'Nextjs/Tailwind CSS',
      description: 'An Interactive Real Estate Platform',
      imageUrl: 'https://xpacy.com',
      alt: 'An artistic representation of digital data flow, visualized as elegant, thin glowing lines weaving through a dark, minimalist space.'
    },
    {
      id: 6,
      title: 'StoreReg',
      category: 'Nextjs/Tailwind CSS',
      description: 'An Inventory Management System for Retailers',
      imageUrl: 'https://store-reg-delta.vercel.app',
      alt: 'An artistic representation of digital data flow, visualized as elegant, thin glowing lines weaving through a dark, minimalist space.'
    },
    {
      id: 7,
      title: 'Promptpare',
      category: 'Nextjs/Tailwind CSS',
      description: 'An AI Tool for comparing prompts for Large Language Models',
      imageUrl: 'https://promptpare.vercel.app',
      alt: 'An artistic representation of digital data flow, visualized as elegant, thin glowing lines weaving through a dark, minimalist space.'
    }
  ];

  export async function getProjects() {
    return projects;
  }