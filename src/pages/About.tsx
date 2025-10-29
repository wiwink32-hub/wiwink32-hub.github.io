import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Globe } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Database",
      description: "Over 500,000 words with detailed definitions and examples"
    },
    {
      icon: Users,
      title: "Expert Curated",
      description: "Content reviewed by professional lexicographers and linguists"
    },
    {
      icon: Award,
      title: "Trusted Source",
      description: "Serving language learners and professionals for decades"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Helping millions of people worldwide improve their vocabulary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              About Our Dictionary
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted companion for language learning and exploration
            </p>
          </div>

          <Card className="mb-10">
            <CardContent className="pt-8 pb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  Welcome to our comprehensive online dictionary, where language comes alive through 
                  clear definitions, rich examples, and engaging content. We believe that understanding 
                  words is more than just memorizing definitions—it's about exploring the nuances, 
                  history, and beauty of language.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Since our founding, we've been committed to providing accurate, accessible, and 
                  up-to-date language resources for students, professionals, and word enthusiasts alike. 
                  Our team of experienced lexicographers and linguists work tirelessly to ensure that 
                  every entry meets the highest standards of quality and accuracy.
                </p>
                <p className="text-foreground leading-relaxed">
                  Whether you're a student working on an assignment, a professional crafting important 
                  communications, or simply someone who loves words, our dictionary is here to support 
                  your journey through the fascinating world of language.
                </p>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-serif font-bold text-center mb-8">What Sets Us Apart</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-10 text-center">
              <h3 className="text-2xl font-serif font-bold mb-3">
                Join Our Community
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Be part of a global community of language lovers. Share your favorite words, 
                learn new ones, and discover the joy of linguistic exploration.
              </p>
              <div className="text-sm opacity-75">
                © 2024 Dictionary. All rights reserved.
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
