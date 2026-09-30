
import { Tv, GitCompareArrows, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Tic Tac Toe game",
        description: "A Tic Tac Toe game for two players. The game state can be saved and reinstated across browser windows " +
        "(players can play in the same or different browser windows) and on browser restart. Planning to refactor the app " +
        "using React.",
        image: "../../project1.jfif",
        tags: ["HTML", "CSS", "TypeScript"],
        githubURL: "#",
        demoURL: "#",
        ytURL: "#"
    },

        {
        id: 2,
        title: "MERN Stack Note-Taking application",
        description: "A full-stack note-taking application with user authentication, authorization for personalized note " +
        " management, and a rate limiter using Redis Upstash. Built RESTful APIs to create, edit, delete, and retrieve notes " +
        " from the database.",
        image: "../../project2.jfif",
        tags: ["React", "Mongo", "Node.js", "Express"],
        githubURL: "#",
        demoURL: "#",
        ytURL: "#"
    },

        {
        id: 3,
        title: "2D Side Scroller",
        description: "Working on a 2D side scroller implementing player movement, climbing and collision mechanics. Working " +
        "to design multiple levels featuring obstacles, collectibles, and progressively challenging gameplay.",
        image: "../../project3.jfif",
        tags: ["Unity", "C#"],
        githubURL: "#",
        demoURL: "#",
        ytURL: "#"
    }
]


export const ProjectsSection = () => {

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects 
                </span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects.
                Each project was carefully crafted with attention to detail, performance, and user experience.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover 
                            transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary 
                                text-secondary-foreground">{tag}</span>
                            ))}
                        </div>
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoURL} className='text-foreground/80 hover:text-primary 
                                    transition-colors duration-300' target='_blank'>
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubURL} className='text-foreground/80 hover:text-primary 
                                    transition-colors duration-300' target='_blank'>
                                        <GitCompareArrows size={20}/>
                                    </a>
                                    <a href={project.ytURL} className='text-foreground/80 hover:text-primary 
                                    transition-colors duration-300' target='_blank'>
                                        <Tv size={20}/>
                                    </a>
                                </div>
                                </div>
                            </div>
                    </div>
                ))}

            </div>
                <div className='text-center mt-12'>
                    <a className='cosmic-button w-fit flex items-center mx-auto gap-2' 
                    href="https://github.com/SergeySVL" target='_blank'>Check My Github <ArrowRight size={16} /></a>
                </div>
        </div>
    </section>;
};
