import { Code, Rocket, Lock, MessageSquare, Map, Trophy } from 'lucide-react';

/* --- EVENTS DATA --- */
export const EVENTS = [
  {
    id: 1,
    title: "CodeMania",
    shortDesc: "CodeMania is where coding meets competition.",
    longDesc: "Structured like a championship showdown, this high-intensity programming challenge pushes participants to solve algorithmic problems under strict time limits. Across multiple rounds of increasing difficulty, speed, strategy, and precision decide who climbs the leaderboard. Designed to simulate real technical recruitment environments, CodeMania sharpens problem-solving skills, coding efficiency, and performance under pressure.",
    icon: <Code />,
    color: "from-blue-600 to-indigo-600",
    date: "Saturday",
    time: "9:00 AM - 12:00 PM",
    poster: null
  },
  {
    id: 2,
    title: "Repo to Revenue",
    shortDesc: "Build smart. Pitch sharp. Scale bigger. Because in this arena, it’s not enough to build.",
    longDesc: "In this high-stakes techno-business simulation, teams analyze real open-source systems, evaluate their scalability and security, and redesign them with stronger architecture and performance in mind. But it doesn’t stop at tech — participants must identify market opportunities and craft sustainable revenue models that turn innovation into impact. Blending system design with product strategy, cost analysis, and business viability, this event challenges teams to think beyond development — and build solutions that win both technically and commercially.",
    icon: <Rocket />,
    color: "from-rose-600 to-red-600",
    date: "Saturday",
    time: "1:00 PM - 4:00 PM",
    poster: null
  },
  {
    id: 3,
    title: "Escape Room",
    shortDesc: "Escape Room is a race against time and logic.",
    longDesc: "In this multi-level problem-solving showdown, teams decode cryptic clues, crack logical puzzles, and navigate constraint-based challenges under intense time pressure. Every round demands precision, coordination, and sharp decision-making. Communication is your strategy. Reasoning is your weapon. Time is your opponent. Designed to simulate high-pressure, real-world scenarios, Escape Room strengthens analytical thinking, collaborative problem-solving, and the ability to perform when the clock is ticking. Beat the clock. Break the code.",
    icon: <Lock />,
    color: "from-emerald-500 to-green-600",
    date: "Saturday",
    time: "4:00 PM - 6:00 PM",
    poster: null
  },
  {
    id: 4,
    title: "PoliTech Debate",
    shortDesc: "Pitch bold. Rebut sharper. Lead smarter.",
    longDesc: "PoliTech is a battle of ideologies under pressure. In this high-intensity governance simulation, teams form their own political parties, craft data-driven visions, and compete in structured policy debates. From tackling socio-technical challenges to navigating surprise crisis scenarios, every round tests strategy, leadership, and decision-making when the stakes are high.",
    icon: <MessageSquare />,
    color: "from-violet-600 to-purple-600",
    date: "Sunday",
    time: "9:00 AM - 12:00 PM",
    poster: null
  },
  {
    id: 5,
    title: "Insignia Bingo League",
    shortDesc: "Plan smart. Move fast. Claim the grid.",
    longDesc: "Insignia Bingo League is strategy in motion. In this high-energy campus challenge, teams navigate a competitive grid, completing logical checkpoints under strict time limits. Every move demands planning, adaptability, and sharp coordination as participants race to optimize their path and outplay the competition. Strategy sets the route. Execution secures the win. Blending logical reasoning with real-time decision-making, the Bingo League transforms the campus into a dynamic arena where speed, precision, and teamwork decide the leaderboard.",
    icon: <Map />,
    color: "from-amber-400 to-orange-500",
    date: "Sunday",
    time: "1:00 PM - 4:00 PM",
    poster: null
  },
  {
    id: 6,
    title: "Sports Trivia",
    shortDesc: "Quick thinking earns points.",
    longDesc: "Sports Logical Quiz is a fast-paced battle of knowledge and logic. This multi-round competition challenges teams to think critically and respond under strict time limits. From rapid-fire questions to analytical twists, participants tackle diverse sports disciplines that test accuracy, pattern recognition, and decision-making speed.",
    icon: <Trophy />,
    color: "from-cyan-500 to-blue-500",
    date: "Sunday",
    time: "4:00 PM - 6:00 PM",
    poster: null
  }
];