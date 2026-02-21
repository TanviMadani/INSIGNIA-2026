import { Code, Rocket, Target, Brain, Zap, Shield } from 'lucide-react';

/* --- EVENTS DATA --- */
export const EVENTS = [
  {
    id: 1, title: "Codemania", subtitle: "Algorithmic Sprint",
    desc: "Speed coding battle. Optimize or get eliminated.",
    icon: <Code />, color: "from-blue-600 to-indigo-600",
    stat: "100m Sprint",
    poster: null // set to image URL when available, e.g. "/posters/codemania.jpg"
  },
  {
    id: 2, title: "Repo to Revenue", subtitle: "The Pitch Arena",
    desc: "Sell your open source project to the sharks.",
    icon: <Rocket />, color: "from-rose-600 to-red-600",
    stat: "Heavyweight",
    poster: null
  },
  {
    id: 3, title: "Tech Bingo", subtitle: "Precision Strike",
    desc: "Solve trivia to mark your territory on the board.",
    icon: <Target />, color: "from-emerald-500 to-green-600",
    stat: "Archery",
    poster: null
  },
  {
    id: 4, title: "Inquisitive", subtitle: "Tactical Knowledge",
    desc: "Rapid fire quiz on tech, sports, and culture.",
    icon: <Brain />, color: "from-violet-600 to-purple-600",
    stat: "Tennis",
    poster: null
  },
  {
    id: 5, title: "Design Derby", subtitle: "Creative Gymnastics",
    desc: "UI/UX challenges requiring balance and flow.",
    icon: <Zap />, color: "from-amber-400 to-orange-500",
    stat: "Gymnastics",
    poster: null
  },
  {
    id: 6, title: "CTF: Flags", subtitle: "Digital Orienteering",
    desc: "Capture the flag in a cybersecurity maze.",
    icon: <Shield />, color: "from-cyan-500 to-blue-500",
    stat: "Orienteering",
    poster: null
  }
];
