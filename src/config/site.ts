export const siteConfig = {
  name: "Maithreyan",
  role: "Student Developer | AI & Robotics Enthusiast",
  description: "Exploring the intersection of AI, robotics, and embedded systems to turn practical problems into meaningful engineering solutions.",
  interests: ["Artificial Intelligence", "Robotics", "Embedded Systems", "Web Development", "Computer Vision", "IoT"],
  availability: "Open to collaborations and learning opportunities",

  socials: {
    github: "https://github.com/maithreyansaravanan17-sketch", // Add your GitHub URL here
    linkedin: "", // Add your LinkedIn URL here,
    email: "maithreyan.saravanan.17@gmail.com", // Add your email here
  },

  resume: {
    url: "", // Path to resume file in /public folder
    enabled: false,
  },

  about: {
    text: "I am a student developer driven by the curiosity of how things work—from the logic of a Python script to the circuitry of an ESP32. My journey is defined by hands-on experimentation, building practical technology that solves real-world problems. I believe in the synergy of software, electronics, and critical problem-solving to create intelligent systems.",
    highlights: [
      "Learning through hands-on projects",
      "Experimenting with AI and hardware",
      "Combining software, electronics, and problem-solving",
      "Continuously improving engineering skills",
    ],
  },

  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", level: "Practicing" },
        { name: "JavaScript", level: "Practicing" },
        { name: "HTML", level: "Building Projects" },
        { name: "CSS", level: "Building Projects" },
      ],
    },
    {
      category: "AI & Software",
      items: [
        { name: "Ollama", level: "Building Projects" },
        { name: "Llama 3", level: "Practicing" },
        { name: "Computer Vision", level: "Learning" },
        { name: "Web Development", level: "Practicing" },
      ],
    },
    {
      category: "Hardware & Robotics",
      items: [
        { name: "Arduino", level: "Building Projects" },
        { name: "ESP32", level: "Building Projects" },
        { name: "ESP8266", level: "Building Projects" },
        { name: "Raspberry Pi", level: "Practicing" },
        { name: "Sensors & Actuators", level: "Building Projects" },
        { name: "Embedded Systems", level: "Learning" },
      ],
    },
  ],

  projects: [
    {
      id: "plantpulse",
      title: "PlantPulse",
      category: "AI + Plant Monitoring + IoT",
      status: "Prototype in Development",
      concept: "Detect plant stress before visible damage appears.",
      purpose: "Explore early plant-stress detection through sensor measurements, data analysis, and future predictive models.",
      details: {
        problem: "Agricultural losses often occur because plant stress is only identified after visible damage has happened.",
        solution: "Using an array of environmental and soil sensors to detect physiological stress markers.",
        architecture: "Sensor Array → ESP32 → Data Analysis Pipeline",
        hardware: ["ESP32", "Soil Moisture Sensors", "Temperature/Humidity Sensors"],
        software: ["C++ (Arduino)", "Python (for analysis)"],
        contributions: "System design, sensor selection, and architectural planning.",
        lessons: "Understanding sensor calibration and the complexities of botanical stress markers.",
      },
      links: {
        github: "",
        demo: "",
      },
    },
    {
      id: "dhanvantri",
      title: "Dhanvantri",
      category: "Robotics + AI + Healthcare",
      status: "Concept & Implementation",
      concept: "Intelligent healthcare robotics combining vital-sign monitoring and traditional medicinal knowledge.",
      purpose: "Bridging modern diagnostic robotics with traditional healthcare insights.",
      details: {
        problem: "Inefficient patient monitoring in some healthcare settings and lack of integration with holistic knowledge.",
        solution: "A mobile robotic platform capable of monitoring vitals and providing information on medicinal plants.",
        architecture: "Robotic Base → Vital Sensors → AI Knowledge Engine",
        hardware: ["Microcontrollers", "Vital Sign Sensors", "DC Motors/Drivers"],
        software: ["Python", "C++", "AI Inference Model"],
        contributions: "Conceptual framework, robotics design, and AI integration planning.",
        lessons: "Integration of real-time sensor data with a mobile robotic platform.",
      },
      links: {
        github: "",
        demo: "",
      },
    },
    {
      id: "smart-ebin",
      title: "Smart E-Bin",
      category: "Embedded Systems + Automation",
      status: "Implemented",
      concept: "Automated waste bin using ultrasonic sensors for touchless operation.",
      purpose: "Improving hygiene and convenience in waste disposal.",
      details: {
        problem: "Manual waste bin lids are unhygienic and inconvenient.",
        solution: "An ultrasonic sensor detects proximity and triggers a servo motor to open the lid.",
        architecture: "Ultrasonic Sensor → Arduino/ESP → Servo Motor",
        hardware: ["Arduino/ESP", "Ultrasonic Sensor (HC-SR04)", "Servo Motor"],
        software: ["C++ (Arduino)"],
        contributions: "Full build, circuit design, and code implementation.",
        lessons: "Handling sensor noise and optimizing servo movement for smooth operation.",
      },
      links: {
        github: "",
        demo: "",
      },
    },
  ],
};

export type SiteConfig = typeof siteConfig;
