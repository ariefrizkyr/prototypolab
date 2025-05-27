
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Build Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your idea into a market-ready solution? 
            Let's discuss how we can help accelerate your digital journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your name" className="border-gray-300 focus:border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input placeholder="your.email@company.com" className="border-gray-300 focus:border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea 
                    placeholder="Tell us about your project, timeline, and goals..."
                    rows={4}
                    className="border-gray-300 focus:border-black"
                  />
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Prototypolab?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span><strong>Rapid Time-to-Market:</strong> Get your MVP launched in weeks, not months</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span><strong>Scalable Architecture:</strong> Built to handle growth from day one</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span><strong>Modern Tech Stack:</strong> Latest technologies for optimal performance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span><strong>Full-Cycle Support:</strong> From concept to deployment and beyond</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black text-white rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 mr-3" />
                <span className="font-semibold">Ready to start?</span>
              </div>
              <p className="mb-4">
                Schedule a free consultation to discuss your project and learn how we can help 
                bring your vision to life.
              </p>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
