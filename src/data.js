export const profile = {
  name: "Reyan DeLa Cruz",
  title: "Sr. Software Developer",
  tagline:
    "Software Engineer with 8 years of experience building APIs, data models, and modern web applications with Python, JavaScript, and cloud technologies.",
  location: "Rosario, Pasig City, Philippines",
  photo: `${process.env.PUBLIC_URL}/images/reyan-profile.jpg`,
  resumeUrl: "#contact",
};

export const socials = [
  { label: "GitHub", url: "https://github.com/reyandelacruz09" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/reyan-dela-cruz-26a447163/" },
  { label: "Email", url: "mailto:reyandelacruz09@gmail.com" },
];

export const contact = {
  email: "reyandelacruz09@gmail.com",
  phone: "09763092862",
};

export const about = {
  paragraph1:
    "I'm a Software Engineer with 8 years of experience engineering enterprise-grade applications across fintech, HR, procurement, and automotive industries. I specialize in building full-stack web applications, APIs, and database design, automating business processes with RPA, and delivering scalable solutions using Python, JavaScript, and modern cloud platforms.",
  paragraph2:
    "From building applicant tracking systems for Uniqlo and wiring comparison tools for Yazaki to developing RPA tools that automate financial reconciliation for SB Finance, I thrive on solving complex problems with clean, maintainable code. I'm passionate about leveraging modern tools like React, Django, FastAPI, Docker, and AWS to deliver real business value.",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "React Native", "JavaScript", "TypeScript", "Redux", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "Django", "Django REST", "FastAPI", "Flask", "PHP", "Java", "Node.js", "SQL", "PostgreSQL", "MySQL"],
  },
  {
    category: "Data & Analytics",
    items: ["NumPy", "Pandas", "Matplotlib", "Data Modeling", "Database Design"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "AWS", "Digital Ocean", "Git", "Linux", "Nginx", "CI/CD"],
  },
  {
    category: "Other",
    items: ["Zoho Creator", "Adobe Photoshop CS6", "Microsoft Office", "Agile Frameworks", "Manual & Automated Testing", "Analytical Thinking", "Teamwork"],
  },
];

export const projects = [
  {
    title: "RPA Financial Reconciliation Tool",
    description:
      "Built an RPA solution from scratch for SB Finance that automates financial reconciliation by extracting, validating, and matching transaction data across banking systems and internal records.",
    tech: ["Python", "Pandas", "NumPy", "Flask", "PostgreSQL", "Docker", "AWS Lambda", "Boto3"],
    github: "#",
    live: "#",
  },
  {
    title: "Applicant Tracker System (Uniqlo)",
    description:
      "Led development of a comprehensive applicant tracking system for Uniqlo, streamlining the recruitment workflow from application to onboarding.",
    tech: ["Python", "Django", "Django REST", "React", "JavaScript", "SQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Employee Portal (OODC)",
    description:
      "Led development of a full employee management web application with dashboards, attendance tracking, assessments, and reporting features.",
    tech: ["React", "Redux", "Django", "Django REST", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Monde Procurement System",
    description:
      "Led the development of an integrated procurement system managing vendor workflows, purchase orders, and inventory tracking.",
    tech: ["Python", "Django", "React", "JavaScript", "SQL", "Bootstrap"],
    github: "#",
    live: "#",
  },
  {
    title: "Burger Machine Integrated System",
    description:
      "Led development of an integrated business system covering operations, inventory, and reporting for Burger Machine.",
    tech: ["Python", "Django", "React", "JavaScript", "SQL"],
    github: "#",
    live: "#",
  },
  {
    title: "SRS V2 (Service Request System)",
    description:
      "Developed a web-based service request management system used across multiple departments to submit and track requests for the Support Team.",
      tech: ["React", "TypeScript", "TanStack Query", "Tailwind CSS", "Node.js", "Kysely"],
    github: "#",
    live: "#",
  },
  {
    title: "Wiring Comparison Tools (Yazaki)",
    description:
      "Developed RJ90 Wiring Comparison Tool & BOM Wiring Comparison Tool for the Yazaki Wiring Department to automate and streamline wiring data validation.",
    tech: ["FastAPI", "React", "TanStack Query"],
    github: "#",
    live: "#",
  },
];

export const experience = [
  {
    role: "Sr. Technical Support Analyst",
    company: "Yazaki",
    period: "Apr 2026 – Aug 2026",
    description:
      "Developed internal tools for the Wiring Department including RJ90 Wiring Comparison Tool and BOM Wiring Comparison Tool using FastAPI and React. Built SRS V2, a web-based service request management system used across multiple departments.",
  },
  {
    role: "Software Developer",
    company: "Vertere Global Solution, Inc.",
    period: "Apr 2025 – Feb 2026",
    description:
      "Built an RPA solution from scratch for SB Finance that automates financial reconciliation. Engineered and maintained RPA solution using Python, Pandas, NumPy, Flask, PostgreSQL, Docker, and AWS services (Lambda, Boto3).",
  },
  {
    role: "Sr. Software Developer",
    company: "One Out Source",
    period: "Mar 2023 – Mar 2025",
    description:
      "Lead developer for multiple projects including Applicant Tracker System (Uniqlo), Employee Portal (OODC), Monde Procurement System, and Burger Machine Integrated System. Engineered modern applications with Python, Django, React, TypeScript, and deployed on Digital Ocean and AWS.",
  },
  {
    role: "Software Engineer I",
    company: "Think DWM",
    period: "May 2019 – Mar 2023",
    description:
      "Implemented Psymetrics (requirements gathering, analysis, implementation, and testing). Engineered applications with Python, JavaScript, SQL, and React. Handled data modeling, database design, QA testing, and automated tests with Python.",
  },
  {
    role: "Associate Software Engineer",
    company: "Gotech Solutions, Inc.",
    period: "Jul 2018 – Jan 2019",
    description:
      "Provided day-to-day support and bug fixing using Java and JavaScript. Engineered modern applications with Java, JavaScript, and SQL.",
  },
];
export const education = {
  school: "College of Saint John Paul II Arts and Sciences",
  degree: "Bachelor of Science in Computer Science",
  period: "2014 – 2018",
  location: "Cainta, Rizal",
};

export const certifications = [
  { name: "Modern React with Redux", source: "Udemy", year: "2023" },
  { name: "Build a Backend REST API with Python & Django – Advanced", source: "Udemy", year: "2023" },
  { name: "Django & Django REST Framework with React Frontend", source: "Udemy", year: "2023" },
  { name: "Full-Stack Mobile App with React Native, Redux, Django & AWS", source: "Udemy", year: "2024" },
  { name: "DevOps Deployment Automation with Terraform, AWS, and Docker", source: "Udemy", year: "2025" },
  { name: "Python Django: Payment Gateways for Beginners", source: "Udemy", year: "2026" },
  { name: "Data Analysis with Pandas and Python", source: "Udemy", year: "2026" },
  { name: "FastAPI – The Complete Course 2026 (Beginner + Advanced)", source: "Udemy", year: "2026" },
];
