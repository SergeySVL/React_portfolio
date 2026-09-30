
import { useState } from "react";
import { cn } from '@/lib/utils';

const skills = [
    { name: "HTML/CSS", level: 75, category: "frontend" },
    { name: "React", level: 35, category: "frontend" },
    { name: "TypeScript", level: 55, category: "frontend" },
    { name: "Bootstrap", level: 60, category: "frontend" },
    { name: "Tailwind CSS", level: 45, category: "frontend" },

    { name: "Node.js", level: 30, category: "backend" },
    { name: "Express", level: 35, category: "backend" },
    { name: "MongoDB", level: 20, category: "backend" },
    { name: "Rest APIs", level: 20, category: "backend" },

    { name: "C#", level: 30, category: "languages" },
    { name: "Java", level: 30, category: "languages" },
    { name: "Python", level: 35, category: "languages" },
    { name: "JavaScript", level: 65, category: "languages" },

    { name: "Git/GitHub", level: 40, category: "tools" },
    { name: "Visual Studio", level: 45, category: "tools" },
    { name: "VS Code", level: 45, category: "tools" },
    { name: "Eclipse IDE", level: 40, category: "tools" },
    { name: "Linux", level: 30, category: "tools" },

    { name: "Unity", level: 15, category: "gaming" },
    { name: "Blender", level: 5, category: "gaming" },    

];

const categories = ["all", "frontend", "backend", "tools", "languages", "gaming"];


export const ServicesSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section id="services" className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My Services <span className="text-primary"> Levels </span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : 
                        "bg-secondary/70 text-foreground hover:bg-secondary" )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                { filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overlow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{ width: skill.level + "%" }}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>

                    </div>
                ))}


            </div>


        </div>




    </section>;
};