import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2, Bookmark } from "lucide-react";

const wordDatabase: Record<string, {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  etymology: string;
  examples: string[];
  synonyms: string[];
  antonyms: string[];
}> = {
  ephemeral: {
    word: "ephemeral",
    pronunciation: "ih-FEM-er-ul",
    partOfSpeech: "adjective",
    definition: "Lasting for a very short time; transitory.",
    etymology: "From Greek ephēmeros 'lasting only a day', from epi 'upon' + hēmera 'day'.",
    examples: [
      "The beauty of cherry blossoms is ephemeral, lasting only a few weeks each spring.",
      "Social media fame can be ephemeral, with trends changing rapidly.",
      "Morning dew is ephemeral, disappearing as soon as the sun rises."
    ],
    synonyms: ["transient", "fleeting", "momentary", "temporary", "short-lived"],
    antonyms: ["permanent", "enduring", "eternal", "lasting"]
  },
  ubiquitous: {
    word: "ubiquitous",
    pronunciation: "yoo-BIK-wi-tus",
    partOfSpeech: "adjective",
    definition: "Present, appearing, or found everywhere; omnipresent.",
    etymology: "From Latin ubique 'everywhere', from ubi 'where'.",
    examples: [
      "Smartphones have become ubiquitous in modern society.",
      "Coffee shops seem ubiquitous in urban areas.",
      "The ubiquitous presence of advertising influences consumer behavior."
    ],
    synonyms: ["omnipresent", "pervasive", "universal", "widespread", "everywhere"],
    antonyms: ["rare", "scarce", "absent", "limited"]
  },
  ambiguous: {
    word: "ambiguous",
    pronunciation: "am-BIG-yoo-us",
    partOfSpeech: "adjective",
    definition: "Open to more than one interpretation; having a double meaning; unclear or inexact.",
    etymology: "From Latin ambiguus 'doubtful', from ambigere 'to waver', from ambi- 'both ways' + agere 'to drive'.",
    examples: [
      "The politician's ambiguous statement left voters confused about her position.",
      "The ending of the film was deliberately ambiguous.",
      "His ambiguous response made it difficult to know what he really meant."
    ],
    synonyms: ["unclear", "vague", "equivocal", "cryptic", "obscure"],
    antonyms: ["clear", "unambiguous", "explicit", "definite"]
  },
  resilient: {
    word: "resilient",
    pronunciation: "ri-ZIL-yent",
    partOfSpeech: "adjective",
    definition: "Able to withstand or recover quickly from difficult conditions; flexible and adaptable.",
    etymology: "From Latin resilire 'to rebound', from re- 'back' + salire 'to jump'.",
    examples: [
      "Children are remarkably resilient and can adapt to new environments quickly.",
      "The resilient economy recovered faster than expected after the crisis.",
      "Bamboo is a resilient plant that can survive in various conditions."
    ],
    synonyms: ["tough", "strong", "hardy", "flexible", "adaptable"],
    antonyms: ["fragile", "weak", "brittle", "delicate"]
  },
  profound: {
    word: "profound",
    pronunciation: "pruh-FOUND",
    partOfSpeech: "adjective",
    definition: "Very great or intense; having deep insight or understanding.",
    etymology: "From Latin profundus 'deep', from pro- 'before' + fundus 'bottom'.",
    examples: [
      "The book had a profound impact on my way of thinking.",
      "She made a profound observation about human nature.",
      "The professor's profound knowledge of the subject was evident in his lectures."
    ],
    synonyms: ["deep", "intense", "extreme", "thorough", "complete"],
    antonyms: ["shallow", "superficial", "slight", "trivial"]
  },
  eloquent: {
    word: "eloquent",
    pronunciation: "EL-uh-kwent",
    partOfSpeech: "adjective",
    definition: "Fluent or persuasive in speaking or writing; clearly expressing or indicating something.",
    etymology: "From Latin eloquens, from eloqui 'to speak out', from e- 'out' + loqui 'to speak'.",
    examples: [
      "The speaker's eloquent words moved the audience to tears.",
      "Her eloquent defense of the proposal convinced many skeptics.",
      "His silence was eloquent testimony to his disappointment."
    ],
    synonyms: ["articulate", "fluent", "expressive", "persuasive", "silver-tongued"],
    antonyms: ["inarticulate", "ineloquent", "hesitant", "tongue-tied"]
  },
  intricate: {
    word: "intricate",
    pronunciation: "IN-tri-kit",
    partOfSpeech: "adjective",
    definition: "Very complicated or detailed; having many interrelated parts or facets.",
    etymology: "From Latin intricatus 'entangled', from intricare 'to entangle', from in- 'into' + tricae 'perplexities'.",
    examples: [
      "The watch mechanism was so intricate that only experts could repair it.",
      "She admired the intricate patterns in the Persian carpet.",
      "The plot of the novel was intricate and full of surprises."
    ],
    synonyms: ["complex", "complicated", "elaborate", "detailed", "involved"],
    antonyms: ["simple", "basic", "plain", "straightforward"]
  },
  meticulous: {
    word: "meticulous",
    pronunciation: "muh-TIK-yuh-lus",
    partOfSpeech: "adjective",
    definition: "Showing great attention to detail; very careful and precise.",
    etymology: "From Latin meticulosus 'fearful', from metus 'fear'. The sense evolved from 'fearful' to 'careful' to 'very careful about details'.",
    examples: [
      "The scientist kept meticulous records of all her experiments.",
      "He was meticulous in his preparation for the presentation.",
      "The detective's meticulous examination of the crime scene revealed crucial evidence."
    ],
    synonyms: ["careful", "thorough", "precise", "scrupulous", "punctilious"],
    antonyms: ["careless", "sloppy", "negligent", "haphazard"]
  },
  ecstatic: {
    word: "ecstatic",
    pronunciation: "ek-STAT-ik",
    partOfSpeech: "adjective",
    definition: "Feeling or expressing overwhelming happiness or joyful excitement.",
    etymology: "From Greek ekstatikos 'causing to stand out', from existanai 'to displace', from ek- 'out' + histanai 'to place'.",
    examples: [
      "She was ecstatic when she received the acceptance letter from her dream university.",
      "The fans were ecstatic after their team won the championship.",
      "His ecstatic response to the surprise party was heartwarming."
    ],
    synonyms: ["elated", "euphoric", "thrilled", "overjoyed", "jubilant"],
    antonyms: ["miserable", "depressed", "dejected", "melancholy"]
  },
  jubilant: {
    word: "jubilant",
    pronunciation: "JOO-buh-lunt",
    partOfSpeech: "adjective",
    definition: "Feeling or expressing great happiness and triumph.",
    etymology: "From Latin jubilant- 'calling out', from jubilare 'to shout for joy'.",
    examples: [
      "The jubilant crowd celebrated in the streets after the victory.",
      "She gave a jubilant shout when she heard the good news.",
      "The team's jubilant mood was infectious after their stunning performance."
    ],
    synonyms: ["triumphant", "exultant", "rejoicing", "celebratory", "elated"],
    antonyms: ["somber", "gloomy", "sorrowful", "mournful"]
  },
  elated: {
    word: "elated",
    pronunciation: "ih-LAY-tid",
    partOfSpeech: "adjective",
    definition: "Making someone ecstatically happy; extremely happy and excited.",
    etymology: "From Latin elatus 'raised', past participle of efferre 'to raise', from ex- 'out' + ferre 'to bear'.",
    examples: [
      "I was elated to learn that I had been promoted.",
      "The elated bride couldn't stop smiling on her wedding day.",
      "He felt elated after completing his first marathon."
    ],
    synonyms: ["thrilled", "overjoyed", "euphoric", "exhilarated", "delighted"],
    antonyms: ["dejected", "downcast", "crestfallen", "disappointed"]
  },
  blissful: {
    word: "blissful",
    pronunciation: "BLIS-ful",
    partOfSpeech: "adjective",
    definition: "Extremely happy; full of joy and contentment.",
    etymology: "From Old English blīþs 'bliss, happiness' + -ful 'full of'.",
    examples: [
      "They spent a blissful week on their honeymoon in Hawaii.",
      "The baby fell into a blissful sleep after feeding.",
      "It was a blissful moment of peace and tranquility."
    ],
    synonyms: ["joyful", "happy", "content", "serene", "peaceful"],
    antonyms: ["miserable", "wretched", "unhappy", "troubled"]
  },
  joyous: {
    word: "joyous",
    pronunciation: "JOY-us",
    partOfSpeech: "adjective",
    definition: "Full of happiness and joy; causing or characterized by joy.",
    etymology: "From Old French joios, from joie 'joy', from Latin gaudium 'joy'.",
    examples: [
      "The wedding was a joyous occasion filled with laughter and celebration.",
      "Her joyous laughter filled the room.",
      "The holiday season brings joyous gatherings with family and friends."
    ],
    synonyms: ["cheerful", "merry", "gleeful", "jovial", "festive"],
    antonyms: ["sad", "sorrowful", "gloomy", "doleful"]
  },
  satisfied: {
    word: "satisfied",
    pronunciation: "SAT-is-fide",
    partOfSpeech: "adjective",
    definition: "Pleased because you have achieved something or because something has happened as you wanted it to; content.",
    etymology: "From Latin satisfacere 'to content', from satis 'enough' + facere 'to make'.",
    examples: [
      "She felt satisfied with her work after completing the challenging project.",
      "The customer left the restaurant satisfied with both the food and service.",
      "He wore a satisfied smile after solving the difficult puzzle."
    ],
    synonyms: ["content", "pleased", "gratified", "fulfilled", "happy"],
    antonyms: ["dissatisfied", "unhappy", "displeased", "discontented"]
  },
  thrilled: {
    word: "thrilled",
    pronunciation: "THRILD",
    partOfSpeech: "adjective",
    definition: "Extremely pleased and excited; filled with excitement or delight.",
    etymology: "From thrill, from Old English þyrlian 'to pierce', later developing the sense of 'to pierce with emotion'.",
    examples: [
      "I'm thrilled to announce that we've reached our fundraising goal.",
      "The children were thrilled to meet their favorite author.",
      "She was thrilled with the unexpected gift from her friends."
    ],
    synonyms: ["excited", "delighted", "exhilarated", "elated", "overjoyed"],
    antonyms: ["bored", "unimpressed", "indifferent", "disappointed"]
  },
  upbeat: {
    word: "upbeat",
    pronunciation: "UP-beet",
    partOfSpeech: "adjective",
    definition: "Cheerful and optimistic; positive and confident about the future.",
    etymology: "Originally a musical term from 1869, meaning 'unaccented beat', later extended to mean 'optimistic' in the 1940s.",
    examples: [
      "Despite the challenges, she maintained an upbeat attitude.",
      "The manager's upbeat presentation motivated the entire team.",
      "His upbeat personality makes him popular among his colleagues."
    ],
    synonyms: ["optimistic", "positive", "cheerful", "hopeful", "buoyant"],
    antonyms: ["pessimistic", "negative", "gloomy", "downbeat"]
  }
};

const WordDetail = () => {
  const { word } = useParams<{ word: string }>();
  const wordData = word ? wordDatabase[word.toLowerCase()] : null;

  if (!wordData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Word Not Found</h1>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn't find the definition for "{word}".
            </p>
            <Link to="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dictionary
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dictionary
            </Button>
          </Link>

          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-5xl font-serif text-primary mb-3">
                    {wordData.word}
                  </CardTitle>
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-lg text-muted-foreground italic">
                      {wordData.pronunciation}
                    </p>
                    <Button size="sm" variant="ghost">
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {wordData.partOfSpeech}
                  </Badge>
                </div>
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Definition</h3>
                <p className="text-lg leading-relaxed">{wordData.definition}</p>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-lg mb-3 text-primary">Examples</h3>
                <ul className="space-y-2">
                  {wordData.examples.map((example, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-muted-foreground italic">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold text-lg mb-3 text-primary">Etymology</h3>
                <p className="text-muted-foreground">{wordData.etymology}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">Synonyms</h3>
                  <div className="flex flex-wrap gap-2">
                    {wordData.synonyms.map((syn, idx) => (
                      <Badge key={idx} variant="outline">
                        {syn}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">Antonyms</h3>
                  <div className="flex flex-wrap gap-2">
                    {wordData.antonyms.map((ant, idx) => (
                      <Badge key={idx} variant="outline">
                        {ant}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Related Searches</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(wordDatabase)
                  .filter(w => w !== word?.toLowerCase())
                  .slice(0, 5)
                  .map((relatedWord) => (
                    <Link key={relatedWord} to={`/word/${relatedWord}`}>
                      <Button variant="ghost" size="sm" className="font-serif">
                        {relatedWord}
                      </Button>
                    </Link>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WordDetail;
