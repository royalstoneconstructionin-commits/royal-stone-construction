import { Building2, Compass, DraftingCompass, Hammer, PaintBucket, Ruler, Layers, ShieldCheck, RefreshCw } from "lucide-react";

export const serviceLinks = [
  ["Architecture", "/services/architecture"],
  ["Construction With Material", "/services/construction"],
  ["Interior Design", "/services/interior-design"],
  ["Turnkey Projects", "/services/turnkey-projects"],
  ["Vastu Shastra", "/services/vastu"],
] as const;

export const services = [
  { slug: "architecture", title: "Architecture", icon: DraftingCompass, text: "Smart planning, floor plans, elevations and practical architectural design.", items: ["House map planning", "Floor planning", "2D plans", "3D elevation", "Space planning", "Residential architecture", "Commercial architecture"], benefit: "Thoughtful layouts make the most of your plot, natural light and everyday routines. Coordinated drawings give your construction team a clear starting point.", steps: ["Discuss your plot, lifestyle and budget", "Review site conditions and space requirements", "Develop and refine the floor plan", "Coordinate elevations and working drawings"] },
  { slug: "construction", title: "Construction With Material", icon: Hammer, text: "End-to-end construction execution with planned material and quality control.", items: ["Complete house construction", "Material supply", "Labour management", "Site supervision", "Structural work", "Electrical work", "Plumbing work", "Flooring", "Painting", "Finishing", "Quality control"], benefit: "One coordinated team manages materials, labour and site progress. Material specifications and inspection checkpoints are agreed before execution, with updates throughout the build.", steps: ["Confirm drawings, scope and quotation", "Agree material specifications and a project timeline", "Prepare the site and execute structural work", "Coordinate electrical, plumbing and finishes", "Inspect quality and complete handover"] },
  { slug: "interior-design", title: "Interior Design", icon: PaintBucket, text: "Functional and attractive interiors for homes, offices and commercial spaces.", items: ["Home interior", "Bedroom", "Living room", "Kitchen", "Modular kitchen", "Office interior", "False ceiling", "Furniture", "Lighting", "Colour planning", "Complete interior execution"], benefit: "Interiors should feel comfortable and work beautifully. We plan storage, circulation, lighting and finishes together so the result supports how you live or work.", steps: ["Understand your rooms, routines and style", "Plan layouts, furniture and storage", "Select colours, lighting and materials", "Coordinate installation and finishing", "Review details with you before handover"] },
  { slug: "turnkey-projects", title: "Turnkey Projects", icon: Building2, text: "A complete project, from your first brief to final handover, through one coordinated workflow.", items: ["Planning", "Architecture", "Material", "Construction", "Interior", "Finishing", "Project Handover"], benefit: "A single point of coordination brings design decisions, material choices and site execution together. Your agreed scope and milestones guide each stage of delivery.", steps: ["Planning and requirement collection", "Architecture and coordinated drawings", "Material selection and procurement", "Construction and site supervision", "Interior execution and finishing", "Quality review and project handover"] },
  { slug: "floor-planning", title: "Floor Planning", icon: Ruler, text: "Efficient layouts that balance room sizes, circulation, daylight and future needs.", items: ["Plot assessment", "Room layouts", "Circulation planning", "Daylight and ventilation", "Furniture placement", "Plan revisions"], benefit: "A well-organised floor plan helps you make decisions before construction begins, reducing avoidable layout changes on site.", steps: ["Collect plot dimensions and requirements", "Explore layout options", "Review room relationships and usability", "Finalise the agreed plan"] },
  { slug: "elevation", title: "2D/3D Elevation", icon: Layers, text: "Explore proportions, finishes and the character of your building before execution.", items: ["2D elevation drawings", "3D front elevation", "Facade proportions", "Exterior finishes", "Colour studies", "Design coordination"], benefit: "See how your exterior comes together and compare finishes before committing to site work.", steps: ["Review the approved floor plan", "Develop elevation options", "Review materials and colours", "Coordinate the final design"] },
  { slug: "structural-planning", title: "Structural Planning", icon: ShieldCheck, text: "Coordinated structural drawings that support practical and considered construction.", items: ["Column layout", "Foundation planning", "Beam and slab details", "Reinforcement drawings", "Staircase details", "Architectural coordination"], benefit: "Structural planning connects the architectural layout with detailed engineering and site execution. Final design depends on site conditions and engineering review.", steps: ["Review site information and architectural plans", "Coordinate structural requirements", "Prepare engineering details", "Support site clarification"] },
  { slug: "renovation", title: "Renovation", icon: RefreshCw, text: "Refresh existing spaces with a clear scope, coordinated work and thoughtful finishes.", items: ["Existing-space assessment", "Layout improvements", "Electrical and plumbing upgrades", "Flooring", "Painting", "Interior refresh"], benefit: "A planned renovation improves everyday comfort while taking the condition of your existing property into account.", steps: ["Inspect the existing space", "Agree priorities, scope and budget", "Plan work and minimise disruption", "Execute, inspect and hand over"] },
  { slug: "vastu", title: "Vastu Shastra", icon: Compass, text: "Traditional Vastu principles integrated with modern architectural planning.", items: ["Residential consultation", "Vastu-based house planning", "Commercial spaces", "Plot direction review", "Room placement guidance", "Existing-home review", "2D floor plan integration"], benefit: "Bring your traditional Vastu preferences into a practical architectural plan that considers your plot, everyday needs and building requirements.", steps: ["Share your plot details", "Discuss your requirements", "Review plot direction and layout", "Prepare Vastu-informed design suggestions", "Finalise the design after consultation"] },
];

export const reasons = [
  ["Professional Architects", "Practical planning that connects your ideas with usable spaces and coordinated drawings."],
  ["Experienced Construction Team", "Coordinated site teams for structural work, services and finishing."],
  ["Quality Materials", "Discussed specifications and material checks at the stages that matter."],
  ["Transparent Pricing", "A defined scope and detailed quotation before you commit to execution."],
  ["Project Supervision", "Site coordination and inspections to keep work aligned with the approved plan."],
  ["On-time Execution", "Agreed milestones and progress reviews, with clear communication about dependencies."],
  ["Customer Support", "A point of contact for your questions, decisions and project updates."],
  ["Complete Project Management", "Planning, procurement, construction and interiors brought into one workflow."],
];

export const processSteps = [
  ["Consultation", "Tell us your vision, location and initial budget."],
  ["Requirement Collection", "Agree spaces, priorities and the services you need."],
  ["Site Visit", "Review plot dimensions, access and site conditions."],
  ["Architecture & Planning", "Develop layouts and coordinate design details."],
  ["Quotation", "Review scope, specifications and proposed costs."],
  ["Approval", "Confirm drawings, selections and project milestones."],
  ["Construction", "Coordinate materials, labour and supervised site work."],
  ["Quality Inspection", "Check work against the agreed scope at key stages."],
  ["Interior / Finishing", "Bring together furniture, lighting and final finishes."],
  ["Final Handover", "Review the completed scope and close outstanding details."],
];
