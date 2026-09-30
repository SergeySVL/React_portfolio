
import { UniversityIcon } from 'lucide-react';

export const EducationSection = () => {

    return <section id="education" className="py-24 px-4 relative">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Education</span>
            </h2>

            <div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <UniversityIcon className='h-6 w-6 text-primary' />
                        </div>
                        <div className="text-left">
                            <h4 className='font-semibold text-lg p-2'>Centennial College</h4>
                            <p className='text-muted-foreground p-2'>September 2025 - present</p>
                            <p className='text-muted-foreground p-2'>Python, web development fundamentals, software engineering fundamentals, Object-Oriented 
                                programming in C#, front-end web development, databases, software requirements engineering, Java, full-stack web 
                                development using MERN stack, assets creation and game development in Unity</p>
                        </div>
                        </div>
                        </div>

                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <UniversityIcon className='h-6 w-6 text-primary' />
                        </div>
                            <div className="text-left">
                            <h4 className='font-semibold text-lg p-2'>Seneca College</h4>
                            <p className='text-muted-foreground p-2'>May 2025 - August 2025</p>
                            <p className='text-muted-foreground p-2'>Linux systems; Windows Server and client systems (VMs 
                                deployment and configuration, OS installation, networks creation and configuration, sharing, 
                                CLI/GUI administration); networking labs (subnetting, network addressing and intro to routing),
                                networking protocols</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
    </section>;
}
