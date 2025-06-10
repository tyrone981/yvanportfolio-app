export const projectsData = [
  {
    id: 1,
    title: "Pokemon App",
    description: "Interactive Pokemon showcase with PokeAPI integration",
    image: "/image/pokemon.png", // Corrected path
    tags: ["All", "Web", "React"],
  
  },
  {
    id: 2, // Fixed duplicate ID
    title: "Gaming Hub", // Added proper title
    description: "Community platform for gamers with live chat",
    image: "/image/razer.png", // Corrected path
    tags: ["All", "Web", "Firebase"],
   
  },
  {
    id: 3, // Changed from duplicate ID 1
    title: "Barbing Salon Pro",
    description: "Booking system for barber appointments",
    image: "/image/barbing.png", // Corrected path
    tags: ["All", "Web", "Next.js"],
  
  }
];

const  ProjectSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <projectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}  
          />
        ))}
      </div>
    </>
  );
};
export default ProjectSection;
