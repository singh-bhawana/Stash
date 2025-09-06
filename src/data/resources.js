// src/data/resources.js

export const resources = {
    ECE: {
      subjects: {
        semester1: [
          { id: "elec_sci", name: "Fundamentals of electrical  Sciences" },
          { id: "math", name: "Probability & Statistics" },
          { id: "signals", name: "Signals & Systems" },
          { id: "ids", name: "Intro to Data Science" },
          { id: "workshop", name: "Electronic Workshop" },
          { id: "communication", name: "Communication Skills" },
        ],
        semester2: [],
      },

      communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ]
    },

      signals: {
      notes: [
        { name: "Unit-2", url: "/resources/signals/notes/ch2_copy.pdf" },
        { name: "Unit-1", url: "/resources/signals/notes/https.pdf" },
        { name: "Signals and Systems (Slideshare PPT)", url: "/resources/signals/notes/slideshare_net_slideshow_signals_systems_ppt_75004666.pdf" },
        { name: "Signals and Systems Lecture ", url: "/resources/signals/notes/sysytem and signals lecture 1.pdf" }
      ],
    },

      ids: {
        notes: [
          { name: "Common NumPy Array Functions", url: "/resources/ids/notes/Common NumPy Array Functions.pdf" },
          { name: "Data Manipulation with Pandas", url: "/resources/ids/notes/Data Manipulation in Python using Pandas.pdf" },
          { name: "Data Science Unit 1", url: "/resources/ids/notes/data science UNIT 1.docx" },
          { name: "Data Wrangling", url: "/resources/ids/notes/Data Wrangling.pdf" },
          { name: "NumPy Arithmetic Operations", url: "/resources/ids/notes/NumPy Arithmetic Array Operations.pdf" },
          { name: "NumPy Array Indexing", url: "/resources/ids/notes/Numpy Array Indexing.pdf" },
          { name: "NumPy Array Slicing", url: "/resources/ids/notes/NumPy Array Slicing Notes.pdf" },
          { name: "Pandas Notes", url: "/resources/ids/notes/pandas.docx" },
          { name: "Tableau Unit 4", url: "/resources/ids/notes/TABLEAU UNIT 4.docx" },
          { name: "Unit 2-1", url: "/resources/ids/notes/UNIT 2-1.docx" },
        ],
        pyqs: [],
        books: [],
      },
    },
  

    CSE: {
      subjects: {
        semester1: [
          { id: "math", name: "Applied Mathematics" },
          { id: "physics", name: "Applied Physics" },
          { id: "bee", name: "Basics of Electrical Engineering" },
          { id: "communication", name: "Communication Skills" },
          { id: "programming", name: "Programming with C" },
          { id: "web", name: "Web Development" },
        ],
        semester2: [],
      },
      
      bee: {
      books: [
        { name: "BL Theraja BEE Vol1", url: "/resources/bee/books/BL_theraja_BEE_vol1.pdf" }
      ],
    },
      communication: {
        notes: [
          { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
        ]
      },
      web: {
        notes: [
          { name: "Unit 1 (1)", url: "/resources/web/notes/Unit-1(1).pdf" },
          { name: "Unit 1 (2)", url: "/resources/web/notes/Unit-1(2).pdf" },
          { name: "Unit 2 (1)", url: "/resources/web/notes/Unit 2 (1).pdf" },
          { name: "Unit 2 (2)", url: "/resources/web/notes/Unit 2 (2).pdf" },
          { name: "Unit 3 (1)", url: "/resources/web/notes/Unit-3(1).pdf" },
          { name: "Unit 3 (2)", url: "/resources/web/notes/Unit-3(2).pdf" },
          { name: "Unit 4 (1)", url: "/resources/web/notes/Unit-4(1).pdf" },
          { name: "Unit 4 (2)", url: "/resources/web/notes/Unit-4(2).pdf" },
          { name: "XML", url: "/resources/web/notes/XML.pdf" }
        ]
      },
      programming: {
        books: [
          { name: "Let Us C - Yashwant Kanetkar", url: "/resources/programming/books/Let us c - yashwantkanetkar.pdf" }
        ],
        notes: [
          { name: "All Units - Additional Info", url: "/resources/programming/notes/All Units-Additonal-Info-_C_programming.pdf" },
          { name: "Unit I - Operators and Expressions", url: "/resources/programming/notes/Unit 1 - Operators and Expressions.pdf" },
          { name: "Unit 1 - Programming Fundamentals Part A", url: "/resources/programming/notes/Unit 1 - Programming Fundamentals-Part a (1).pdf" },
          { name: "Unit II - Arrays", url: "/resources/programming/notes/Unit II - Arrays.pdf" },
          { name: "Unit II - Strings", url: "/resources/programming/notes/Unit II - Strings.pdf" },
          { name: "Unit I - Constants, Variables, Data Types", url: "/resources/programming/notes/Unit1-Constants-Variables-DataTypes.pdf" },
          { name: "Unit I - Programming Fundamentals Data Types Part B", url: "/resources/programming/notes/Unit1-Programming Fundamental-DataTypes-part b.pdf" },
          { name: "Unit II - Control Structures", url: "/resources/programming/notes/Unit-II-Control-Structures.pdf" },
          { name: "Unit III - Functions Complete", url: "/resources/programming/notes/Unit - III - Functions Complete.pdf" }
        ]
      },
physics: {
  books: [
    { name: "HK Malik", url: "/resources/physics/books/HK MALIK.pdf" },
    { name: "PHYS (A.K. Jha Vol1)", url: "/resources/physics/books/PHYS (A.K. JHA VOL1).pdf" }
  ],

  notes: [
    { name: "Lecture 01 - Optics Interference", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_01_OpticsInterference.pdf" },
    { name: "Lecture 02 - Optics Interference Continued", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_02_OpticsInterferenceCont.pdf" },
    { name: "Lecture 03 - Diffraction", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_03_Diffraction.pdf" },
    { name: "Lecture 04 - Polarization", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_04_Polarization.pdf" },
    { name: "Lecture 05 - Gradient, Divergence, Curl", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_05_GradientDivergenceCurl.pdf" },
    { name: "Lecture 06 - Maxwell Equations", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_06_MaxwellEqns.pdf" },
    { name: "Lecture 07 - Wave Equation", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_07_WaveEquation.pdf" },
    { name: "Lecture 08 - Continuity Equation", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_08_ContinuityEquation.pdf" },
    { name: "Lecture 09 - Skin Depth", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_09_SkinDepth.pdf" },
    { name: "Lecture 10 - Lasers", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_10_Lasers.pdf" },
    { name: "Lecture 12 - Quantum Mechanics Continued", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_12_QuantumMechanicsCont.pdf" },
    { name: "Lecture 13 - Group and Phase Velocities", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_13_GroupAndPhaseVelocities.pdf" },
    { name: "Lecture 14 - Lasers", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_14_Lasers.pdf" },
    { name: "Lecture 15 - Lasers Continued", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_15LasersCont.pdf" },
    { name: "Lecture 16 - Optical Fibre", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_16OpticalFibre.pdf" }
  ],

  pyqs: {
    endsem: [
      { name: "EndSem Apr 2022", url: "/resources/physics/pyqs/ENDSEM/EndSem_Apr2022_AP.pdf" },
      { name: "EndSem Dec 2023", url: "/resources/physics/pyqs/ENDSEM/EndSem_Dec2023_AP.pdf" },
      { name: "EndSem Dec 2024", url: "/resources/physics/pyqs/ENDSEM/EndSem_Dec2024_AP.pdf" },
      { name: "EndSem Mar 2023", url: "/resources/physics/pyqs/ENDSEM/EndSem_Mar2023_AP.pdf" }
    ],
    midsem: [
      { name: "MidSem Apr 2016", url: "/resources/physics/pyqs/MIDSEM/MidSem_Apr2016_AP.pdf" },
      { name: "MidSem Jan 2023 Part 1", url: "/resources/physics/pyqs/MIDSEM/MidSem_Jan2023_AP_1.pdf" },
      { name: "MidSem Jan 2023 Part 2", url: "/resources/physics/pyqs/MIDSEM/MidSem_Jan2023_AP_2.pdf" },
      { name: "MidSem Nov 2014", url: "/resources/physics/pyqs/MIDSEM/MidSem_Nov_2014_AP.pdf" },
      { name: "MidSem Nov 2016", url: "/resources/physics/pyqs/MIDSEM/MidSem_Nov2016_AP.pdf" },
      { name: "MidSem Oct 2023", url: "/resources/physics/pyqs/MIDSEM/MidSem_Oct2023_AP.pdf" }
    ]
  },

  tutorials: [
    { name: "Unit I - Electromagnetic Theory", url: "/resources/physics/tutorial sheets/Unit I ELECTROMAGNETIC THEORY.pdf" }
  ]
}

    },
  

    IT: {
      subjects: {
        semester1: [
          { id: "math", name: "Applied Mathematics" },
          { id: "physics", name: "Applied Physics" },
          { id: "python", name: "Programming with Python" },
          { id: "bee", name: "BEE" },
          { id: "web", name: "Web Development" },
          { id: "communication", name: "Communication Skills" },
        ],
        semester2: [],
      },
      bee: {
      books: [
        { name: "BL Theraja BEE Vol1", url: "/resources/bee/books/BL_theraja_BEE_vol1.pdf" }
      ],
    },

      communication: {
        notes: [
          { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
        ]
    },
      python: {
    notes: [
      { name: "Python Complete Notes", url: "/resources/python/notes/Python_Complete_Notes.pdf" },
      { name: "Break & Continue Loops", url: "/resources/python/notes/BREAK CONTINUE LOOP NOTES.pdf" },
      { name: "Exception Handling", url: "/resources/python/notes/exception handling.pdf" },
      { name: "For Loop Notes", url: "/resources/python/notes/FOR LOOP NOTES.pdf" },
      { name: "File Handling", url: "/resources/python/notes/File handling.pdf" },
      { name: "Functions", url: "/resources/python/notes/Functions.pdf" },
      { name: "Notes Part 1", url: "/resources/python/notes/notes pt1.pdf" },
      { name: "Notes Part 2", url: "/resources/python/notes/notes pt2.pdf" },
      { name: "OOPs Part 2 (IIT Delhi)", url: "/resources/python/notes/oops part 2 python iit delhi.pdf" },
      { name: "OOPs Part 1 (IIT Delhi)", url: "/resources/python/notes/oops python iit delhi part 1.pdf" },
      { name: "PP & DS Unit III", url: "/resources/python/notes/PP&DS UNIT III.pdf" },
    ],
    pyqs: [],
    books: [
      { name: "Intro to ML with Python", url: "/resources/python/books/Introduction to Machine Learning with Python ( PDFDrive.com )-min.pdf" },
    ],
    "tutorial sheets": [
      { name: "Python Exam Questions", url: "/resources/python/tutorial sheets/Python_Exam_Questions.pdf" },
      { name: "Python Question Bank (BTETPE405E)", url: "/resources/python/tutorial sheets/Python_Question_Bank-Python-Programming-BTETPE405E.pdf" },
      { name: "Python Question Bank (Unit 1 & 2)", url: "/resources/python/tutorial sheets/Question bank python ( unit 1 and 2).docx" },
    ],
  },

  physics: {
  books: [
    { name: "HK Malik", url: "/resources/physics/books/HK MALIK.pdf" },
    { name: "PHYS (A.K. Jha Vol1)", url: "/resources/physics/books/PHYS (A.K. JHA VOL1).pdf" }
  ],

  notes: [
    { name: "Lecture 01 - Optics Interference", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_01_OpticsInterference.pdf" },
    { name: "Lecture 02 - Optics Interference Continued", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_02_OpticsInterferenceCont.pdf" },
    { name: "Lecture 03 - Diffraction", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_03_Diffraction.pdf" },
    { name: "Lecture 04 - Polarization", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_04_Polarization.pdf" },
    { name: "Lecture 05 - Gradient, Divergence, Curl", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_05_GradientDivergenceCurl.pdf" },
    { name: "Lecture 06 - Maxwell Equations", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_06_MaxwellEqns.pdf" },
    { name: "Lecture 07 - Wave Equation", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_07_WaveEquation.pdf" },
    { name: "Lecture 08 - Continuity Equation", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_08_ContinuityEquation.pdf" },
    { name: "Lecture 09 - Skin Depth", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_09_SkinDepth.pdf" },
    { name: "Lecture 10 - Lasers", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_10_Lasers.pdf" },
    { name: "Lecture 12 - Quantum Mechanics Continued", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_12_QuantumMechanicsCont.pdf" },
    { name: "Lecture 13 - Group and Phase Velocities", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_13_GroupAndPhaseVelocities.pdf" },
    { name: "Lecture 14 - Lasers", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_14_Lasers.pdf" },
    { name: "Lecture 15 - Lasers Continued", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_15LasersCont.pdf" },
    { name: "Lecture 16 - Optical Fibre", url: "/resources/physics/notes/dinesh sir_s/BAS107Lecture_16OpticalFibre.pdf" }
  ],

  pyqs: {
    endsem: [
      { name: "EndSem Apr 2022", url: "/resources/physics/pyqs/ENDSEM/EndSem_Apr2022_AP.pdf" },
      { name: "EndSem Dec 2023", url: "/resources/physics/pyqs/ENDSEM/EndSem_Dec2023_AP.pdf" },
      { name: "EndSem Dec 2024", url: "/resources/physics/pyqs/ENDSEM/EndSem_Dec2024_AP.pdf" },
      { name: "EndSem Mar 2023", url: "/resources/physics/pyqs/ENDSEM/EndSem_Mar2023_AP.pdf" }
    ],
    midsem: [
      { name: "MidSem Apr 2016", url: "/resources/physics/pyqs/MIDSEM/MidSem_Apr2016_AP.pdf" },
      { name: "MidSem Jan 2023 Part 1", url: "/resources/physics/pyqs/MIDSEM/MidSem_Jan2023_AP_1.pdf" },
      { name: "MidSem Jan 2023 Part 2", url: "/resources/physics/pyqs/MIDSEM/MidSem_Jan2023_AP_2.pdf" },
      { name: "MidSem Nov 2014", url: "/resources/physics/pyqs/MIDSEM/MidSem_Nov_2014_AP.pdf" },
      { name: "MidSem Nov 2016", url: "/resources/physics/pyqs/MIDSEM/MidSem_Nov2016_AP.pdf" },
      { name: "MidSem Oct 2023", url: "/resources/physics/pyqs/MIDSEM/MidSem_Oct2023_AP.pdf" }
    ]
  },

  tutorials: [
    { name: "Unit I - Electromagnetic Theory", url: "/resources/physics/tutorial sheets/Unit I ELECTROMAGNETIC THEORY.pdf" }
  ]
},

    web: {
    notes: [
      { name: "Unit 1 (1)", url: "/resources/web/notes/Unit-1(1).pdf" },
      { name: "Unit 1 (2)", url: "/resources/web/notes/Unit-1(2).pdf" },
      { name: "Unit 2 (1)", url: "/resources/web/notes/Unit 2 (1).pdf" },
      { name: "Unit 2 (2)", url: "/resources/web/notes/Unit 2 (2).pdf" },
      { name: "Unit 3 (1)", url: "/resources/web/notes/Unit-3(1).pdf" },
      { name: "Unit 3 (2)", url: "/resources/web/notes/Unit-3(2).pdf" },
      { name: "Unit 4 (1)", url: "/resources/web/notes/Unit-4(1).pdf" },
      { name: "Unit 4 (2)", url: "/resources/web/notes/Unit-4(2).pdf" },
      { name: "XML", url: "/resources/web/notes/XML.pdf" }
    ]
  }
    },
  
    AIML: {
      subjects: {
        semester1: [
          { id: "python", name: "Programming with Python" },
          { id: "stats", name: "Probability & Statistics" },
          { id: "env", name: "Environmental Sciences" },
          { id: "bee", name: "BEE" },
          { id: "web", name: "Web Development" },
          { id: "communication", name: "Communication Skills" },
        ],
        semester2: [],
      },
      communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ]
    },

      bee: {
      books: [
        { name: "BL Theraja BEE Vol1", url: "/resources/bee/books/BL_theraja_BEE_vol1.pdf" }
      ],
    },

  env: {
    books: [
      { name: "Ranu Gadi - EVS", url: "/resources/env/books/Ranu_Gadi_EVS.pdf" }
    ],

    notes: [
      { name: "E-WASTE", url: "/resources/env/notes/E WASTE.pdf" },
      { name: "Eco-friendly Polymers 2024-2025", url: "/resources/env/notes/Eco-friendly POLYMERS-2024-2025.pdf" },
      { name: "Energy Resources 2024-25 Complete", url: "/resources/env/notes/Energy Resources-2024-25-complete.ppt" },
      { name: "Green Tech and Green Chemistry 2023-2024", url: "/resources/env/notes/GREEN TECH AND GREEN CHEMISTRY-2023-2024.pdf" },
      { name: "Hazardous Waste 2024-2025", url: "/resources/env/notes/Hazardous waste-2024-2025.pdf" },
      { name: "Solid Waste Pollution 2024-2025", url: "/resources/env/notes/Solid waste pollution-2024-2025.pdf" },
      { name: "Water Pollution 2024-25 Final", url: "/resources/env/notes/WATER POLLUTION-2024-25 final.pdf" }
    ]
  },

    web: {
    notes: [
      { name: "Unit 1 (1)", url: "/resources/web/notes/Unit-1(1).pdf" },
      { name: "Unit 1 (2)", url: "/resources/web/notes/Unit-1(2).pdf" },
      { name: "Unit 2 (1)", url: "/resources/web/notes/Unit 2 (1).pdf" },
      { name: "Unit 2 (2)", url: "/resources/web/notes/Unit 2 (2).pdf" },
      { name: "Unit 3 (1)", url: "/resources/web/notes/Unit-3(1).pdf" },
      { name: "Unit 3 (2)", url: "/resources/web/notes/Unit-3(2).pdf" },
      { name: "Unit 4 (1)", url: "/resources/web/notes/Unit-4(1).pdf" },
      { name: "Unit 4 (2)", url: "/resources/web/notes/Unit-4(2).pdf" },
      { name: "XML", url: "/resources/web/notes/XML.pdf" }
    ]
  },

    python: {
    notes: [
      { name: "Python Complete Notes", url: "/resources/python/notes/Python_Complete_Notes.pdf" },
      { name: "Break & Continue Loops", url: "/resources/python/notes/BREAK CONTINUE LOOP NOTES.pdf" },
      { name: "Exception Handling", url: "/resources/python/notes/exception handling.pdf" },
      { name: "For Loop Notes", url: "/resources/python/notes/FOR LOOP NOTES.pdf" },
      { name: "File Handling", url: "/resources/python/notes/File handling.pdf" },
      { name: "Functions", url: "/resources/python/notes/Functions.pdf" },
      { name: "Notes Part 1", url: "/resources/python/notes/notes pt1.pdf" },
      { name: "Notes Part 2", url: "/resources/python/notes/notes pt2.pdf" },
      { name: "OOPs Part 2 (IIT Delhi)", url: "/resources/python/notes/oops part 2 python iit delhi.pdf" },
      { name: "OOPs Part 1 (IIT Delhi)", url: "/resources/python/notes/oops python iit delhi part 1.pdf" },
      { name: "PP & DS Unit III", url: "/resources/python/notes/PP&DS UNIT III.pdf" },
    ],
    pyqs: [],
    books: [
      { name: "Intro to ML with Python", url: "/resources/python/books/Introduction to Machine Learning with Python ( PDFDrive.com )-min.pdf" },
    ],
    "tutorial sheets": [
      { name: "Python Exam Questions", url: "/resources/python/tutorial sheets/Python_Exam_Questions.pdf" },
      { name: "Python Question Bank (BTETPE405E)", url: "/resources/python/tutorial sheets/Python_Question_Bank-Python-Programming-BTETPE405E.pdf" },
      { name: "Python Question Bank (Unit 1 & 2)", url: "/resources/python/tutorial sheets/Question bank python ( unit 1 and 2).docx" },
    ],
  },

    },
  
    "CSE-AI": {
      subjects: {
        semester1: [
          { id: "python", name: "Programming with Python" },
          { id: "stats", name: "Probability & Statistics" },
          { id: "env", name: "Environmental Sciences" },
          { id: "bee", name: "BEE" },
          { id: "workshop", name: "IT Workshop" },
          { id: "communication", name: "Communication Skills" },
        ],
        semester2: [],
      },
  stats: {
    notes: [
      { name: "Continuos Dist1", url: "/resources/CSE-AI/stats/notes/Continuos Dist1.pdf" },
      { name: "Continuos Dist2", url: "/resources/CSE-AI/stats/notes/Continuos Dist2.pdf" },
      { name: "Correlation and Regression", url: "/resources/CSE-AI/stats/notes/Correlation and Regression.pdf" },
      { name: "Discrete Distributions1", url: "/resources/CSE-AI/stats/notes/Discrete Distributions1.pdf" },
      { name: "Expectation, variance, covariance", url: "/resources/CSE-AI/stats/notes/Expectation, variance, covariance.pdf" },
      { name: "Joint prob dist notes", url: "/resources/CSE-AI/stats/notes/joint prob dist notes.pdf" },
      { name: "MOD-I", url: "/resources/CSE-AI/stats/notes/MOD-I.pdf" },
      { name: "Moments and MGF", url: "/resources/CSE-AI/stats/notes/moments and mgf (1).pdf" },
      { name: "PS notes", url: "/resources/CSE-AI/stats/notes/Ps notes.pdf" },
      { name: "Random variables, pmf, pdf, cdf", url: "/resources/CSE-AI/stats/notes/random variables, pmf, pdf, cdf.pdf" },
    ],
    pyqs: [],
    books: [
      { name: "Fundamental of Mathematical Statistics", url: "/resources/CSE-AI/stats/books/FUNDAMENTAL OF MATHEMATICAL STATISTICS-S C GUPTA & V K KAPOOR.pdf" },
      { name: "Schaum's Outline of Probability and Statistics", url: "/resources/CSE-AI/stats/books/Schaums-Outlines-of-Probability-and-Statistics-4th-Edition-pdf-free-download.pdf" },
    ],
    "tutorial sheets": [
      { name: "PS tut 5", url: "/resources/CSE-AI/stats/tutorial sheets/PS tut 5.pdf" },
      { name: "PS Tutorial Sheet-1", url: "/resources/CSE-AI/stats/tutorial sheets/PS Tutorial Sheet-1.pdf" },
      { name: "PS Tutorial Sheet-2", url: "/resources/CSE-AI/stats/tutorial sheets/PS Tutorial Sheet-2.pdf" },
      { name: "PS Tutorial Sheet-3", url: "/resources/CSE-AI/stats/tutorial sheets/PS Tutorial Sheet-3.pdf" },
      { name: "PS Tutorial Sheet-4-1", url: "/resources/CSE-AI/stats/tutorial sheets/PS Tutorial Sheet-4-1.pdf" },
    ]
  },

    env: {
    books: [
      { name: "Ranu Gadi - EVS", url: "/resources/env/books/Ranu_Gadi_EVS.pdf" }
    ],

    notes: [
      { name: "E-WASTE", url: "/resources/env/notes/E WASTE.pdf" },
      { name: "Eco-friendly Polymers 2024-2025", url: "/resources/env/notes/Eco-friendly POLYMERS-2024-2025.pdf" },
      { name: "Energy Resources 2024-25 Complete", url: "/resources/env/notes/Energy Resources-2024-25-complete.ppt" },
      { name: "Green Tech and Green Chemistry 2023-2024", url: "/resources/env/notes/GREEN TECH AND GREEN CHEMISTRY-2023-2024.pdf" },
      { name: "Hazardous Waste 2024-2025", url: "/resources/env/notes/Hazardous waste-2024-2025.pdf" },
      { name: "Solid Waste Pollution 2024-2025", url: "/resources/env/notes/Solid waste pollution-2024-2025.pdf" },
      { name: "Water Pollution 2024-25 Final", url: "/resources/env/notes/WATER POLLUTION-2024-25 final.pdf" }
    ]
  },
  
  python: {
    notes: [
      { name: "Python Complete Notes", url: "/resources/python/notes/Python_Complete_Notes.pdf" },
      { name: "Break & Continue Loops", url: "/resources/python/notes/BREAK CONTINUE LOOP NOTES.pdf" },
      { name: "Exception Handling", url: "/resources/python/notes/exception handling.pdf" },
      { name: "For Loop Notes", url: "/resources/python/notes/FOR LOOP NOTES.pdf" },
      { name: "File Handling", url: "/resources/python/notes/File handling.pdf" },
      { name: "Functions", url: "/resources/python/notes/Functions.pdf" },
      { name: "Notes Part 1", url: "/resources/python/notes/notes pt1.pdf" },
      { name: "Notes Part 2", url: "/resources/python/notes/notes pt2.pdf" },
      { name: "OOPs Part 2 (IIT Delhi)", url: "/resources/python/notes/oops part 2 python iit delhi.pdf" },
      { name: "OOPs Part 1 (IIT Delhi)", url: "/resources/python/notes/oops python iit delhi part 1.pdf" },
      { name: "PP & DS Unit III", url: "/resources/python/notes/PP&DS UNIT III.pdf" },
    ],
    pyqs: [],
    books: [
      { name: "Intro to ML with Python", url: "/resources/python/books/Introduction to Machine Learning with Python ( PDFDrive.com )-min.pdf" },
    ],
    "tutorial sheets": [
      { name: "Python Exam Questions", url: "/resources/python/tutorial sheets/Python_Exam_Questions.pdf" },
      { name: "Python Question Bank (BTETPE405E)", url: "/resources/python/tutorial sheets/Python_Question_Bank-Python-Programming-BTETPE405E.pdf" },
      { name: "Python Question Bank (Unit 1 & 2)", url: "/resources/python/tutorial sheets/Question bank python ( unit 1 and 2).docx" },
    ],
  },
  
  bee: {
      books: [
        { name: "BL Theraja BEE Vol1", url: "/resources/bee/books/BL_theraja_BEE_vol1.pdf" }
      ],
    },

    communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ]
    },
  
},

  
    "ECE-AI": {
      subjects: {
        semester1: [
          { id: "stats", name: "Probability & Statistics" },
          { id: "env", name: "Environmental Sciences" },
          { id: "signals", name: "Systems & Signals" },
          { id: "ids", name: "Intro to Data Science" },
          { id: "workshop", name: "Electronic Workshop" },
          { id: "communication", name: "Communication Skills" },
        ],
        semester2: [],
      },

      
      signals: {
      notes: [
        { name: "Unit-2", url: "/resources/signals/notes/ch2_copy.pdf" },
        { name: "Unit-1", url: "/resources/signals/notes/https.pdf" },
        { name: "Signals and Systems (Slideshare PPT)", url: "/resources/signals/notes/slideshare_net_slideshow_signals_systems_ppt_75004666.pdf" },
        { name: "Signals and Systems Lecture ", url: "/resources/signals/notes/sysytem and signals lecture 1.pdf" }
      ],
    },

      communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ]
    },

    ids: {
        notes: [
          { name: "Common NumPy Array Functions", url: "/resources/ids/notes/Common NumPy Array Functions.pdf" },
          { name: "Data Manipulation with Pandas", url: "/resources/ids/notes/Data Manipulation in Python using Pandas.pdf" },
          { name: "Data Science Unit 1", url: "/resources/ids/notes/data science UNIT 1.docx" },
          { name: "Data Wrangling", url: "/resources/ids/notes/Data Wrangling.pdf" },
          { name: "NumPy Arithmetic Operations", url: "/resources/ids/notes/NumPy Arithmetic Array Operations.pdf" },
          { name: "NumPy Array Indexing", url: "/resources/ids/notes/Numpy Array Indexing.pdf" },
          { name: "NumPy Array Slicing", url: "/resources/ids/notes/NumPy Array Slicing Notes.pdf" },
          { name: "Pandas Notes", url: "/resources/ids/notes/pandas.docx" },
          { name: "Tableau Unit 4", url: "/resources/ids/notes/TABLEAU UNIT 4.docx" },
          { name: "Unit 2-1", url: "/resources/ids/notes/UNIT 2-1.docx" },
        ],
        pyqs: [],
        books: [],
      },

    },
  };
  