export interface ResearchArtifact {
  slug: string;
  title: string;
  subtitle: string;
  labFocus: string; // e.g., "Human-Computer Interaction / Critical AI"
  timeline: string;
  videoSrc: string;
  manuscriptUrl?: string; // Pre-print or formal writeup PDF
  repoUrl: string;
  demoUrl: string;
  techStack: string[];
  abstract: string;
  researchQuestions: string[];
  systemDesign: {
    title: string;
    description: string;
    methodology: string;
  }[];
  technicalChallenges: {
    hurdle: string;
    theoreticalOrSystemContext: string;
    implementation: string;
  }[];
  insightsAndFutureWork: string[];
}

export const researchArtifacts: Record<string, ResearchArtifact> = {
  "cultural-bias-audit-engine": {
    slug: "cultural-bias-audit-engine",
    title: "Auditing Algorithmic Hegemony in Linguistic Systems",
    subtitle:
      "A computational framework for detecting implicit bias and dialectal variance in institutional communication.",
    labFocus: "Critical Algorithmic Studies & NLP",
    timeline: "August 2026",
    videoSrc: "/CulturalBiasAppDemo.mp4",
    repoUrl: "https://github.com/brithecoder/cultural-bias-audit-engine",
    demoUrl: "https://cultural-bias-audit-engine.vercel.app/",
    techStack: ["Python", "FastAPI", "Groq API", "LLaMA 3", "NLP Parsing"],
    abstract:
      "Automated corporate and institutional text evaluation often conflates dialectal variation—specifically African American Vernacular English (AAVE)—with low professionalism. This project implements an automated linguistic evaluation engine designed to isolate microaggressions, implicit bias, and institutional tone policing, exploring how computational tooling can expose rather than reproduce dominant dialect hierarchies.",
    researchQuestions: [
      "How do large language models benchmark semantic professionalism across dialectal shifts (AAVE vs. Standard American English)?",
      "Can real-time linguistic heuristics surface covert interpersonal workplace microaggressions without over-relying on superficial keyword matching?",
    ],
    systemDesign: [
      {
        title: "Low-Latency Dialect Analysis Pipeline",
        description:
          "Built asynchronous evaluation pipelines using FastAPI and hardware-accelerated Groq inference to achieve sub-second comparative parsing.",
        methodology:
          "Subjected identical semantic propositions wrapped in differing cultural syntactic structures to structured qualitative scoring Rubrics.",
      },
    ],
    technicalChallenges: [
      {
        hurdle:
          "Preventing algorithmic complicity and psychological invalidation during tone evaluation.",
        theoreticalOrSystemContext:
          "In institutional settings, subtle microaggressions and tone policing are routinely minimized. Standard NLP models inherit these institutional biases, frequently misclassifying candid or culturally distinct phrasing as hostile while dismissing coded micro-hostilities as benign—functionally replicating workplace gaslighting.",
        implementation:
          "Structured a 3-tier Chain-of-Thought evaluation pipeline within the backend system prompts, enforcing strict sociolinguistic rubrics and Pydantic schema validation to ground detected subtext in concrete, traceable linguistic markers rather than subjective sentiment assumptions.",
      },
    ],
    insightsAndFutureWork: [
      "Demonstrated that standard alignment defaults disproportionately penalize indirect communicative styles common in marginalized speech communities.",
      "Future Work: Formalize a calibrated evaluation dataset for dialectal parity in collaborative workplace software.",
    ],
  },
  "graffiti-treaty": {
    slug: "graffiti-treaty",
    title: "Synchronous Non-Verbal Commons & Spatial Co-Creation",
    subtitle:
      "Investigating collaborative friction, spatial ownership, and expressive synchronization in real-time canvas architectures.",
    labFocus: "Human-Computer Interaction & Collaborative Systems",
    timeline: "May 2026",
    videoSrc: "/GraffitiTreatyDemo.mp4",
    repoUrl: "https://github.com/brithecoder/Graffiti-Treaty-Frontend",
    demoUrl: "https://graffiti-treaty.netlify.app",
    techStack: ["P5.js", "Socket.io", "React", "Node.js", "Express", "MongoDB"],
    abstract:
      "Shared virtual surfaces typically treat interaction as isolated edits or structured document updates. Graffiti Treaty was built as an experimental shared canvas exploring unstructured spatial negotiation, emergent territory formation, and real-time co-presence through an expressive P5.js vector drawing engine coupled with WebSockets.",
    researchQuestions: [
      "How do participants establish informal boundaries and collaborative protocols in persistent, unmoderated digital surfaces?",
      "What interaction latency threshold disrupts the perception of shared physical presence during synchronous artistic co-action?",
    ],
    systemDesign: [
      {
        title: "Vector Stream Aggregation & Collision Handling",
        description:
          "Implemented an event-driven broadcast system over WebSockets to synchronize stroke trajectories, pressure, and color blending across distributed clients.",
        methodology:
          "Optimized frame buffer draws within P5.js to prevent memory leaks during prolonged multi-agent creative sessions.",
      },
    ],
    technicalChallenges: [
      {
        hurdle:
          "Canvas degradation during concurrent multi-user stroke floods.",
        theoreticalOrSystemContext:
          "Rapid discrete WebSocket messages created DOM queue starvation and erratic P5 render passes.",
        implementation:
          "Developed client-side stroke batching and interpolation algorithms that smoothed jitter while maintaining sub-40ms perceived responsiveness.",
      },
    ],
    insightsAndFutureWork: [
      "Instead of protecting their own marks, contributors actively welcomed overlap. The high-energy, electric color palette and the shared thrill of building something collective dissolved individual ego, turning collision into intentional collaboration.",
      "Future Work: Deploy controlled eye-tracking and temporal logging to measure joint-attention dynamics in collaborative digital art.",
    ],
  },
  "pixel-embodied-agent": {
    slug: "pixel-embodied-agent",
    title: "Perceived Agency in Localized Human-Agent Dyads",
    subtitle:
      "Evaluating user trust, interaction friction, and conversational cadence with edge-hosted open-weights models.",
    labFocus: "Human-Robot / Human-Agent Interaction",
    timeline: "December 2025 – Present",
    videoSrc: "/PixelDemo.mp4",
    repoUrl: "https://github.com/brithecoder/AI-Powered-Friend-Frontend",
    demoUrl: "https://ai-powered-pixel.vercel.app/",
    techStack: [
      "Python",
      "FastAPI",
      "Ollama",
      "LLaMA 3.2",
      "React",
      "TypeScript",
    ],
    abstract:
      "Cloud-based conversational systems mask latency variations behind streaming loaders and abstract away user privacy. Pixel is an experimental conversational interface running on local weights to study how token-generation pacing, local hardware constraints, and continuous conversational memory affect user perceptions of artificial companionship.",
    researchQuestions: [
      "How does execution locality (local inference vs. external API) alter user willingness to disclose sensitive reflections?",
      "At what latency boundary does local LLM token generation shift from being perceived as 'thoughtful pause' to 'system failure'?",
    ],
    systemDesign: [
      {
        title: "Edge Model Orchestration",
        description:
          "Bridged a React client with an Ollama runtime via FastAPI, using local state persistence to manage conversation context without external tracking.",
        methodology:
          "Measured user dialogue cadence against varied inference speeds on consumer-tier Mac hardware.",
      },
    ],
    technicalChallenges: [
      {
        hurdle:
          "Managing memory allocation and context-window degradation during long-horizon sessions.",
        theoreticalOrSystemContext:
          "Context degradation caused repetitive conversational loops, degrading perceived artificial theory of mind.",
        implementation:
          "Structured a rolling conversational summary layer that condensed prior context turns into semantic primitives before feeding the context buffer.",
      },
    ],
    insightsAndFutureWork: [
      "Participants exhibited markedly higher trust markers and vulnerability when informed that zero telemetry left the local machine.",
      "Future Work: Couple edge conversational agents with physical robotic actuators to study multimodal embodiment.",
    ],
  },
};
