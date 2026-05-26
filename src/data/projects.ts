export type Project = {
  slug: string;
  brand: string;
  title: string;
  category: string;
  cover: string;
  slides: string[];
  insight: string;
  idea: string;
  impact: string;
  why: string;
};

export const projects: Project[] = [
  {
    slug: 'nike-2-minute-start',
    brand: 'Nike',
    title: '2-Minute Start',
    category: 'Behavioral design / Fitness engagement',
    cover: '/assets/projects/nike-start.png',
    slides: ['/assets/projects/nike-start.png'],
    insight: 'People get overwhelmed and struggle with starting their workouts.',
    idea: 'A super-short workout experience that removes the barrier to entry and helps users build momentum into longer sessions.',
    impact: 'Increases daily engagement, builds consistent fitness habits, and positions Nike as a brand that fits into real, busy lifestyles.',
    why: 'It uses the two-minute rule by making the task feel small enough to start. Once users begin, they are more likely to keep going.'
  },
  {
    slug: 'apple-pride-map',
    brand: 'Apple',
    title: 'Pride in Every Message',
    category: 'Purpose-led brand activation',
    cover: '/assets/projects/apple-pride.png',
    slides: ['/assets/projects/apple-pride.png'],
    insight: 'People want to show support for causes they care about, but everyday actions often feel too small to make a real impact.',
    idea: 'Every Pride emoji sent contributes to LGBTQIA+ donations and builds a live global Pride Map.',
    impact: 'Transforms passive support into collective action, increases iMessage engagement, and reinforces Apple as a purpose-driven brand.',
    why: 'It makes a tiny everyday behavior feel visible, communal, and emotionally meaningful.'
  },
  {
    slug: 'samyang-beach-cool',
    brand: 'Samyang',
    title: 'Buldak Beach Cool',
    category: 'Seasonal product innovation',
    cover: '/assets/projects/samyang.png',
    slides: ['/assets/projects/samyang.png'],
    insight: 'Consumers want ramen during hot summer days but do not want the heaviness, heat, and discomfort that come with it.',
    idea: 'A limited-edition Buldak made with light shirataki noodles that keeps the spicy kick without the heaviness or calories.',
    impact: 'Expands Buldak into new seasonal occasions while increasing summer sales and brand versatility.',
    why: 'It adapts an existing spicy ramen behavior for summer and health-conscious consumption without asking consumers to change habits.'
  },
  {
    slug: 'dominos-apology-pizza',
    brand: "Domino's",
    title: 'The Apology Pizza',
    category: 'Occasion creation / Emotional commerce',
    cover: '/assets/projects/dominos-1.png',
    slides: ['/assets/projects/dominos-1.png', '/assets/projects/dominos-2.png', '/assets/projects/dominos-3.png'],
    insight: 'People instinctively use food to apologise, but there is no established ritual for pizza as an apology.',
    idea: 'A special red apology box, note card, and “I’m sorry” message option in the app.',
    impact: 'Creates a new use case that can drive non-peak orders and position Domino’s as the pizza brand that gets relationships.',
    why: 'No new product is needed. A box, card, and app toggle create an ownable emotional category.'
  },
  {
    slug: 'duolingo-guilt-trip',
    brand: 'Duolingo',
    title: 'Guilt Trip Postcard',
    category: 'Retention / Meme-to-real activation',
    cover: '/assets/projects/duolingo-1.png',
    slides: ['/assets/projects/duolingo-1.png', '/assets/projects/duolingo-2.png', '/assets/projects/duolingo-3.png'],
    insight: 'Duolingo’s passive-aggressive streak guilt is a loved part of its brand personality and meme culture.',
    idea: 'After seven days of a broken streak, opted-in users receive a real handwritten-style postcard from Duo.',
    impact: 'Unexpected physical mail can drive re-engagement, earned media, and deepen the owl’s cultural status.',
    why: 'It takes a joke that already exists online and makes it physical, unexpected, and shareable.'
  },
  {
    slug: 'marriott-unmade-bed',
    brand: 'Marriott',
    title: 'The Unmade Bed Campaign',
    category: 'Social-first PR campaign',
    cover: '/assets/projects/marriott-1.png',
    slides: ['/assets/projects/marriott-1.png', '/assets/projects/marriott-2.png', '/assets/projects/marriott-3.png'],
    insight: 'Guests feel guilt about making the hotel bed even though it is not their job.',
    idea: 'Marriott officially tells guests to stop making the bed through press, billboards, and social content.',
    impact: 'A funny, human campaign that earns press coverage and reframes housekeeping staff as the heroes of the stay.',
    why: 'It names a real guest anxiety and turns it into a brand truth: you are a guest, act like one.'
  }
];
