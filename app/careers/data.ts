export type CareerOpening = {
  id: string;
  title: string;
  team: string;
  type: string;
  location: string;
  summary: string;
  intro: string;
  stack: string[];
  whatYouWillDo: string[];
  requirements: string[];
  bonus?: string[];
  values: string[];
  engagement: string[];
  idealFor?: string[];
  applicationPrompt: string;
  accent: "blue" | "lime";
};

export type TeamMember = {
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
};

export type TeamGroup = {
  id: string;
  label: string;
  title: string;
  description: string;
  members: TeamMember[];
  tone: "white" | "lime";
};

export const careerOpenings: CareerOpening[] = [
  {
    id: "software-engineer-intern",
    title: "Product Engineer",
    team: "Product Engineering",
    type: "Temporarily unpaid internship",
    location: "Remote",
    summary:
      "Build end-to-end product features across web and mobile for startup and enterprise clients.",
    intro:
      "We are a fast-moving engineering agency building scalable web and mobile products for startups and enterprises.",
    stack: ["React", "TypeScript", "GraphQL", "Node.js", "GCP","Mongo DB","Apollo", "PostgreSQL"],
    whatYouWillDo: [
      "Build end-to-end features across web and mobile.",
      "Work with GraphQL APIs using Apollo.",
      "Translate product requirements into clean, scalable code.",
      "Collaborate on architecture and system design.",
      "Ship fast and iterate faster.",
    ],
    requirements: [
      "Strong experience with React and TypeScript.",
      "Experience with GraphQL, ideally Apollo.",
      "Familiarity with REST APIs and backend systems.",
      "Ability to work independently and ship features end-to-end.",
      "Strong problem-solving skills.",
    ],
    bonus: [
      "Experience with React Native.",
      "Experience with GCP.",
      "Experience working in startups or small teams.",
    ],
    values: ["Speed + quality", "Ownership mindset", "Clear communication"],
    engagement: ["Full-time or contract (flexible)", "Remote-friendly"],
    applicationPrompt:
      "Tell us about a feature or product you shipped recently and why it is relevant to this role.",
    accent: "blue",
  },
  {
    id: "frontend-engineer-ui-focus",
    title: "Design Engineer",
    team: "Frontend and Design Systems",
    type: "Temporarily unpaid internship",
    location: "Remote",
    summary:
      "Craft polished interfaces in React and React Native with strong motion, responsiveness, and visual consistency.",
    intro:
      "We are looking for a frontend engineer who cares deeply about execution quality, detail, and interface craft.",
    stack: ["React", "TypeScript", "React Native", "Design Systems", "Motion","Figma"],
    whatYouWillDo: [
      "Build polished, high-quality UIs in React and React Native.",
      "Implement design systems across multiple projects.",
      "Ensure consistency and responsiveness across devices.",
    ],
    requirements: [
      "Strong React and TypeScript skills.",
      "A strong eye for design and detail.",
      "Experience with animations and micro-interactions.",
      "Can understand and implement designs from Figma, without the help of a product designer.",
    ],
    values: ["Speed + quality", "Ownership mindset", "Clear communication"],
    engagement: ["Temporarily unpaid internship", "Remote-friendly"],
    idealFor: [
      "Freelancers looking for consistent project work.",
      "Engineers who enjoy crafting beautiful interfaces.",
    ],
    applicationPrompt:
      "Share a UI you are proud of and walk us through the details that made it feel polished.",
    accent: "lime",
  },
  {
    id: "graphic-designer-brand-visuals",
    title: "Graphic Designer",
    team: "Brand and Visual Design",
    type: "Temporarily unpaid internship",
    location: "Remote",
    summary:
      "Create bold visual assets across brand, social, marketing, and product storytelling.",
    intro:
      "We are looking for a graphic designer who can translate ideas into sharp, memorable visuals across digital touchpoints.",
    stack: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Brand Design",
      "Social Media Creative",
      "Presentation Design",
    ],
    whatYouWillDo: [
      "Design social media creatives, campaign assets, and branded marketing materials.",
      "Create presentation decks, pitch visuals, and lightweight web graphics.",
      "Help evolve Forge Studios' visual language across touchpoints.",
      "Turn rough concepts into polished, production-ready design assets.",
      "Collaborate closely with product, marketing, and leadership on creative direction.",
    ],
    requirements: [
      "Strong graphic design fundamentals in layout, typography, color, and composition.",
      "Confidence using tools like Figma, Photoshop, and Illustrator.",
      "A portfolio showing strong brand, marketing, or digital design work.",
      "Ability to work quickly while maintaining visual quality and consistency.",
      "Clear communication and comfort taking feedback into iteration.",
    ],
    bonus: [
      "Experience designing for startups or early-stage brands.",
      "Experience with lightweight motion design or short-form content.",
      "Familiarity with designing assets for web and product teams.",
    ],
    values: ["Speed + quality", "Ownership mindset", "Clear communication"],
    engagement: ["Temporarily unpaid internship", "Remote-friendly"],
    idealFor: [
      "Designers building a strong portfolio with real client and brand work.",
      "Creatives who enjoy shaping how a growing company looks and feels.",
    ],
    applicationPrompt:
      "Share 2-3 graphic design projects you are proud of and explain the creative decisions behind them.",
    accent: "blue",
  },
];

export const teamGroups: TeamGroup[] = [
  {
    id: "leadership",
    label: "Leadership",
    title: "The leadership team shaping Forge Studios.",
    description:
      "A cross-functional founding team spanning engineering, operations, finance, and product.",
    tone: "white",
    members: [
      {
        name: "Selasie Sepenu",
        role: "Co-founder, CEO/CTO",
        image: {
          src: "/team/seps.jpg",
          alt: "Portrait of Selasie Sepenu.",
          className: "object-center",
        },
      },
      {
        name: "Sir David Cann",
        role: "Co-founder, Chief of Operations",
        image: {
          src: "/team/david-cann.jpg",
          alt: "Two teammates in conversation beside a laptop.",
          className: "object-[55%_35%]",
        },
      },
      {
        name: "Ishmael Boye",
        role: "Co-founder, Chief Financial Officer",
        image: {
          src: "/hero-image-2.jpg",
          alt: "Engineer focused on work at a laptop.",
          className: "object-[center_18%]",
        },
      },
      {
        name: "Favour Mabdouku",
        role: "Co-founder, Chief Product Officer",
        image: {
          src: "/tl.jpg",
          alt: "Team member exploring immersive technology with a headset.",
          className: "object-[center_16%]",
        },
      },
    ],
  },
  {
    id: "team",
    label: "Core Team",
    title: "The builders turning ideas into shipped products.",
    description:
      "Engineers and designers working across delivery, solution design, and product craft.",
    tone: "lime",
    members: [
      {
        name: "Maranatha Odai",
        role: "Associate Software Engineer",
        image: {
          src: "/team/maranatha.jpeg",
          alt: "Portrait of Maranatha Odai.",
          className: "object-[center_18%]",
        },
      },
      {
        name: "Philipa Yeboah",
        role: "Solutions Engineer",
        image: {
          src: "/team/philipa.jpg",
          alt: "Portrait of Philipa Yeboah.",
          className: "object-[center_20%]",
        },
      },
      {
        name: "Faith",
        role: "Lead Product Designer",
        image: {
          src: "/ty.jpg",
          alt: "Designer arranging interface ideas on a whiteboard.",
          className: "object-[center_14%]",
        },
      },
      {
        name: "Adeiyola",
        role: "Associate Product Designer",
        image: {
          src: "/team/adieyola.jpeg",
          alt: "Portrait of Adeiyola.",
          className: "object-[center_18%]",
        },
      },
      {
        name: "Frderick Noble",
        role: "Graphic Designer",
        image: {
          src: "/noble.png",
          alt: "Portrait of Frderick Noble.",
          className: "object-center",
        },
      },
    ],
  },
];
