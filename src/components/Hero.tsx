
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-block p-1 bg-black rounded-full mb-6">
              <div className="bg-white rounded-full px-4 py-2">
                <span className="text-sm font-medium text-black">Modern Software Studio</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            We bring digital
            <br />
            <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
              ideas to life
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Prototypolab designs and develops custom web applications and scalable SaaS products. 
            We collaborate with startups and enterprises to accelerate digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-full border-black hover:bg-black hover:text-white">
              <Play className="mr-2 h-4 w-4" />
              View Our Work
            </Button>
          </div>
        </div>
        
        {/* Geometric decoration */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-20 -z-10" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-black opacity-5 rounded-lg transform rotate-45 -z-10" />
      </div>
    </section>
  );
};
