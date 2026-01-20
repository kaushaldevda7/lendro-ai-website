const fs = require('fs');
const path = require('path');

// Existing posts (already in the listing, before June 16, 2025)
const existingPosts = [
  {
    title: "Building the Next Generation of AI Risk Models",
    excerpt: "An in-depth exploration of modern machine learning approaches to credit risk assessment, comparing traditional statistical methods with cutting-edge AI techniques.",
    slug: "ai-risk-models",
    category: "Technical Deep Dive",
    readTime: "8 min read",
    publishDate: "June 15, 2025",
    author: "Lendro.AI Team",
    tags: ["AI", "Risk Assessment", "Machine Learning", "Credit Scoring"],
    featured: true
  },
  {
    title: "The Future of Work in Lending: AI Collaborators, Not Replacements",
    excerpt: "How AI will transform lending jobs—not by replacing humans, but by empowering them to do more meaningful work.",
    slug: "future-work-lending-industry",
    category: "Thought Leadership",
    readTime: "7 min read",
    publishDate: "June 11, 2025",
    author: "Lendro.AI Team",
    tags: ["Future of Work", "Jobs", "AI Collaboration", "Industry"],
    featured: false
  },
  {
    title: "Model Interpretability Techniques: SHAP, LIME, and Beyond",
    excerpt: "A practitioner's guide to making AI lending decisions explainable using cutting-edge interpretability methods.",
    slug: "model-interpretability-techniques",
    category: "Technical Deep Dive",
    readTime: "12 min read",
    publishDate: "June 10, 2025",
    author: "Lendro.AI Team",
    tags: ["Interpretability", "SHAP", "LIME", "Explainability"],
    featured: false
  },
  {
    title: "Alternative Data in Credit Decisions: Beyond Bank Statements and Pay Stubs",
    excerpt: "How non-traditional data sources are enabling more accurate and inclusive credit decisions for underserved populations.",
    slug: "alternative-data-credit-decisions",
    category: "Industry Insights",
    readTime: "8 min read",
    publishDate: "June 9, 2025",
    author: "Lendro.AI Team",
    tags: ["Alternative Data", "Credit Decisions", "Inclusion", "Innovation"],
    featured: false
  },
  {
    title: "Climate Risk in Lending Decisions: The Coming Transformation",
    excerpt: "How climate risk is becoming a critical factor in lending decisions and how AI can help lenders adapt.",
    slug: "climate-risk-lending-decisions",
    category: "Thought Leadership",
    readTime: "9 min read",
    publishDate: "June 7, 2025",
    author: "Lendro.AI Team",
    tags: ["Climate Risk", "ESG", "Sustainability", "Future"],
    featured: false
  },
  {
    title: "Federated Learning in Lending: Better Models Without Sharing Data",
    excerpt: "How federated learning enables collaborative AI model training while keeping sensitive financial data private and secure.",
    slug: "federated-learning-privacy",
    category: "Technical Deep Dive",
    readTime: "11 min read",
    publishDate: "June 6, 2025",
    author: "Lendro.AI Team",
    tags: ["Federated Learning", "Privacy", "Collaboration", "Security"],
    featured: false
  },
  {
    title: "Automating Warehouse Lending: AI for Lender of Lenders",
    excerpt: "How AI is transforming warehouse lending operations, improving efficiency for the institutions that fund other lenders.",
    slug: "warehouse-lending-automation",
    category: "Industry Insights",
    readTime: "7 min read",
    publishDate: "June 5, 2025",
    author: "Lendro.AI Team",
    tags: ["Warehouse Lending", "B2B", "Automation", "Operations"],
    featured: false
  },
  {
    title: "The BNPL Phenomenon: Revolution or Risk?",
    excerpt: "A balanced analysis of Buy Now Pay Later lending—its appeal, its risks, and its role in the future of consumer finance.",
    slug: "buy-now-pay-later-analysis",
    category: "Market Analysis",
    readTime: "8 min read",
    publishDate: "June 3, 2025",
    author: "Lendro.AI Team",
    tags: ["BNPL", "Consumer Finance", "Trends", "Risk"],
    featured: false
  },
  {
    title: "Model Monitoring and Drift Detection: Keeping AI Accurate Over Time",
    excerpt: "The systems and processes we use to ensure our AI models remain accurate as markets, regulations, and behaviors change.",
    slug: "model-monitoring-drift-detection",
    category: "Technical Deep Dive",
    readTime: "10 min read",
    publishDate: "June 2, 2025",
    author: "Lendro.AI Team",
    tags: ["Model Monitoring", "Drift", "MLOps", "Quality"],
    featured: false
  },
  {
    title: "Solving the Banking Desert Problem: AI as a Bridge to Financial Access",
    excerpt: "How AI-powered lending can reach underserved communities where traditional banking has failed or retreated.",
    slug: "banking-deserts-ai-solution",
    category: "Thought Leadership",
    readTime: "8 min read",
    publishDate: "June 1, 2025",
    author: "Lendro.AI Team",
    tags: ["Financial Inclusion", "Banking Deserts", "Access", "Community"],
    featured: false
  },
  {
    title: "AI-Powered Loan Pricing: Finding the Perfect Balance",
    excerpt: "How machine learning optimizes loan pricing to balance profitability, competition, and borrower accessibility.",
    slug: "ai-loan-pricing-optimization",
    category: "Technical Deep Dive",
    readTime: "9 min read",
    publishDate: "May 31, 2025",
    author: "Lendro.AI Team",
    tags: ["Pricing", "Optimization", "ML", "Strategy"],
    featured: false
  },
  {
    title: "AI for Mission-Driven Lenders: Technology Meets Social Impact",
    excerpt: "How CDFIs and mission-driven lenders can leverage AI to extend their reach while staying true to their community focus.",
    slug: "cdfi-mission-driven-lending",
    category: "Thought Leadership",
    readTime: "7 min read",
    publishDate: "May 29, 2025",
    author: "Lendro.AI Team",
    tags: ["CDFI", "Social Impact", "Community", "Mission"],
    featured: false
  },
  {
    title: "Why Traditional Lending is Ripe for AI Disruption",
    excerpt: "Analyzing the inefficiencies in current lending processes and how autonomous AI agents can transform operations from application to servicing.",
    slug: "lending-ai-disruption",
    category: "Industry Insights",
    readTime: "6 min read",
    publishDate: "May 28, 2025",
    author: "Lendro.AI Team",
    tags: ["Digital Transformation", "Lending", "AI Automation", "Industry Trends"],
    featured: true
  },
  {
    title: "Continuous Learning in Production ML: AI That Gets Smarter Every Day",
    excerpt: "How we build machine learning systems that continuously improve from new data while maintaining stability and compliance.",
    slug: "continuous-learning-production-ml",
    category: "Technical Deep Dive",
    readTime: "10 min read",
    publishDate: "May 28, 2025",
    author: "Lendro.AI Team",
    tags: ["MLOps", "Continuous Learning", "Production", "AI"],
    featured: false
  },
  {
    title: "Technology Reshaping Real Estate Lending: From Appraisals to Approvals",
    excerpt: "How AI and automation are transforming every step of the commercial and residential real estate lending process.",
    slug: "real-estate-lending-technology",
    category: "Industry Insights",
    readTime: "8 min read",
    publishDate: "May 27, 2025",
    author: "Lendro.AI Team",
    tags: ["Real Estate", "PropTech", "Commercial Lending", "Residential"],
    featured: false
  },
  {
    title: "Embedded Lending and the API Economy: Lending as a Service",
    excerpt: "How APIs are enabling any company to offer lending products, and what this means for the future of financial services.",
    slug: "embedded-lending-api-economy",
    category: "Industry Insights",
    readTime: "7 min read",
    publishDate: "May 25, 2025",
    author: "Lendro.AI Team",
    tags: ["Embedded Finance", "APIs", "BaaS", "Platform"],
    featured: false
  },
  {
    title: "Graph Neural Networks for Fraud Detection: Seeing Patterns Humans Can't",
    excerpt: "How we use graph neural networks to identify complex fraud rings and synthetic identity schemes that evade traditional detection.",
    slug: "graph-neural-networks-fraud",
    category: "Technical Deep Dive",
    readTime: "11 min read",
    publishDate: "May 24, 2025",
    author: "Lendro.AI Team",
    tags: ["Graph Neural Networks", "Fraud", "Deep Learning", "Patterns"],
    featured: false
  },
  {
    title: "Global AI Lending Adoption: How Different Markets Are Approaching AI",
    excerpt: "A comparative analysis of AI lending adoption across North America, Europe, Asia, and emerging markets.",
    slug: "global-lending-ai-adoption",
    category: "Market Analysis",
    readTime: "9 min read",
    publishDate: "May 22, 2025",
    author: "Lendro.AI Team",
    tags: ["Global", "Adoption", "Markets", "International"],
    featured: false
  },
  {
    title: "Feature Engineering for Credit Risk: The Art Behind the Science",
    excerpt: "A deep dive into how we create predictive features from raw data—the creative process that powers our AI models.",
    slug: "feature-engineering-credit-risk",
    category: "Technical Deep Dive",
    readTime: "12 min read",
    publishDate: "May 21, 2025",
    author: "Lendro.AI Team",
    tags: ["Feature Engineering", "Data Science", "Credit Risk", "ML"],
    featured: false
  },
  {
    title: "Revolutionizing Student Loan Servicing: AI for the $1.7T Crisis",
    excerpt: "How intelligent automation can improve the student loan experience while helping borrowers find paths to repayment.",
    slug: "student-loan-servicing-revolution",
    category: "Industry Insights",
    readTime: "8 min read",
    publishDate: "May 20, 2025",
    author: "Lendro.AI Team",
    tags: ["Student Loans", "Servicing", "Education Finance", "Crisis"],
    featured: false
  },
  {
    title: "Edge Computing in Loan Processing: Decisions at the Speed of Need",
    excerpt: "How edge computing is enabling instant loan decisions at the point of sale, transforming retail financing.",
    slug: "edge-computing-loan-processing",
    category: "Technical Deep Dive",
    readTime: "8 min read",
    publishDate: "May 18, 2025",
    author: "Lendro.AI Team",
    tags: ["Edge Computing", "Real-time", "POS Financing", "Technology"],
    featured: false
  },
  {
    title: "AI in Collections: Adding Empathy to Automation",
    excerpt: "How AI is transforming collections from confrontational to consultative, improving recovery rates while treating borrowers with dignity.",
    slug: "collections-ai-empathy",
    category: "Industry Insights",
    readTime: "7 min read",
    publishDate: "May 17, 2025",
    author: "Lendro.AI Team",
    tags: ["Collections", "Empathy", "Automation", "Recovery"],
    featured: false
  },
  {
    title: "Building Trust in AI Decisions: From Skepticism to Confidence",
    excerpt: "The journey financial institutions take from AI skepticism to full trust—and how to accelerate that journey.",
    slug: "building-trust-in-ai-decisions",
    category: "Thought Leadership",
    readTime: "7 min read",
    publishDate: "May 16, 2025",
    author: "Lendro.AI Team",
    tags: ["Trust", "AI Adoption", "Change Management", "Leadership"],
    featured: false
  },
  {
    title: "The Personal Loan Market in 2025: Trends, Opportunities, and Challenges",
    excerpt: "A comprehensive analysis of where the personal loan market stands and where it's headed in the AI era.",
    slug: "personal-loan-market-2025",
    category: "Market Analysis",
    readTime: "8 min read",
    publishDate: "May 15, 2025",
    author: "Lendro.AI Team",
    tags: ["Personal Loans", "Market Trends", "2025", "Analysis"],
    featured: false
  },
  {
    title: "Synthetic Data in Credit Modeling: Training AI When Real Data Is Scarce",
    excerpt: "How synthetic data generation is solving the cold-start problem in AI lending and enabling privacy-preserving model development.",
    slug: "synthetic-data-credit-modeling",
    category: "Technical Deep Dive",
    readTime: "10 min read",
    publishDate: "May 14, 2025",
    author: "Lendro.AI Team",
    tags: ["Synthetic Data", "Privacy", "Data Science", "Training"],
    featured: false
  },
  {
    title: "Credit Union Digital Transformation: Preserving Community Values with Modern Tech",
    excerpt: "How credit unions can embrace AI without losing the personal touch that defines their member relationships.",
    slug: "credit-union-digital-transformation",
    category: "Industry Insights",
    readTime: "7 min read",
    publishDate: "May 12, 2025",
    author: "Lendro.AI Team",
    tags: ["Credit Unions", "Digital Transformation", "Community", "Members"],
    featured: false
  },
  {
    title: "A Day in the Life of an AI Agent: What Happens in Those Milliseconds",
    excerpt: "A detailed walkthrough of what actually happens when an AI agent processes a loan application—from data to decision.",
    slug: "day-in-life-ai-agent",
    category: "Technical Deep Dive",
    readTime: "9 min read",
    publishDate: "May 11, 2025",
    author: "Lendro.AI Team",
    tags: ["AI Agents", "Processing", "Behind the Scenes", "Technology"],
    featured: false
  },
  {
    title: "AI Lending in a Downturn: How Smart Systems Weather Economic Storms",
    excerpt: "What happens when recession hits? How AI lending systems adapt to changing economic conditions in real-time.",
    slug: "economic-downturn-ai-lending",
    category: "Thought Leadership",
    readTime: "8 min read",
    publishDate: "May 10, 2025",
    author: "Lendro.AI Team",
    tags: ["Economy", "Recession", "Risk Management", "Adaptability"],
    featured: false
  },
  {
    title: "Transfer Learning for Credit Models: Teaching Old Data New Tricks",
    excerpt: "How transfer learning techniques allow AI models to leverage insights across different lending portfolios and markets.",
    slug: "transfer-learning-credit-models",
    category: "Technical Deep Dive",
    readTime: "11 min read",
    publishDate: "May 9, 2025",
    author: "Lendro.AI Team",
    tags: ["Transfer Learning", "Machine Learning", "Credit Models", "AI"],
    featured: false
  },
  {
    title: "Reinventing Auto Loan Underwriting: Beyond Credit Scores and Down Payments",
    excerpt: "How AI is enabling smarter, faster, and fairer auto lending decisions by considering the full picture.",
    slug: "auto-loan-underwriting-ai",
    category: "Industry Insights",
    readTime: "7 min read",
    publishDate: "May 8, 2025",
    author: "Lendro.AI Team",
    tags: ["Auto Loans", "Underwriting", "AI", "Vehicle Finance"],
    featured: false
  },
  {
    title: "Fintech vs Traditional Banks: A Tale of Two Lending Worlds",
    excerpt: "Comparing the approaches, technologies, and outcomes of fintech lenders versus traditional financial institutions.",
    slug: "fintech-vs-traditional-banks",
    category: "Market Analysis",
    readTime: "7 min read",
    publishDate: "May 6, 2025",
    author: "Lendro.AI Team",
    tags: ["Fintech", "Banks", "Comparison", "Industry"],
    featured: false
  },
  {
    title: "Predicting Defaults Before They Happen: The Science of Early Warning Systems",
    excerpt: "How machine learning models can identify at-risk loans 6-12 months before traditional indicators show distress.",
    slug: "machine-learning-default-prediction",
    category: "Technical Deep Dive",
    readTime: "9 min read",
    publishDate: "May 5, 2025",
    author: "Lendro.AI Team",
    tags: ["Default Prediction", "Machine Learning", "Risk", "Early Warning"],
    featured: false
  },
  {
    title: "The Regulatory Landscape: AI Lending Compliance in 2025",
    excerpt: "A comprehensive guide to navigating the evolving regulatory environment for AI-powered lending solutions.",
    slug: "regulatory-landscape-ai-lending",
    category: "Industry Insights",
    readTime: "10 min read",
    publishDate: "May 4, 2025",
    author: "Lendro.AI Team",
    tags: ["Regulation", "Compliance", "Legal", "Framework"],
    featured: false
  },
  {
    title: "NLP in Loan Document Processing: Reading at Superhuman Speed",
    excerpt: "How natural language processing is transforming document review from a bottleneck into a competitive advantage.",
    slug: "nlp-loan-document-processing",
    category: "Technical Deep Dive",
    readTime: "8 min read",
    publishDate: "May 2, 2025",
    author: "Lendro.AI Team",
    tags: ["NLP", "Document Processing", "Automation", "AI"],
    featured: false
  },
  {
    title: "AI for Community Banks: David's New Sling Against Goliath",
    excerpt: "How smaller financial institutions can leverage AI to compete with national banks without massive technology budgets.",
    slug: "community-bank-ai-adoption",
    category: "Industry Insights",
    readTime: "6 min read",
    publishDate: "May 1, 2025",
    author: "Lendro.AI Team",
    tags: ["Community Banks", "Adoption", "Competition", "Technology"],
    featured: false
  },
  {
    title: "AI Bias in Lending: Separating Myths from Reality",
    excerpt: "A data-driven look at AI bias concerns in lending, and how responsible AI can actually be fairer than traditional methods.",
    slug: "ai-bias-lending-myths",
    category: "Thought Leadership",
    readTime: "9 min read",
    publishDate: "April 30, 2025",
    author: "Lendro.AI Team",
    tags: ["AI Bias", "Fairness", "Ethics", "Responsible AI"],
    featured: false
  },
  {
    title: "The Future of Mortgage Automation: From 45 Days to 45 Minutes",
    excerpt: "How AI is compressing the mortgage approval timeline while improving accuracy and borrower experience.",
    slug: "mortgage-automation-future",
    category: "Industry Insights",
    readTime: "8 min read",
    publishDate: "April 29, 2025",
    author: "Lendro.AI Team",
    tags: ["Mortgage", "Automation", "Processing Time", "Home Loans"],
    featured: false
  },
  {
    title: "Explainable AI in Lending: Opening the Black Box",
    excerpt: "How we build AI systems that can explain every decision in plain English—and why that matters for compliance and trust.",
    slug: "explainable-ai-lending-decisions",
    category: "Technical Deep Dive",
    readTime: "10 min read",
    publishDate: "April 27, 2025",
    author: "Lendro.AI Team",
    tags: ["Explainable AI", "Compliance", "Transparency", "XAI"],
    featured: false
  },
  {
    title: "The $400B Small Business Gap: Why Traditional Lenders Fail Main Street",
    excerpt: "Exploring the massive unmet need in small business lending and how AI can bridge the gap between entrepreneurs and capital.",
    slug: "small-business-lending-gap",
    category: "Market Analysis",
    readTime: "6 min read",
    publishDate: "April 26, 2025",
    author: "Lendro.AI Team",
    tags: ["Small Business", "SMB Lending", "Market Gap", "Opportunity"],
    featured: false
  },
  {
    title: "Real-Time Fraud Detection: How AI Catches What Humans Miss",
    excerpt: "Inside the millisecond decisions that protect lenders from sophisticated fraud schemes while minimizing false positives.",
    slug: "real-time-fraud-detection-ai",
    category: "Technical Deep Dive",
    readTime: "9 min read",
    publishDate: "April 25, 2025",
    author: "Lendro.AI Team",
    tags: ["Fraud Detection", "Machine Learning", "Security", "Real-time"],
    featured: false
  },
  {
    title: "The Future of Credit Scoring: Beyond FICO in the AI Era",
    excerpt: "Why the 70-year-old credit scoring model is being reimagined, and what it means for lenders and borrowers alike.",
    slug: "future-of-credit-scoring",
    category: "Thought Leadership",
    readTime: "7 min read",
    publishDate: "April 23, 2025",
    author: "Lendro.AI Team",
    tags: ["Credit Scoring", "AI", "Innovation", "FICO"],
    featured: false
  },
  {
    title: "The $2.8 Trillion Opportunity: AI in Financial Services",
    excerpt: "Breaking down the massive market opportunity for AI-powered lending solutions and what it means for financial institutions of all sizes.",
    slug: "ai-financial-opportunity",
    category: "Market Analysis",
    readTime: "5 min read",
    publishDate: "April 22, 2025",
    author: "Lendro.AI Team",
    tags: ["Market Research", "Financial Services", "AI Investment", "Growth"],
    featured: true
  }
];

// Topics pool for generating new articles
const topicsPool = [
  { title: "Reinforcement Learning in Loan Pricing", subtitle: "Dynamic Optimization at Scale", category: "Technical Deep Dive", tags: ["Reinforcement Learning", "Pricing", "Optimization", "ML"] },
  { title: "Vector Databases for Credit Risk", subtitle: "Semantic Search in Financial Data", category: "Technical Deep Dive", tags: ["Vector DB", "Embeddings", "Search", "AI"] },
  { title: "LLMs in Document Understanding", subtitle: "Beyond OCR to True Comprehension", category: "Technical Deep Dive", tags: ["LLM", "NLP", "Documents", "AI"] },
  { title: "Real-Time Feature Stores", subtitle: "Sub-Millisecond Decisioning Infrastructure", category: "Technical Deep Dive", tags: ["Feature Store", "Real-time", "MLOps", "Infrastructure"] },
  { title: "Causal Inference in Credit Risk", subtitle: "Moving Beyond Correlation", category: "Technical Deep Dive", tags: ["Causal AI", "Statistics", "Risk", "ML"] },
  { title: "Automated Model Retraining", subtitle: "CI/CD for Machine Learning", category: "Technical Deep Dive", tags: ["MLOps", "Automation", "DevOps", "Training"] },
  { title: "Anomaly Detection in Transactions", subtitle: "Finding Needles in Haystacks", category: "Technical Deep Dive", tags: ["Anomaly Detection", "Fraud", "ML", "Security"] },
  { title: "Time Series Forecasting for Defaults", subtitle: "Predicting Tomorrow's Risk Today", category: "Technical Deep Dive", tags: ["Time Series", "Forecasting", "Risk", "ML"] },
  { title: "Multi-Modal AI in Underwriting", subtitle: "Processing Documents, Images, and Data", category: "Technical Deep Dive", tags: ["Multi-Modal", "AI", "Underwriting", "Vision"] },
  { title: "Gradient Boosting vs Neural Networks", subtitle: "Choosing the Right Model Architecture", category: "Technical Deep Dive", tags: ["XGBoost", "Neural Networks", "ML", "Architecture"] },
  { title: "Privacy-Preserving Machine Learning", subtitle: "Building Models on Encrypted Data", category: "Technical Deep Dive", tags: ["Privacy", "Encryption", "ML", "Security"] },
  { title: "API Design for Lending Platforms", subtitle: "Building Scalable Integrations", category: "Technical Deep Dive", tags: ["API", "Architecture", "Integration", "Design"] },
  { title: "Kubernetes for ML Workloads", subtitle: "Orchestrating AI at Scale", category: "Technical Deep Dive", tags: ["Kubernetes", "MLOps", "Infrastructure", "Scale"] },
  { title: "Data Lineage in Credit Models", subtitle: "Tracking Every Feature's Journey", category: "Technical Deep Dive", tags: ["Data Lineage", "Governance", "ML", "Compliance"] },
  { title: "Active Learning for Rare Events", subtitle: "Improving Models with Smart Sampling", category: "Technical Deep Dive", tags: ["Active Learning", "Sampling", "ML", "Training"] },
  { title: "Bayesian Methods in Credit Scoring", subtitle: "Quantifying Uncertainty in Predictions", category: "Technical Deep Dive", tags: ["Bayesian", "Statistics", "Credit", "Uncertainty"] },
  { title: "Model Compression for Edge Deployment", subtitle: "Shrinking AI Without Losing Accuracy", category: "Technical Deep Dive", tags: ["Compression", "Edge", "Optimization", "Deployment"] },
  { title: "A/B Testing Credit Models", subtitle: "Scientific Experimentation in Production", category: "Technical Deep Dive", tags: ["A/B Testing", "Experimentation", "ML", "Production"] },
  { title: "Streaming Data Pipelines", subtitle: "Real-Time Data for Real-Time Decisions", category: "Technical Deep Dive", tags: ["Streaming", "Data Pipeline", "Kafka", "Real-time"] },
  { title: "Ensemble Methods in Risk Assessment", subtitle: "Combining Models for Better Predictions", category: "Technical Deep Dive", tags: ["Ensemble", "ML", "Risk", "Models"] },
  { title: "The Rise of Embedded Lending", subtitle: "Finance at the Point of Need", category: "Industry Insights", tags: ["Embedded Finance", "BNPL", "Integration", "Trends"] },
  { title: "Open Banking's Impact on Lending", subtitle: "Data Sharing Reshapes Credit", category: "Industry Insights", tags: ["Open Banking", "APIs", "Data", "Innovation"] },
  { title: "Green Lending Initiatives", subtitle: "Financing the Sustainability Transition", category: "Industry Insights", tags: ["Green Finance", "ESG", "Sustainability", "Climate"] },
  { title: "The Gig Economy Credit Challenge", subtitle: "Lending to the New Workforce", category: "Industry Insights", tags: ["Gig Economy", "Alternative Income", "Underwriting", "Innovation"] },
  { title: "Credit Unions in the Digital Age", subtitle: "Modernizing Member Services", category: "Industry Insights", tags: ["Credit Unions", "Digital", "Members", "Technology"] },
  { title: "Regulatory Technology Evolution", subtitle: "RegTech Meets LendTech", category: "Industry Insights", tags: ["RegTech", "Compliance", "Automation", "Innovation"] },
  { title: "The Return of Relationship Banking", subtitle: "AI Enables Personal Touch at Scale", category: "Industry Insights", tags: ["Relationship Banking", "Personalization", "AI", "Service"] },
  { title: "Cross-Border Lending Opportunities", subtitle: "Technology Erases Geographic Limits", category: "Industry Insights", tags: ["Cross-Border", "International", "Expansion", "Markets"] },
  { title: "Small Business Lending Renaissance", subtitle: "Technology Opens New Doors", category: "Industry Insights", tags: ["SMB", "Small Business", "Access", "Technology"] },
  { title: "Digital Identity Verification", subtitle: "Know Your Customer in the AI Era", category: "Industry Insights", tags: ["Identity", "KYC", "Verification", "Security"] },
  { title: "The Consolidation of Lending Tech", subtitle: "M&A Reshapes the Landscape", category: "Industry Insights", tags: ["M&A", "Consolidation", "Market", "Strategy"] },
  { title: "Voice-Enabled Lending Services", subtitle: "Conversational AI Meets Finance", category: "Industry Insights", tags: ["Voice AI", "Conversational", "Innovation", "UX"] },
  { title: "Instant Payments and Lending", subtitle: "Real-Time Money Movement", category: "Industry Insights", tags: ["Instant Payments", "Real-time", "Infrastructure", "Innovation"] },
  { title: "The Aging Population Credit Gap", subtitle: "Serving Senior Borrowers", category: "Industry Insights", tags: ["Demographics", "Seniors", "Access", "Service"] },
  { title: "Mobile-First Lending Platforms", subtitle: "Smartphones as Loan Officers", category: "Industry Insights", tags: ["Mobile", "App", "UX", "Access"] },
  { title: "Peer-to-Peer Lending Evolution", subtitle: "What's Next for P2P", category: "Industry Insights", tags: ["P2P", "Marketplace", "Evolution", "Trends"] },
  { title: "Commercial Real Estate AI", subtitle: "Smarter Property Financing", category: "Industry Insights", tags: ["CRE", "Real Estate", "AI", "Commercial"] },
  { title: "Invoice Financing Automation", subtitle: "AI Streamlines Working Capital", category: "Industry Insights", tags: ["Invoice", "Working Capital", "B2B", "Automation"] },
  { title: "Healthcare Lending Innovations", subtitle: "Financing Medical Needs", category: "Industry Insights", tags: ["Healthcare", "Medical", "Specialty", "Lending"] },
  { title: "Education Financing Reform", subtitle: "Rethinking Student Debt", category: "Industry Insights", tags: ["Education", "Student Loans", "Reform", "Innovation"] },
  { title: "AI Ethics in Financial Services", subtitle: "Building Responsible Systems", category: "Thought Leadership", tags: ["Ethics", "Responsible AI", "Governance", "Trust"] },
  { title: "The Human-AI Partnership", subtitle: "Augmentation Over Automation", category: "Thought Leadership", tags: ["Human-AI", "Collaboration", "Future", "Work"] },
  { title: "Democratizing Credit Access", subtitle: "AI as the Great Equalizer", category: "Thought Leadership", tags: ["Access", "Inclusion", "Equity", "Impact"] },
  { title: "Building Customer Trust in AI", subtitle: "Transparency as Competitive Advantage", category: "Thought Leadership", tags: ["Trust", "Transparency", "Customer", "Relationship"] },
  { title: "The Future of Credit Bureaus", subtitle: "Disruption or Evolution?", category: "Thought Leadership", tags: ["Credit Bureaus", "Data", "Future", "Change"] },
  { title: "Sustainable Lending Practices", subtitle: "Long-Term Value Creation", category: "Thought Leadership", tags: ["Sustainability", "Long-term", "Value", "Practice"] },
  { title: "Data as the New Collateral", subtitle: "Rethinking Security in Lending", category: "Thought Leadership", tags: ["Data", "Collateral", "Innovation", "Security"] },
  { title: "The Speed vs Accuracy Tradeoff", subtitle: "Finding the Right Balance", category: "Thought Leadership", tags: ["Speed", "Accuracy", "Tradeoffs", "Strategy"] },
  { title: "Lending in a Cashless Society", subtitle: "Digital Money, Digital Credit", category: "Thought Leadership", tags: ["Cashless", "Digital", "Future", "Payments"] },
  { title: "The Role of Human Oversight", subtitle: "Where Judgment Still Matters", category: "Thought Leadership", tags: ["Human", "Oversight", "Judgment", "Control"] },
  { title: "Building Antifragile Lending Systems", subtitle: "Getting Stronger from Stress", category: "Thought Leadership", tags: ["Antifragile", "Resilience", "Systems", "Design"] },
  { title: "The Personalization Paradox", subtitle: "Custom Credit at Scale", category: "Thought Leadership", tags: ["Personalization", "Scale", "Customization", "Balance"] },
  { title: "Lending to the Underbanked", subtitle: "A Moral and Business Imperative", category: "Thought Leadership", tags: ["Underbanked", "Access", "Impact", "Business"] },
  { title: "The Next Generation of Risk", subtitle: "Preparing for Unknown Unknowns", category: "Thought Leadership", tags: ["Risk", "Future", "Preparation", "Uncertainty"] },
  { title: "From Transactions to Relationships", subtitle: "The Evolution of Banking", category: "Thought Leadership", tags: ["Relationships", "Banking", "Evolution", "Service"] },
  { title: "The Talent Gap in AI Lending", subtitle: "Building Teams for the Future", category: "Thought Leadership", tags: ["Talent", "Hiring", "Skills", "Future"] },
  { title: "Interoperability in Financial Services", subtitle: "The Power of Connection", category: "Thought Leadership", tags: ["Interoperability", "Integration", "Standards", "Connection"] },
  { title: "The Attention Economy of Lending", subtitle: "Winning Mindshare in Finance", category: "Thought Leadership", tags: ["Attention", "Marketing", "Engagement", "Competition"] },
  { title: "Lending in Volatile Markets", subtitle: "Stability Through Intelligence", category: "Thought Leadership", tags: ["Volatility", "Markets", "Stability", "Intelligence"] },
  { title: "The End of One-Size-Fits-All", subtitle: "Hyper-Personalized Credit Products", category: "Thought Leadership", tags: ["Personalization", "Products", "Innovation", "Custom"] },
  { title: "Q3 Lending Market Report", subtitle: "Trends and Opportunities", category: "Market Analysis", tags: ["Market Report", "Q3", "Trends", "Analysis"] },
  { title: "Consumer Credit Behavior Shifts", subtitle: "Post-Pandemic Patterns", category: "Market Analysis", tags: ["Consumer", "Behavior", "Trends", "Patterns"] },
  { title: "Venture Capital in LendTech", subtitle: "Where Investors Are Betting", category: "Market Analysis", tags: ["VC", "Investment", "Funding", "Startups"] },
  { title: "Regional Lending Disparities", subtitle: "Geographic Credit Access", category: "Market Analysis", tags: ["Regional", "Geography", "Access", "Disparities"] },
  { title: "Interest Rate Impact Analysis", subtitle: "Navigating Rate Changes", category: "Market Analysis", tags: ["Interest Rates", "Impact", "Strategy", "Analysis"] },
  { title: "Competitive Landscape Update", subtitle: "Who's Winning in AI Lending", category: "Market Analysis", tags: ["Competition", "Landscape", "Players", "Strategy"] },
  { title: "Default Rate Predictions", subtitle: "What the Data Shows", category: "Market Analysis", tags: ["Defaults", "Predictions", "Data", "Risk"] },
  { title: "Emerging Market Opportunities", subtitle: "Global Credit Expansion", category: "Market Analysis", tags: ["Emerging Markets", "Global", "Expansion", "Growth"] },
  { title: "The Mortgage Market Outlook", subtitle: "Housing Finance Trends", category: "Market Analysis", tags: ["Mortgage", "Housing", "Outlook", "Trends"] },
  { title: "Auto Lending Market Dynamics", subtitle: "Vehicle Finance Evolution", category: "Market Analysis", tags: ["Auto", "Vehicle", "Market", "Trends"] },
  { title: "Credit Card Market Analysis", subtitle: "Revolving Credit Trends", category: "Market Analysis", tags: ["Credit Cards", "Revolving", "Market", "Analysis"] },
  { title: "Alternative Lending Growth", subtitle: "Non-Bank Lender Expansion", category: "Market Analysis", tags: ["Alternative", "Non-Bank", "Growth", "Market"] },
  { title: "Delinquency Trend Analysis", subtitle: "Early Warning Indicators", category: "Market Analysis", tags: ["Delinquency", "Trends", "Indicators", "Risk"] },
  { title: "Tech Adoption by Bank Size", subtitle: "How Institutions Are Investing", category: "Market Analysis", tags: ["Technology", "Banks", "Adoption", "Investment"] },
  { title: "Customer Acquisition Costs", subtitle: "The Economics of Growth", category: "Market Analysis", tags: ["CAC", "Acquisition", "Costs", "Economics"] },
  { title: "Regulatory Change Impact", subtitle: "How New Rules Reshape Markets", category: "Market Analysis", tags: ["Regulation", "Impact", "Markets", "Compliance"] },
  { title: "Fintech Partnership Trends", subtitle: "Collaboration Over Competition", category: "Market Analysis", tags: ["Fintech", "Partnerships", "Collaboration", "Trends"] },
  { title: "Credit Demand Forecasting", subtitle: "Predicting Market Needs", category: "Market Analysis", tags: ["Demand", "Forecasting", "Market", "Prediction"] },
  { title: "Pricing Power in Lending", subtitle: "Margin Analysis and Strategy", category: "Market Analysis", tags: ["Pricing", "Margins", "Strategy", "Competition"] },
  { title: "Digital Transformation ROI", subtitle: "Measuring Tech Investment Returns", category: "Market Analysis", tags: ["ROI", "Digital", "Investment", "Returns"] }
];

function formatDate(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function createSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50);
}

function generateExcerpt(title, category) {
  const excerpts = {
    "Technical Deep Dive": `An in-depth technical exploration of ${title.toLowerCase()} and how it's transforming modern lending infrastructure.`,
    "Industry Insights": `How ${title.toLowerCase()} is reshaping the lending landscape and what it means for financial institutions.`,
    "Thought Leadership": `A strategic perspective on ${title.toLowerCase()} and its implications for the future of lending.`,
    "Market Analysis": `Data-driven analysis of ${title.toLowerCase()} and what the trends mean for lenders and investors.`
  };
  return excerpts[category] || excerpts["Industry Insights"];
}

// Generate new posts from June 16, 2025 to January 19, 2026
function generateNewPosts() {
  const posts = [];
  const usedSlugs = new Set(existingPosts.map(p => p.slug));

  const startDate = new Date('2025-06-16');
  const endDate = new Date('2026-01-19');
  let currentDate = new Date(startDate);
  let topicIndex = 0;

  const readTimes = ["6 min read", "7 min read", "8 min read", "9 min read", "10 min read", "11 min read", "12 min read"];

  while (currentDate <= endDate) {
    const topic = topicsPool[topicIndex % topicsPool.length];
    let baseSlug = createSlug(topic.title);
    let slug = baseSlug;

    if (usedSlugs.has(slug)) {
      const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      const month = monthNames[currentDate.getMonth()];
      const year = currentDate.getFullYear().toString().slice(-2);
      slug = `${baseSlug}-${month}-${year}`;
    }
    usedSlugs.add(slug);

    posts.push({
      title: `${topic.title}: ${topic.subtitle}`,
      excerpt: generateExcerpt(topic.title, topic.category),
      slug: slug,
      category: topic.category,
      readTime: readTimes[Math.floor(Math.random() * readTimes.length)],
      publishDate: formatDate(currentDate),
      author: "Lendro.AI Team",
      tags: topic.tags,
      featured: false
    });

    currentDate.setDate(currentDate.getDate() + 1);
    topicIndex++;
  }

  return posts;
}

// Combine and sort all posts by date (newest first)
const newPosts = generateNewPosts();
const allPosts = [...existingPosts, ...newPosts];

// Sort by date (newest first)
allPosts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

// Generate the JavaScript array string
let output = 'const blogArticles = [\n';
allPosts.forEach((post, index) => {
  output += `  {
    title: ${JSON.stringify(post.title)},
    excerpt: ${JSON.stringify(post.excerpt)},
    slug: "${post.slug}",
    category: "${post.category}",
    readTime: "${post.readTime}",
    publishDate: "${post.publishDate}",
    author: "Lendro.AI Team",
    tags: ${JSON.stringify(post.tags)},
    featured: ${post.featured}
  }`;
  if (index < allPosts.length - 1) output += ',';
  output += '\n';
});
output += '];';

// Write to output file
fs.writeFileSync(path.join(__dirname, 'blog-articles-data.js'), output);

console.log(`Generated ${allPosts.length} total blog articles`);
console.log(`- ${existingPosts.length} existing posts`);
console.log(`- ${newPosts.length} new posts`);
console.log(`\nOutput written to: scripts/blog-articles-data.js`);
