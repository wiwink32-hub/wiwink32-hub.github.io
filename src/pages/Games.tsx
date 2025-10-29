import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Brain, Puzzle, Zap } from "lucide-react";

const Games = () => {
  const games = [
    {
      title: "Word Scramble",
      description: "Unscramble letters to form words",
      icon: Puzzle,
      difficulty: "Easy",
      color: "bg-blue-500"
    },
    {
      title: "Vocabulary Quiz",
      description: "Test your knowledge of word definitions",
      icon: Brain,
      difficulty: "Medium",
      color: "bg-purple-500"
    },
    {
      title: "Speed Spelling",
      description: "Spell words as fast as you can",
      icon: Zap,
      difficulty: "Hard",
      color: "bg-orange-500"
    },
    {
      title: "Crossword Challenge",
      description: "Complete the daily crossword puzzle",
      icon: Gamepad2,
      difficulty: "Expert",
      color: "bg-green-500"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <Gamepad2 className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">
              Word Games
            </h1>
            <p className="text-lg text-muted-foreground">
              Challenge yourself with fun vocabulary games
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {games.map((game, idx) => {
              const Icon = game.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg ${game.color} text-white mb-3`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {game.difficulty}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-serif">{game.title}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Play Now</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <CardContent className="py-8">
              <div className="text-center">
                <h2 className="text-3xl font-serif font-bold mb-3">
                  Daily Challenge
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Complete today's challenge and earn badges!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" className="font-semibold">
                    Start Challenge
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                    View Leaderboard
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-1">156</div>
                <p className="text-sm text-muted-foreground">Games Played</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-1">89%</div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-1">24</div>
                <p className="text-sm text-muted-foreground">Badges Earned</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Games;
