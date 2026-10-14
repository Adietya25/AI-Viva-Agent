const QUESTION_TYPES = [
  "All Types",
  "Definition",
  "Difference",
  "Why",
  "How",
  "Example",
  "Application",
  "Comparison",
  "Short Answer",
  "Scenario",
  "Troubleshooting",
  "Procedure",
  "Design",
  "Fault Analysis",
  "Advantage/Disadvantage",
  "Safety",
  "Calculation"
];

const SUBJECTS = [
  "DSA",
  "Java",
  "Python",
  "DBMS",
  "SQL",
  "Operating Systems",
  "Computer Networks",
  "COA",
  "TOC",
  "AI",
  "ML",
  "IoT",
  "Software Engineering",
  "Web Technology",
  "Cloud Computing",
  "Cybersecurity",
  "SDN",
  "Compiler Design",
  "Distributed Systems",
  "Big Data",
  "Git & GitHub",
  "Object-Oriented Programming",
  "Digital Electronics",
  "Computer Graphics",
  "Data Mining",
  "Embedded Systems",
  "Microprocessor",
  "Discrete Mathematics",
  "DEMP",
  "Workshop Technology",
  "Manufacturing Processes",
  "Metrology & Quality Control",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Electronics Engineering",
  "Electronics & Communication Engineering",
  "Power Systems",
  "Control Systems",
  "Chemical Engineering",
  "Instrumentation Engineering",
  "Production Engineering",
  "Automobile Engineering",
  "Robotics",
  "Renewable Energy",
  "VLSI",
  "Biomedical Engineering",
  "Engineering Drawing",
  "Materials Science",
  "Thermodynamics",
  "Fluid Mechanics",
  "Strength of Materials",
  "CAD/CAM",
  "Industrial Engineering",
  "Engineering Economics",
  "Signals & Systems",
  "Engineering Mathematics",
  "Hydraulics",
  "Thermal Engineering",
  "Heat Transfer",
  "Environmental Engineering",
  "Transportation Engineering",
  "Structural Analysis",
  "Design of Machine Elements",
  "Machine Tools",
  "Foundry and Welding",
  "Project Viva",
  "Practical Viva"
];

const SUBJECT_TOPICS = {
  DSA: [
    "array", "linked list", "stack", "queue", "binary search", "graph", "tree",
    "hashing", "recursion", "sorting", "merge sort", "quick sort", "heap", "BST",
    "AVL tree", "BFS", "DFS", "time complexity", "space complexity", "dynamic programming",
    "greedy algorithm", "backtracking", "divide and conquer", "heap sort", "big O"
  ],
  Java: [
    "JVM", "JDK", "JRE", "data types", "variables", "inheritance", "interfaces",
    "exceptions", "collections", "ArrayList", "HashMap", "multithreading", "file handling",
    "garbage collection", "packages", "static keyword", "final keyword", "access modifiers",
    "StringBuilder", "class", "object", "constructor", "polymorphism", "encapsulation"
  ],
  Python: [
    "variables", "list", "tuple", "set", "dictionary", "string", "function", "lambda",
    "recursion", "module", "package", "exception handling", "file handling", "inheritance",
    "iterators", "generators", "list comprehension", "virtual environment", "OOP", "dictionary comprehension"
  ],
  DBMS: [
    "database", "table", "record", "primary key", "foreign key", "normalization", "entity relationship",
    "functional dependency", "index", "trigger", "transaction", "ACID properties", "deadlock",
    "join", "view", "subquery", "stored procedure", "concurrency", "schema", "constraint"
  ],
  SQL: [
    "SELECT", "WHERE", "GROUP BY", "HAVING", "ORDER BY", "DISTINCT", "JOIN", "UNION",
    "subquery", "primary key", "foreign key", "INDEX", "COUNT", "SUM", "AVG", "MIN", "MAX",
    "LIKE", "BETWEEN", "INSERT", "UPDATE", "DELETE", "CHECK", "NOT NULL"
  ],
  "Operating Systems": [
    "process", "thread", "PCB", "CPU scheduling", "deadlock", "memory management",
    "paging", "segmentation", "virtual memory", "page replacement", "context switching",
    "file system", "system call", "synchronization", "mutex", "scheduler", "round robin"
  ],
  "Computer Networks": [
    "LAN", "WAN", "TCP", "UDP", "IP", "HTTP", "HTTPS", "DNS", "DHCP", "MAC address",
    "router", "switch", "firewall", "NAT", "OSI model", "TCP/IP model", "packet", "socket",
    "routing", "subnetting", "IPv4", "IPv6", "ARP"
  ],
  COA: [
    "CPU", "ALU", "control unit", "cache", "registers", "RAM", "ROM", "memory hierarchy",
    "instruction cycle", "interrupt", "bus", "pipelining", "RISC", "CISC", "virtual memory",
    "I/O", "address bus", "data bus", "cache mapping"
  ],
  TOC: [
    "alphabet", "string", "language", "grammar", "DFA", "NFA", "regular expression",
    "CFG", "PDA", "Turing machine", "pumping lemma", "CNF", "decidability", "undecidability",
    "finite automata", "Chomsky hierarchy"
  ],
  AI: [
    "artificial intelligence", "agent", "heuristic", "A*", "BFS", "DFS", "state space",
    "minimax", "alpha-beta pruning", "knowledge representation", "expert system", "NLP",
    "machine learning", "supervised learning", "unsupervised learning", "reinforcement learning"
  ],
  ML: [
    "machine learning", "dataset", "feature", "label", "training data", "testing data",
    "classification", "regression", "clustering", "linear regression", "logistic regression",
    "decision tree", "random forest", "SVM", "k-NN", "k-means", "overfitting", "underfitting",
    "precision", "recall", "F1-score", "confusion matrix"
  ],
  IoT: [
    "IoT", "sensor", "actuator", "microcontroller", "Arduino", "ESP32", "Raspberry Pi",
    "MQTT", "edge computing", "gateway", "smart home", "smart agriculture", "machine-to-machine",
    "cloud integration", "IoT security"
  ],
  "Software Engineering": [
    "software engineering", "SDLC", "waterfall model", "Agile", "Scrum", "requirements engineering",
    "SRS", "unit testing", "integration testing", "system testing", "verification", "validation",
    "maintenance", "prototype model", "black-box testing", "white-box testing"
  ],
  "Web Technology": [
    "HTML", "HTML5", "CSS", "CSS3", "box model", "flexbox", "grid", "DOM", "JavaScript",
    "variable", "function", "array", "object", "promise", "async/await", "JSON", "local storage",
    "event handling", "responsive design"
  ],
  "Cloud Computing": [
    "cloud computing", "IaaS", "PaaS", "SaaS", "virtualization", "container", "scalability",
    "elasticity", "public cloud", "private cloud", "hybrid cloud", "cloud security", "cloud storage"
  ],
  Cybersecurity: [
    "cybersecurity", "CIA triad", "authentication", "authorization", "encryption", "hashing",
    "digital signature", "malware", "phishing", "firewall", "VPN", "SQL injection", "XSS", "DDoS",
    "SSL/TLS"
  ],
  SDN: [
    "software-defined networking", "traditional networking", "control plane", "data plane",
    "application plane", "OpenFlow", "SDN controller", "southbound API", "northbound API",
    "flow table", "network virtualization"
  ],
  "Compiler Design": [
    "compiler", "interpreter", "lexer", "parser", "syntax analysis", "semantic analysis",
    "tokens", "lexemes", "symbol table", "intermediate code", "code optimization", "code generation"
  ],
  "Distributed Systems": [
    "distributed system", "client-server", "peer-to-peer", "RPC", "fault tolerance",
    "replication", "consistency", "availability", "CAP theorem", "distributed database"
  ],
  "Big Data": [
    "big data", "volume", "velocity", "variety", "veracity", "Hadoop", "HDFS", "MapReduce",
    "Spark", "distributed processing", "data lake"
  ],
  "Git & GitHub": [
    "Git", "GitHub", "repository", "commit", "push", "pull", "clone", "branch", "merge",
    "pull request", "version control", "checkout", "staging area"
  ],
  "Object-Oriented Programming": [
    "class", "object", "constructor", "inheritance", "polymorphism", "encapsulation",
    "abstraction", "overloading", "overriding", "interface", "abstract class", "access modifier",
    "static keyword", "final keyword", "exception handling", "packages", "generics", "multithreading"
  ],
  "Digital Electronics": [
    "logic gate", "Boolean algebra", "flip-flop", "multiplexer", "demultiplexer", "counter",
    "decoder", "encoder", "combinational circuit", "sequential circuit", "K-map", "ADC", "DAC"
  ],
  "Computer Graphics": [
    "pixel", "resolution", "viewport", "2D transformation", "3D transformation", "rasterization",
    "clipping", "rendering", "projection", "shading", "curve", "surface"
  ],
  "Data Mining": [
    "data mining", "classification", "clustering", "association rule", "data preprocessing",
    "feature selection", "market basket analysis", "outlier detection", "big data analytics"
  ],
  "Embedded Systems": [
    "embedded system", "microcontroller", "sensor", "actuator", "firmware", "real-time system",
    "interrupt", "timer", "RTOS", "GPIO", "power management"
  ],
  "Microprocessor": [
    "microprocessor", "register", "ALU", "bus", "instruction set", "addressing mode",
    "interrupt", "pipeline", "clock cycle", "memory interfacing", "I/O interfacing"
  ],
  "Discrete Mathematics": [
    "set", "relation", "function", "graph theory", "propositional logic", "predicate logic",
    "combinatorics", "probability", "mathematical induction", "recurrence relation", "equivalence relation"
  ],
  "Project Viva": [
    "problem statement", "objectives", "technology selection", "architecture", "modules", "results",
    "limitations", "future scope", "contribution", "project testing", "project design"
  ],
  "Practical Viva": [
    "aim", "algorithm", "inputs", "outputs", "time complexity", "error handling", "limitations",
    "real-world use", "experiment design", "observation", "results", "system testing"
  ],
  DEMP: [
    "design process", "manufacturing process", "tolerance", "metrology", "casting", "machining",
    "welding", "assembly", "quality control", "work study", "process planning", "CAD modeling"
  ],
  "Mechanical Engineering": [
    "thermodynamics", "heat transfer", "fluid mechanics", "strength of materials", "machine design",
    "manufacturing process", "gear", "cam", "belt drive", "power transmission", "refrigeration"
  ],
  "Civil Engineering": [
    "surveying", "structural analysis", "reinforced concrete", "steel structure", "earthquake engineering",
    "soil mechanics", "foundation", "highway engineering", "water supply", "wastewater treatment", "estimation"
  ],
  "Electrical Engineering": [
    "electric circuit", "electrical machine", "transformer", "generator", "motor", "power factor",
    "three-phase system", "earthing", "protection", "switchgear", "load flow", "electrical safety"
  ],
  "Electronics Engineering": [
    "semiconductor", "diode", "transistor", "amplifier", "oscillator", "filter", "rectifier",
    "op-amp", "logic gate", "sensor", "signal conditioning", "PCB"
  ],
  "Electronics & Communication Engineering": [
    "analog communication", "digital communication", "modulation", "demodulation", "antenna",
    "satellite communication", "optical fiber", "signal processing", "network analysis", "microwave", "MIMO"
  ],
  "Power Systems": [
    "power generation", "transmission line", "substation", "transformer", "relay", "load shedding",
    "fault analysis", "grid stability", "HVDC", "smart grid", "power quality"
  ],
  "Control Systems": [
    "feedback", "transfer function", "stability", "PID controller", "root locus", "Bode plot",
    "Nyquist plot", "state space", "controller design", "sensor", "actuator"
  ],
  "Chemical Engineering": [
    "mass transfer", "heat transfer", "reaction engineering", "distillation", "evaporation",
    "fluid flow", "process control", "material balance", "energy balance", "unit operations", "separation"
  ],
  "Instrumentation Engineering": [
    "measurement", "transducer", "sensor", "signal conditioning", "calibration", "PLC",
    "SCADA", "process instrumentation", "data acquisition", "actuator", "control loop"
  ],
  "Production Engineering": [
    "casting", "forming", "machining", "tool design", "quality control", "metrology",
    "manufacturing planning", "automation", "lean manufacturing", "supply chain", "process optimization"
  ],
  "Automobile Engineering": [
    "engine", "transmission", "brake system", "suspension", "steering", "fuel system",
    "automotive electronics", "vehicle dynamics", "hybrid vehicle", "emissions", "maintenance"
  ],
  Robotics: [
    "robot", "actuator", "sensor", "kinematics", "dynamics", "trajectory planning",
    "automation", "controller", "machine vision", "path planning", "robot arm"
  ],
  "Renewable Energy": [
    "solar energy", "wind energy", "hydropower", "biomass", "geothermal energy", "energy storage",
    "green energy", "grid integration", "energy efficiency", "sustainability", "renewable policy"
  ],
  VLSI: [
    "VLSI", "CMOS", "MOSFET", "logic design", "FPGA", "ASIC", "layout", "timing analysis",
    "power dissipation", "verification", "testability", "floorplanning"
  ],
  "Biomedical Engineering": [
    "biomedical signal", "medical imaging", "biosensor", "prosthesis", "medical device", "biomechanics",
    "signal processing", "assistive technology", "patient monitoring", "biocompatibility", "electrophysiology"
  ],
  "Engineering Drawing": [
    "orthographic projection", "isometric view", "dimensioning", "sectional view", "scale", "tangent",
    "development of surfaces", "engineering graphics", "CAD drawing", "projection", "line conventions"
  ],
  "Materials Science": [
    "material", "crystal structure", "phase diagram", "heat treatment", "mechanical properties", "corrosion",
    "alloy", "composite", "ceramic", "polymer", "nano material"
  ],
  Thermodynamics: [
    "entropy", "enthalpy", "first law", "second law", "heat engine", "refrigeration cycle",
    "steam table", "thermodynamic process", "PV diagram", "efficiency", "internal energy"
  ],
  "Fluid Mechanics": [
    "fluid", "viscosity", "pressure", "buoyancy", "Bernoulli equation", "laminar flow",
    "turbulent flow", "continuity equation", "pipe flow", "head loss", "hydraulic machines"
  ],
  "Strength of Materials": [
    "stress", "strain", "bending moment", "shear force", "torsion", "elasticity",
    "buckling", "deflection", "yield strength", "fatigue", "failure theory"
  ],
  "CAD/CAM": [
    "CAD", "CAM", "CNC", "toolpath", "parametric modeling", "computer aided manufacturing",
    "rapid prototyping", "simulation", "g-code", "fixture design", "process planning"
  ],
  "Industrial Engineering": [
    "work study", "method study", "time study", "ergonomics", "quality management", "lean manufacturing",
    "six sigma", "facility layout", "inventory control", "supply chain", "operations research"
  ],
  "Engineering Economics": [
    "cost analysis", "break-even point", "depreciation", "cash flow", "time value of money",
    "economic feasibility", "capital budgeting", "financial planning", "project appraisal", "inflation"
  ],
  "Signals & Systems": [
    "signal", "system", "Fourier transform", "Laplace transform", "convolution", "sampling",
    "filter", "frequency response", "z-transform", "stability", "signal processing"
  ],
  "Engineering Mathematics": [
    "matrix", "determinant", "differential equation", "Laplace transform", "Fourier series",
    "probability", "statistics", "numerical method", "complex number", "vector calculus"
  ],
  Hydraulics: [
    "hydraulic pressure", "flow rate", "Bernoulli equation", "pump efficiency", "open channel flow",
    "head loss", "pipe network", "hydraulic gradient", "water hammer", "hydraulic machines"
  ],
  "Thermal Engineering": [
    "heat engine", "Rankine cycle", "Carnot cycle", "boiler", "condenser", "thermodynamic cycle",
    "steam power plant", "compressor", "turbine", "entropy"
  ],
  "Heat Transfer": [
    "conduction", "convection", "radiation", "thermal conductivity", "insulation", "heat exchanger",
    "temperature gradient", "thermal resistance", "natural convection", "forced convection"
  ],
  "Environmental Engineering": [
    "water treatment", "wastewater", "air pollution", "solid waste", "sewage", "water quality",
    "ecosystem", "environmental impact", "effluent treatment", "sustainability"
  ],
  "Transportation Engineering": [
    "highway engineering", "traffic flow", "pavement design", "geometric design", "road safety",
    "transport planning", "intersection design", "surveying", "traffic signal", "transportation model"
  ],
  "Structural Analysis": [
    "beam", "truss", "load", "bending moment", "shear force", "deflection", "moment of inertia",
    "support reaction", "stability", "structural design"
  ],
  "Design of Machine Elements": [
    "stress concentration", "shaft design", "bearing", "gear", "power transmission", "fatigue failure",
    "safety factor", "coupling", "key", "spring design"
  ],
  "Machine Tools": [
    "lathe", "milling machine", "drilling", "shaper", "grinder", "tool wear", "machining process",
    "cutting speed", "feed rate", "surface finish"
  ],
  "Foundry and Welding": [
    "casting", "molding", "pattern", "welding joint", "arc welding", "gas welding", "heat affected zone",
    "defect analysis", "weld quality", "metallurgy"
  ]
};

const PRACTICAL_EXPERIMENTS = {
  DSA: ["Array Traversal", "Stack Operations", "Binary Search", "Graph Traversal", "Sorting Algorithms"],
  Java: ["ArrayList Demo", "Inheritance Example", "Exception Handling", "Thread Creation", "File Read/Write"],
  Python: ["List and Dictionary", "Function Demo", "File Handling", "Exception Handling", "OOP Concepts"],
  DBMS: ["ER Diagram", "Normalization", "SQL Joins", "Aggregate Queries", "Transaction Management"],
  SQL: ["SELECT Query", "JOIN Query", "GROUP BY Query", "Subquery Practice", "Constraint Practice"],
  "Operating Systems": ["Process Scheduling", "Deadlock Simulation", "Memory Allocation", "Page Replacement", "System Calls"],
  "Computer Networks": ["Subnetting", "TCP/UDP Demo", "HTTP Request Flow", "DNS Lookup", "Routing Example"],
  COA: ["Instruction Cycle", "Cache Mapping", "ALU Operation", "Pipelining Demo", "Bus Architecture"],
  TOC: ["DFA Design", "NFA to DFA", "Regular Expression", "CFG Example", "Turing Machine Simulation"],
  AI: ["Search Algorithm", "Decision Tree", "Minimax Game", "Expert System", "NLP Demo"],
  ML: ["Linear Regression", "KNN Classification", "Decision Tree", "Confusion Matrix", "Model Evaluation"],
  IoT: ["Sensor Reading", "ESP32 LED Control", "MQTT Publish/Subscribe", "Smart Home Demo", "Edge Processing"],
  "Software Engineering": ["Requirements Gathering", "SDLC Flow", "Unit Testing", "Risk Analysis", "Agile Sprint Planning"],
  "Web Technology": ["HTML Form", "CSS Flexbox", "DOM Event Handling", "Fetch API", "Responsive Design"],
  "Cloud Computing": ["VM Creation", "Container Deployment", "Load Balancing", "Cloud Storage", "Auto Scaling"],
  Cybersecurity: ["Encryption Demo", "Hashing Demo", "Firewall Rules", "SQL Injection Test", "SSL/TLS Setup"],
  SDN: ["OpenFlow Switch", "Controller Setup", "Traffic Flow", "Topology Design", "Dynamic Routing"],
  "Compiler Design": ["Lexical Analysis", "Parsing Example", "Semantic Check", "Code Optimization", "Intermediate Code"],
  "Distributed Systems": ["Client-Server Demo", "Replication Example", "RPC Call", "CAP Theorem", "Fault Tolerance"],
  "Big Data": ["MapReduce Wordcount", "HDFS Setup", "Spark Transform", "ETL Pipeline", "Hadoop Cluster"],
  "Git & GitHub": ["Branching Workflow", "Merge Conflict Resolution", "Pull Request", "Commit History", "Repository Cloning"],
  "Object-Oriented Programming": ["Class Design", "Inheritance Example", "Polymorphism Demo", "Exception Handling", "Wrapper Classes"],
  "Digital Electronics": ["Logic Gate Truth Table", "Flip-Flop Operation", "Counter Design", "Decoder Demo", "Boolean Simplification"],
  "Computer Graphics": ["2D Transformation", "3D Projection", "Clipping Algorithm", "Rasterization", "OpenGL Basics"],
  "Data Mining": ["Association Rule", "Classification Model", "Clustering Demo", "Market Basket Analysis", "Outlier Detection"],
  "Embedded Systems": ["Sensor Integration", "Interrupt Handling", "Timer Usage", "RTOS Basics", "GPIO Control"],
  "Microprocessor": ["Instruction Cycle", "Register Transfer", "ALU Operation", "Interrupt Handling", "Memory Interfacing"],
  "Discrete Mathematics": ["Set Theory", "Logic Proof", "Graph Traversal", "Recurrence Relation", "Probability Basics"],
  DEMP: ["Design Process", "Manufacturing Flow", "Tolerance Analysis", "Metrology Demo", "Quality Control"],
  "Mechanical Engineering": ["Heat Transfer Lab", "Fluid Mechanics Lab", "Thermo Cycle", "Machine Design", "Gear Analysis"],
  "Civil Engineering": ["Surveying Lab", "Concrete Mix Design", "Beam Testing", "Soil Compaction", "Water Quality"],
  "Electrical Engineering": ["Circuit Analysis", "Transformer Test", "Motor Performance", "LT Panel", "Load Calculation"],
  "Electronics Engineering": ["Rectifier Test", "Amplifier Circuit", "Filter Design", "Transistor Biasing", "PCB Soldering"],
  "Electronics & Communication Engineering": ["AM FM Modulation", "Antenna Pattern", "Fiber Optics", "Signal Sampling", "Wireless Link"],
  "Power Systems": ["Load Flow", "Short Circuit Study", "Relay Coordination", "Grid Stability", "Protection Panel"],
  "Control Systems": ["PID Tuning", "Transfer Function", "Stability Analysis", "Controller Design", "Feedback Loop"],
  "Chemical Engineering": ["Distillation Lab", "Mass Balance", "Heat Exchanger", "Fluid Flow", "Reaction Kinetics"],
  "Instrumentation Engineering": ["Transducer Calibration", "PLC Logic", "SCADA Demo", "Process Loop", "Sensor Validation"],
  "Production Engineering": ["Lathe Operation", "Casting Process", "Tool Wear", "Quality Inspection", "Lean Setup"],
  "Automobile Engineering": ["Engine Performance", "Brake Testing", "Suspension Analysis", "Fuel System", "Cooling System"],
  Robotics: ["Robot Kinematics", "Path Planning", "Sensor Integration", "Controller Tuning", "Vision Demo"],
  "Renewable Energy": ["Solar PV Analysis", "Wind Turbine Study", "Energy Audit", "Battery Storage", "Microgrid Setup"],
  VLSI: ["MOSFET Testing", "Logic Synthesis", "FPGA Programming", "Timing Analysis", "Layout Review"],
  "Biomedical Engineering": ["ECG Reading", "Biosensor Demo", "Medical Imaging", "Signal Processing", "Wearable Device"],
  "Engineering Drawing": ["Orthographic Views", "Isometric Drawing", "Dimensioning", "Section Drawing", "CAD Drafting"],
  "Materials Science": ["Hardness Test", "Corrosion Study", "Heat Treatment", "Crystal Structure", "Material Selection"],
  Thermodynamics: ["Steam Table", "Rankine Cycle", "Heat Engine", "Refrigeration Cycle", "Entropy Calculation"],
  "Fluid Mechanics": ["Bernoulli Experiment", "Pipe Flow", "Pump Characteristics", "Drag Analysis", "Hydraulic Machines"],
  "Strength of Materials": ["Beam Deflection", "Stress Test", "Buckling", "Shear Force", "Material Failure"],
  "CAD/CAM": ["3D Model", "Toolpath Simulation", "CNC Operation", "Rapid Prototype", "Assembly Layout"],
  "Industrial Engineering": ["Method Study", "Time Study", "Plant Layout", "Ergonomics Demo", "Process Bottleneck"],
  "Engineering Economics": ["Cost Estimation", "Break-even Analysis", "Cash Flow", "Depreciation Study", "Project Appraisal"],
  "Signals & Systems": ["Convolution Demo", "Fourier Transform", "Filter Design", "Sampling", "System Stability"],
  "Engineering Mathematics": ["Matrix Operation", "Differential Equation", "Laplace Transform", "Probability Experiment", "Numerical Approximation"],
  Hydraulics: ["Flow Measurement", "Pipe Friction Test", "Pump Performance", "Open Channel Flow", "Hydraulic Circuit"],
  "Thermal Engineering": ["Rankine Cycle Demo", "Steam Boiler Study", "Compressor Test", "Turbine Efficiency", "Entropy Calculation"],
  "Heat Transfer": ["Conduction Test", "Convective Heat Transfer", "Radiation Experiment", "Insulation Check", "Heat Exchanger"],
  "Environmental Engineering": ["Water Quality Test", "Sewage Analysis", "Air Pollution Demo", "Effluent Treatment", "Solid Waste Audit"],
  "Transportation Engineering": ["Traffic Survey", "Road Safety Audit", "Pavement Design", "Intersection Study", "Signal Timing"],
  "Structural Analysis": ["Beam Load Test", "Truss Analysis", "Deflection Study", "Support Reaction", "Stability Check"],
  "Design of Machine Elements": ["Shaft Design", "Bearing Selection", "Gear Design", "Spring Analysis", "Coupling Review"],
  "Machine Tools": ["Lathe Operation", "Milling Demo", "Tool Wear Study", "Surface Finish Check", "Drilling Accuracy"],
  "Foundry and Welding": ["Mold Preparation", "Casting Defect Test", "Arc Welding Demo", "Weld Joint Inspection", "Heat Affected Zone"]
};

const state = {
  selectedSection: "dashboardSection",
  theme: localStorage.getItem("viva-theme") || "light",
  bookmarks: safeParse(localStorage.getItem("viva-bookmarks"), []),
  progress: safeParse(localStorage.getItem("viva-progress"), {
    attempted: [],
    correct: [],
    mockScores: [],
    favorites: [],
    recentSubjects: [],
    weakSubjects: []
  }),
  questionBank: [],
  currentQuestion: null,
  rapidQueue: [],
  rapidIndex: 0,
  mockQueue: [],
  mockIndex: 0,
  mockScore: 0,
  mockResults: [],
  quizQueue: [],
  quizIndex: 0,
  quizSelectedAnswer: "",
  quizResults: []
};

const MOCK_SUBJECT_ALIASES = {
  cn: "Computer Networks",
  "computer networks": "Computer Networks",
  networking: "Computer Networks",
  os: "Operating Systems",
  "operating system": "Operating Systems",
  dbms: "DBMS",
  dsa: "DSA",
  java: "Java",
  python: "Python",
  ai: "AI",
  ml: "ML",
  iot: "IoT",
  web: "Web Technology",
  coa: "COA",
  toc: "TOC",
  "software engineering": "Software Engineering",
  cybersecurity: "Cybersecurity",
  "cloud computing": "Cloud Computing"
};

function safeParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getDifficultyClass(level) {
  return String(level || "Easy").toLowerCase();
}

function saveProgress() {
  localStorage.setItem("viva-progress", JSON.stringify(state.progress));
}

function saveBookmarks() {
  localStorage.setItem("viva-bookmarks", JSON.stringify(state.bookmarks));
}

function buildQuestionBank() {
  const bank = [];

  Object.entries(SUBJECT_TOPICS).forEach(([subject, topics]) => {
    topics.forEach((topic, topicIndex) => {
      const relatedTopic = topics[(topicIndex + 1) % topics.length] || "basic concept";
      const patterns = [
        { difficulty: "Easy", type: "Definition", text: `What is ${topic}?` },
        { difficulty: "Easy", type: "Short Answer", text: `Define ${topic} in one sentence.` },
        { difficulty: "Medium", type: "How", text: `How is ${topic} used in ${subject}?` },
        { difficulty: "Medium", type: "Example", text: `Explain ${topic} with a simple example.` },
        { difficulty: "Hard", type: "Why", text: `Why is ${topic} important in ${subject}?` },
        { difficulty: "Medium", type: "Difference", text: `What is the difference between ${topic} and ${relatedTopic}?` },
        { difficulty: "Easy", type: "Application", text: `Where is ${topic} used in real life?` },
        { difficulty: "Hard", type: "Comparison", text: `Compare ${topic} with ${relatedTopic} in a viva answer.` },
        { difficulty: "Medium", type: "Scenario", text: `How would you apply ${topic} in a practical problem?` },
        { difficulty: "Hard", type: "Troubleshooting", text: `What problems can occur when using ${topic}?` },
        { difficulty: "Medium", type: "Procedure", text: `Explain the step-by-step procedure for ${topic}.` },
        { difficulty: "Hard", type: "Design", text: `How would you design a solution using ${topic} in ${subject}?` },
        { difficulty: "Medium", type: "Advantage/Disadvantage", text: `What are the advantages and disadvantages of ${topic}?` },
        { difficulty: "Medium", type: "Safety", text: `What safety precautions are important while using ${topic}?` },
        { difficulty: "Hard", type: "Fault Analysis", text: `What faults or errors can happen in ${topic}, and how do you analyze them?` },
        { difficulty: "Medium", type: "Calculation", text: `How do you calculate or estimate values related to ${topic}?` },
        { difficulty: "Medium", type: "Why", text: `Why do students often confuse ${topic} with ${relatedTopic}?` },
        { difficulty: "Hard", type: "Comparison", text: `Which is better: ${topic} or ${relatedTopic}?` }
      ];

      patterns.forEach((pattern, patternIndex) => {
        const safeTopic = topic.replace(/\s+/g, " ").trim();
        const question = `${pattern.text}`;
        const subjectLower = subject.toLowerCase();
        const topicLower = safeTopic.toLowerCase();
        const questionText = question;
        const answer = buildAnswer(subject, safeTopic, pattern.type, questionText);
        const result = {
          id: `${subject}-${safeTopic.replace(/\s+/g, "-")}-${patternIndex}`,
          subject,
          topic: safeTopic,
          type: pattern.type,
          difficulty: pattern.difficulty,
          question: questionText,
          answer: answer.normal,
          simpleAnswer: answer.simple,
          example: answer.example,
          importantPoint: answer.important,
          followUps: buildFollowUps(subject, safeTopic, relatedTopic),
          keywords: buildKeywords(subjectLower, topicLower, relatedTopic, pattern.type)
        };

        bank.push(result);
      });
    });
  });

  const specialQuestions = [
    {
      subject: "DSA",
      topic: "stack",
      difficulty: "Easy",
      question: "What is a stack?",
      answer: "Definition: A stack is a linear data structure that follows the LIFO principle.\n\nSimple explanation: The last item inserted is the first item removed.\n\nExample: A stack of plates, where the top plate is used first.\n\nImportant point: Push adds an item and pop removes the item from the top.",
      simpleAnswer: "Think of a stack of books. You place one on top and remove the top one first.",
      example: "Example: push(10), push(20), pop() => 20 is removed first.",
      importantPoint: "Stack is useful for backtracking, recursion, and expression evaluation.",
      followUps: ["Why is stack LIFO?", "Stack vs queue?"]
    },
    {
      subject: "OOP",
      topic: "polymorphism",
      difficulty: "Medium",
      question: "What is polymorphism?",
      answer: "Definition: Polymorphism means one interface or method can behave in different ways depending on the object.\n\nSimple explanation: The same method name can act differently in different classes.\n\nExample: A draw() method may draw a circle, rectangle, or square differently.\n\nImportant point: It helps achieve flexibility in object-oriented programs.",
      simpleAnswer: "The same action can work differently for different objects.",
      example: "Example: Animal sound() may print bark for Dog and meow for Cat.",
      importantPoint: "Polymorphism is one of the four pillars of OOP.",
      followUps: ["What is method overriding?", "Overloading vs overriding?", "Why is polymorphism useful?"]
    },
    {
      subject: "DBMS",
      topic: "normalization",
      difficulty: "Easy",
      question: "What is normalization?",
      answer: "Definition: Normalization is the process of organizing data in a database to reduce redundancy and improve integrity.\n\nSimple explanation: It removes repeated and unnecessary data so tables stay clean.\n\nExample: Students and courses data can be stored in separate tables instead of repeating course names in every student record.\n\nImportant point: It helps reduce update anomalies and maintain consistency.",
      simpleAnswer: "Normalization keeps the database organized and avoids repeated data.",
      example: "Example: Store student details in one table and course details in another linked by a key.",
      importantPoint: "Normalization is important for efficient and reliable database design.",
      followUps: ["What is 1NF?", "Why is normalization needed?", "Primary key vs foreign key?"]
    },
    {
      subject: "Computer Networks",
      topic: "TCP",
      difficulty: "Medium",
      question: "What is TCP?",
      answer: "Definition: TCP is a connection-oriented transport layer protocol that ensures reliable data delivery.\n\nSimple explanation: It checks whether packets arrive safely and in the correct order.\n\nExample: Web browsing and file transfer rely on TCP.\n\nImportant point: TCP is reliable but slower than UDP because it includes error checking and acknowledgments.",
      simpleAnswer: "TCP is reliable and checks every packet before continuing.",
      example: "Example: HTTPS and email transfer use TCP.",
      importantPoint: "TCP provides connection-oriented delivery with sequence and acknowledgement control.",
      followUps: ["TCP vs UDP?", "What is IP address?", "What is DNS?"]
    },
    {
      subject: "AI",
      topic: "A*",
      difficulty: "Hard",
      question: "What is A* algorithm?",
      answer: "Definition: A* is a pathfinding and graph traversal algorithm that uses heuristic values to find the shortest path efficiently.\n\nSimple explanation: It tries the most promising route first using both cost so far and estimated remaining cost.\n\nExample: GPS navigation uses A* or similar algorithms to choose the best route.\n\nImportant point: It is efficient when a useful heuristic is available.",
      simpleAnswer: "A* finds the shortest path by choosing routes that look most promising.",
      example: "Example: Route planning in maps and game AI uses A*.",
      importantPoint: "It combines actual cost and heuristic estimate to guide search.",
      followUps: ["BFS vs DFS?", "What is a heuristic?", "How does A* differ from BFS?"]
    }
  ];

  specialQuestions.forEach((item) => {
    bank.push({
      id: `${item.subject}-${item.topic}-special`,
      subject: item.subject,
      topic: item.topic,
      type: item.type || "Definition",
      difficulty: item.difficulty,
      question: item.question,
      answer: item.answer,
      simpleAnswer: item.simpleAnswer,
      example: item.example,
      importantPoint: item.importantPoint,
      followUps: item.followUps || [],
      keywords: buildKeywords(item.subject.toLowerCase(), item.topic.toLowerCase(), item.topic.toLowerCase(), "special")
    });
  });

  return bank;
}

function buildAnswer(subject, topic, type, question) {
  const templateNormal = `Definition: In ${subject}, ${topic} is an important concept used in engineering and viva explanations.\n\nSimple explanation: It is a core topic that helps in understanding broader systems and problem-solving.\n\nExample: A practical example is to relate ${topic} to a real application in ${subject}.\n\nImportant point: Focus on the idea, purpose, and use case during viva.`;

  const simple = `Think of ${topic} as a basic concept that helps solve real problems in ${subject}.`;
  const example = `Example: If you are learning ${subject}, ${topic} can be seen in a real project, classroom problem, or system design.`;
  const important = `Important point: Always explain what it is, why it is used, and how it works in one or two sentences.`;

  return {
    normal: `${templateNormal}\n\nQuestion: ${question}`,
    simple,
    example,
    important
  };
}

function buildFollowUps(subject, topic, relatedTopic) {
  return [
    `What is the difference between ${topic} and ${relatedTopic}?`,
    `Why is ${topic} important in ${subject}?`,
    `What are the real-world uses of ${topic}?`,
    `How do you explain ${topic} in simple words?`
  ];
}

function buildKeywords(subject, topic, relatedTopic, type) {
  const words = new Set([
    subject,
    topic,
    relatedTopic,
    type,
    "define",
    "explain",
    "example",
    "uses",
    "application",
    "important",
    "viva"
  ]);
  const clean = topic.split(/\s+/).filter(Boolean);
  clean.forEach((word) => words.add(word));
  return Array.from(words).filter(Boolean);
}

function getQuestionById(id) {
  return state.questionBank.find((question) => question.id === id) || null;
}

function getQuestionsBySubject(subject) {
  const source = state.questionBank.filter((item) => item.subject === subject);
  return source.length ? source : state.questionBank.filter((item) => item.subject.toLowerCase() === subject.toLowerCase());
}

function getAllSubjectsForSelection() {
  return SUBJECTS.filter((subject) => !["Project Viva", "Practical Viva"].includes(subject));
}

function renderTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  const toggleButton = document.getElementById("themeToggle");
  toggleButton.textContent = state.theme === "dark" ? "🌙 Dark" : "☀️ Light";
}

function renderDashboardStats() {
  const totalQuestions = state.questionBank.length;
  const totalSubjects = SUBJECTS.length;
  const attempted = state.progress.attempted.length || 0;
  const latestMockScores = state.progress.mockScores.length ? state.progress.mockScores : [0];
  const averageMock = Math.round(latestMockScores.reduce((sum, entry) => sum + Number(entry), 0) / latestMockScores.length);

  document.getElementById("subjectCount").textContent = totalSubjects;
  document.getElementById("questionCount").textContent = totalQuestions;
  document.getElementById("attemptedCount").textContent = attempted;
  document.getElementById("mockScoreSummary").textContent = `${averageMock}%`;
  document.getElementById("subjectCaption").textContent = `${SUBJECTS.length} subjects covered`;

  const dashboard = document.getElementById("dashboardSubjects");
  dashboard.innerHTML = "";

  SUBJECTS.forEach((subject) => {
    const count = getQuestionsBySubject(subject).length;
    const card = document.createElement("button");
    card.className = "subject-card";
    card.type = "button";
    card.innerHTML = `
      <h4>${subject}</h4>
      <small>${count} questions</small>
    `;
    card.addEventListener("click", () => {
      const subjectFilter = document.getElementById("subjectFilter");
      subjectFilter.value = subject;
      showSection("browseSection");
      renderQuestionList();
      addRecentSubject(subject);
    });
    dashboard.appendChild(card);
  });
}

function renderQuickSubjects() {
  const container = document.getElementById("subjectQuickButtons");
  container.innerHTML = "";

  getAllSubjectsForSelection().forEach((subject) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-subject";
    button.textContent = subject;
    button.addEventListener("click", () => {
      const subjectFilter = document.getElementById("subjectFilter");
      subjectFilter.value = subject;
      showSection("browseSection");
      renderQuestionList();
      addRecentSubject(subject);
    });
    container.appendChild(button);
  });
}

function renderSubjectFilter() {
  const subjectFilter = document.getElementById("subjectFilter");
  subjectFilter.innerHTML = "<option value=\"all\">All Subjects</option>";
  getAllSubjectsForSelection().forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectFilter.appendChild(option);
  });

  const typeFilter = document.getElementById("typeFilter");
  typeFilter.innerHTML = "<option value=\"all\">All Types</option>";
  QUESTION_TYPES.filter((type) => type !== "All Types").forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });

  const practicalSubject = document.getElementById("practicalSubject");
  practicalSubject.innerHTML = "";
  getAllSubjectsForSelection().forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    practicalSubject.appendChild(option);
  });

  practicalSubject.value = "DSA";
  updatePracticalExperimentOptions();
}

function renderQuestionList() {
  const questionList = document.getElementById("questionList");
  const subjectValue = document.getElementById("subjectFilter").value;
  const difficultyValue = document.getElementById("difficultyFilter").value;
  const typeValue = document.getElementById("typeFilter").value;

  const filtered = state.questionBank.filter((item) => {
    const subjectCheck = subjectValue === "all" || item.subject === subjectValue;
    const difficultyCheck = difficultyValue === "all" || item.difficulty === difficultyValue;
    const typeCheck = typeValue === "all" || (item.type || "Definition") === typeValue;
    const searchTerm = normalizeText(document.getElementById("globalSearchInput").value);
    const keywords = Array.isArray(item.keywords) ? item.keywords : [];
    const matchesSearch = !searchTerm || normalizeText(item.question).includes(searchTerm) || normalizeText(item.topic).includes(searchTerm) || keywords.some((keyword) => normalizeText(keyword).includes(searchTerm));
    return subjectCheck && difficultyCheck && typeCheck && matchesSearch;
  });

  if (!filtered.length) {
    questionList.innerHTML = '<div class="question-card"><h4>No matching questions found.</h4><p class="answer-preview">Try a different subject, type, or search term.</p></div>';
    return;
  }

  questionList.innerHTML = "";
  filtered.slice(0, 40).forEach((question) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.innerHTML = `
      <div class="question-card-header">
        <div class="badge-wrap">
          <span class="subject-pill">${question.subject}</span>
          <span class="topic-badge">${question.topic}</span>
          <span class="topic-badge">${question.type || "Definition"}</span>
          <span class="difficulty-badge ${getDifficultyClass(question.difficulty)}">${question.difficulty}</span>
        </div>
        <button class="bookmark-btn ${state.bookmarks.includes(question.id) ? "active" : ""}" data-bookmark-id="${question.id}">⭐ ${state.bookmarks.includes(question.id) ? "Saved" : "Bookmark"}</button>
      </div>
      <h4>${question.question}</h4>
      <p class="answer-preview">${question.answer.split("\n")[0]}</p>
      <div class="question-actions">
        <button class="question-action" data-view-id="${question.id}">View Answer</button>
        <button class="question-action" data-ask-id="${question.id}">Ask Bot</button>
      </div>
    `;

    const answerPanel = document.createElement("div");
    answerPanel.className = "answer-panel hidden";
    answerPanel.innerHTML = `
      <h4>Answer</h4>
      <p>${question.answer.replace(/\n/g, "<br><br>")}</p>
      <div class="question-actions">
        <button class="question-action" data-simple-answer="${question.id}">Explain Simply</button>
      </div>
      <h5>Example</h5>
      <p>${question.example}</p>
      <h5>Important point</h5>
      <p>${question.importantPoint}</p>
      <div class="follow-up-list">
        ${question.followUps.map((followUp) => `<button class="follow-btn" data-follow-up="${escapeAttribute(followUp)}">${followUp}</button>`).join("")}
      </div>
    `;
    card.appendChild(answerPanel);

    questionList.appendChild(card);

    const bookmarkButton = card.querySelector(".bookmark-btn");
    bookmarkButton.addEventListener("click", () => toggleBookmark(question.id));

    card.querySelector("[data-view-id]").addEventListener("click", () => {
      answerPanel.classList.toggle("hidden");
      if (!state.progress.attempted.includes(question.id)) {
        state.progress.attempted.push(question.id);
        saveProgress();
        updateProgressReadouts();
      }
    });

    card.querySelector("[data-ask-id]").addEventListener("click", () => {
      showSection("chatSection");
      askQuestionToBot(question.question);
    });

    answerPanel.querySelectorAll(".follow-btn").forEach((button) => {
      button.addEventListener("click", () => {
        showSection("chatSection");
        askQuestionToBot(button.dataset.followUp);
      });
    });

    const simpleBtn = answerPanel.querySelector("[data-simple-answer]");
    if (simpleBtn) {
      simpleBtn.addEventListener("click", () => {
        const normalText = answerPanel.querySelector("p");
        if (normalText) {
          normalText.innerHTML = `<strong>Simple version:</strong><br>${question.simpleAnswer}`;
        }
      });
    }
  });
}

function escapeAttribute(value) {
  return String(value).replace(/"/g, "&quot;");
}

function toggleBookmark(questionId) {
  if (!state.bookmarks.includes(questionId)) {
    state.bookmarks.push(questionId);
  } else {
    state.bookmarks = state.bookmarks.filter((id) => id !== questionId);
  }
  saveBookmarks();
  renderQuestionList();
  renderBookmarks();
}

function renderBookmarks() {
  const container = document.getElementById("bookmarkList");
  const bookmarkedQuestions = state.bookmarks
    .map((id) => getQuestionById(id))
    .filter(Boolean);

  if (!bookmarkedQuestions.length) {
    container.innerHTML = '<div class="question-card"><h4>No bookmarks yet.</h4><p class="answer-preview">Save important questions for quick revision.</p></div>';
    return;
  }

  container.innerHTML = "";
  bookmarkedQuestions.forEach((question) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.innerHTML = `
      <div class="question-card-header">
        <div class="badge-wrap">
          <span class="subject-pill">${question.subject}</span>
          <span class="topic-badge">${question.topic}</span>
          <span class="difficulty-badge ${getDifficultyClass(question.difficulty)}">${question.difficulty}</span>
        </div>
      </div>
      <h4>${question.question}</h4>
      <div class="question-actions">
        <button class="question-action" data-bookmark-view="${question.id}">View</button>
        <button class="bookmark-btn active" data-bookmark-remove="${question.id}">Remove</button>
      </div>
    `;

    card.querySelector("[data-bookmark-view]").addEventListener("click", () => {
      showSection("browseSection");
      const subjectFilter = document.getElementById("subjectFilter");
      subjectFilter.value = question.subject;
      renderQuestionList();
      const firstQuestion = document.querySelector(`[data-view-id="${question.id}"]`);
      if (firstQuestion) {
        firstQuestion.click();
      }
    });

    card.querySelector("[data-bookmark-remove]").addEventListener("click", () => {
      toggleBookmark(question.id);
    });

    container.appendChild(card);
  });
}

function updateProgressReadouts() {
  const attempted = state.progress.attempted.length || 0;
  const correct = state.progress.correct.length || 0;
  const recentMockScores = state.progress.mockScores.length ? state.progress.mockScores : [0];
  const averageMock = Math.round(recentMockScores.reduce((sum, item) => sum + Number(item), 0) / recentMockScores.length);
  document.getElementById("attemptedCount").textContent = attempted;
  document.getElementById("mockScoreSummary").textContent = `${averageMock}%`;
  document.getElementById("subjectCount").textContent = SUBJECTS.length;
  document.getElementById("questionCount").textContent = state.questionBank.length;
  const currentProgress = document.getElementById("mockScoreSummary");
  if (currentProgress) {
    currentProgress.textContent = `${averageMock}%`;
  }
  if (correct > 0) {
    state.progress.favorites = Array.from(new Set(state.progress.favorites));
  }
}

function renderQuizSubjects() {
  const select = document.getElementById("quizSubject");
  select.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All Subjects";
  select.appendChild(allOption);

  const availableSubjects = new Set(state.questionBank.map((question) => question.subject));
  getAllSubjectsForSelection()
    .filter((subject) => availableSubjects.has(subject))
    .forEach((subject) => {
      const option = document.createElement("option");
      option.value = subject;
      option.textContent = subject;
      select.appendChild(option);
    });
}

function shuffleItems(items) {
  const shuffled = items.slice();
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function buildQuizOptions(question, subjectQuestions) {
  const uniqueTopics = new Map();
  subjectQuestions.forEach((candidate) => {
    if (candidate.topic !== question.topic && !uniqueTopics.has(candidate.topic)) {
      uniqueTopics.set(candidate.topic, candidate);
    }
  });

  const distractors = shuffleItems(Array.from(uniqueTopics.values())).slice(0, 3);
  if (distractors.length < 3) {
    const additionalQuestions = state.questionBank.filter((candidate) =>
      candidate.subject !== question.subject && candidate.topic !== question.topic
    );
    shuffleItems(additionalQuestions).forEach((candidate) => {
      if (distractors.length < 3 && !distractors.some((item) => item.simpleAnswer === candidate.simpleAnswer)) {
        distractors.push(candidate);
      }
    });
  }

  return shuffleItems([
    { text: question.simpleAnswer, correct: true },
    ...distractors.map((candidate) => ({ text: candidate.simpleAnswer, correct: false }))
  ]);
}

function startQuiz() {
  const subject = document.getElementById("quizSubject").value;
  const difficulty = document.getElementById("quizDifficulty").value;
  const requestedCount = Number(document.getElementById("quizQuestionCount").value);
  const questionPool = state.questionBank.filter((question) =>
    (subject === "all" || question.subject === subject) &&
    (difficulty === "all" || question.difficulty === difficulty)
  );
  const uniqueQuestions = new Map();
  shuffleItems(questionPool).forEach((question) => {
    const key = `${question.subject}|${question.topic}`;
    if (!uniqueQuestions.has(key)) {
      uniqueQuestions.set(key, question);
    }
  });

  const selectedQuestions = shuffleItems(Array.from(uniqueQuestions.values())).slice(0, requestedCount);
  if (!selectedQuestions.length) {
    const feedback = document.getElementById("quizSetupMessage");
    if (feedback) {
      feedback.textContent = "No questions are available for this subject and difficulty combination.";
    }
    return;
  }

  const questionsBySubject = new Map();
  state.questionBank.forEach((question) => {
    if (!questionsBySubject.has(question.subject)) {
      questionsBySubject.set(question.subject, []);
    }
    questionsBySubject.get(question.subject).push(question);
  });

  state.quizQueue = selectedQuestions.map((question) => ({
    ...question,
    options: buildQuizOptions(question, questionsBySubject.get(question.subject) || [])
  }));
  state.quizIndex = 0;
  state.quizSelectedAnswer = "";
  state.quizResults = [];
  document.getElementById("quizSetupMessage").textContent =
    selectedQuestions.length < requestedCount
      ? `This selection has ${selectedQuestions.length} unique questions; the quiz will use all of them.`
      : "";
  document.getElementById("quizSetup").classList.add("hidden");
  document.getElementById("quizSummary").classList.add("hidden");
  document.getElementById("quizPlay").classList.remove("hidden");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const question = state.quizQueue[state.quizIndex];
  const counter = document.getElementById("quizQuestionCounter");
  const difficultyBadge = document.getElementById("quizDifficultyBadge");
  const questionText = document.getElementById("quizQuestionText");
  const optionsContainer = document.getElementById("quizOptions");
  const feedback = document.getElementById("quizFeedback");
  const submitButton = document.getElementById("submitQuizAnswer");
  const nextButton = document.getElementById("nextQuizQuestion");

  state.quizSelectedAnswer = "";
  counter.textContent = `Question ${state.quizIndex + 1} of ${state.quizQueue.length} · ${question.subject}`;
  difficultyBadge.textContent = question.difficulty;
  difficultyBadge.className = `difficulty-badge ${getDifficultyClass(question.difficulty)}`;
  questionText.textContent = question.question;
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  submitButton.disabled = true;
  submitButton.classList.remove("hidden");
  nextButton.classList.add("hidden");

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.setAttribute("aria-pressed", "false");
    button.textContent = `${String.fromCharCode(65 + index)}. ${option.text}`;
    button.addEventListener("click", () => {
      state.quizSelectedAnswer = option.text;
      optionsContainer.querySelectorAll(".quiz-option").forEach((choice) => {
        const selected = choice === button;
        choice.classList.toggle("selected", selected);
        choice.setAttribute("aria-pressed", String(selected));
      });
      submitButton.disabled = false;
    });
    optionsContainer.appendChild(button);
  });
}

function submitQuizAnswer() {
  const question = state.quizQueue[state.quizIndex];
  if (!question || !state.quizSelectedAnswer) {
    return;
  }

  const correctOption = question.options.find((option) => option.correct);
  const isCorrect = state.quizSelectedAnswer === correctOption.text;
  state.quizResults.push({
    question: question.question,
    subject: question.subject,
    selectedAnswer: state.quizSelectedAnswer,
    correctAnswer: correctOption.text,
    isCorrect
  });
  state.progress.attempted = Array.from(new Set([...state.progress.attempted, question.id]));
  saveProgress();
  updateProgressReadouts();

  const feedback = document.getElementById("quizFeedback");
  feedback.textContent = isCorrect
    ? `Correct! ${question.example}`
    : `Not quite. The correct answer is: ${correctOption.text} ${question.example}`;
  feedback.className = `quiz-feedback ${isCorrect ? "correct" : "incorrect"}`;
  document.getElementById("quizOptions").querySelectorAll(".quiz-option").forEach((button) => {
    button.disabled = true;
    if (button.textContent.endsWith(correctOption.text)) {
      button.classList.add("correct");
    } else if (button.getAttribute("aria-pressed") === "true") {
      button.classList.add("incorrect");
    }
  });

  document.getElementById("submitQuizAnswer").classList.add("hidden");
  const nextButton = document.getElementById("nextQuizQuestion");
  nextButton.textContent = state.quizIndex + 1 < state.quizQueue.length ? "Next Question" : "See Results";
  nextButton.classList.remove("hidden");
}

function finishQuiz() {
  const summary = document.getElementById("quizSummary");
  const correctCount = state.quizResults.filter((result) => result.isCorrect).length;
  const total = state.quizResults.length;
  const score = total ? Math.round((correctCount / total) * 100) : 0;
  state.progress.quizScores = [...(state.progress.quizScores || []), score].slice(-10);
  saveProgress();

  summary.innerHTML = "";
  const heading = document.createElement("h4");
  heading.textContent = "Quiz Results";
  const scoreLine = document.createElement("p");
  scoreLine.innerHTML = `<strong>Score:</strong> ${correctCount}/${total} (${score}%)`;
  summary.append(heading, scoreLine);

  state.quizResults.forEach((result, index) => {
    const review = document.createElement("div");
    review.className = "quiz-review";
    const questionLine = document.createElement("strong");
    questionLine.textContent = `${index + 1}. ${result.question}`;
    const resultLine = document.createElement("p");
    resultLine.textContent = result.isCorrect
      ? "Correct"
      : `Your answer: ${result.selectedAnswer} | Correct answer: ${result.correctAnswer}`;
    resultLine.className = result.isCorrect ? "correct-text" : "incorrect-text";
    review.append(questionLine, resultLine);
    summary.appendChild(review);
  });

  const restartButton = document.createElement("button");
  restartButton.type = "button";
  restartButton.className = "primary-btn";
  restartButton.textContent = "Try Again";
  restartButton.addEventListener("click", startQuiz);
  summary.appendChild(restartButton);

  document.getElementById("quizPlay").classList.add("hidden");
  document.getElementById("quizSetup").classList.remove("hidden");
  summary.classList.remove("hidden");
}

function nextQuizQuestion() {
  state.quizIndex += 1;
  if (state.quizIndex >= state.quizQueue.length) {
    finishQuiz();
    return;
  }
  renderQuizQuestion();
}

function addRecentSubject(subject) {
  state.progress.recentSubjects = [subject, ...state.progress.recentSubjects.filter((item) => item !== subject)].slice(0, 5);
  saveProgress();
}

function showSection(sectionId) {
  state.selectedSection = sectionId;
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active-panel"));
  document.getElementById(sectionId).classList.add("active-panel");
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === sectionId);
  });
}

function handleGlobalSearch() {
  const searchText = document.getElementById("globalSearchInput").value;
  if (searchText.trim()) {
    showSection("browseSection");
    renderQuestionList();
  }
}

function askQuestionToBot(rawQuestion) {
  const input = normalizeText(rawQuestion);
  const chatInput = document.getElementById("chatInput");
  const chatMessages = document.getElementById("chatMessages");

  if (chatInput) {
    chatInput.value = rawQuestion;
  }

  const answerData = findBestQuestionMatch(input);
  const userMessage = document.createElement("div");
  userMessage.className = "chat-message user";
  userMessage.innerHTML = `<strong>You:</strong><p>${rawQuestion}</p>`;
  chatMessages.appendChild(userMessage);

  let responseHtml = "";

  if (answerData) {
    const { question } = answerData;
    state.progress.attempted = Array.from(new Set([...state.progress.attempted, question.id]));
    saveProgress();
    state.currentQuestion = question;

    responseHtml = `
      <div class="chat-message bot">
        <strong>Bot:</strong>
        <p><strong>Q:</strong> ${question.question}</p>
        <p><strong>Answer:</strong> ${question.answer.replace(/\n/g, "<br><br>")}</p>
        <p><strong>Simple:</strong> ${question.simpleAnswer}</p>
        <p><strong>Example:</strong> ${question.example}</p>
        <p><strong>Follow-up questions:</strong></p>
        <ul>${question.followUps.map((fo) => `<li>${fo}</li>`).join("")}</ul>
      </div>
    `;
  } else {
    responseHtml = `
      <div class="chat-message bot">
        <strong>Bot:</strong>
        <p>I don't have a prepared answer for that question yet.</p>
        <p>Try asking about: DSA, Java, Python, DBMS, SQL, OS, Computer Networks, COA, TOC, AI, ML, IoT, Web Technology, Cybersecurity, Cloud Computing, Software Engineering, SDN, Git & GitHub, Project Viva, or Practical Viva.</p>
      </div>
    `;
  }

  chatMessages.insertAdjacentHTML("beforeend", responseHtml);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function findBestQuestionMatch(input) {
  if (!input) return null;

  let bestQuestion = null;
  let bestScore = -1;

  for (const question of state.questionBank) {
    let score = 0;
    const tokens = normalizeText(question.question + " " + (question.topic || "") + " " + (question.subject || "") + " " + (question.answer || "")).split(" ");
    const searchTokens = input.split(" ");

    searchTokens.forEach((token) => {
      if (token.length < 2) return;
      if (tokens.includes(token)) {
        score += 4;
      }
      if ((question.keywords || []).some((keyword) => normalizeText(keyword).includes(token))) {
        score += 2;
      }
    });

    if (input.includes(question.subject.toLowerCase()) || input.includes(question.topic.toLowerCase())) {
      score += 8;
    }

    if (question.question.toLowerCase().includes(input) || input.includes(question.question.toLowerCase())) {
      score += 10;
    }

    if (score > bestScore) {
      bestScore = score;
      bestQuestion = question;
    }
  }

  if (bestScore < 5) {
    return null;
  }

  return { question: bestQuestion };
}

function populateProjectVivaQuestions(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const projectData = Object.fromEntries(formData.entries());
  const projectName = projectData.projectName || "Your Project";
  const projectQuestions = [
    { question: "What is your project?", answer: `${projectName} is a project designed to solve the problem of ${projectData.problemStatement}.` },
    { question: "What problem does it solve?", answer: `It addresses ${projectData.problemStatement}.` },
    { question: "What is the objective of your project?", answer: projectData.objective },
    { question: "Why did you choose this topic?", answer: `This topic was chosen because it provides practical learning and solves a real-world issue in ${projectData.problemStatement}.` },
    { question: "What technologies did you use?", answer: `The system was built using ${projectData.technologies}.` },
    { question: "Explain your modules.", answer: `The major modules are ${projectData.modules}.` },
    { question: "What algorithm or methodology did you use?", answer: `The project follows ${projectData.methodology} and uses ${projectData.algorithm}.` },
    { question: "What are the limitations of your project?", answer: `Some limitations include ${projectData.challenges}.` },
    { question: "What is the future scope?", answer: `The future scope includes ${projectData.futureScope}.` },
    { question: "What is your contribution?", answer: `My contribution involved implementing the key modules, testing, and integration for ${projectName}.` }
  ];

  const container = document.getElementById("projectQuestions");
  container.innerHTML = "";

  projectQuestions.forEach((item) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.innerHTML = `
      <h4>${item.question}</h4>
      <p class="answer-preview">${item.answer}</p>
      <div class="question-actions">
        <button class="question-action" data-project-answer="${escapeAttribute(item.question)}">Show Answer</button>
      </div>
    `;

    card.querySelector("[data-project-answer]").addEventListener("click", () => {
      const answerPanel = document.createElement("div");
      answerPanel.className = "answer-panel";
      answerPanel.innerHTML = `<p>${item.answer}</p>`;
      card.appendChild(answerPanel);
      const trigger = card.querySelector("[data-project-answer]");
      trigger.remove();
    });

    container.appendChild(card);
  });
}

function updatePracticalExperimentOptions() {
  const subject = document.getElementById("practicalSubject").value;
  const container = document.getElementById("practicalExperiment");
  container.innerHTML = "";

  (PRACTICAL_EXPERIMENTS[subject] || ["General Viva Question"]).forEach((experiment) => {
    const option = document.createElement("option");
    option.value = experiment;
    option.textContent = experiment;
    container.appendChild(option);
  });

  renderPracticalQuestions();
}

function renderPracticalQuestions() {
  const subject = document.getElementById("practicalSubject").value;
  const experiment = document.getElementById("practicalExperiment").value;
  const container = document.getElementById("practicalQuestions");
  const relevantQuestions = [
    `What is the aim of the ${experiment} experiment in ${subject}?`,
    `What algorithm or concept did you use in the ${experiment} experiment?`,
    `Why did you use this approach for ${experiment}?`,
    `What are the inputs and outputs of this experiment?`,
    `What is the time complexity of your method?`,
    `What are the limitations of this experiment?`,
    `What happens if the input changes?`,
    `What are possible errors in this experiment?`,
    `How is this experiment useful in real life?`,
    `What would you improve if you had more time?`
  ];

  container.innerHTML = "";
  relevantQuestions.forEach((questionText) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.innerHTML = `
      <h4>${questionText}</h4>
      <p class="answer-preview">Answer this in 3-5 lines using subject concepts and practical understanding.</p>
      <div class="question-actions">
        <button class="question-action" data-practical-answer="${escapeAttribute(questionText)}">Show Model Answer</button>
      </div>
    `;

    card.querySelector("[data-practical-answer]").addEventListener("click", () => {
      const answer = buildPracticalAnswer(subject, experiment, questionText);
      const panel = document.createElement("div");
      panel.className = "answer-panel";
      panel.innerHTML = `<p>${answer}</p>`;
      card.appendChild(panel);
      const trigger = card.querySelector("[data-practical-answer]");
      trigger.remove();
    });

    container.appendChild(card);
  });
}

function buildPracticalAnswer(subject, experiment, questionText) {
  return `In ${subject}, the experiment ${experiment} helps us understand the practical application of the topic. The aim is to observe behavior, analyze input and output, and validate the method. We choose the algorithm or concept based on efficiency, constraints, and problem requirements. The main limitations are performance, edge cases, and real-world variations. This is useful because it connects theory to actual implementation and real systems.`;
}

function buildRapidFirePool(difficulty = "all") {
  let items = [...state.questionBank];
  if (difficulty !== "all") {
    items = items.filter((item) => item.difficulty === difficulty);
  }
  return items.length ? items : state.questionBank;
}

function startRapidFire() {
  const difficulty = document.getElementById("rapidDifficulty").value;
  const pool = buildRapidFirePool(difficulty);
  state.rapidQueue = pool.slice().sort(() => Math.random() - 0.5).slice(0, 10);
  state.rapidIndex = 0;
  renderRapidFire();
}

function renderRapidFire() {
  const card = document.getElementById("rapidFireCard");
  const answerBox = document.getElementById("rapidAnswerBox");

  if (!state.rapidQueue.length) {
    card.querySelector("#rapidQuestionText").textContent = "Select a difficulty and start the rapid-fire round.";
    answerBox.classList.add("hidden");
    return;
  }

  const current = state.rapidQueue[state.rapidIndex];
  card.querySelector(".rapid-index").textContent = `Question ${state.rapidIndex + 1}/${state.rapidQueue.length}`;
  card.querySelector("#rapidQuestionText").textContent = current.question;
  answerBox.innerHTML = `
    <strong>Answer:</strong><br>
    ${current.answer.replace(/\n/g, "<br><br>")}<br><br>
    <strong>Simple:</strong> ${current.simpleAnswer}<br>
    <strong>Example:</strong> ${current.example}
  `;
  answerBox.classList.add("hidden");
}

function showRapidAnswer() {
  const answerBox = document.getElementById("rapidAnswerBox");
  answerBox.classList.toggle("hidden");
}

function nextRapidQuestion() {
  if (state.rapidIndex < state.rapidQueue.length - 1) {
    state.rapidIndex += 1;
    renderRapidFire();
  } else {
    state.rapidIndex = 0;
    state.rapidQueue = [];
    renderRapidFire();
  }
}

function resolveMockSubjectAlias(rawSubject) {
  const value = normalizeText(rawSubject || "");
  if (!value) {
    return "";
  }

  const exactSubject = SUBJECTS.find((subject) => normalizeText(subject) === value);
  if (exactSubject) {
    return exactSubject;
  }

  const aliasMatch = Object.entries(MOCK_SUBJECT_ALIASES).find(([alias, subject]) => normalizeText(alias) === value || normalizeText(subject) === value);
  if (aliasMatch) {
    return aliasMatch[1];
  }

  return SUBJECTS.find((subject) => normalizeText(subject).includes(value) || value.includes(normalizeText(subject))) || "";
}

function applyMockSubjectSelection(subjects) {
  const selectedSet = new Set(subjects.map((subject) => resolveMockSubjectAlias(subject)).filter(Boolean));
  document.querySelectorAll(".subject-chip").forEach((chip) => {
    const isSelected = selectedSet.has(chip.dataset.subject);
    chip.classList.toggle("selected", isSelected);
    chip.style.opacity = isSelected ? "1" : "0.6";
  });
}

function createMockSubjectChips() {
  const container = document.getElementById("mockSubjects");
  container.innerHTML = "";
  getAllSubjectsForSelection().forEach((subject) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "subject-chip selected";
    chip.textContent = subject;
    chip.dataset.subject = subject;
    chip.addEventListener("click", () => {
      const nextSelected = !chip.classList.contains("selected");
      chip.classList.toggle("selected", nextSelected);
      chip.style.opacity = nextSelected ? "1" : "0.6";
    });
    container.appendChild(chip);
  });

  applyMockSubjectSelection(getAllSubjectsForSelection());
  renderMockQuickSubjects();
}

function renderMockQuickSubjects() {
  const container = document.getElementById("mockQuickSubjects");
  if (!container) {
    return;
  }

  container.innerHTML = "";
  const quickSelections = [
    { label: "CN", subject: "Computer Networks" },
    { label: "OS", subject: "Operating Systems" },
    { label: "DBMS", subject: "DBMS" },
    { label: "DSA", subject: "DSA" },
    { label: "Java", subject: "Java" },
    { label: "Python", subject: "Python" },
    { label: "AI", subject: "AI" },
    { label: "All", subject: "all" },
    { label: "Clear", subject: "clear" }
  ];

  quickSelections.forEach(({ label, subject }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mock-quick-subject";
    button.textContent = label;
    button.addEventListener("click", () => {
      if (subject === "all") {
        applyMockSubjectSelection(getAllSubjectsForSelection().filter((item) => !["Project Viva", "Practical Viva"].includes(item)));
        return;
      }

      if (subject === "clear") {
        applyMockSubjectSelection([]);
        return;
      }

      applyMockSubjectSelection([subject]);
    });
    container.appendChild(button);
  });
}

function startMockViva() {
  const selectedSubjects = [...document.querySelectorAll(".subject-chip.selected")].map((chip) => chip.dataset.subject);
  if (!selectedSubjects.length) {
    alert("Please select at least one subject for the mock viva.");
    return;
  }

  const sourceQuestions = state.questionBank.filter((item) => selectedSubjects.includes(item.subject));
  state.mockQueue = sourceQuestions.slice().sort(() => Math.random() - 0.5).slice(0, 8);
  state.mockIndex = 0;
  state.mockScore = 0;
  state.mockResults = [];
  document.getElementById("mockScoreSummary").classList.add("hidden");
  renderMockQuestion();
  document.getElementById("mockVivaPanel").classList.remove("hidden");
}

function renderMockQuestion() {
  if (!state.mockQueue.length) {
    endMockViva();
    return;
  }

  const question = state.mockQueue[state.mockIndex];
  const panel = document.getElementById("mockVivaPanel");
  panel.querySelector("#mockQuestionCounter").textContent = `Question ${state.mockIndex + 1}/${state.mockQueue.length}`;
  panel.querySelector("#mockDifficultyBadge").textContent = question.difficulty;
  panel.querySelector("#mockQuestionText").textContent = question.question;
  document.getElementById("mockUserAnswer").value = "";
}

function evaluateMockAnswer() {
  const answerBox = document.getElementById("mockUserAnswer");
  const answer = answerBox.value.trim();
  const currentQuestion = state.mockQueue[state.mockIndex];

  const userWords = normalizeText(answer).split(" ").filter(Boolean);
  const questionKeywords = (currentQuestion.keywords || []).map((keyword) => normalizeText(keyword));
  const matchedKeywords = questionKeywords.filter((keyword) => userWords.includes(keyword) || keyword.includes(" ") && answer.toLowerCase().includes(keyword));
  const isCorrect = answer && (matchedKeywords.length >= 2 || answer.toLowerCase().includes(currentQuestion.topic.toLowerCase()) || answer.toLowerCase().includes(currentQuestion.subject.toLowerCase()));

  state.mockResults.push({
    question: currentQuestion.question,
    correct: isCorrect,
    subject: currentQuestion.subject,
    difficulty: currentQuestion.difficulty
  });

  if (isCorrect) {
    state.mockScore += 1;
  }

  state.mockIndex += 1;

  if (state.mockIndex < state.mockQueue.length) {
    renderMockQuestion();
  } else {
    endMockViva();
  }
}

function endMockViva() {
  const summary = document.getElementById("mockScoreSummary");
  summary.classList.remove("hidden");

  const total = state.mockResults.length || 1;
  const score = Math.round((state.mockScore / total) * 100);
  state.progress.mockScores = [...state.progress.mockScores, score].slice(-10);
  saveProgress();

  const weakSubjects = Array.from(
    state.mockResults.reduce((map, item) => {
      if (!map.has(item.subject)) {
        map.set(item.subject, { total: 0, wrong: 0 });
      }
      const entry = map.get(item.subject);
      entry.total += 1;
      if (!item.correct) entry.wrong += 1;
      return map;
    }, new Map())
  )
    .filter(([, data]) => data.total > 0)
    .map(([subject, data]) => ({ subject, wrong: data.wrong, total: data.total }));

  const weakTopics = weakSubjects
    .filter((item) => item.wrong > 0)
    .sort((a, b) => b.wrong - a.wrong)
    .slice(0, 5)
    .map((item) => `${item.subject} (${item.wrong}/${item.total} weak)`);

  const correctQuestionList = state.mockResults.filter((result) => result.correct).map((result) => result.question);

  summary.innerHTML = `
    <h4>Mock Viva Results</h4>
    <p><strong>Score:</strong> ${state.mockScore}/${total} (${score}%)</p>
    <p><strong>Correct answers:</strong> ${correctQuestionList.length}</p>
    <ul>
      ${correctQuestionList.length ? correctQuestionList.map((q) => `<li>${q}</li>`).join("") : "<li>No correct answers this round.</li>"}
    </ul>
    <p><strong>Weak topics:</strong></p>
    <ul>
      ${weakTopics.length ? weakTopics.map((topic) => `<li>${topic}</li>`).join("") : "<li>No weak topics detected.</li>"}
    </ul>
    <p><strong>Recommended to revise:</strong> ${weakTopics.length ? weakTopics.join(", ") : "General revision and quick recap."}</p>
  `;

  document.getElementById("mockVivaPanel").classList.add("hidden");
  updateProgressReadouts();
}

function bindEvents() {
  document.querySelectorAll("[data-section]").forEach((button) => {
    button.addEventListener("click", () => {
      showSection(button.dataset.section);
    });
  });

  document.getElementById("themeToggle").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("viva-theme", state.theme);
    renderTheme();
  });

  document.getElementById("floatingChatButton").addEventListener("click", () => {
    showSection("chatSection");
    document.getElementById("chatInput").focus();
  });

  document.getElementById("globalSearchInput").addEventListener("input", handleGlobalSearch);
  document.getElementById("subjectFilter").addEventListener("change", renderQuestionList);
  document.getElementById("difficultyFilter").addEventListener("change", renderQuestionList);
  document.getElementById("typeFilter").addEventListener("change", renderQuestionList);

  document.getElementById("chatForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = document.getElementById("chatInput").value.trim();
    if (!query) return;
    askQuestionToBot(query);
    document.getElementById("chatInput").value = "";
  });

  document.getElementById("projectForm").addEventListener("submit", populateProjectVivaQuestions);
  document.getElementById("practicalSubject").addEventListener("change", updatePracticalExperimentOptions);
  document.getElementById("practicalExperiment").addEventListener("change", renderPracticalQuestions);

  document.getElementById("startRapidFire").addEventListener("click", startRapidFire);
  document.getElementById("showRapidAnswer").addEventListener("click", showRapidAnswer);
  document.getElementById("nextRapidQuestion").addEventListener("click", nextRapidQuestion);

  document.getElementById("startMockViva").addEventListener("click", startMockViva);
  document.getElementById("startQuiz").addEventListener("click", startQuiz);
  document.getElementById("submitQuizAnswer").addEventListener("click", submitQuizAnswer);
  document.getElementById("nextQuizQuestion").addEventListener("click", nextQuizQuestion);
  document.getElementById("submitMockAnswer").addEventListener("click", evaluateMockAnswer);
  document.getElementById("skipMockAnswer").addEventListener("click", () => {
    state.mockIndex += 1;
    if (state.mockIndex >= state.mockQueue.length) {
      endMockViva();
    } else {
      renderMockQuestion();
    }
  });
}

function init() {
  state.questionBank = buildQuestionBank();
  renderTheme();
  renderQuizSubjects();
  renderQuickSubjects();
  renderSubjectFilter();
  renderDashboardStats();
  renderQuestionList();
  renderBookmarks();
  createMockSubjectChips();
  bindEvents();
  updatePracticalExperimentOptions();
  renderRapidFire();
  showSection("dashboardSection");
}

init();
