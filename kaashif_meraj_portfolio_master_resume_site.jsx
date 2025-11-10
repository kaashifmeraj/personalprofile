import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Rocket, Award, Briefcase, BookOpen, Wrench } from "lucide-react";

export default function Portfolio() {
  const skills = useMemo(
    () => ({
      "Product & Strategy": [
        "Product Lifecycle (PLM)",
        "Agile/Scrum",
        "Roadmapping",
        "Stakeholder Mgmt",
        "Go-to-Market",
      ],
      "AI/ML & Data": [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Data Analysis",
        "Predictive Modeling",
      ],
      "Automation & Robotics": [
        "ROS",
        "IoT/Embedded",
        "Control Systems",
        "Mechatronics",
        "Vision Systems",
      ],
      "Operations & Lean": [
        "Toyota Production System",
        "Lean/Six Sigma",
        "VSM",
        "Continuous Improvement",
        "Supply Chain",
      ],
      "Design & Frontend": [
        "Prototyping",
        "DFM/QA",
        "UI/UX",
        "Branding",
        "Technical Writing",
      ],
    }),
    []
  );

  const achievements = [
    {
      icon: <Award className="w-5 h-5" />,
      text:
        "Built and exited a sustainable hardware startup; shipped 100K+ units within six months.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      text:
        "Top 3 nationally in India’s National Innovation & Startup Policy Ideathon (2022 & 2023).",
    },
    {
      icon: <Award className="w-5 h-5" />,
      text:
        "Runner-up in Global Robotics Championship (RoboWar).",
    },
    {
      icon: <Award className="w-5 h-5" />,
      text:
        "Co-organized TIE Global Summit ’24, Google DevFest ’23 BLR, Microsoft React Weekends BLR (5K+ participants).",
    },
  ];

  const ventures = [
    {
      name: "JunkAI",
      blurb:
        "Smart waste-management & home automation using IoT sensors and AI optimization.",
    },
    {
      name: "Interned.io",
      blurb:
        "Hiring & internship matchmaking platform connecting founders and students.",
    },
    {
      name: "UpCut Media",
      blurb:
        "Creative digital agency for branding and media strategy across startups and events.",
    },
    {
      name: "SpawnLabs LLP",
      blurb:
        "Consulting for 35+ companies; $2M+ client revenue impact; 21% efficiency gains.",
    },
    {
      name: "AdBox Media",
      blurb:
        "Hospitality branding using custom-labeled water bottles as a marketing tool; 300+ clients in 90 days, 90% retention.",
    },
  ];

  const experience = [
    {
      period: "Aug 2025 – Present",
      role: "Lab Technician — Toyota Production Systems (RIT)",
      bullets: [
        "Designed and built robotic automation prototypes applying Toyota Lean principles to improve process efficiency by ~20%.",
        "Integrated robotics + AI control frameworks to boost system throughput and reliability.",
      ],
    },
    {
      period: "Apr 2025 – May 2025",
      role: "PR Manager — HumanBit",
      bullets: [
        "Organized hiring events with 28 partners, enabling 200+ successful placements.",
        "Elevated partner engagement via data-driven outreach and brand positioning.",
      ],
    },
    {
      period: "Feb 2025 – Apr 2025",
      role: "Business Development Associate — Bhanzu",
      bullets: [
        "$18K MRR across GCC region; supported 75+ students with tailored onboarding.",
        "Implemented CRM automations reducing response times and raising conversions.",
      ],
    },
    {
      period: "Dec 2024 – Jul 2025",
      role: "Founder — AdBox Media",
      bullets: [
        "Hospitality branding venture using water bottles as a marketing medium for restaurants and events.",
        "Served 300+ clients in 90 days with 90% retention through on-bottle promotions.",
      ],
    },
    {
      period: "May 2024 – Jan 2025",
      role: "Co-Founder — SpawnLabs LLP",
      bullets: [
        "Built and led consulting for 35+ companies, driving $2M+ client revenue.",
        "Improved operational efficiency by 21% via process redesign and digital transformation.",
      ],
    },
    {
      period: "Jan 2024 – Mar 2024",
      role: "Product Analyst — AuthLayer",
      bullets: [
        "Drove testing and bug resolution; collaborated on marketing, UI, and user research.",
        "Enhanced onboarding efficiency and increased adoption by ~40%.",
      ],
    },
    {
      period: "Apr 2024 – May 2024",
      role: "Product Engineer — CheckAG",
      bullets: [
        "Prototyped and tested industrial lab equipment; cut validation time ~30%.",
        "Strengthened QA compliance for deployment in testing facilities.",
      ],
    },
    {
      period: "Aug 2023 – Dec 2023",
      role: "Associate (Founder’s Office) — Zeuron.ai",
      bullets: [
        "Managed lifecycle of a Cognitive Biomechanical Console from sourcing to clinical delivery.",
        "Optimized vendor relations and logistics for on-time launch.",
      ],
    },
  ];

  const education = [
    {
      school: "Rochester Institute of Technology, NY, USA",
      detail: "Master’s in Engineering Management (Expected Jun 2027)",
    },
    {
      school: "Dayananda Sagar College of Engineering, Bangalore, India",
      detail: "B.Tech in Artificial Intelligence & Machine Learning (Jul 2025)",
    },
    {
      school: "Indian Institute of Technology (IIT) Goa",
      detail: "IoT & Robotics Certification (May 2023)",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 text-neutral-900">
      {/* Header / Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Kaashif Meraj</h1>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              Versatile engineer-entrepreneur across <span className="font-semibold">AI/ML, product engineering, robotics, and lean operations</span>.
              I build systems that move from concept to commercialization.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4"/>Rochester, NY, USA</span>
              <a className="inline-flex items-center gap-2 hover:underline" href="mailto:km6735@rit.edu"><Mail className="w-4 h-4"/>km6735@rit.edu</a>
              <a className="inline-flex items-center gap-2 hover:underline" href="tel:+15854068897"><Phone className="w-4 h-4"/>+1 (585) 406 8897</a>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://www.linkedin.com/in/kaashif-meraj" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4"/>LinkedIn</a>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://github.com/kaashifmeraj" target="_blank" rel="noreferrer"><Github className="w-4 h-4"/>GitHub</a>
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild className="rounded-2xl px-5">
                <a href="mailto:km6735@rit.edu?subject=Opportunity%20for%20Kaashif%20Meraj">Hire me</a>
              </Button>
              <Button variant="secondary" className="rounded-2xl px-5" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>
          <Card className="bg-white border-neutral-200 w-full md:w-[28rem]">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2"><Rocket className="w-5 h-5"/> Highlights</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {achievements.map((a, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                  <div className="mt-0.5 text-neutral-500">{a.icon}</div>
                  <p>{a.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2"><Wrench className="w-5 h-5"/> Areas of Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <Card key={group} className="bg-white border-neutral-200">
              <CardHeader className="pb-2"><CardTitle className="text-base">{group}</CardTitle></CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <Badge key={s} className="bg-neutral-100 border border-neutral-300" variant="secondary">{s}</Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2"><Briefcase className="w-5 h-5"/> Professional Experience</h2>
        <div className="grid gap-5">
          {experience.map((e) => (
            <Card key={e.role} className="bg-white border-neutral-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <span>{e.role}</span>
                  <span className="text-neutral-500 font-normal">{e.period}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-600">
                <ul className="list-disc pl-5 space-y-1.5">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ventures */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2"><Rocket className="w-5 h-5"/> Ventures</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((v) => (
            <Card key={v.name} className="bg-white border-neutral-200">
              <CardHeader className="pb-2"><CardTitle className="text-base">{v.name}</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">{v.blurb}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2"><BookOpen className="w-5 h-5"/> Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed) => (
            <Card key={ed.school} className="bg-white border-neutral-200">
              <CardHeader className="pb-2"><CardTitle className="text-base">{ed.school}</CardTitle></CardHeader>
              <CardContent className="text-sm text-neutral-600">{ed.detail}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <Card className="bg-white border-neutral-200">
          <CardHeader className="pb-2"><CardTitle>Let’s build something.</CardTitle></CardHeader>
          <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-neutral-600">
            <p>Open to roles across product, AI/ML, operations, and robotics. Available for consulting and venture collaborations.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl px-5"><a href="mailto:km6735@rit.edu">Email</a></Button>
              <Button asChild variant="secondary" className="rounded-2xl px-5"><a href="https://www.linkedin.com/in/kaashif-meraj" target="_blank" rel="noreferrer">LinkedIn</a></Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="max-w-6xl mx-auto px-6 pb-12 text-xs text-neutral-500">© {new Date().getFullYear()} Kaashif Meraj • Built with Tailwind & shadcn/ui</footer>
    </div>
  );
}
