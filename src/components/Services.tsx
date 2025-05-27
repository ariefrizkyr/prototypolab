
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Layers, Zap, Rocket } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Full-cycle development from concept to deployment, tailored to your business needs.",
      features: ["Web Applications", "API Development", "Database Design", "DevOps & Deployment"]
    },
    {
      icon: Layers,
      title: "SaaS Product Development",
      description: "Build scalable Software-as-a-Service platforms with modern architecture.",
      features: ["Multi-tenant Architecture", "Subscription Management", "Analytics Dashboard", "Auto-scaling"]
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Transform ideas into functional prototypes quickly to validate concepts.",
      features: ["MVP Development", "User Testing", "Iterative Design", "Market Validation"]
    },
    {
      icon: Rocket,
      title: "Product Strategy",
      description: "Strategic guidance from ideation to market launch and beyond.",
      features: ["Product Roadmap", "Technical Architecture", "Go-to-Market", "Growth Strategy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to launch, we provide comprehensive software development services 
            that drive business growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 border-gray-100 hover:border-black transition-all duration-300 hover:shadow-lg group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-black rounded-full mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
