// src/data/resources.js

export const resources = {
  MAC: {
    subjects: {
      semester1: [
        { id: "calc1", name: "Calculus-1" },
        { id: "env", name: "Environmental Sciences" },
        { id: "programming", name: "Programming with C" },
        { id: "bee", name: "Basics of Electrical Engineering" },
        { id: "web", name: "Web Application Development" },
        { id: "communication", name: "Communication Skills" },
      ],
      semester2: [],
    },
    programming:{
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
    bee: {
      books: [
        { name: "BL Theraja BEE Vol1", url: "/resources/bee/books/BL_theraja_BEE_vol1.pdf" }
      ],
    },
    web:{
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
    ],
    tutorials: [
    { "name": "Question Bank", "url": "/resources/web/tutorial sheets/Question Bank.pdf" },
    { "name": "WAD QB", "url": "/resources/web/tutorial sheets/wad qb.pdf" }
  ]
    },
    communication:{
      notes: [
      { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
    ],
      books: [
  { "name": "Ashraf Rizvi", "url": "/resources/communication/books/AshrafRizvi.pdf" },
  { "name": "Meenakshi Raman & Sangeeta Sharma", "url": "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
],

    },
    env:{
      books: [
        { name: "Ranu Gadi - EVS", url: "/resources/env/books/Ranu_Gadi_EVS.pdf" }
      ],
  notes: [
    { "name": "Air Pollution (Unit 2)", "url": "public/resources/env/notes/Air Pollution Unit 2.pdf" },
    { "name": "Carbon Credits (Book)", "url": "public/resources/env/notes/Carbon credits_ book.pdf" },
    { "name": "Chemical Toxicology (Unit 4)", "url": "public/resources/env/notes/Chemical Toxicology unit 4.pdf" },
    { "name": "Classification of Water Pollutants (Unit 2)", "url": "public/resources/env/notes/Classification of water pollutants-Unit 2.pdf" },
    { "name": "DOC-20230512-WA0015", "url": "public/resources/env/notes/DOC-20230512-WA0015..pdf" },
    { "name": "E-Waste", "url": "public/resources/env/notes/E WASTE.pdf" },
    { "name": "Eco-friendly Polymers (PPT)", "url": "public/resources/env/notes/Eco-friendly POLYMERS ppt.pdf" },
    { "name": "Eco-friendly Polymers (2024-2025)", "url": "public/resources/env/notes/Eco-friendly POLYMERS-2024-2025.pdf" },
    { "name": "Energy Resources (2024-25, Complete PPT)", "url": "public/resources/env/notes/Energy Resources-2024-25-complete.ppt" },
    { "name": "Environmental Management System (Final)", "url": "public/resources/env/notes/Env Management Sysem-final.pdf" },
    { "name": "Environmental Laws (1)", "url": "public/resources/env/notes/ENVIRONMENTAL LAWS (1).pptx" },
    { "name": "Green Tech & Green Chemistry (2023-2024)", "url": "public/resources/env/notes/GREEN TECH AND GREEN CHEMISTRY-2023-2024.pdf" },
    { "name": "Hazardous Waste (2024-2025)", "url": "public/resources/env/notes/Hazardous waste-2024-2025.pdf" },
    { "name": "Hydrogen Energy", "url": "public/resources/env/notes/HYDROGEN ENERGY.pdf" },
    { "name": "Solid Waste Pollution (2024-2025)", "url": "public/resources/env/notes/Solid waste pollution-2024-2025.pdf" },
    { "name": "Water Chemistry (Solved & Unsolved Numericals)", "url": "public/resources/env/notes/Water Chemistry Solved Unsolved Numericals .pdf" },
    { "name": "Water Conservation & Rain Water Harvesting", "url": "public/resources/env/notes/Water Conservation and Rain water Harvesting .pdf" },
    { "name": "Water Pollution (2024-25, Final)", "url": "public/resources/env/notes/WATER POLLUTION-2024-25 final.pdf" },
    { "name": "Water Treatment Numericals (Unit 1)", "url": "public/resources/env/notes/Water Treatment Numericals Unit1.pdf" }
  ],
    },

    calc1:{

    },
  },



  MAE:{
    subjects: {
      semester1: [
        { id: "math", name: "Applied Mathematics" },
        { id: "physics", name: "Applied Physics" },
        { id: "bee", name: "Basics of Electrical Engineering " },
        { id: "ids", name: "Intro to Data Science" },
        { id: "workshop", name: "Workshop Practice" },
        { id: "communication", name: "Communication Skills" },
      ],
      semester2: [],
    },
    math:{
      tutorials: [
        { name: "Matrices Tutorial 1", url: "/resources/math/tutorial sheets/matrices tut-1.pdf" },
        { name: "Matrices Tutorial 2", url: "/resources/math/tutorial sheets/matrices tut-2.pdf" },
        { name: "Matrices Tutorial 3", url: "/resources/math/tutorial sheets/matrices tut-3.pdf" },
        { name: "Tutorial 7 - Differential Calculus", url: "/resources/math/tutorial sheets/tut-7(differential calculas).pdf" },
        { name: "Tutorial 8 - Differential Calculus", url: "/resources/math/tutorial sheets/tut-8(differential calculas).pdf" },
        { name: "Tutorial 6 - Curve Tracing", url: "/resources/math/tutorial sheets/Tutorial sheet 6 (Curve Tracing).pdf" },
        { name: "Tutorial 7 - Integral Calculus", url: "/resources/math/tutorial sheets/Tutorial sheet 7 (Integral Calculus).pdf" },
        { name: "Tutorial 8 - Vector Calculus", url: "/resources/math/tutorial sheets/Tutorial Sheet 8 (Vector Calculus).pdf" }
      ]
    },
    physics:{
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
    
      pyqs: [
          { name: "EndSem Apr 2022", url: "/resources/physics/pyqs/ENDSEM/EndSem_Apr2022_AP.pdf" },
          { name: "EndSem Dec 2023", url: "/resources/physics/pyqs/ENDSEM/EndSem_Dec2023_AP.pdf" },
          { name: "EndSem Dec 2024", url: "/resources/physics/pyqs/ENDSEM/EndSem_Dec2024_AP.pdf" },
          { name: "EndSem Mar 2023", url: "/resources/physics/pyqs/ENDSEM/EndSem_Mar2023_AP.pdf" },
          { name: "MidSem Apr 2016", url: "/resources/physics/pyqs/MIDSEM/MidSem_Apr2016_AP.pdf" },
          { name: "MidSem Jan 2023 Part 1", url: "/resources/physics/pyqs/MIDSEM/MidSem_Jan2023_AP_1.pdf" },
          { name: "MidSem Jan 2023 Part 2", url: "/resources/physics/pyqs/MIDSEM/MidSem_Jan2023_AP_2.pdf" },
          { name: "MidSem Nov 2014", url: "/resources/physics/pyqs/MIDSEM/MidSem_Nov_2014_AP.pdf" },
          { name: "MidSem Nov 2016", url: "/resources/physics/pyqs/MIDSEM/MidSem_Nov2016_AP.pdf" },
          { name: "MidSem Oct 2023", url: "/resources/physics/pyqs/MIDSEM/MidSem_Oct2023_AP.pdf" }
      ],
    
      tutorials: [
        { name: "Unit I - Electromagnetic Theory", url: "/resources/physics/tutorial sheets/Unit I ELECTROMAGNETIC THEORY.pdf" }
      ]
    },
    ids:{
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
    workshop:{},
    communication:{
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
        books: [
    { "name": "Ashraf Rizvi", "url": "/resources/communication/books/AshrafRizvi.pdf" },
    { "name": "Meenakshi Raman & Sangeeta Sharma", "url": "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
  ],
    },
    bee:{
      books: [
        { name: "BL Theraja BEE Vol1", url: "/resources/bee/books/BL_theraja_BEE_vol1.pdf" }
      ],
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
        ],
          books: [
    { "name": "Ashraf Rizvi", "url": "/resources/communication/books/AshrafRizvi.pdf" },
    { "name": "Meenakshi Raman & Sangeeta Sharma", "url": "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
  ],
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
        ],
        tutorials: [
    { "name": "Question Bank", "url": "/resources/web/tutorial sheets/Question Bank.pdf" },
    { "name": "WAD QB", "url": "/resources/web/tutorial sheets/wad qb.pdf" }
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

pyqs: [
      { name: "EndSem Apr 2022", url: "/resources/physics/pyqs/ENDSEM/EndSem_Apr2022_AP.pdf" },
      { name: "EndSem Dec 2023", url: "/resources/physics/pyqs/ENDSEM/EndSem_Dec2023_AP.pdf" },
      { name: "EndSem Dec 2024", url: "/resources/physics/pyqs/ENDSEM/EndSem_Dec2024_AP.pdf" },
      { name: "EndSem Mar 2023", url: "/resources/physics/pyqs/ENDSEM/EndSem_Mar2023_AP.pdf" },
      { name: "MidSem Apr 2016", url: "/resources/physics/pyqs/MIDSEM/MidSem_Apr2016_AP.pdf" },
      { name: "MidSem Jan 2023 Part 1", url: "/resources/physics/pyqs/MIDSEM/MidSem_Jan2023_AP_1.pdf" },
      { name: "MidSem Jan 2023 Part 2", url: "/resources/physics/pyqs/MIDSEM/MidSem_Jan2023_AP_2.pdf" },
      { name: "MidSem Nov 2014", url: "/resources/physics/pyqs/MIDSEM/MidSem_Nov_2014_AP.pdf" },
      { name: "MidSem Nov 2016", url: "/resources/physics/pyqs/MIDSEM/MidSem_Nov2016_AP.pdf" },
      { name: "MidSem Oct 2023", url: "/resources/physics/pyqs/MIDSEM/MidSem_Oct2023_AP.pdf" }
  ],

  tutorials: [
    { name: "Unit I - Electromagnetic Theory", url: "/resources/physics/tutorial sheets/Unit I ELECTROMAGNETIC THEORY.pdf" }
  ]
},
      math: {

    tutorials: [
      { name: "Matrices Tutorial 1", url: "/resources/math/tutorial sheets/matrices tut-1.pdf" },
      { name: "Matrices Tutorial 2", url: "/resources/math/tutorial sheets/matrices tut-2.pdf" },
      { name: "Matrices Tutorial 3", url: "/resources/math/tutorial sheets/matrices tut-3.pdf" },
      { name: "Tutorial 7 - Differential Calculus", url: "/resources/math/tutorial sheets/tut-7(differential calculas).pdf" },
      { name: "Tutorial 8 - Differential Calculus", url: "/resources/math/tutorial sheets/tut-8(differential calculas).pdf" },
      { name: "Tutorial 6 - Curve Tracing", url: "/resources/math/tutorial sheets/Tutorial sheet 6 (Curve Tracing).pdf" },
      { name: "Tutorial 7 - Integral Calculus", url: "/resources/math/tutorial sheets/Tutorial sheet 7 (Integral Calculus).pdf" },
      { name: "Tutorial 8 - Vector Calculus", url: "/resources/math/tutorial sheets/Tutorial Sheet 8 (Vector Calculus).pdf" }
    ]
},

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

  math: {

    tutorials: [
      { name: "Matrices Tutorial 1", url: "/resources/math/tutorial sheets/matrices tut-1.pdf" },
      { name: "Matrices Tutorial 2", url: "/resources/math/tutorial sheets/matrices tut-2.pdf" },
      { name: "Matrices Tutorial 3", url: "/resources/math/tutorial sheets/matrices tut-3.pdf" },
      { name: "Tutorial 7 - Differential Calculus", url: "/resources/math/tutorial sheets/tut-7(differential calculas).pdf" },
      { name: "Tutorial 8 - Differential Calculus", url: "/resources/math/tutorial sheets/tut-8(differential calculas).pdf" },
      { name: "Tutorial 6 - Curve Tracing", url: "/resources/math/tutorial sheets/Tutorial sheet 6 (Curve Tracing).pdf" },
      { name: "Tutorial 7 - Integral Calculus", url: "/resources/math/tutorial sheets/Tutorial sheet 7 (Integral Calculus).pdf" },
      { name: "Tutorial 8 - Vector Calculus", url: "/resources/math/tutorial sheets/Tutorial Sheet 8 (Vector Calculus).pdf" }
    ]
},

      bee: {
      books: [
        { name: "BL Theraja BEE Vol1", url: "/resources/bee/books/BL_theraja_BEE_vol1.pdf" }
      ],
    },

      communication: {
        notes: [
          { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
        ],
                books: [
    { "name": "Ashraf Rizvi", "url": "/resources/communication/books/AshrafRizvi.pdf" },
    { "name": "Meenakshi Raman & Sangeeta Sharma", "url": "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
  ],
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

  pyqs: [
    { "name": "2021 Batch", "url": "public/resources/python/pyqs/2021 batch.pdf" },
    { "name": "2022 Batch", "url": "public/resources/python/pyqs/2022 batch.pdf" },
    { "name": "2023", "url": "public/resources/python/pyqs/2023.pdf" },
    { "name": "End Sem 2022", "url": "public/resources/python/pyqs/endsem_22.pdf" },
    { "name": "End Sem 2023", "url": "public/resources/python/pyqs/endsem_23.pdf" },
    { "name": "Mid Sem (1)", "url": "public/resources/python/pyqs/MIDSEM(1).pdf" },
    { "name": "Mid Sem", "url": "public/resources/python/pyqs/midsem.pdf" },
    { "name": "Mid Sem 2023", "url": "public/resources/python/pyqs/midsem_23.pdf" }
  ],

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

pyqs: [
      { name: "EndSem Apr 2022", url: "/resources/physics/pyqs/ENDSEM/EndSem_Apr2022_AP.pdf" },
      { name: "EndSem Dec 2023", url: "/resources/physics/pyqs/ENDSEM/EndSem_Dec2023_AP.pdf" },
      { name: "EndSem Dec 2024", url: "/resources/physics/pyqs/ENDSEM/EndSem_Dec2024_AP.pdf" },
      { name: "EndSem Mar 2023", url: "/resources/physics/pyqs/ENDSEM/EndSem_Mar2023_AP.pdf" },
      { name: "MidSem Apr 2016", url: "/resources/physics/pyqs/MIDSEM/MidSem_Apr2016_AP.pdf" },
      { name: "MidSem Jan 2023 Part 1", url: "/resources/physics/pyqs/MIDSEM/MidSem_Jan2023_AP_1.pdf" },
      { name: "MidSem Jan 2023 Part 2", url: "/resources/physics/pyqs/MIDSEM/MidSem_Jan2023_AP_2.pdf" },
      { name: "MidSem Nov 2014", url: "/resources/physics/pyqs/MIDSEM/MidSem_Nov_2014_AP.pdf" },
      { name: "MidSem Nov 2016", url: "/resources/physics/pyqs/MIDSEM/MidSem_Nov2016_AP.pdf" },
      { name: "MidSem Oct 2023", url: "/resources/physics/pyqs/MIDSEM/MidSem_Oct2023_AP.pdf" }
  ],

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
    ],
    tutorials: [
    { "name": "Question Bank", "url": "/resources/web/tutorial sheets/Question Bank.pdf" },
    { "name": "WAD QB", "url": "/resources/web/tutorial sheets/wad qb.pdf" }
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

        stats: {
    notes: [
      { name: "Continuos Dist1", url: "/resources/stats/notes/Continuos Dist1.pdf" },
      { name: "Continuos Dist2", url: "/resources/stats/notes/Continuos Dist2.pdf" },
      { name: "Correlation and Regression", url: "/resources/stats/notes/Correlation and Regression.pdf" },
      { name: "Discrete Distributions1", url: "/resources/stats/notes/Discrete Distributions1.pdf" },
      { name: "Expectation, variance, covariance", url: "/resources/stats/notes/Expectation, variance, covariance.pdf" },
      { name: "Joint prob dist notes", url: "/resources/stats/notes/joint prob dist notes.pdf" },
      { name: "MOD-I", url: "/resources/stats/notes/MOD-I.pdf" },
      { name: "Moments and MGF", url: "/resources/stats/notes/moments and mgf (1).pdf" },
      { name: "PS notes", url: "/resources/stats/notes/Ps notes.pdf" },
      { name: "Random variables, pmf, pdf, cdf", url: "/resources/stats/notes/random variables, pmf, pdf, cdf.pdf" },
    ],
    pyqs: [],
    books: [
      { name: "Fundamental of Mathematical Statistics", url: "/resources/stats/books/FUNDAMENTAL OF MATHEMATICAL STATISTICS-S C GUPTA & V K KAPOOR.pdf" },
      { name: "Schaum's Outline of Probability and Statistics", url: "/resources/stats/books/Schaums-Outlines-of-Probability-and-Statistics-4th-Edition-pdf-free-download.pdf" },
    ],
    "tutorial sheets": [
      { name: "PS tut 5", url: "/resources/stats/tutorial sheets/PS tut 5.pdf" },
      { name: "PS Tutorial Sheet-1", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-1.pdf" },
      { name: "PS Tutorial Sheet-2", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-2.pdf" },
      { name: "PS Tutorial Sheet-3", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-3.pdf" },
      { name: "PS Tutorial Sheet-4-1", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-4-1.pdf" },
    ]
  },
  
      communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
      books: [
    { "name": "Ashraf Rizvi", "url": "/resources/communication/books/AshrafRizvi.pdf" },
    { "name": "Meenakshi Raman & Sangeeta Sharma", "url": "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
  ],
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
    { "name": "Air Pollution (Unit 2)", "url": "public/resources/env/notes/Air Pollution Unit 2.pdf" },
    { "name": "Carbon Credits (Book)", "url": "public/resources/env/notes/Carbon credits_ book.pdf" },
    { "name": "Chemical Toxicology (Unit 4)", "url": "public/resources/env/notes/Chemical Toxicology unit 4.pdf" },
    { "name": "Classification of Water Pollutants (Unit 2)", "url": "public/resources/env/notes/Classification of water pollutants-Unit 2.pdf" },
    { "name": "DOC-20230512-WA0015", "url": "public/resources/env/notes/DOC-20230512-WA0015..pdf" },
    { "name": "E-Waste", "url": "public/resources/env/notes/E WASTE.pdf" },
    { "name": "Eco-friendly Polymers (PPT)", "url": "public/resources/env/notes/Eco-friendly POLYMERS ppt.pdf" },
    { "name": "Eco-friendly Polymers (2024-2025)", "url": "public/resources/env/notes/Eco-friendly POLYMERS-2024-2025.pdf" },
    { "name": "Energy Resources (2024-25, Complete PPT)", "url": "public/resources/env/notes/Energy Resources-2024-25-complete.ppt" },
    { "name": "Environmental Management System (Final)", "url": "public/resources/env/notes/Env Management Sysem-final.pdf" },
    { "name": "Environmental Laws (1)", "url": "public/resources/env/notes/ENVIRONMENTAL LAWS (1).pptx" },
    { "name": "Green Tech & Green Chemistry (2023-2024)", "url": "public/resources/env/notes/GREEN TECH AND GREEN CHEMISTRY-2023-2024.pdf" },
    { "name": "Hazardous Waste (2024-2025)", "url": "public/resources/env/notes/Hazardous waste-2024-2025.pdf" },
    { "name": "Hydrogen Energy", "url": "public/resources/env/notes/HYDROGEN ENERGY.pdf" },
    { "name": "Solid Waste Pollution (2024-2025)", "url": "public/resources/env/notes/Solid waste pollution-2024-2025.pdf" },
    { "name": "Water Chemistry (Solved & Unsolved Numericals)", "url": "public/resources/env/notes/Water Chemistry Solved Unsolved Numericals .pdf" },
    { "name": "Water Conservation & Rain Water Harvesting", "url": "public/resources/env/notes/Water Conservation and Rain water Harvesting .pdf" },
    { "name": "Water Pollution (2024-25, Final)", "url": "public/resources/env/notes/WATER POLLUTION-2024-25 final.pdf" },
    { "name": "Water Treatment Numericals (Unit 1)", "url": "public/resources/env/notes/Water Treatment Numericals Unit1.pdf" }
  ],
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
    ],
    tutorials: [
    { "name": "Question Bank", "url": "/resources/web/tutorial sheets/Question Bank.pdf" },
    { "name": "WAD QB", "url": "/resources/web/tutorial sheets/wad qb.pdf" }
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
  pyqs: [
    { "name": "2021 Batch", "url": "public/resources/python/pyqs/2021 batch.pdf" },
    { "name": "2022 Batch", "url": "public/resources/python/pyqs/2022 batch.pdf" },
    { "name": "2023", "url": "public/resources/python/pyqs/2023.pdf" },
    { "name": "End Sem 2022", "url": "public/resources/python/pyqs/endsem_22.pdf" },
    { "name": "End Sem 2023", "url": "public/resources/python/pyqs/endsem_23.pdf" },
    { "name": "Mid Sem (1)", "url": "public/resources/python/pyqs/MIDSEM(1).pdf" },
    { "name": "Mid Sem", "url": "public/resources/python/pyqs/midsem.pdf" },
    { "name": "Mid Sem 2023", "url": "public/resources/python/pyqs/midsem_23.pdf" }
  ],

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
      { name: "Continous Dist1", url: "/resources/stats/notes/Continuos Dist1.pdf" },
      { name: "Continous Dist2", url: "/resources/stats/notes/Continuos Dist2.pdf" },
      { name: "Correlation and Regression", url: "/resources/stats/notes/Correlation and Regression.pdf" },
      { name: "Discrete Distributions1", url: "/resources/stats/notes/Discrete Distributions1.pdf" },
      { name: "Expectation, variance, covariance", url: "/resources/stats/notes/Expectation, variance, covariance.pdf" },
      { name: "Joint prob dist notes", url: "/resources/stats/notes/joint prob dist notes.pdf" },
      { name: "MOD-I", url: "/resources/stats/notes/MOD-I.pdf" },
      { name: "Moments and MGF", url: "/resources/stats/notes/moments and mgf (1).pdf" },
      { name: "PS notes", url: "/resources/stats/notes/Ps notes.pdf" },
      { name: "Random variables, pmf, pdf, cdf", url: "/resources/stats/notes/random variables, pmf, pdf, cdf.pdf" },
    ],
    pyqs: [],
    books: [
      { name: "Fundamental of Mathematical Statistics", url: "/resources/stats/books/FUNDAMENTAL OF MATHEMATICAL STATISTICS-S C GUPTA & V K KAPOOR.pdf" },
      { name: "Schaum's Outline of Probability and Statistics", url: "/resources/stats/books/Schaums-Outlines-of-Probability-and-Statistics-4th-Edition-pdf-free-download.pdf" },
    ],
    "tutorial sheets": [
      { name: "PS tut 5", url: "/resources/stats/tutorial sheets/PS tut 5.pdf" },
      { name: "PS Tutorial Sheet-1", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-1.pdf" },
      { name: "PS Tutorial Sheet-2", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-2.pdf" },
      { name: "PS Tutorial Sheet-3", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-3.pdf" },
      { name: "PS Tutorial Sheet-4-1", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-4-1.pdf" },
    ]
  },

    env: {
    books: [
      { name: "Ranu Gadi - EVS", url: "/resources/env/books/Ranu_Gadi_EVS.pdf" }
    ],

  notes: [
    { "name": "Air Pollution (Unit 2)", "url": "public/resources/env/notes/Air Pollution Unit 2.pdf" },
    { "name": "Carbon Credits (Book)", "url": "public/resources/env/notes/Carbon credits_ book.pdf" },
    { "name": "Chemical Toxicology (Unit 4)", "url": "public/resources/env/notes/Chemical Toxicology unit 4.pdf" },
    { "name": "Classification of Water Pollutants (Unit 2)", "url": "public/resources/env/notes/Classification of water pollutants-Unit 2.pdf" },
    { "name": "DOC-20230512-WA0015", "url": "public/resources/env/notes/DOC-20230512-WA0015..pdf" },
    { "name": "E-Waste", "url": "public/resources/env/notes/E WASTE.pdf" },
    { "name": "Eco-friendly Polymers (PPT)", "url": "public/resources/env/notes/Eco-friendly POLYMERS ppt.pdf" },
    { "name": "Eco-friendly Polymers (2024-2025)", "url": "public/resources/env/notes/Eco-friendly POLYMERS-2024-2025.pdf" },
    { "name": "Energy Resources (2024-25, Complete PPT)", "url": "public/resources/env/notes/Energy Resources-2024-25-complete.ppt" },
    { "name": "Environmental Management System (Final)", "url": "public/resources/env/notes/Env Management Sysem-final.pdf" },
    { "name": "Environmental Laws (1)", "url": "public/resources/env/notes/ENVIRONMENTAL LAWS (1).pptx" },
    { "name": "Green Tech & Green Chemistry (2023-2024)", "url": "public/resources/env/notes/GREEN TECH AND GREEN CHEMISTRY-2023-2024.pdf" },
    { "name": "Hazardous Waste (2024-2025)", "url": "public/resources/env/notes/Hazardous waste-2024-2025.pdf" },
    { "name": "Hydrogen Energy", "url": "public/resources/env/notes/HYDROGEN ENERGY.pdf" },
    { "name": "Solid Waste Pollution (2024-2025)", "url": "public/resources/env/notes/Solid waste pollution-2024-2025.pdf" },
    { "name": "Water Chemistry (Solved & Unsolved Numericals)", "url": "public/resources/env/notes/Water Chemistry Solved Unsolved Numericals .pdf" },
    { "name": "Water Conservation & Rain Water Harvesting", "url": "public/resources/env/notes/Water Conservation and Rain water Harvesting .pdf" },
    { "name": "Water Pollution (2024-25, Final)", "url": "public/resources/env/notes/WATER POLLUTION-2024-25 final.pdf" },
    { "name": "Water Treatment Numericals (Unit 1)", "url": "public/resources/env/notes/Water Treatment Numericals Unit1.pdf" }
  ],
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
  pyqs: [
    { "name": "2021 Batch", "url": "public/resources/python/pyqs/2021 batch.pdf" },
    { "name": "2022 Batch", "url": "public/resources/python/pyqs/2022 batch.pdf" },
    { "name": "2023", "url": "public/resources/python/pyqs/2023.pdf" },
    { "name": "End Sem 2022", "url": "public/resources/python/pyqs/endsem_22.pdf" },
    { "name": "End Sem 2023", "url": "public/resources/python/pyqs/endsem_23.pdf" },
    { "name": "Mid Sem (1)", "url": "public/resources/python/pyqs/MIDSEM(1).pdf" },
    { "name": "Mid Sem", "url": "public/resources/python/pyqs/midsem.pdf" },
    { "name": "Mid Sem 2023", "url": "public/resources/python/pyqs/midsem_23.pdf" }
  ],

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
      ],
      books: [
    { "name": "Ashraf Rizvi", "url": "/resources/communication/books/AshrafRizvi.pdf" },
    { "name": "Meenakshi Raman & Sangeeta Sharma", "url": "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
  ],
    },
  
},



 ECE: {
      subjects: {
        semester1: [
          { id: "math", name: "Applied Mathematics" },
          { id: "elec_sci", name: "Fundamentals of electrical  Sciences" },
          { id: "signals", name: "Signals & Systems" },
          { id: "ids", name: "Intro to Data Science" },
          { id: "workshop", name: "Electronic Workshop" },
          { id: "communication", name: "Communication Skills" },
        ],
        semester2: [],
      },
      stats: {
        notes: [
          { name: "Continous Dist1", url: "/resources/stats/notes/Continuos Dist1.pdf" },
          { name: "Continous Dist2", url: "/resources/stats/notes/Continuos Dist2.pdf" },
          { name: "Correlation and Regression", url: "/resources/stats/notes/Correlation and Regression.pdf" },
          { name: "Discrete Distributions1", url: "/resources/stats/notes/Discrete Distributions1.pdf" },
          { name: "Expectation, variance, covariance", url: "/resources/stats/notes/Expectation, variance, covariance.pdf" },
          { name: "Joint prob dist notes", url: "/resources/stats/notes/joint prob dist notes.pdf" },
          { name: "MOD-I", url: "/resources/stats/notes/MOD-I.pdf" },
          { name: "Moments and MGF", url: "/resources/stats/notes/moments and mgf (1).pdf" },
          { name: "PS notes", url: "/resources/stats/notes/Ps notes.pdf" },
          { name: "Random variables, pmf, pdf, cdf", url: "/resources/stats/notes/random variables, pmf, pdf, cdf.pdf" },
        ],
        pyqs: [],
        books: [
          { name: "Fundamental of Mathematical Statistics", url: "/resources/stats/books/FUNDAMENTAL OF MATHEMATICAL STATISTICS-S C GUPTA & V K KAPOOR.pdf" },
          { name: "Schaum's Outline of Probability and Statistics", url: "/resources/stats/books/Schaums-Outlines-of-Probability-and-Statistics-4th-Edition-pdf-free-download.pdf" },
        ],
        "tutorial sheets": [
          { name: "PS tut 5", url: "/resources/stats/tutorial sheets/PS tut 5.pdf" },
          { name: "PS Tutorial Sheet-1", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-1.pdf" },
          { name: "PS Tutorial Sheet-2", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-2.pdf" },
          { name: "PS Tutorial Sheet-3", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-3.pdf" },
          { name: "PS Tutorial Sheet-4-1", url: "/resources/stats/tutorial sheets/PS Tutorial Sheet-4-1.pdf" },
        ]
      },

      communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
        books: [
    { "name": "Ashraf Rizvi", "url": "/resources/communication/books/AshrafRizvi.pdf" },
    { "name": "Meenakshi Raman & Sangeeta Sharma", "url": "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
  ],
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

      math: {

    tutorials: [
      { name: "Matrices Tutorial 1", url: "/resources/math/tutorial sheets/matrices tut-1.pdf" },
      { name: "Matrices Tutorial 2", url: "/resources/math/tutorial sheets/matrices tut-2.pdf" },
      { name: "Matrices Tutorial 3", url: "/resources/math/tutorial sheets/matrices tut-3.pdf" },
      { name: "Tutorial 7 - Differential Calculus", url: "/resources/math/tutorial sheets/tut-7(differential calculas).pdf" },
      { name: "Tutorial 8 - Differential Calculus", url: "/resources/math/tutorial sheets/tut-8(differential calculas).pdf" },
      { name: "Tutorial 6 - Curve Tracing", url: "/resources/math/tutorial sheets/Tutorial sheet 6 (Curve Tracing).pdf" },
      { name: "Tutorial 7 - Integral Calculus", url: "/resources/math/tutorial sheets/Tutorial sheet 7 (Integral Calculus).pdf" },
      { name: "Tutorial 8 - Vector Calculus", url: "/resources/math/tutorial sheets/Tutorial Sheet 8 (Vector Calculus).pdf" }
    ]
},
    },


  
    "ECE-AI": {
      subjects: {
        semester1: [
          { id: "math", name: "Applied Mathematics" },
          { id: "elec_sci", name: "Fundamentals of electrical  Sciences" },
          { id: "signals", name: "Systems & Signals" },
          { id: "ids", name: "Intro to Data Science" },
          { id: "workshop", name: "Electronic Workshop" },
          { id: "communication", name: "Communication Skills" },
        ],
        semester2: [],
      },

      math: {

    tutorials: [
      { name: "Matrices Tutorial 1", url: "/resources/math/tutorial sheets/matrices tut-1.pdf" },
      { name: "Matrices Tutorial 2", url: "/resources/math/tutorial sheets/matrices tut-2.pdf" },
      { name: "Matrices Tutorial 3", url: "/resources/math/tutorial sheets/matrices tut-3.pdf" },
      { name: "Tutorial 7 - Differential Calculus", url: "/resources/math/tutorial sheets/tut-7(differential calculas).pdf" },
      { name: "Tutorial 8 - Differential Calculus", url: "/resources/math/tutorial sheets/tut-8(differential calculas).pdf" },
      { name: "Tutorial 6 - Curve Tracing", url: "/resources/math/tutorial sheets/Tutorial sheet 6 (Curve Tracing).pdf" },
      { name: "Tutorial 7 - Integral Calculus", url: "/resources/math/tutorial sheets/Tutorial sheet 7 (Integral Calculus).pdf" },
      { name: "Tutorial 8 - Vector Calculus", url: "/resources/math/tutorial sheets/Tutorial Sheet 8 (Vector Calculus).pdf" }
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

      communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
      books: [
    { "name": "Ashraf Rizvi", "url": "/resources/communication/books/AshrafRizvi.pdf" },
    { "name": "Meenakshi Raman & Sangeeta Sharma", "url": "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
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
  };
  