/*<a href={url} aria-label="link to project">
            <div class="relative flex items-end overflow-hidden rounded-xl">
                <Image
                    src={projectImage}
                    alt={alt}
                    aspectRatio="4:4"
                    format="png"
                    width={400}
                    height={400}
                    loading="eager"
                />
            </div>
            <div class="mt-1 p-2">
                <h3 class="text-xl text-orange lg:text-2xl">{title}</h3>
                <p class="text-black text-s">{description}</p>
                <Tags tags={tags} /> */

const projetcs = [
    {
      id: 'project-1.md',
      slug: 'project-1',
      body: '',
      collection: 'projects',
      data: {
        inProgress: false,
        title: 'AllTech.com',
        description: 'This e-commerce project was made with the wordpress CMS and the WooCommerce plugin and elementor',
        tags: ['Wordpress', 'WooCommerce', 'Elementor'],
        link: 'https://alltech.pe/',
        img:"https://res.cloudinary.com/dce6wpls5/image/upload/v1703013202/2023-12-19_zkduw2.png",
        img_alt: 'project image alt text'
      }
    },
    {
      id: 'project-2.md',
      slug: 'project-2',
      body: '',
      collection: 'projects',
      data: {
        inProgress: false,
        title: 'WarmiVentures',
        description: 'I collaborated in updating the design with tailwindCSS, I also modified user interfaces with Astro',
        tags: ['Vue.js', 'Astro', 'TypeScript', 'TailwindCSS'],
        link: 'https://github.com/Jose171000/warmi-landing',
        img:"https://res.cloudinary.com/dce6wpls5/image/upload/v1703023773/2023-12-19_2_x1hn05.png",
        img_alt: 'project image alt text'
      }
    },
    {
      id: 'project-3.md',
      slug: 'project-3',
      body: '',
      collection: 'projects',
      data: {
        inProgress: false,
        title: 'Rick & Morty SPA',
        description: 'In this SPA I did a development from the back-end creating an API with node.js to the front-end with React',
        tags: ['React.js', 'HTML5', 'CSS3', 'node.js'],
        link: 'https://github.com/Jose171000/RICK_AND_MORTY',
        img:"https://res.cloudinary.com/dce6wpls5/image/upload/v1703024595/2023-12-19_3_n9xor6.png",
        img_alt: 'project image alt text'
      }
    }
  ]

export default projetcs;