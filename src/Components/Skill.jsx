import React from 'react';

const Skill = () => {
    return (
        <div className="py-8">
            <h2 className=" text-2xl font-bold mb-4 ml-[48%]">Skills</h2>
            <div className=" m-12 p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 l">
                <div className=" border rounded-lg p-4 bg-gray-300 shadow-black">
                    <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                    <ul className="list-disc ml-4">
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className="border rounded-lg bg-gray-400 p-4">
                    <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                    <ul className="list-disc ml-4">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>RESTful APIs</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                    </ul>
                </div>
                
                <div className="border bg-gray-400 rounded-lg p-4">
                    <h3 className="text-xl font-semibold mb-2">Tools & Libraries</h3>
                    <ul className="list-disc ml-4">
                        <li>Git & GitHub</li>
                        <li>Webpack</li>
                        <li>Babel</li>
                        <li>Redux</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="border rounded-lg  bg-gray-300  p-4">
                    <h3 className="text-xl font-semibold mb-2">Other Skills</h3>
                    <ul className="list-disc ml-4">
                        <li>Responsive Design</li>
                        <li>UI/UX Design Principles</li>
                        <li>API Integration</li>
                        <li>Debugging & Troubleshooting</li>
                        <li>Team Collaboration</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skill;
