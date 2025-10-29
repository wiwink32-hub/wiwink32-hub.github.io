import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Thesaurus = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const exampleWord = {
    word: "Happy",
    synonyms: [
      { word: "joyful", level: "high" },
      { word: "cheerful", level: "high" },
      { word: "content", level: "medium" },
      { word: "pleased", level: "medium" },
      { word: "delighted", level: "high" },
      { word: "glad", level: "medium" },
    ],
    antonyms: ["sad", "unhappy", "miserable", "depressed"],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">
              Thesaurus
            </h1>
            <p className="text-lg text-muted-foreground">
              Find synonyms and antonyms
            </p>
          </div>

          <div className="relative mb-12">
            <Input
              type="text"
              placeholder="Search for synonyms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-14 text-lg pl-12 pr-4"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2" size="sm">
              Search
            </Button>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-3xl font-serif">{exampleWord.word}</CardTitle>
                <Badge>Adjective</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-primary">Synonyms</h3>
                <div className="flex flex-wrap gap-2">
                  {exampleWord.synonyms.map((syn, idx) => (
                    <Button
                      key={idx}
                      variant={syn.level === "high" ? "default" : "outline"}
                      size="sm"
                      className="font-serif"
                    >
                      {syn.word}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-lg mb-3 text-primary">Antonyms</h3>
                <div className="flex flex-wrap gap-2">
                  {exampleWord.antonyms.map((ant, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      className="font-serif"
                    >
                      {ant}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Words</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["ecstatic", "jubilant", "elated", "blissful"].map((word) => (
                    <Link key={word} to={`/word/${word}`}>
                      <Button variant="ghost" className="w-full justify-start font-serif">
                        {word}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Similar Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["joyous", "satisfied", "thrilled", "upbeat"].map((word) => (
                    <Link key={word} to={`/word/${word}`}>
                      <Button variant="ghost" className="w-full justify-start font-serif">
                        {word}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Thesaurus;
