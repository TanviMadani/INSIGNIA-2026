import { Code, Rocket, Lock, MessageSquare, Map, Trophy } from 'lucide-react';

/* --- EVENTS DATA --- */
export const EVENTS = [
  {
    id: 1,
    title: "CodeMania",
    shortDesc: "Competitive programming showdown focused on speed, logic, and optimization.",
    longDesc: "CodeMania is a high-intensity competitive programming contest emphasizing data structures, algorithms, and computational efficiency. Participants solve real-world problem statements under strict time constraints, demonstrating logical reasoning, code optimization, complexity analysis, and strong implementation skills across multiple difficulty levels.",
    icon: <Code />,
    color: "from-blue-600 to-indigo-600",
    date: "Saturday",
    time: "9:00 AM - 12:00 PM",
    poster: null
  },
  {
    id: 2,
    title: "Repo to Revenue",
    shortDesc: "Transform open-source ideas into scalable business models.",
    longDesc: "Repo to Revenue is a techno-business simulation where teams evaluate open-source systems for scalability, security, and performance. Participants design system architectures, identify market opportunities, and propose sustainable revenue models by integrating software engineering principles with product strategy, cost analysis, and business viability.",
    icon: <Rocket />,
    color: "from-rose-600 to-red-600",
    date: "Saturday",
    time: "1:00 PM - 4:00 PM",
    poster: null
  },
  {
    id: 3,
    title: "Escape Room",
    shortDesc: "Decode puzzles, crack cryptography, and beat the clock.",
    longDesc: "Escape Room is a structured problem-solving challenge requiring teams to decode logical puzzles, cryptographic clues, and constraint-based tasks within limited time. The event strengthens analytical thinking, collaborative debugging, and systematic reasoning, simulating real-world pressure scenarios that demand precision, coordination, and rapid decision-making.",
    icon: <Lock />,
    color: "from-emerald-500 to-green-600",
    date: "Saturday",
    time: "4:00 PM - 6:00 PM",
    poster: null
  },
  {
    id: 4,
    title: "PoliTech Debate",
    shortDesc: "Where technology meets policy and strategy.",
    longDesc: "PoliTech Debate integrates technology with policy simulation, enabling participants to present data-driven ideologies, debate socio-technical challenges, and manage crisis scenarios. The event develops strategic thinking, technical communication, leadership, and evidence-based decision-making through structured pitching, rebuttals, and governance modeling.",
    icon: <MessageSquare />,
    color: "from-violet-600 to-purple-600",
    date: "Sunday",
    time: "9:00 AM - 12:00 PM",
    poster: null
  },
  {
    id: 5,
    title: "Insignia Bingo League",
    shortDesc: "Strategy, navigation, and real-time campus challenges.",
    longDesc: "Insignia Bingo League is a strategy-based campus challenge combining logical tasks, navigation optimization, and real-time verification. Teams solve technical checkpoints using planning algorithms, adaptability, and collaboration, fostering problem decomposition, execution efficiency, and situational awareness in a dynamic competitive environment.",
    icon: <Map />,
    color: "from-amber-400 to-orange-500",
    date: "Sunday",
    time: "1:00 PM - 4:00 PM",
    poster: null
  },
  {
    id: 6,
    title: "Sports Logical Quiz",
    shortDesc: "Fast-paced sports quiz testing logic and accuracy.",
    longDesc: "Sports Logical Quiz is a rapid analytical competition designed to test domain knowledge, pattern recognition, and decision-making speed. Participants respond to time-critical questions spanning multiple sports disciplines, enhancing cognitive agility, accuracy, and competitive reasoning in a high-energy, technology-enabled quiz format.",
    icon: <Trophy />,
    color: "from-cyan-500 to-blue-500",
    date: "Sunday",
    time: "4:00 PM - 6:00 PM",
    poster: null
  }
];