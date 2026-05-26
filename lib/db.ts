import { DailyTasks, Timesheet } from "@/types";

export const timesheets: Timesheet[] = [
  {
    id: 1,
    week: 1,
    dateRange: "1 - 5 January, 2024",
    totalHours: 20,
    status: "INCOMPLETE",
    startDate: "2024-01-01",
    endDate: "2024-01-05",
  },
  {
    id: 2,
    week: 2,
    dateRange: "8 - 12 January, 2024",
    totalHours: 40,
    status: "COMPLETED",
    startDate: "2024-01-08",
    endDate: "2024-01-12",
  },
  {
    id: 3,
    week: 3,
    dateRange: "15 - 19 January, 2024",
    totalHours: 0,
    status: "MISSING",
    startDate: "2024-01-15",
    endDate: "2024-01-19",
  },
  {
    id: 4,
    week: 4,
    dateRange: "22 - 26 January, 2024",
    totalHours: 42,
    status: "COMPLETED",
    startDate: "2024-01-22",
    endDate: "2024-01-26",
  },
  {
    id: 5,
    week: 5,
    dateRange: "29 January - 2 February, 2024",
    totalHours: 35,
    status: "INCOMPLETE",
    startDate: "2024-01-29",
    endDate: "2024-02-02",
  },
  {
    id: 6,
    week: 6,
    dateRange: "5 - 9 February, 2024",
    totalHours: 40,
    status: "COMPLETED",
    startDate: "2024-02-05",
    endDate: "2024-02-09",
  },
  {
    id: 7,
    week: 7,
    dateRange: "12 - 16 February, 2024",
    totalHours: 0,
    status: "MISSING",
    startDate: "2024-02-12",
    endDate: "2024-02-16",
  },
  {
    id: 8,
    week: 8,
    dateRange: "19 - 23 February, 2024",
    totalHours: 45,
    status: "COMPLETED",
    startDate: "2024-02-19",
    endDate: "2024-02-23",
  },
  {
    id: 9,
    week: 9,
    dateRange: "26 February - 1 March, 2024",
    totalHours: 16,
    status: "INCOMPLETE",
    startDate: "2024-02-26",
    endDate: "2024-03-01",
  },
  {
    id: 10,
    week: 10,
    dateRange: "4 - 8 March, 2024",
    totalHours: 40,
    status: "COMPLETED",
    startDate: "2024-03-04",
    endDate: "2024-03-08",
  },
  {
    id: 11,
    week: 11,
    dateRange: "11 - 15 March, 2024",
    totalHours: 40,
    status: "COMPLETED",
    startDate: "2024-03-11",
    endDate: "2024-03-15",
  },
  {
    id: 12,
    week: 12,
    dateRange: "18 - 22 March, 2024",
    totalHours: 0,
    status: "MISSING",
    startDate: "2024-03-18",
    endDate: "2024-03-22",
  },
  {
    id: 13,
    week: 13,
    dateRange: "25 - 29 March, 2024",
    totalHours: 40,
    status: "COMPLETED",
    startDate: "2024-03-25",
    endDate: "2024-03-29",
  },
  {
    id: 14,
    week: 14,
    dateRange: "1 - 5 April, 2024",
    totalHours: 38,
    status: "INCOMPLETE",
    startDate: "2024-04-01",
    endDate: "2024-04-05",
  },
  {
    id: 15,
    week: 15,
    dateRange: "8 - 12 April, 2024",
    totalHours: 40,
    status: "COMPLETED",
    startDate: "2024-04-08",
    endDate: "2024-04-12",
  },
  {
    id: 16,
    week: 16,
    dateRange: "15 - 19 April, 2024",
    totalHours: 0,
    status: "MISSING",
    startDate: "2024-04-15",
    endDate: "2024-04-19",
  },
  {
    id: 17,
    week: 17,
    dateRange: "22 - 26 April, 2024",
    totalHours: 44,
    status: "COMPLETED",
    startDate: "2024-04-22",
    endDate: "2024-04-26",
  },
  {
    id: 18,
    week: 18,
    dateRange: "29 April - 3 May, 2024",
    totalHours: 40,
    status: "COMPLETED",
    startDate: "2024-04-29",
    endDate: "2024-05-03",
  },
  {
    id: 19,
    week: 19,
    dateRange: "6 - 10 May, 2024",
    totalHours: 24,
    status: "INCOMPLETE",
    startDate: "2024-05-06",
    endDate: "2024-05-10",
  },
  {
    id: 20,
    week: 20,
    dateRange: "13 - 17 May, 2024",
    totalHours: 40,
    status: "COMPLETED",
    startDate: "2024-05-13",
    endDate: "2024-05-17",
  },
  {
    id: 21,
    week: 21,
    dateRange: "20 - 24 May, 2024",
    totalHours: 0,
    status: "MISSING",
    startDate: "2024-05-20",
    endDate: "2024-05-24",
  },
  {
    id: 22,
    week: 22,
    dateRange: "27 - 31 May, 2024",
    totalHours: 48,
    status: "COMPLETED",
    startDate: "2024-05-27",
    endDate: "2024-05-31",
  },
  {
    id: 23,
    week: 23,
    dateRange: "3 - 7 June, 2024",
    totalHours: 40,
    status: "COMPLETED",
    startDate: "2024-06-03",
    endDate: "2024-06-07",
  },
];

export const entriesData: Record<number, DailyTasks[]> = {
  1: [
    {
      date: "Jan 1",
      entries: [
        {
          id: 1,
          date: "Jan 1",
          title: "Homepage Development",
          project: "Website",
          typeOfWork: "Development",
          description: "Homepage UI development",
          hours: 4,
        },
        {
          id: 2,
          date: "Jan 1",
          title: "Bug Fix",
          project: "Website",
          typeOfWork: "Bug fixes",
          description: "Navbar bug fixing",
          hours: 4,
        },
      ],
    },
    {
      date: "Jan 2",
      entries: [
        {
          id: 3,
          date: "Jan 2",
          title: "Dashboard UI",
          project: "Admin Panel",
          typeOfWork: "Development",
          description: "Dashboard card design",
          hours: 12,
        },
      ],
    },
  ],
  2: [
    {
      date: "Jan 8",
      entries: [
        {
          id: 4,
          date: "Jan 8",
          title: "Database Setup",
          project: "Backend",
          typeOfWork: "Development",
          description: "Setup PostgreSQL schema",
          hours: 8,
        },
      ],
    },
    {
      date: "Jan 9",
      entries: [
        {
          id: 5,
          date: "Jan 9",
          title: "API Development",
          project: "Backend",
          typeOfWork: "Development",
          description: "Implement Auth endpoints",
          hours: 8,
        },
      ],
    },
    {
      date: "Jan 10",
      entries: [
        {
          id: 6,
          date: "Jan 10",
          title: "Frontend Auth integration",
          project: "Website",
          typeOfWork: "Development",
          description: "Integrate NextAuth with frontend",
          hours: 8,
        },
      ],
    },
    {
      date: "Jan 11",
      entries: [
        {
          id: 7,
          date: "Jan 11",
          title: "Testing & Code Review",
          project: "Website",
          typeOfWork: "Testing",
          description: "Run unit and integration tests",
          hours: 8,
        },
      ],
    },
    {
      date: "Jan 12",
      entries: [
        {
          id: 8,
          date: "Jan 12",
          title: "Deployment",
          project: "DevOps",
          typeOfWork: "Deployment",
          description: "Configure Vercel deployment pipeline",
          hours: 8,
        },
      ],
    },
  ],
  3: [],
  4: [
    {
      date: "Jan 22",
      entries: [
        {
          id: 9,
          date: "Jan 22",
          title: "Requirements Analysis",
          project: "Client Portal",
          typeOfWork: "Planning",
          description: "Stakeholder interview and requirements mapping",
          hours: 6,
        },
        {
          id: 10,
          date: "Jan 22",
          title: "Architecture Design",
          project: "Client Portal",
          typeOfWork: "Planning",
          description: "Design system architecture",
          hours: 4,
        },
      ],
    },
    {
      date: "Jan 23",
      entries: [
        {
          id: 11,
          date: "Jan 23",
          title: "Database Migration",
          project: "Client Portal",
          typeOfWork: "Development",
          description: "Define Prisma schemas and run migrations",
          hours: 8,
        },
      ],
    },
    {
      date: "Jan 24",
      entries: [
        {
          id: 12,
          date: "Jan 24",
          title: "API Endpoints",
          project: "Client Portal",
          typeOfWork: "Development",
          description: "Implement client CRUD APIs",
          hours: 8,
        },
      ],
    },
    {
      date: "Jan 25",
      entries: [
        {
          id: 13,
          date: "Jan 25",
          title: "UI Layout",
          project: "Client Portal",
          typeOfWork: "Development",
          description: "Create main dashboard layouts",
          hours: 8,
        },
      ],
    },
    {
      date: "Jan 26",
      entries: [
        {
          id: 14,
          date: "Jan 26",
          title: "Refactoring",
          project: "Client Portal",
          typeOfWork: "Development",
          description: "Refactor state management",
          hours: 8,
        },
      ],
    },
  ],
  5: [
    {
      date: "Jan 29",
      entries: [
        {
          id: 15,
          date: "Jan 29",
          title: "UI Refinement",
          project: "Website",
          typeOfWork: "Development",
          description: "Refine hero section animations",
          hours: 8,
        },
      ],
    },
    {
      date: "Jan 30",
      entries: [
        {
          id: 16,
          date: "Jan 30",
          title: "Analytics Setup",
          project: "Website",
          typeOfWork: "Development",
          description: "Setup Google Tag Manager",
          hours: 8,
        },
      ],
    },
    {
      date: "Jan 31",
      entries: [
        {
          id: 17,
          date: "Jan 31",
          title: "SEO Optimization",
          project: "Website",
          typeOfWork: "Development",
          description: "Add meta tags and sitemap generator",
          hours: 8,
        },
      ],
    },
    {
      date: "Feb 1",
      entries: [
        {
          id: 18,
          date: "Feb 1",
          title: "User Testing",
          project: "Website",
          typeOfWork: "Testing",
          description: "Conducted remote user testing sessions",
          hours: 6,
        },
      ],
    },
    {
      date: "Feb 2",
      entries: [
        {
          id: 19,
          date: "Feb 2",
          title: "Sprint Retrospective",
          project: "Website",
          typeOfWork: "Meeting",
          description: "Discuss improvements for next sprint",
          hours: 5,
        },
      ],
    },
  ],
  6: [
    {
      date: "Feb 5",
      entries: [
        {
          id: 20,
          date: "Feb 5",
          title: "Task Management API",
          project: "Admin Panel",
          typeOfWork: "Development",
          description: "Create backend logic for tasks",
          hours: 8,
        },
      ],
    },
    {
      date: "Feb 6",
      entries: [
        {
          id: 21,
          date: "Feb 6",
          title: "Kanban Board Component",
          project: "Admin Panel",
          typeOfWork: "Development",
          description: "Develop drag and drop column UI",
          hours: 8,
        },
      ],
    },
    {
      date: "Feb 7",
      entries: [
        {
          id: 22,
          date: "Feb 7",
          title: "State Syncing",
          project: "Admin Panel",
          typeOfWork: "Development",
          description: "Integrate API with frontend drag and drop",
          hours: 8,
        },
      ],
    },
    {
      date: "Feb 8",
      entries: [
        {
          id: 23,
          date: "Feb 8",
          title: "Filters & Search",
          project: "Admin Panel",
          typeOfWork: "Development",
          description: "Implement search and status filtering on board",
          hours: 8,
        },
      ],
    },
    {
      date: "Feb 9",
      entries: [
        {
          id: 24,
          date: "Feb 9",
          title: "Bug fixing & QA",
          project: "Admin Panel",
          typeOfWork: "Testing",
          description: "Fix drag-drop edge cases and test",
          hours: 8,
        },
      ],
    },
  ],
  7: [],
  8: [
    {
      date: "Feb 19",
      entries: [
        {
          id: 25,
          date: "Feb 19",
          title: "Payment Gateway Research",
          project: "E-commerce",
          typeOfWork: "Research",
          description: "Compare Stripe and PayPal APIs",
          hours: 9,
        },
      ],
    },
    {
      date: "Feb 20",
      entries: [
        {
          id: 26,
          date: "Feb 20",
          title: "Stripe Integration",
          project: "E-commerce",
          typeOfWork: "Development",
          description: "Implement checkout session creation",
          hours: 9,
        },
      ],
    },
    {
      date: "Feb 21",
      entries: [
        {
          id: 27,
          date: "Feb 21",
          title: "Webhooks Handler",
          project: "E-commerce",
          typeOfWork: "Development",
          description: "Process Stripe checkout completed webhooks",
          hours: 9,
        },
      ],
    },
    {
      date: "Feb 22",
      entries: [
        {
          id: 28,
          date: "Feb 22",
          title: "Order Management UI",
          project: "E-commerce",
          typeOfWork: "Development",
          description: "Design and build user purchase history",
          hours: 9,
        },
      ],
    },
    {
      date: "Feb 23",
      entries: [
        {
          id: 29,
          date: "Feb 23",
          title: "Testing Payments",
          project: "E-commerce",
          typeOfWork: "Testing",
          description: "Run end-to-end payment flow tests",
          hours: 9,
        },
      ],
    },
  ],
  9: [
    {
      date: "Feb 26",
      entries: [
        {
          id: 30,
          date: "Feb 26",
          title: "Project Kickoff",
          project: "Mobile App",
          typeOfWork: "Meeting",
          description: "Initial team briefing and task assignments",
          hours: 8,
        },
      ],
    },
    {
      date: "Feb 27",
      entries: [
        {
          id: 31,
          date: "Feb 27",
          title: "Figma Review",
          project: "Mobile App",
          typeOfWork: "Planning",
          description: "Review user interface mockups with designer",
          hours: 8,
        },
      ],
    },
  ],
  10: [
    {
      date: "Mar 4",
      entries: [
        {
          id: 32,
          date: "Mar 4",
          title: "Setup React Native",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Initialize repository and configure typescript",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 5",
      entries: [
        {
          id: 33,
          date: "Mar 5",
          title: "Navigation Flow",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Configure react-navigation stack and tabs",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 6",
      entries: [
        {
          id: 34,
          date: "Mar 6",
          title: "Login Screen UI",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Implement custom login input forms",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 7",
      entries: [
        {
          id: 35,
          date: "Mar 7",
          title: "API Integration",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Connect login screen with auth endpoint",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 8",
      entries: [
        {
          id: 36,
          date: "Mar 8",
          title: "Secure Storage",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Store JWT tokens securely on device keychain",
          hours: 8,
        },
      ],
    },
  ],
  11: [
    {
      date: "Mar 11",
      entries: [
        {
          id: 37,
          date: "Mar 11",
          title: "Home Screen Design",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Create home dashboard with layout widgets",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 12",
      entries: [
        {
          id: 38,
          date: "Mar 12",
          title: "Listings API Feed",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Fetch and display listings with pagination",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 13",
      entries: [
        {
          id: 39,
          date: "Mar 13",
          title: "Pull to Refresh",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Add refresh gestures and caching mechanism",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 14",
      entries: [
        {
          id: 40,
          date: "Mar 14",
          title: "Details Screen UI",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Implement item details page with image slider",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 15",
      entries: [
        {
          id: 41,
          date: "Mar 15",
          title: "Deep Linking Setup",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Configure deep links for listings route",
          hours: 8,
        },
      ],
    },
  ],
  12: [],
  13: [
    {
      date: "Mar 25",
      entries: [
        {
          id: 42,
          date: "Mar 25",
          title: "Push Notifications Config",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Setup Firebase Cloud Messaging",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 26",
      entries: [
        {
          id: 43,
          date: "Mar 26",
          title: "FCM Integration iOS",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Configure APNs certificates and test notifications",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 27",
      entries: [
        {
          id: 44,
          date: "Mar 27",
          title: "Notification Listeners",
          project: "Mobile App",
          typeOfWork: "Development",
          description: "Handle foreground/background notification actions",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 28",
      entries: [
        {
          id: 45,
          date: "Mar 28",
          title: "App Store Prep",
          project: "Mobile App",
          typeOfWork: "Deployment",
          description: "Create App Store Connect entry and metadata",
          hours: 8,
        },
      ],
    },
    {
      date: "Mar 29",
      entries: [
        {
          id: 46,
          date: "Mar 29",
          title: "Beta Release",
          project: "Mobile App",
          typeOfWork: "Deployment",
          description: "Submit build to TestFlight for internal testing",
          hours: 8,
        },
      ],
    },
  ],
  14: [
    {
      date: "Apr 1",
      entries: [
        {
          id: 47,
          date: "Apr 1",
          title: "Code Review & Refactoring",
          project: "Website",
          typeOfWork: "Development",
          description: "Refactor legacy components",
          hours: 8,
        },
      ],
    },
    {
      date: "Apr 2",
      entries: [
        {
          id: 48,
          date: "Apr 2",
          title: "CSS Polish",
          project: "Website",
          typeOfWork: "Development",
          description: "Fix layout shifts in responsive views",
          hours: 8,
        },
      ],
    },
    {
      date: "Apr 3",
      entries: [
        {
          id: 49,
          date: "Apr 3",
          title: "Performance Tuning",
          project: "Website",
          typeOfWork: "Development",
          description: "Optimize bundle size and compress assets",
          hours: 8,
        },
      ],
    },
    {
      date: "Apr 4",
      entries: [
        {
          id: 50,
          date: "Apr 4",
          title: "Client Demo",
          project: "Website",
          typeOfWork: "Meeting",
          description: "Present sprint progress to client",
          hours: 6,
        },
      ],
    },
    {
      date: "Apr 5",
      entries: [
        {
          id: 51,
          date: "Apr 5",
          title: "Feedback Incorporation",
          project: "Website",
          typeOfWork: "Development",
          description: "Address minor comments from demo",
          hours: 8,
        },
      ],
    },
  ],
  15: [
    {
      date: "Apr 8",
      entries: [
        {
          id: 52,
          date: "Apr 8",
          title: "CI/CD Setup",
          project: "DevOps",
          typeOfWork: "Development",
          description: "Configure GitHub Actions workflow",
          hours: 8,
        },
      ],
    },
    {
      date: "Apr 9",
      entries: [
        {
          id: 53,
          date: "Apr 9",
          title: "Linting & Testing Checks",
          project: "DevOps",
          typeOfWork: "Development",
          description: "Add automated ESLint and Vitest checks to CI",
          hours: 8,
        },
      ],
    },
    {
      date: "Apr 10",
      entries: [
        {
          id: 54,
          date: "Apr 10",
          title: "Environment Variables",
          project: "DevOps",
          typeOfWork: "Development",
          description: "Integrate AWS Secrets Manager",
          hours: 8,
        },
      ],
    },
    {
      date: "Apr 11",
      entries: [
        {
          id: 55,
          date: "Apr 11",
          title: "Staging Server Deploy",
          project: "DevOps",
          typeOfWork: "Deployment",
          description: "Deploy application docker image to ECS",
          hours: 8,
        },
      ],
    },
    {
      date: "Apr 12",
      entries: [
        {
          id: 56,
          date: "Apr 12",
          title: "Monitoring Setup",
          project: "DevOps",
          typeOfWork: "Deployment",
          description: "Configure Datadog alerts for HTTP errors",
          hours: 8,
        },
      ],
    },
  ],
  16: [],
  17: [
    {
      date: "Apr 22",
      entries: [
        {
          id: 57,
          date: "Apr 22",
          title: "Marketing Site Strategy",
          project: "Marketing",
          typeOfWork: "Planning",
          description: "Plan copy and asset requirements",
          hours: 8,
        },
      ],
    },
    {
      date: "Apr 23",
      entries: [
        {
          id: 58,
          date: "Apr 23",
          title: "Figma Layouts",
          project: "Marketing",
          typeOfWork: "Design",
          description: "Design landing page wireframes",
          hours: 8,
        },
      ],
    },
    {
      date: "Apr 24",
      entries: [
        {
          id: 59,
          date: "Apr 24",
          title: "HTML/CSS Coding",
          project: "Marketing",
          typeOfWork: "Development",
          description: "Implement responsive tailwind sections",
          hours: 10,
        },
      ],
    },
    {
      date: "Apr 25",
      entries: [
        {
          id: 60,
          date: "Apr 25",
          title: "Interactive Demos",
          project: "Marketing",
          typeOfWork: "Development",
          description: "Build interactive product widgets",
          hours: 10,
        },
      ],
    },
    {
      date: "Apr 26",
      entries: [
        {
          id: 61,
          date: "Apr 26",
          title: "Contact Form API",
          project: "Marketing",
          typeOfWork: "Development",
          description: "Integrate Formspree webhook endpoint",
          hours: 8,
        },
      ],
    },
  ],
  18: [
    {
      date: "Apr 29",
      entries: [
        {
          id: 62,
          date: "Apr 29",
          title: "Blog Setup",
          project: "Marketing",
          typeOfWork: "Development",
          description: "Setup MDX blog template pages",
          hours: 8,
        },
      ],
    },
    {
      date: "Apr 30",
      entries: [
        {
          id: 63,
          date: "Apr 30",
          title: "SEO Config",
          project: "Marketing",
          typeOfWork: "Development",
          description: "Implement OpenGraph tags and metadata",
          hours: 8,
        },
      ],
    },
    {
      date: "May 1",
      entries: [
        {
          id: 64,
          date: "May 1",
          title: "Content Writing",
          project: "Marketing",
          typeOfWork: "Content",
          description: "Draft first three engineering blog posts",
          hours: 8,
        },
      ],
    },
    {
      date: "May 2",
      entries: [
        {
          id: 65,
          date: "May 2",
          title: "Newsletter Signup",
          project: "Marketing",
          typeOfWork: "Development",
          description: "Integrate Mailchimp API list subscription",
          hours: 8,
        },
      ],
    },
    {
      date: "May 3",
      entries: [
        {
          id: 66,
          date: "May 3",
          title: "Analytics Verification",
          project: "Marketing",
          typeOfWork: "Testing",
          description: "Verify user event tracking tags",
          hours: 8,
        },
      ],
    },
  ],
  19: [
    {
      date: "May 6",
      entries: [
        {
          id: 67,
          date: "May 6",
          title: "Internal Tool Design",
          project: "Internal Tools",
          typeOfWork: "Design",
          description: "Wireframe database browser tool",
          hours: 8,
        },
      ],
    },
    {
      date: "May 7",
      entries: [
        {
          id: 68,
          date: "May 7",
          title: "Database Admin UI",
          project: "Internal Tools",
          typeOfWork: "Development",
          description: "Create table views for admin users",
          hours: 8,
        },
      ],
    },
    {
      date: "May 8",
      entries: [
        {
          id: 69,
          date: "May 8",
          title: "Table Sorting & Filters",
          project: "Internal Tools",
          typeOfWork: "Development",
          description: "Implement frontend sorting on tables",
          hours: 8,
        },
      ],
    },
  ],
  20: [
    {
      date: "May 13",
      entries: [
        {
          id: 70,
          date: "May 13",
          title: "PDF Export Setup",
          project: "Admin Panel",
          typeOfWork: "Development",
          description: "Configure pdfkit on server",
          hours: 8,
        },
      ],
    },
    {
      date: "May 14",
      entries: [
        {
          id: 71,
          date: "May 14",
          title: "Invoice Template Design",
          project: "Admin Panel",
          typeOfWork: "Development",
          description: "Build HTML layout for PDF generation",
          hours: 8,
        },
      ],
    },
    {
      date: "May 15",
      entries: [
        {
          id: 72,
          date: "May 15",
          title: "S3 Uploads",
          project: "Admin Panel",
          typeOfWork: "Development",
          description: "Store generated PDFs on AWS S3 bucket",
          hours: 8,
        },
      ],
    },
    {
      date: "May 16",
      entries: [
        {
          id: 73,
          date: "May 16",
          title: "Email Attachments",
          project: "Admin Panel",
          typeOfWork: "Development",
          description: "Send invoices to clients via Nodemailer",
          hours: 8,
        },
      ],
    },
    {
      date: "May 17",
      entries: [
        {
          id: 74,
          date: "May 17",
          title: "PDF Bugfixing",
          project: "Admin Panel",
          typeOfWork: "Testing",
          description: "Fix overlapping text in PDF footer",
          hours: 8,
        },
      ],
    },
  ],
  21: [],
  22: [
    {
      date: "May 27",
      entries: [
        {
          id: 75,
          date: "May 27",
          title: "E2E Testing Setup",
          project: "Testing Suite",
          typeOfWork: "Testing",
          description: "Install and configure Playwright",
          hours: 10,
        },
      ],
    },
    {
      date: "May 28",
      entries: [
        {
          id: 76,
          date: "May 28",
          title: "Auth Test Suite",
          project: "Testing Suite",
          typeOfWork: "Testing",
          description: "Write login and registration E2E tests",
          hours: 10,
        },
      ],
    },
    {
      date: "May 29",
      entries: [
        {
          id: 77,
          date: "May 29",
          title: "Dashboard Test Suite",
          project: "Testing Suite",
          typeOfWork: "Testing",
          description: "Write test scenarios for timesheet filters",
          hours: 10,
        },
      ],
    },
    {
      date: "May 30",
      entries: [
        {
          id: 78,
          date: "May 30",
          title: "Task Actions Test Suite",
          project: "Testing Suite",
          typeOfWork: "Testing",
          description: "Write tests for creating and deleting tasks",
          hours: 10,
        },
      ],
    },
    {
      date: "May 31",
      entries: [
        {
          id: 79,
          date: "May 31",
          title: "CI Integration",
          project: "Testing Suite",
          typeOfWork: "Testing",
          description: "Configure Playwright to run on CI pipeline",
          hours: 8,
        },
      ],
    },
  ],
  23: [
    {
      date: "Jun 3",
      entries: [
        {
          id: 80,
          date: "Jun 3",
          title: "Chat Integration Research",
          project: "Support",
          typeOfWork: "Research",
          description: "Evaluate Intercom vs Zendesk widget",
          hours: 8,
        },
      ],
    },
    {
      date: "Jun 4",
      entries: [
        {
          id: 81,
          date: "Jun 4",
          title: "Zendesk Setup",
          project: "Support",
          typeOfWork: "Development",
          description: "Embed support widget on client dashboard",
          hours: 8,
        },
      ],
    },
    {
      date: "Jun 5",
      entries: [
        {
          id: 82,
          date: "Jun 5",
          title: "User Context Passing",
          project: "Support",
          typeOfWork: "Development",
          description: "Pass user session email to support widget",
          hours: 8,
        },
      ],
    },
    {
      date: "Jun 6",
      entries: [
        {
          id: 83,
          date: "Jun 6",
          title: "Custom Events",
          project: "Support",
          typeOfWork: "Development",
          description: "Trigger help prompts on error boundaries",
          hours: 8,
        },
      ],
    },
    {
      date: "Jun 7",
      entries: [
        {
          id: 84,
          date: "Jun 7",
          title: "Support Review",
          project: "Support",
          typeOfWork: "Meeting",
          description: "Review support widget settings with team",
          hours: 8,
        },
      ],
    },
  ],
};