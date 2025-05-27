
export const TechStack = () => {
  const technologies = [
    { name: "Next.js", category: "Frontend Framework" },
    { name: "React", category: "UI Library" },
    { name: "TypeScript", category: "Programming Language" },
    { name: "Supabase", category: "Backend Platform" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Vercel", category: "Deployment" },
    { name: "Node.js", category: "Runtime" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Prisma", category: "ORM" },
    { name: "Stripe", category: "Payments" },
    { name: "Docker", category: "Containerization" },
    { name: "AWS", category: "Cloud Services" }
  ];

  return (
    <section id="tech" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technology Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build fast, scalable, and maintainable applications 
            that stand the test of time.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-black transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 group-hover:text-black transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-black text-white rounded-full px-8 py-4">
            <span className="font-semibold">Serverless-First Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
};
