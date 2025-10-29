import Navigation from "@/components/Navigation";
import WordOfTheDay from "@/components/WordOfTheDay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const popularWords = [
    "ephemeral", "ubiquitous", "ambiguous", "resilient", 
    "profound", "eloquent", "intricate", "meticulous"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section with Search */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Find Your Word
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore definitions, synonyms, and usage examples
          </p>
          
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for a word..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-14 text-lg pl-12 pr-4"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Button 
              className="absolute right-2 top-1/2 -translate-y-1/2"
              size="sm"
            >
              Search
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Word of the Day */}
          <div className="md:col-span-2">
            <WordOfTheDay />
            
            {/* Popular Searches */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Popular Searches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularWords.map((word) => (
                    <Link key={word} to={`/word/${word}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-serif"
                      >
                        {word}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Browse by Letter
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Common Mistakes
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  New Words
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Etymology
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="font-serif font-bold text-lg mb-2">
                  Premium Features
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  Get advanced search, pronunciation guides, and more
                </p>
                <Button variant="secondary" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dictionary;
