import type { ProjectItem } from "../types/project";

import p1 from "../assets/p1/p1-1.png";
import p2 from "../assets/p1/p1-2.png";
import p3 from "../assets/p1/p1-3.png";

import p4 from "../assets/p2/p2-1.png";
import p5 from "../assets/p2/p2-2.png";
import p6 from "../assets/p2/p2-3.png";

import p7 from "../assets/p3/p3-1.png";
import p8 from "../assets/p3/p3-2.png";
import p9 from "../assets/p3/p3-3.png";

export const projects: ProjectItem[] = [
  {
    num: "01",
    name: "IdeaVault",
    tagline: "Startup Idea Discovery & Collaboration Hub",
    label: "Startup Idea Discovery & Collaboration Hub",
    link: "https://ideavault-client-kmh1.vercel.app/",
    githubLink: "https://github.com/RizviBR0/ideavault-client",
    cardDescription:
      "A full-stack startup collaboration platform where innovators can discover ideas, share concepts, discuss opportunities, and manage their own startup ideas through a secure personal dashboard.",
    tags: ["Next.js", "React", "MongoDB", "Express.js", "Better Auth"],
    overview: [
      "IdeaVault is a full-stack startup idea discovery and collaboration platform designed for founders, creators, and innovators. Users can publish startup concepts, explore ideas from the community, join discussions, and manage their own submissions from a personalized dashboard.",
      "The platform combines startup discovery, community validation, authentication, CRUD operations, search, filtering, and user interactions within a responsive dark/light interface.",
    ],
    techStackDetailed: {
      frontend: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS 4",
        "HeroUI",
        "Better Auth",
        "React Hot Toast",
        "Lucide React",
      ],
      backend: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JOSE / JWT Authentication",
      ],
    },
    keyFeatures: [
      "Email/password and Google authentication",
      "Startup idea publishing and management",
      "Search and category-based filtering",
      "Community discussion system",
      "Comment editing and deletion",
      "Personal idea dashboard",
      "User interaction history",
      "Editable user profiles",
      "Dark and light themes",
      "Responsive mobile-first interface",
    ],
    challengesList: [
      {
        title: "Secure Client–Server Authentication",
        description:
          "One of the main challenges was securely connecting Better Auth on the Next.js client with a separate Express backend. JWT tokens and JWKS verification were used so protected API endpoints could validate authenticated users without tightly coupling the frontend and backend.",
      },
      {
        title: "Search and Filtering Experience",
        description:
          "The idea discovery system needed to remain responsive while users searched and changed categories. Debounced search and server-side filtering helped reduce unnecessary requests while keeping exploration fast.",
      },
      {
        title: "Managing User-Specific Data",
        description:
          "Ideas, comments, profiles, and interactions needed clear ownership rules. This required careful API authorization so users could modify only the content they owned.",
      },
      {
        title: "Consistent UI Across Themes",
        description:
          "Building a polished interface that worked equally well in dark and light modes required a scalable design-token system instead of isolated color styles.",
      },
    ],
    futureImprovementsList: [
      "Startup idea voting and validation scores",
      "Founder collaboration and team-building tools",
      "Bookmarking and saved idea collections",
      "Personalized idea recommendations",
      "Real-time discussions and notifications",
      "Advanced founder profiles",
      "Startup progress tracking",
      "AI-assisted idea evaluation",
      "Improved analytics for idea creators",
    ],
    gallery: [
      {
        title: "Main Discovery Feed",
        src: p1,
        caption: "Curated community feed featuring debounced search and category filtering",
      },
      {
        title: "Validation & Discussion",
        src: p2,
        caption: "In-depth concept page with interactive community validation threads",
      },
      {
        title: "Personal Founder Dashboard",
        src: p3,
        caption: "User profile & idea management interface with custom analytics",
      },
    ],
    images: {
      right: p1,
    },
    seoKeywords:
      "startup idea platform, startup collaboration platform, startup community, founder platform, startup idea validation, Next.js full-stack project, React portfolio project, MongoDB web application",
    specs: {
      category: "Startup Platform",
      architecture: "Next.js + Express Microservices",
      auth: "Better Auth + JWKS Verification",
      database: "MongoDB Atlas",
      year: "2025 – 2026",
      status: "Live Production",
    },
  },
  {
    num: "02",
    name: "Woff Space",
    tagline: "Instant File, Note & Code Sharing",
    label: "Instant File, Note & Code Sharing",
    link: "https://woff.space",
    githubLink: "https://github.com/RizviBR0/Woff",
    cardDescription:
      "A zero-friction sharing platform for instantly sending notes, files, images, PDFs, and code through temporary spaces, short room codes, shareable links, or QR codes—without requiring signup.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "ShadCN/UI"],
    overview: [
      "Woff Space is a privacy-focused instant sharing platform built to remove unnecessary friction from temporary file and information sharing.",
      "Users can create a temporary space with one click and instantly share notes, files, images, PDFs, or code using a simple four-digit room code, direct link, or QR code. No traditional signup process is required. Anonymous authentication works behind the scenes while maintaining secure ownership and access control.",
    ],
    techStackDetailed: {
      frontend: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN/UI",
        "Radix UI",
        "TipTap",
        "Framer Motion",
        "QR Code / QR Scanner",
      ],
      backend: [
        "Supabase",
        "PostgreSQL",
        "Supabase Storage",
        "Supabase Row Level Security",
        "Playwright",
        "Vercel",
      ],
    },
    keyFeatures: [
      "One-click temporary spaces",
      "No-signup sharing experience",
      "Four-digit room codes",
      "File and image sharing",
      "Rich-text notes",
      "Code snippet sharing",
      "PDF support",
      "Resumable file uploads",
      "Upload cancellation and retry",
      "QR code sharing and scanning",
      "Anonymous authentication",
      "Room ownership recovery",
      "Online shareable notepad",
      "Offline note drafts",
      "Versioned autosave",
      "Dark and light themes",
      "Privacy-aware analytics",
      "Responsive design",
      "SEO-optimized public pages",
    ],
    challengesList: [
      {
        title: "Removing Signup Without Sacrificing Security",
        description:
          "The core UX goal was to make sharing feel almost instant. Traditional authentication would introduce unnecessary friction, so anonymous Supabase authentication was used behind the scenes while still maintaining secure ownership.",
      },
      {
        title: "Reliable File Uploads",
        description:
          "Large or multiple uploads can easily fail because of unstable connections. The upload architecture therefore needed real byte-level progress, cancellation, retry handling, and atomic publishing.",
      },
      {
        title: "Protecting Anonymous User Data",
        description:
          "Anonymous access still requires strong authorization. Supabase Row Level Security and restricted database operations were designed so users could access only the resources they owned or were permitted to view.",
      },
      {
        title: "Room Ownership Recovery",
        description:
          "Temporary sessions can disappear when browser storage is cleared. A recovery-key system was introduced so users can restore ownership without creating traditional accounts.",
      },
      {
        title: "Balancing Simplicity and Advanced Features",
        description:
          "Woff contains notes, files, code, QR sharing, uploads, recovery, themes, and offline functionality. The challenge was keeping those capabilities available without making the interface feel complex.",
      },
    ],
    futureImprovementsList: [
      "Real-time collaborative notes",
      "Optional password-protected spaces",
      "Configurable expiration times",
      "End-to-end encrypted sharing",
      "Collaborative rooms with multiple contributors",
      "Improved mobile QR scanning",
      "Temporary voice and media sharing",
      "Progressive Web App support",
      "Cross-device room recovery",
      "Smarter file previews",
      "Optional registered accounts for permanent spaces",
    ],
    gallery: [
      {
        title: "Temporary Space Workspace",
        src: p4,
        caption: "Minimalist workspace enabling instant file drops and live note taking",
      },
      {
        title: "Multi-Format Sharing Hub",
        src: p5,
        caption: "Rich-text notes, PDF preview, and chunked resumable file upload system",
      },
      {
        title: "Code Sharing & Room Codes",
        src: p6,
        caption: "Code editor integration and 4-digit instant room code generation",
      },
    ],
    images: {
      right: p4,
    },
    seoKeywords:
      "instant file sharing, temporary file sharing, no signup file sharing, online note sharing, code sharing platform, anonymous file sharing, QR file sharing, Woff Space, Next.js Supabase project",
    specs: {
      category: "Instant Utility & Sharing",
      architecture: "Next.js 15 Server Components",
      auth: "Supabase Anonymous Auth + RLS",
      database: "PostgreSQL & Supabase Storage",
      year: "2025 – 2026",
      status: "Live Production",
    },
  },
  {
    num: "03",
    name: "Loome",
    tagline: "Design Discovery & Creative Community Platform",
    label: "Design Discovery & Creative Community Platform",
    link: "https://loome-client.vercel.app/",
    githubLink: "https://github.com/RizviBR0/loome-client",
    cardDescription:
      "A modern design-sharing platform where creatives can publish work, discover visual inspiration, engage with designers, and manage their portfolio through creator and admin dashboards.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Express.js", "Better Auth"],
    overview: [
      "Loome is a full-stack design discovery and publishing platform built for designers and creative professionals.",
      "It allows creators to publish visual work, explore designs from the community, search and filter inspiration, engage through likes and comments, and manage their published work from a dedicated Studio dashboard. The platform also includes moderation tools and analytics for administrators, creating a complete ecosystem for design publishing, discovery, engagement, and platform management.",
    ],
    techStackDetailed: {
      frontend: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Better Auth",
        "MongoDB",
        "Lucide React",
        "Recharts",
        "React Hot Toast",
      ],
      backend: [
        "Node.js",
        "Express.js 5",
        "TypeScript",
        "MongoDB",
        "JOSE",
        "JWT / JWKS Authentication",
        "CORS",
      ],
    },
    keyFeatures: [
      "Design publishing",
      "Design discovery feed",
      "Search and filtering",
      "Category filtering",
      "Tool-based filtering",
      "Color-based filtering",
      "Newest, most-liked, and most-viewed sorting",
      "Detailed project galleries",
      "View tracking",
      "Likes and comments",
      "Design reporting",
      "Creator Studio dashboard",
      "Design editing and management",
      "Secure authentication",
      "Protected creator routes",
      "Admin dashboard",
      "Platform analytics",
      "Report moderation",
      "User management",
      "Design moderation",
      "Responsive layouts",
    ],
    challengesList: [
      {
        title: "Building Flexible Design Discovery",
        description:
          "Creative platforms need more than basic search. Loome required search, categories, tools, colors, popularity, views, and recency to work together without making the browsing experience complicated.",
      },
      {
        title: "Managing Different User Roles",
        description:
          "Regular visitors, designers, content owners, and administrators require different permissions. Authentication and authorization were structured carefully across both frontend routes and backend APIs.",
      },
      {
        title: "Design Ownership and Moderation",
        description:
          "Creators need control over their work while administrators need platform-level moderation. The API therefore separates ownership-based permissions from administrator-level actions.",
      },
      {
        title: "Tracking Engagement",
        description:
          "Views, likes, comments, reports, and creator activity generate multiple interconnected data flows. Keeping these interactions consistent while supporting analytics required careful database and API design.",
      },
      {
        title: "Keeping a Visual Platform Responsive",
        description:
          "Design-heavy platforms naturally contain large imagery and galleries. Maintaining an editorial visual experience while supporting mobile, tablet, and desktop layouts was an important UI challenge.",
      },
    ],
    futureImprovementsList: [
      "Designer following system",
      "Personalized discovery feeds",
      "Saved collections and moodboards",
      "Designer messaging",
      "Advanced creator profiles",
      "Team and agency accounts",
      "AI-powered design recommendations",
      "Similar-design discovery",
      "Design job opportunities",
      "Creator analytics",
      "Design challenges and competitions",
      "Better image optimization and CDN delivery",
      "Real-time notifications",
      "Advanced moderation workflows",
    ],
    gallery: [
      {
        title: "Curated Discovery Feed",
        src: p7,
        caption: "High-density editorial visual grid with multi-attribute filtering",
      },
      {
        title: "Creator Studio & Showcase",
        src: p8,
        caption: "Project showcase with full palette extraction and engagement metrics",
      },
      {
        title: "Admin Analytics & Moderation",
        src: p9,
        caption: "Platform health dashboard with Recharts analytics and moderation queues",
      },
    ],
    images: {
      right: p7,
    },
    seoKeywords:
      "design sharing platform, designer community, creative portfolio platform, design inspiration website, UI UX design community, design discovery platform, Next.js portfolio project, full-stack design application",
    specs: {
      category: "Design & Creative Portfolio",
      architecture: "Next.js 16 + Express.js 5 API",
      auth: "Better Auth + JOSE JWT / JWKS",
      database: "MongoDB Atlas",
      year: "2025 – 2026",
      status: "Live Production",
    },
  },
];
