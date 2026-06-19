// Version anglaise des articles (miroir de articles.ts). Même modèle de blocs.
import type { Article } from "./articles";

export const articlesEn: Article[] = [
  {
    slug: "risk-management-the-only-variable-you-control",
    title: "Risk management: the only variable you truly control",
    category: "Rigor",
    date: "2026-06-20",
    dateLabel: "June 20, 2026",
    readTime: "6 min",
    excerpt:
      "You control neither market direction nor the outcome of a single trade. You control your risk. That, and nothing else, is where your survival is decided.",
    metaTitle: "Risk management in trading: the variable you control | KILLEURUSD",
    metaDescription:
      "Risk per trade, position sizing, thinking in R, drawdown: why risk management — not prediction — separates traders who last from those who blow up.",
    blocks: [
      { t: "lead", text: "You can spend ten years perfecting how you read the market: you will never know in advance whether the next trade wins or loses. Direction, exact timing, the outcome of a single position — none of it is under your control. Only one thing truly is, on every click: the risk you agree to put on the table." },
      { t: "h2", text: "Prediction is an illusion, risk is a decision" },
      { t: "p", text: "The beginner wants to be right. The professional wants to stay in the game. That's a difference in kind, not in degree. Anticipating a move stays a probability, never a certainty; deciding that a trade won't cost you more than 1% of your capital, however, is an absolute certainty you impose on the market. You shift your energy from what you endure to what you decide." },
      { t: "quote", text: "A good trade can lose. A bad trade can win. Only the risk you commit is entirely under your control." },
      { t: "h2", text: "Risk per trade: the fractional capital rule" },
      { t: "p", text: "Setting a constant, small risk per position — typically 0.5% to 1% of capital — isn't excessive caution, it's survival arithmetic. At 1% per trade, it takes a losing streak of dozens of consecutive losses to seriously dent the account. At 10% per trade, one bad week is enough to take you down. The market doesn't reward whoever bets big; it removes whoever bets big for long enough." },
      { t: "h2", text: "Think in R, not in dollars" },
      { t: "p", text: "Express every trade in multiples of risk (R), where 1R = the amount you lose if your invalidation is hit. A target at +2R, a stop at -1R: you reason in ratios, not in amounts. This abstraction does two things. It detaches you emotionally from the dollar figure that triggers panic. And it makes your performance legible: a strategy that wins 40% of the time at +2R stays clearly positive over time, regardless of your account size." },
      { t: "h2", text: "Drawdown: survive first, perform later" },
      { t: "p", text: "Loss is mathematically asymmetric. Losing 50% of your capital then requires +100% just to break even. That's why capital preservation always comes before chasing maximum gains. Capping your drawdown, cutting size after a string of losses, refusing to “make it back”: these aren't signs of weakness, they're the reflexes of the people still standing ten years later." },
      { t: "p", text: "No analytical method, however refined, saves you from absent risk management. Conversely, rigorous risk management buys you time — the time your edge needs to express itself, trade after trade. It's the least spectacular variable in trading, and the only one that truly decides who stays on the market." },
    ],
  },
  {
    slug: "why-90-percent-of-traders-fail",
    title: "Why 90% of traders fail and how to join the top decile",
    category: "Psychology",
    date: "2023-10-12",
    dateLabel: "October 12, 2023",
    readTime: "5 min",
    excerpt:
      "Failure in trading is almost never an analysis problem. It's a systematic failure of execution. Here's the breakdown.",
    metaTitle: "Why 90% of traders fail | KILLEURUSD",
    metaDescription:
      "A psychological and technical analysis of why traders fail and how to reverse the trend through execution discipline.",
    blocks: [
      { t: "lead", text: "The figure is scary, but it's a fact. On financial markets, the vast majority of retail speculators destroy their capital. But contrary to popular belief, it's not because of a “rigged algorithm.” It's a systematic failure of execution." },
      { t: "h2", text: "The myth of the miracle indicator" },
      { t: "p", text: "The cardinal mistake lies in the quest for infallibility. A perfect predictive indicator does not exist. By definition, the market moves within a probabilistic spectrum. A seasoned operator treats loss as an operating cost inherent to the activity. The amateur fears it, runs from it, and ends up exposed to systemic risk." },
      { t: "quote", text: "The amateur is obsessed with the entry. The expert is obsessed with capital exposure." },
      { t: "h2", text: "Stochastic behavior" },
      { t: "p", text: "The absence of strict rules of engagement turns analysis into gambling. Entering on a bullish impulse, closing out of risk aversion: action is driven by emotion instead of governed by data. The line between profitability and ruin sits exactly here, in the ability to respect a protocol." },
      { t: "h2", text: "How to join the top decile" },
      { t: "p", text: "The top 10% don't own a secret setup. They own a process: a market thesis written before the open, an invalidation defined before the entry, a position size calculated on risk rather than desire, and a journal that turns every trade into data. Consistency isn't a talent; it's the mechanical consequence of a framework you refuse to betray, especially on the days you feel like betraying it the most." },
    ],
  },
  {
    slug: "mechanics-of-institutional-price-action",
    title: "The underlying mechanics of institutional Price Action",
    category: "Method",
    date: "2023-09-28",
    dateLabel: "September 28, 2023",
    readTime: "8 min",
    excerpt:
      "Behind every “unpredictable” move lies a logic of liquidity. Read price like an institutional player, not like a gambler.",
    metaTitle: "The mechanics of institutional Price Action | KILLEURUSD",
    metaDescription:
      "Liquidity, supply and demand, imbalance zones: understand the real mechanics of institutional price instead of stacking indicators.",
    cover: "/blog/price-action-cover-en.svg",
    blocks: [
      { t: "lead", text: "“Price Action” has become a catch-all term. For most people it means recognizing three candles. For an institutional player it's the opposite: a read of where liquidity sits, and who has an interest in taking it." },
      { t: "h2", text: "The market is an auction, not a chart" },
      { t: "p", text: "Before it's a curve, the market is a continuous auction mechanism: buy and sell orders meeting each other. A price rises not because a pattern is “bullish,” but because demand absorbs the supply available at that level. As long as you think in patterns rather than flows, you describe the past instead of anticipating the imbalance." },
      { t: "h2", text: "Liquidity: the fuel of every move" },
      { t: "p", text: "Large participants cannot execute a massive position all at once without slipping price against themselves. They need counterparty — that is, liquidity. And liquidity concentrates exactly where retail traders mechanically place their stops: above obvious highs, below obvious lows. That's why price so often comes to “collect” those levels before reversing. It isn't a curse; it's execution engineering." },
      { t: "quote", text: "Price doesn't trap you. It simply goes where the orders institutions need to fill are sitting." },
      { t: "h2", text: "Imbalance, return, continuation" },
      { t: "p", text: "A violent impulse leaves behind an imbalance zone: a price range crossed too fast for every order to be filled. The market has a statistical tendency to return and fill that void before resuming its direction. Identifying these zones, waiting for the return, and acting only once the imbalance is confirmed — that's a spatial read that depends on no lagging indicator." },
      { t: "image", src: "/blog/price-action-liquidity-en.svg", alt: "Price pulling back into a demand zone then continuing toward liquidity", caption: "Pullback into the demand zone, then continuation toward liquidity." },
      { t: "h2", text: "From theory to execution" },
      { t: "p", text: "This mechanic is worthless without an execution framework. Knowing where liquidity sits is useless if you enter with no clear invalidation or risk management. Method and discipline are two sides of the same coin: one tells you where to look, the other tells you when to act and how much to risk." },
    ],
  },
  {
    slug: "building-an-airtight-execution-routine",
    title: "Building an airtight execution routine",
    category: "Rigor",
    date: "2023-09-15",
    dateLabel: "September 15, 2023",
    readTime: "6 min",
    excerpt:
      "The difference between a consistent trader and an erratic one rarely comes down to strategy. It comes down to the routine around it.",
    metaTitle: "Building an airtight execution routine | KILLEURUSD",
    metaDescription:
      "Pre-market, execution, post-market: build a repeatable trading routine that neutralizes emotion and makes your results measurable.",
    blocks: [
      { t: "lead", text: "We fantasize about strategy. We neglect routine. Yet two traders with the same method get opposite results: one has a process, the other improvises. An airtight routine is what stops emotion from grabbing the wheel at the worst possible moment." },
      { t: "h2", text: "Before the market: the written thesis" },
      { t: "p", text: "A session begins far from the “buy” button. It begins with a written thesis: what is the context, which levels matter, which scenarios I agree to trade and which I refuse. What isn't written doesn't exist. A thesis on paper becomes a filter: if an opportunity doesn't fit it, it isn't traded. Period." },
      { t: "h2", text: "During the market: execute, don't decide" },
      { t: "p", text: "The moment of execution is not the moment of thinking. If you're still thinking when price reaches your level, you've already lost. The decision work was done beforehand. During, you simply execute a plan: defined entry, defined stop, defined size, defined target. Emotion doesn't vanish, but it no longer has any grip on parameters that are already locked." },
      { t: "quote", text: "Discipline isn't forcing yourself in the moment. It's having prepared the moment so well that there's nothing left to force." },
      { t: "h2", text: "After the market: the journal that corrects you" },
      { t: "p", text: "Without a journal, you repeat your mistakes without even seeing them. After each session: what I planned, what I did, the gap between the two, and why. The journal isn't there to count money; it's there to measure fidelity to your plan. A losing trade executed perfectly is a good trade. A winning trade taken off-plan is a bad habit that will cost you dearly later." },
      { t: "h2", text: "Airtightness comes from repetition" },
      { t: "p", text: "A routine only becomes airtight through repetition, until it no longer requires willpower. That's exactly the role of mentoring: auditing your routine week after week, spotting the crack before it becomes a leak, and installing the reflex in place of the impulse." },
    ],
  },
];

export const getArticleEn = (slug: string) => articlesEn.find((a) => a.slug === slug);
