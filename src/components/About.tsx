
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Product-Focused",
      description: "We operate at the intersection of product strategy and engineering execution."
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Bringing forward-thinking solutions that create long-term value."
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working closely with startups, enterprises, and forward-thinking teams."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Prototypolab</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                We're a modern software studio that bridges the gap between ambitious ideas 
                and market-ready solutions. Our team specializes in rapid development cycles 
                without compromising on quality or scalability.
              </p>
              <p>
                From helping startups validate their concepts to enabling enterprises to 
                modernize their digital infrastructure, we bring technical expertise and 
                strategic thinking to every project.
              </p>
              <p>
                Our approach combines agile development methodologies with proven architectural 
                patterns, ensuring that every solution we deliver is built to grow with your business.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-black border-t-0 border-r-0 border-b-0 rounded-l-none">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
