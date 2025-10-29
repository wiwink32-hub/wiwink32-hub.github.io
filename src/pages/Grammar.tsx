import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, CheckCircle, AlertCircle } from "lucide-react";

const Grammar = () => {
  const grammarTopics = [
    {
      title: "Common Mistakes",
      description: "Avoid these frequent grammatical errors",
      items: [
        { rule: "Its vs. It's", correct: "It's a nice day (It is)", incorrect: "Its a nice day" },
        { rule: "Your vs. You're", correct: "You're welcome (You are)", incorrect: "Your welcome" },
        { rule: "Their, There, They're", correct: "They're going there", incorrect: "There going their" },
      ]
    },
    {
      title: "Punctuation Rules",
      description: "Master the art of proper punctuation",
      items: [
        { rule: "Comma Usage", correct: "I love apples, oranges, and bananas.", incorrect: "I love apples oranges and bananas" },
        { rule: "Apostrophes", correct: "The dog's bone (possession)", incorrect: "The dogs bone" },
        { rule: "Quotation Marks", correct: 'She said, "Hello!"', incorrect: "She said, Hello!" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">
              Grammar Guide
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn the rules of proper English grammar
            </p>
          </div>

          <div className="space-y-8">
            {grammarTopics.map((topic, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {topic.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="space-y-3">
                        <h4 className="font-semibold text-primary flex items-center gap-2">
                          <Badge variant="outline">{item.rule}</Badge>
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-green-900 dark:text-green-100 mb-1">Correct</p>
                                <p className="text-green-800 dark:text-green-200">{item.correct}</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900">
                            <div className="flex items-start gap-2">
                              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-red-900 dark:text-red-100 mb-1">Incorrect</p>
                                <p className="text-red-800 dark:text-red-200">{item.incorrect}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-primary text-primary-foreground">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-serif font-bold mb-3">
                Need More Help?
              </h3>
              <p className="text-lg mb-4 opacity-90">
                Explore our comprehensive grammar course with interactive exercises
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Grammar;
