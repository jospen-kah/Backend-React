// Select the database to use.
use('ReactBackendendProject');

// Insert a few documents into the PortfolioData collection.
db.getCollection('projects').insertMany(
    [
        {
            id: 1,
            image: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\portfolio1.jpg',
            title: 'Mario World: HTML/CSS animations',
            github: 'https://github.com/Jenna0430/MarioWorld.git',
            demo: '',
          },
          {
            id: 2,
            image: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\portfolio2.jpg',
            title: 'Libary Management System with Java',
            github: 'https://github.com/Jenna0430/Libary-Mangement-System.git',
            demo: '',
          },
          {
            id: 3,
            image: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\portfolio3.jpg',
            title: 'Operating Sytems with C/C++',
            github: 'https://github.com/Jenna0430/Operating-System.git',
            demo: '',
          },
          {
            id: 4,
            image: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\portfolio4.jpg',
            title: 'Responsive Cofffee Shop website: HTML, CSS, and JavaScript',
            github: 'https://github.com/Jenna0430/Coffee-shop.git',
            demo: '',
          },
          {
            id:5,
            image: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\portfolio5.jpg',
            title: 'Distortion Effect Landing Page using GSAP',
            github: 'https://github.com/Jenna0430/GSAP-tutorial.git',
            demo: '',
          }
    ]
);
 
// Insert a few documents into the PortfolioData collection.
 db.getCollection('testimonials').insertMany(
  [
    {
        avatar: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\avatar1.jpeg',
        name: 'Elma Jackson',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
        },
        {
          avatar: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\avatar2.jpeg',
          name: 'Avery Simpson',
          review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
          },
          {
            avatar: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\avatar3.jpeg',
            name: 'Nathaniel Blanco',
            review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
            },
            {
              avatar: 'C:\Users\Jenna\Documents\React\portfolio\src\assets\avatar4.jpeg',
              name: 'Cody Lynch',
              review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit,  Itaque minus a totam at, cumque nisi facilis. Lorem ipsum dolor sit amet consectetur rerum molestiae dolores maxime dolore fugit adipisci ex voluptates!' 
              },
      
             ]
 );
 