import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WordOfTheDay = () => {
  return (
    <Card className="border-primary/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-serif">Word of the Day</CardTitle>
          <Badge variant="secondary">Today</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-3xl font-serif font-bold text-primary mb-2">
            Serendipity
          </h3>
          <p className="text-sm text-muted-foreground italic mb-3">
            noun • ser-en-dip-i-ty
          </p>
          <p className="text-foreground leading-relaxed">
            The occurrence and development of events by chance in a happy or beneficial way.
          </p>
        </div>
        <div className="pt-3 border-t">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold">Example:</span> "A fortunate stroke of serendipity brought the two old friends together after years apart."
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WordOfTheDay;
