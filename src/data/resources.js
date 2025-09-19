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
      ],
      videos: [
        { name: "Jenny's lectures", url: "https://www.youtube.com/embed/videoseries?si=ZLmj1O514KOY8A2k&list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S" },
        { name: "Code w Harry", url: "https://www.youtube.com/embed/videoseries?si=R9QHoIiEH40sT1wE&list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR" }
      ],
      pyqs: [
        { name: "Programming - End Term Dec 2024 (Sem 1)", url: "/resources/programming/pyqs/endterm_dec24_sem1.pdf" },
        { name: "Programming - End Term Dec 2024 (Sem 2)", url: "/resources/programming/pyqs/endterm_dec24_sem2.pdf" },
        { name: "Programming - Remidial Nov 2024", url: "/resources/programming/pyqs/pwc_remid_nov24.pdf" }
      ],
    },
    bee: {
      books: [
        { name: "BL Theraja BEE Vol1", url: "/resources/bee/books/BL_theraja_BEE_vol1.pdf" }
      ],
      pyqs: [
        { name: "BEE - Mid 2024", url: "/resources/bee/pyqs/Bee_mid_2024.pdf" },
        { name: "BEE - Reappear Mid 2024", url: "/resources/bee/pyqs/BEE_Reappear_Mid_2024.pdf" },
        { name: "BEE - 2025", url: "/resources/bee/pyqs/bee25.pdf" },
        { name: "BEE - Reappear Dec 2024", url: "/resources/bee/pyqs/reappear_dec24.pdf" },
        { name: "BEE - Remid 2024", url: "/resources/bee/pyqs/remid_bee_2024.pdf" }
      ],
      videos: [
        { name: "Umesh Dhandhe", url: "https://www.youtube.com/embed/videoseries?si=XaeVEpVuVj4jjJN2&amp;list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc" },
        { name: "Gautam varde", url: "https://www.youtube.com/embed/videoseries?si=UDDdrb-IpEPGJb5L&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5" },
        { name: "Neso Academy: Theories", url: "https://www.youtube.com/embed/videoseries?si=2i_hKOsh5Wu5H7PN&amp;list=PLBlnK6fEyqRg41HzkHScol5bdRebCDOAZ" }
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
        { "name": "Question Bank", url: "/resources/web/tutorial sheets/Question Bank.pdf" },
        { "name": "WAD QB", url: "/resources/web/tutorial sheets/wad qb.pdf" }
      ],
      videos: [
        { name: "w3school-html", url: "https://www.w3schools.com/html/default.asp" },
        { name: "w3school-css", url: "https://www.w3schools.com/css/default.asp" },
        { name: "w3school-js", url: "https://www.w3schools.com/js/default.asp" },
      ],
      pyqs: [
        { name: "Web Development - Mid 2024", url: "/resources/web/pyqs/WAD_Mid_2024.pdf" },
        { name: "Web Development - Mid 2025", url: "/resources/web/pyqs/wadmid25.pdf" },
        { name: "Web Development - Remidial", url: "/resources/web/pyqs/wadremid.pdf" }
      ],

    },
    communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
      books: [
        { "name": "Ashraf Rizvi", url: "/resources/communication/books/AshrafRizvi.pdf" },
        { "name": "Meenakshi Raman & Sangeeta Sharma", url: "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
      ],
    },
    env: {
      books: [
        { name: "Ranu Gadi - EVS", url: "/resources/env/books/Ranu_Gadi_EVS.pdf" }
      ],
      notes: [
        { "name": "Air Pollution (Unit 2)", url: "/resources/env/notes/Air Pollution Unit 2.pdf" },
        { "name": "Carbon Credits (Book)", url: "/resources/env/notes/Carbon credits_ book.pdf" },
        { "name": "Chemical Toxicology (Unit 4)", url: "/resources/env/notes/Chemical Toxicology unit 4.pdf" },
        { "name": "Classification of Water Pollutants (Unit 2)", url: "/resources/env/notes/Classification of water pollutants-Unit 2.pdf" },
        { "name": "DOC-20230512-WA0015", url: "/resources/env/notes/DOC-20230512-WA0015..pdf" },
        { "name": "E-Waste", url: "/resources/env/notes/E WASTE.pdf" },
        { "name": "Eco-friendly Polymers (PPT)", url: "/resources/env/notes/Eco-friendly POLYMERS ppt.pdf" },
        { "name": "Eco-friendly Polymers (2024-2025)", url: "/resources/env/notes/Eco-friendly POLYMERS-2024-2025.pdf" },
        { "name": "Energy Resources (2024-25, Complete PPT)", url: "/resources/env/notes/Energy Resources-2024-25-complete.ppt" },
        { "name": "Environmental Management System (Final)", url: "/resources/env/notes/Env Management Sysem-final.pdf" },
        { "name": "Environmental Laws (1)", url: "/resources/env/notes/ENVIRONMENTAL LAWS (1).pptx" },
        { "name": "Green Tech & Green Chemistry (2023-2024)", url: "/resources/env/notes/GREEN TECH AND GREEN CHEMISTRY-2023-2024.pdf" },
        { "name": "Hazardous Waste (2024-2025)", url: "/resources/env/notes/Hazardous waste-2024-2025.pdf" },
        { "name": "Hydrogen Energy", url: "/resources/env/notes/HYDROGEN ENERGY.pdf" },
        { "name": "Solid Waste Pollution (2024-2025)", url: "/resources/env/notes/Solid waste pollution-2024-2025.pdf" },
        { "name": "Water Chemistry (Solved & Unsolved Numericals)", url: "/resources/env/notes/Water Chemistry Solved Unsolved Numericals .pdf" },
        { "name": "Water Conservation & Rain Water Harvesting", url: "/resources/env/notes/Water Conservation and Rain water Harvesting .pdf" },
        { "name": "Water Pollution (2024-25, Final)", url: "/resources/env/notes/WATER POLLUTION-2024-25 final.pdf" },
        { "name": "Water Treatment Numericals (Unit 1)", url: "/resources/env/notes/Water Treatment Numericals Unit1.pdf" }
      ],
    },

    calc1: {
      notes: [
        { name: "Curve Tracing (Jaggi Mathur)", url: "/resources/calc1/notes/curve tracing jaggi mathur.pdf" },
        { name: "Divergence and Curl", url: "/resources/calc1/notes/Divergence and curl.pdf" },
        { name: "Gradient of a Vector", url: "/resources/calc1/notes/Gradient of a vector.pdf" },
        { name: "Infinite Series Notes", url: "/resources/calc1/notes/infseriesnotes.pdf" },
        { name: "Node & Cusp", url: "/resources/calc1/notes/node,cusp.pdf" },
        { name: "Partial Differentiation - Part 1", url: "/resources/calc1/notes/Partial Differentiation - Part 1.pdf" },
        { name: "Successive Differentiation (Oct 2023)", url: "/resources/calc1/notes/successive diff oct 2023.pdf" },
        { name: "Taylor & Maclaurin – Errors & Approximations", url: "/resources/calc1/notes/taylor’s maclaurin’s errors and approximations.pdf" },
        { name: "Taylor’s Series", url: "/resources/calc1/notes/Taylor’s series.pdf" },
        { name: "Vector Calculus (PDF)", url: "/resources/calc1/notes/Vector Calculus pdf.pdf" },
        { name: "Vector Calculus", url: "/resources/calc1/notes/Vector calculus.pdf" },
        { name: "Vectors", url: "/resources/calc1/notes/vectors.pdf" }
      ],
      tutorials: [
        { name: "Tutorial 1", url: "/resources/calc1/tutorial/tut1.pdf" },
        { name: "Tutorial 2", url: "/resources/calc1/tutorial/tut2.pdf" },
        { name: "Tutorial 3", url: "/resources/calc1/tutorial/tut3.pdf" }
      ]
    }
  },



  MAE: {
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
      ],

      pyqs: [
        { name: "Applied Mathematics - 1st Sem", url: "/resources/math/pyq/am_1sem.pdf" },
        { name: "Applied Mathematics - Sem 1", url: "/resources/math/pyq/am_sem1.pdf" },
        { name: "Applied Mathematics - Sem 1 Offline", url: "/resources/math/pyq/AM_sem1_offline.pdf" },
        { name: "Applied Mathematics - Sem 1 Reappear End Sem", url: "/resources/math/pyq/am_sem1_reappear_endssm.pdf" },
        { name: "Applied Mathematics - Mid 2024", url: "/resources/math/pyq/Applied Mathematics_Mid_2024.pdf" },
        { name: "Applied Mathematics - 1st", url: "/resources/math/pyq/applied maths_1st.pdf" },
        { name: "Applied Mathematics - Mid Sem 2019", url: "/resources/math/pyq/MidSem_2019_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Jan 2021", url: "/resources/math/pyq/MidSem_Jan2021_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Jan 2023", url: "/resources/math/pyq/MidSem_Jan2023_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Oct 2023", url: "/resources/math/pyq/MidSem_Oct2023_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Oct 2024", url: "/resources/math/pyq/MidSem_Oct2024_AM.pdf" }
      ],
      video: [
        { name: "Differential Calc", url: "https://www.youtube.com/embed/videoseries?si=YKRJyvJ7P-8dem6S&amp;list=PLU6SqdYcYsfLlRGC9VM7bYVhXhxULZydQ" },
        { name: "Linear Algebra", url: "https://www.youtube.com/embed/videoseries?si=PR-G0y8VeCPdbGaN&amp;list=PLU6SqdYcYsfKV1QmzQNtzMuIH7mq5qb62" }
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
      ],
      video: [
        { name: "diffraction", url: "https://www.youtube.com/embed/videoseries?si=GR7aMX_3vY1FmDi-&amp;list=PLV2UTYNuWLfE_b-u5anVdvW1Zuu1uhYTL" },
        { name: "gradient,divergence,curl", url: "https://www.youtube.com/embed/videoseries?si=U5wdvyWlLxIRT_rQ&amp;list=PLAPKGqvQGg6oJAfjOACCCREiNcry-vWgZ" },
        { name: "wave optics", url: "https://www.youtube.com/embed/videoseries?si=fv83nh9RGxP5wCa3&amp;list=PLAPKGqvQGg6qn70CBMyIcBz4WCRKQG58i" },
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
      videos: [
        { name: "Pandas", url: "https://youtu.be/yFoVs3_wvPo?si=irpNxKn3WIfWeslj" },
        { name: "Numpy", url: "https://youtu.be/9DhZ-JCWvDw?si=-zmoDkzD3VyzzIS_" },
        { name: "Matplotlib", url: "https://www.youtube.com/embed/videoseries?si=K7N2spR30SASMVcK&amp;list=PLSwH4ViBDl2Tau2B--9cJB6P5394XN42O" }
      ]
    },
    workshop: {},
    communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
      books: [
        { "name": "Ashraf Rizvi", url: "/resources/communication/books/AshrafRizvi.pdf" },
        { "name": "Meenakshi Raman & Sangeeta Sharma", url: "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
      ],
    },
    bee: {
      books: [
        { name: "BL Theraja BEE Vol1", url: "/resources/bee/books/BL_theraja_BEE_vol1.pdf" }
      ],
      pyqs: [
        { name: "BEE - Mid 2024", url: "/resources/bee/pyqs/Bee_mid_2024.pdf" },
        { name: "BEE - Reappear Mid 2024", url: "/resources/bee/pyqs/BEE_Reappear_Mid_2024.pdf" },
        { name: "BEE - 2025", url: "/resources/bee/pyqs/bee25.pdf" },
        { name: "BEE - Reappear Dec 2024", url: "/resources/bee/pyqs/reappear_dec24.pdf" },
        { name: "BEE - Remid 2024", url: "/resources/bee/pyqs/remid_bee_2024.pdf" }
      ],
      videos: [
        { name: "Umesh Dhandhe", url: "https://www.youtube.com/embed/videoseries?si=XaeVEpVuVj4jjJN2&amp;list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc" },
        { name: "Gautam varde", url: "https://www.youtube.com/embed/videoseries?si=UDDdrb-IpEPGJb5L&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5" },
        { name: "Neso Academy: Theories", url: "https://www.youtube.com/embed/videoseries?si=2i_hKOsh5Wu5H7PN&amp;list=PLBlnK6fEyqRg41HzkHScol5bdRebCDOAZ" }
      ]

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
      pyqs: [
        { name: "BEE - Mid 2024", url: "/resources/bee/pyqs/Bee_mid_2024.pdf" },
        { name: "BEE - Reappear Mid 2024", url: "/resources/bee/pyqs/BEE_Reappear_Mid_2024.pdf" },
        { name: "BEE - 2025", url: "/resources/bee/pyqs/bee25.pdf" },
        { name: "BEE - Reappear Dec 2024", url: "/resources/bee/pyqs/reappear_dec24.pdf" },
        { name: "BEE - Remid 2024", url: "/resources/bee/pyqs/remid_bee_2024.pdf" }
      ],
      videos: [
        { name: "Umesh Dhandhe", url: "https://www.youtube.com/embed/videoseries?si=XaeVEpVuVj4jjJN2&amp;list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc" },
        { name: "Gautam varde", url: "https://www.youtube.com/embed/videoseries?si=UDDdrb-IpEPGJb5L&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5" },
        { name: "Neso Academy: Theories", url: "https://www.youtube.com/embed/videoseries?si=2i_hKOsh5Wu5H7PN&amp;list=PLBlnK6fEyqRg41HzkHScol5bdRebCDOAZ" }
      ]

    },

    communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
      books: [
        { "name": "Ashraf Rizvi", url: "/resources/communication/books/AshrafRizvi.pdf" },
        { "name": "Meenakshi Raman & Sangeeta Sharma", url: "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
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
        { "name": "Question Bank", url: "/resources/web/tutorial sheets/Question Bank.pdf" },
        { "name": "WAD QB", url: "/resources/web/tutorial sheets/wad qb.pdf" }
      ],
      videos: [
        { name: "w3school-html", url: "https://www.w3schools.com/html/default.asp" },
        { name: "w3school-css", url: "https://www.w3schools.com/css/default.asp" },
        { name: "w3school-js", url: "https://www.w3schools.com/js/default.asp" },
      ],
      pyqs: [
        { name: "Web Development - Mid 2024", url: "/resources/web/pyqs/WAD_Mid_2024.pdf" },
        { name: "Web Development - Mid 2025", url: "/resources/web/pyqs/wadmid25.pdf" },
        { name: "Web Development - Remidial", url: "/resources/web/pyqs/wadremid.pdf" }
      ],
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
      ],
      videos: [
        { name: "Jenny's lectures", url: "https://www.youtube.com/embed/videoseries?si=ZLmj1O514KOY8A2k&list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S" },
        { name: "Code w Harry", url: "https://www.youtube.com/embed/videoseries?si=R9QHoIiEH40sT1wE&list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR" }
      ],
      pyqs: [
        { name: "Programming - End Term Dec 2024 (Sem 1)", url: "/resources/programming/pyqs/endterm_dec24_sem1.pdf" },
        { name: "Programming - End Term Dec 2024 (Sem 2)", url: "/resources/programming/pyqs/endterm_dec24_sem2.pdf" },
        { name: "Programming - Remidial Nov 2024", url: "/resources/programming/pyqs/pwc_remid_nov24.pdf" }
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
      ],
      video: [
        { name: "diffraction", url: "https://www.youtube.com/embed/videoseries?si=GR7aMX_3vY1FmDi-&amp;list=PLV2UTYNuWLfE_b-u5anVdvW1Zuu1uhYTL" },
        { name: "gradient,divergence,curl", url: "https://www.youtube.com/embed/videoseries?si=U5wdvyWlLxIRT_rQ&amp;list=PLAPKGqvQGg6oJAfjOACCCREiNcry-vWgZ" },
        { name: "wave optics", url: "https://www.youtube.com/embed/videoseries?si=fv83nh9RGxP5wCa3&amp;list=PLAPKGqvQGg6qn70CBMyIcBz4WCRKQG58i" },
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
      ],

      pyqs: [
        { name: "Applied Mathematics - 1st Sem", url: "/resources/math/pyq/am_1sem.pdf" },
        { name: "Applied Mathematics - Sem 1", url: "/resources/math/pyq/am_sem1.pdf" },
        { name: "Applied Mathematics - Sem 1 Offline", url: "/resources/math/pyq/AM_sem1_offline.pdf" },
        { name: "Applied Mathematics - Sem 1 Reappear End Sem", url: "/resources/math/pyq/am_sem1_reappear_endssm.pdf" },
        { name: "Applied Mathematics - Mid 2024", url: "/resources/math/pyq/Applied Mathematics_Mid_2024.pdf" },
        { name: "Applied Mathematics - 1st", url: "/resources/math/pyq/applied maths_1st.pdf" },
        { name: "Applied Mathematics - Mid Sem 2019", url: "/resources/math/pyq/MidSem_2019_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Jan 2021", url: "/resources/math/pyq/MidSem_Jan2021_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Jan 2023", url: "/resources/math/pyq/MidSem_Jan2023_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Oct 2023", url: "/resources/math/pyq/MidSem_Oct2023_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Oct 2024", url: "/resources/math/pyq/MidSem_Oct2024_AM.pdf" }
      ],
      video: [
        { name: "Differential Calc", url: "https://www.youtube.com/embed/videoseries?si=YKRJyvJ7P-8dem6S&amp;list=PLU6SqdYcYsfLlRGC9VM7bYVhXhxULZydQ" },
        { name: "Linear Algebra", url: "https://www.youtube.com/embed/videoseries?si=PR-G0y8VeCPdbGaN&amp;list=PLU6SqdYcYsfKV1QmzQNtzMuIH7mq5qb62" }
      ]
    },

  },


  IT: {
    subjects: {
      semester1: [
        { id: "math", name: "Applied Mathematics" },
        { id: "physics", name: "Applied Physics" },
        { id: "python", name: "Programming with Python" },
        { id: "itworkshop", name: "IT Workshop" },
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
      ],

      pyqs: [
        { name: "Applied Mathematics - 1st Sem", url: "/resources/math/pyq/am_1sem.pdf" },
        { name: "Applied Mathematics - Sem 1", url: "/resources/math/pyq/am_sem1.pdf" },
        { name: "Applied Mathematics - Sem 1 Offline", url: "/resources/math/pyq/AM_sem1_offline.pdf" },
        { name: "Applied Mathematics - Sem 1 Reappear End Sem", url: "/resources/math/pyq/am_sem1_reappear_endssm.pdf" },
        { name: "Applied Mathematics - Mid 2024", url: "/resources/math/pyq/Applied Mathematics_Mid_2024.pdf" },
        { name: "Applied Mathematics - 1st", url: "/resources/math/pyq/applied maths_1st.pdf" },
        { name: "Applied Mathematics - Mid Sem 2019", url: "/resources/math/pyq/MidSem_2019_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Jan 2021", url: "/resources/math/pyq/MidSem_Jan2021_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Jan 2023", url: "/resources/math/pyq/MidSem_Jan2023_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Oct 2023", url: "/resources/math/pyq/MidSem_Oct2023_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Oct 2024", url: "/resources/math/pyq/MidSem_Oct2024_AM.pdf" }
      ],
      video: [
        { name: "Differential Calc", url: "https://www.youtube.com/embed/videoseries?si=YKRJyvJ7P-8dem6S&amp;list=PLU6SqdYcYsfLlRGC9VM7bYVhXhxULZydQ" },
        { name: "Linear Algebra", url: "https://www.youtube.com/embed/videoseries?si=PR-G0y8VeCPdbGaN&amp;list=PLU6SqdYcYsfKV1QmzQNtzMuIH7mq5qb62" }
      ]
    },

    communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
      books: [
        { "name": "Ashraf Rizvi", url: "/resources/communication/books/AshrafRizvi.pdf" },
        { "name": "Meenakshi Raman & Sangeeta Sharma", url: "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
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
        { "name": "2021 Batch", url: "/resources/python/pyqs/2021 batch.pdf" },
        { "name": "2022 Batch", url: "/resources/python/pyqs/2022 batch.pdf" },
        { "name": "2023", url: "/resources/python/pyqs/2023.pdf" },
        { "name": "End Sem 2022", url: "/resources/python/pyqs/endsem_22.pdf" },
        { "name": "End Sem 2023", url: "/resources/python/pyqs/endsem_23.pdf" },
        { "name": "Mid Sem (1)", url: "/resources/python/pyqs/MIDSEM(1).pdf" },
        { "name": "Mid Sem", url: "/resources/python/pyqs/midsem.pdf" },
        { "name": "Mid Sem 2023", url: "/resources/python/pyqs/midsem_23.pdf" },
        { name: "End Term Dec 2024", url: "/resources/python/pyqs/endterm_dec24.pdf" },
        { name: "End Term Sem 1 Dec 2024", url: "/resources/python/pyqs/endterm_sem1_dec24.pdf" },
        { name: "Remid Sem 1 Nov 2024", url: "/resources/python/pyqs/remid_sem1_nov24.pdf" },
      ],

      books: [
        { name: "Intro to ML with Python", url: "/resources/python/books/Introduction to Machine Learning with Python ( PDFDrive.com )-min.pdf" },
      ],
      "tutorial sheets": [
        { name: "Python Exam Questions", url: "/resources/python/tutorial sheets/Python_Exam_Questions.pdf" },
        { name: "Python Question Bank (BTETPE405E)", url: "/resources/python/tutorial sheets/Python_Question_Bank-Python-Programming-BTETPE405E.pdf" },
        { name: "Python Question Bank (Unit 1 & 2)", url: "/resources/python/tutorial sheets/Question bank python ( unit 1 and 2).docx" },
      ],
      videos: [
        { name: "Code w Harry", url: "https://www.youtube.com/embed/videoseries?si=F9ux9fuwy_p7oeNk&amp;list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg" },
        { name: "w3school", url: "https://www.w3schools.com/python/" },
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
      ],
      video: [
        { name: "diffraction", url: "https://www.youtube.com/embed/videoseries?si=GR7aMX_3vY1FmDi-&amp;list=PLV2UTYNuWLfE_b-u5anVdvW1Zuu1uhYTL" },
        { name: "gradient,divergence,curl", url: "https://www.youtube.com/embed/videoseries?si=U5wdvyWlLxIRT_rQ&amp;list=PLAPKGqvQGg6oJAfjOACCCREiNcry-vWgZ" },
        { name: "wave optics", url: "https://www.youtube.com/embed/videoseries?si=fv83nh9RGxP5wCa3&amp;list=PLAPKGqvQGg6qn70CBMyIcBz4WCRKQG58i" },
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
      ],
      videos: [
        { name: "w3school-html", url: "https://www.w3schools.com/html/default.asp" },
        { name: "w3school-css", url: "https://www.w3schools.com/css/default.asp" },
        { name: "w3school-js", url: "https://www.w3schools.com/js/default.asp" },
      ],
      pyqs: [
        { name: "Web Development - Mid 2024", url: "/resources/web/pyqs/WAD_Mid_2024.pdf" },
        { name: "Web Development - Mid 2025", url: "/resources/web/pyqs/wadmid25.pdf" },
        { name: "Web Development - Remidial", url: "/resources/web/pyqs/wadremid.pdf" }
      ],
    },
    itworkshop: {
      notes: [
        { name: "Visualization (Unit 3)", url: "/resources/itworkshop/notes/3.Visualization.pdf" },
        { name: "Arrays", url: "/resources/itworkshop/notes/Arrays.docx" },
        { name: "Attributes", url: "/resources/itworkshop/notes/Attributes.docx" },
        { name: "Control Statements (R Programming)", url: "/resources/itworkshop/notes/Control Statements R prog.docx" },
        { name: "Data Frames", url: "/resources/itworkshop/notes/Data frames.docx" },
        { name: "R Language (Overview)", url: "/resources/itworkshop/notes/R language.pdf" },
        { name: "Unit 1 & 2 (Combined Notes)", url: "/resources/itworkshop/notes/unit 1 and 2.pdf" },
        { name: "Unit 3 (Detailed Notes)", url: "/resources/itworkshop/notes/Unit 3.pdf" },
        { name: "Unit 4 (Detailed Notes)", url: "/resources/itworkshop/notes/unit 4.pdf" }
      ],
      tutorials: [
        { name: "Practice Questions", url: "/resources/itworkshop/tutorial/Questions.docx" }
      ],
      pyqs: [
        { name: "IT Workshop - Mid 2024", url: "/resources/itworkshop/pyqs/IT Workshop_Mid_2024.pdf" },
        { name: "IT Workshop - Sem 1 2024", url: "/resources/itworkshop/pyqs/IT_workshop_sem1_24.pdf" },
        { name: "IT Workshop - Mid Sem 2 2025", url: "/resources/itworkshop/pyqs/ITworkshop_mid_sem2_25.pdf" },
        { name: "IT Workshop - Remidial 2024", url: "/resources/itworkshop/pyqs/itworkshop_remid24.pdf" }
      ],
      videos: [
        { name: "w3school", url: "https://www.w3schools.com/r/" }
      ]
    }

  },

  AIML: {
    subjects: {
      semester1: [
        { id: "python", name: "Programming with Python" },
        { id: "stats", name: "Probability & Statistics" },
        { id: "env", name: "Environmental Sciences" },
        { id: "itworkshop", name: "IT Workshop" },
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
      ],
      videos: [
        { name: "Gajendra Purohit", url: "https://www.youtube.com/embed/videoseries?si=BEps_d3C27m8qBqY&amp;list=PLU6SqdYcYsfJPF-4HphQQ8OceDtqhlSW8" },
        { name: "GP (extended v)", url: "https://www.youtube.com/embed/videoseries?si=b_3pDguiONHboTPV&amp;list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK" }
      ]
    },

    communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
      books: [
        { "name": "Ashraf Rizvi", url: "/resources/communication/books/AshrafRizvi.pdf" },
        { "name": "Meenakshi Raman & Sangeeta Sharma", url: "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
      ],
    },

    itworkshop: {
      notes: [
        { name: "Visualization (Unit 3)", url: "/resources/itworkshop/notes/3.Visualization.pdf" },
        { name: "Arrays", url: "/resources/itworkshop/notes/Arrays.docx" },
        { name: "Attributes", url: "/resources/itworkshop/notes/Attributes.docx" },
        { name: "Control Statements (R Programming)", url: "/resources/itworkshop/notes/Control Statements R prog.docx" },
        { name: "Data Frames", url: "/resources/itworkshop/notes/Data frames.docx" },
        { name: "R Language (Overview)", url: "/resources/itworkshop/notes/R language.pdf" },
        { name: "Unit 1 & 2 (Combined Notes)", url: "/resources/itworkshop/notes/unit 1 and 2.pdf" },
        { name: "Unit 3 (Detailed Notes)", url: "/resources/itworkshop/notes/Unit 3.pdf" },
        { name: "Unit 4 (Detailed Notes)", url: "/resources/itworkshop/notes/unit 4.pdf" }
      ],
      tutorials: [
        { name: "Practice Questions", url: "/resources/itworkshop/tutorial/Questions.docx" }
      ],
      pyqs: [
        { name: "IT Workshop - Mid 2024", url: "/resources/itworkshop/pyqs/IT Workshop_Mid_2024.pdf" },
        { name: "IT Workshop - Sem 1 2024", url: "/resources/itworkshop/pyqs/IT_workshop_sem1_24.pdf" },
        { name: "IT Workshop - Mid Sem 2 2025", url: "/resources/itworkshop/pyqs/ITworkshop_mid_sem2_25.pdf" },
        { name: "IT Workshop - Remidial 2024", url: "/resources/itworkshop/pyqs/itworkshop_remid24.pdf" }
      ],
      videos: [
        { name: "w3school", url: "https://www.w3schools.com/r/" }
      ]
    },

    env: {
      books: [
        { name: "Ranu Gadi - EVS", url: "/resources/env/books/Ranu_Gadi_EVS.pdf" }
      ],

      notes: [
        { "name": "Air Pollution (Unit 2)", url: "/resources/env/notes/Air Pollution Unit 2.pdf" },
        { "name": "Carbon Credits (Book)", url: "/resources/env/notes/Carbon credits_ book.pdf" },
        { "name": "Chemical Toxicology (Unit 4)", url: "/resources/env/notes/Chemical Toxicology unit 4.pdf" },
        { "name": "Classification of Water Pollutants (Unit 2)", url: "/resources/env/notes/Classification of water pollutants-Unit 2.pdf" },
        { "name": "DOC-20230512-WA0015", url: "/resources/env/notes/DOC-20230512-WA0015..pdf" },
        { "name": "E-Waste", url: "/resources/env/notes/E WASTE.pdf" },
        { "name": "Eco-friendly Polymers (PPT)", url: "/resources/env/notes/Eco-friendly POLYMERS ppt.pdf" },
        { "name": "Eco-friendly Polymers (2024-2025)", url: "/resources/env/notes/Eco-friendly POLYMERS-2024-2025.pdf" },
        { "name": "Energy Resources (2024-25, Complete PPT)", url: "/resources/env/notes/Energy Resources-2024-25-complete.ppt" },
        { "name": "Environmental Management System (Final)", url: "/resources/env/notes/Env Management Sysem-final.pdf" },
        { "name": "Environmental Laws (1)", url: "/resources/env/notes/ENVIRONMENTAL LAWS (1).pptx" },
        { "name": "Green Tech & Green Chemistry (2023-2024)", url: "/resources/env/notes/GREEN TECH AND GREEN CHEMISTRY-2023-2024.pdf" },
        { "name": "Hazardous Waste (2024-2025)", url: "/resources/env/notes/Hazardous waste-2024-2025.pdf" },
        { "name": "Hydrogen Energy", url: "/resources/env/notes/HYDROGEN ENERGY.pdf" },
        { "name": "Solid Waste Pollution (2024-2025)", url: "/resources/env/notes/Solid waste pollution-2024-2025.pdf" },
        { "name": "Water Chemistry (Solved & Unsolved Numericals)", url: "/resources/env/notes/Water Chemistry Solved Unsolved Numericals .pdf" },
        { "name": "Water Conservation & Rain Water Harvesting", url: "/resources/env/notes/Water Conservation and Rain water Harvesting .pdf" },
        { "name": "Water Pollution (2024-25, Final)", url: "/resources/env/notes/WATER POLLUTION-2024-25 final.pdf" },
        { "name": "Water Treatment Numericals (Unit 1)", url: "/resources/env/notes/Water Treatment Numericals Unit1.pdf" }
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
        { "name": "Question Bank", url: "/resources/web/tutorial sheets/Question Bank.pdf" },
        { "name": "WAD QB", url: "/resources/web/tutorial sheets/wad qb.pdf" }
      ],
      videos: [
        { name: "w3school-html", url: "https://www.w3schools.com/html/default.asp" },
        { name: "w3school-css", url: "https://www.w3schools.com/css/default.asp" },
        { name: "w3school-js", url: "https://www.w3schools.com/js/default.asp" },
      ],
      pyqs: [
        { name: "Web Development - Mid 2024", url: "/resources/web/pyqs/WAD_Mid_2024.pdf" },
        { name: "Web Development - Mid 2025", url: "/resources/web/pyqs/wadmid25.pdf" },
        { name: "Web Development - Remidial", url: "/resources/web/pyqs/wadremid.pdf" }
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
        { "name": "2021 Batch", url: "/resources/python/pyqs/2021 batch.pdf" },
        { "name": "2022 Batch", url: "/resources/python/pyqs/2022 batch.pdf" },
        { "name": "2023", url: "/resources/python/pyqs/2023.pdf" },
        { "name": "End Sem 2022", url: "/resources/python/pyqs/endsem_22.pdf" },
        { "name": "End Sem 2023", url: "/resources/python/pyqs/endsem_23.pdf" },
        { "name": "Mid Sem (1)", url: "/resources/python/pyqs/MIDSEM(1).pdf" },
        { "name": "Mid Sem", url: "/resources/python/pyqs/midsem.pdf" },
        { "name": "Mid Sem 2023", url: "/resources/python/pyqs/midsem_23.pdf" },
        { name: "End Term Dec 2024", url: "/resources/python/pyqs/endterm_dec24.pdf" },
        { name: "End Term Sem 1 Dec 2024", url: "/resources/python/pyqs/endterm_sem1_dec24.pdf" },
        { name: "Remid Sem 1 Nov 2024", url: "/resources/python/pyqs/remid_sem1_nov24.pdf" },

      ],

      books: [
        { name: "Intro to ML with Python", url: "/resources/python/books/Introduction to Machine Learning with Python ( PDFDrive.com )-min.pdf" },
      ],
      "tutorial sheets": [
        { name: "Python Exam Questions", url: "/resources/python/tutorial sheets/Python_Exam_Questions.pdf" },
        { name: "Python Question Bank (BTETPE405E)", url: "/resources/python/tutorial sheets/Python_Question_Bank-Python-Programming-BTETPE405E.pdf" },
        { name: "Python Question Bank (Unit 1 & 2)", url: "/resources/python/tutorial sheets/Question bank python ( unit 1 and 2).docx" },
      ],
      videos: [
        { name: "Code w Harry", url: "https://www.youtube.com/embed/videoseries?si=F9ux9fuwy_p7oeNk&amp;list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg" },
        { name: "w3school", url: "https://www.w3schools.com/python/" }
      ]
    },

  },

  "CSE-AI": {
    subjects: {
      semester1: [
        { id: "python", name: "Programming with Python" },
        { id: "stats", name: "Probability & Statistics" },
        { id: "env", name: "Environmental Sciences" },
        { id: "bee", name: "Basics of Electrical Engineering" },
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
      ],
      videos: [
        { name: "Gajendra Purohit", url: "https://www.youtube.com/embed/videoseries?si=BEps_d3C27m8qBqY&amp;list=PLU6SqdYcYsfJPF-4HphQQ8OceDtqhlSW8" },
        { name: "GP (extended v)", url: "https://www.youtube.com/embed/videoseries?si=b_3pDguiONHboTPV&amp;list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK" }
      ]
    },

    env: {
      books: [
        { name: "Ranu Gadi - EVS", url: "/resources/env/books/Ranu_Gadi_EVS.pdf" }
      ],

      notes: [
        { "name": "Air Pollution (Unit 2)", url: "/resources/env/notes/Air Pollution Unit 2.pdf" },
        { "name": "Carbon Credits (Book)", url: "/resources/env/notes/Carbon credits_ book.pdf" },
        { "name": "Chemical Toxicology (Unit 4)", url: "/resources/env/notes/Chemical Toxicology unit 4.pdf" },
        { "name": "Classification of Water Pollutants (Unit 2)", url: "/resources/env/notes/Classification of water pollutants-Unit 2.pdf" },
        { "name": "DOC-20230512-WA0015", url: "/resources/env/notes/DOC-20230512-WA0015..pdf" },
        { "name": "E-Waste", url: "/resources/env/notes/E WASTE.pdf" },
        { "name": "Eco-friendly Polymers (PPT)", url: "/resources/env/notes/Eco-friendly POLYMERS ppt.pdf" },
        { "name": "Eco-friendly Polymers (2024-2025)", url: "/resources/env/notes/Eco-friendly POLYMERS-2024-2025.pdf" },
        { "name": "Energy Resources (2024-25, Complete PPT)", url: "/resources/env/notes/Energy Resources-2024-25-complete.ppt" },
        { "name": "Environmental Management System (Final)", url: "/resources/env/notes/Env Management Sysem-final.pdf" },
        { "name": "Environmental Laws (1)", url: "/resources/env/notes/ENVIRONMENTAL LAWS (1).pptx" },
        { "name": "Green Tech & Green Chemistry (2023-2024)", url: "/resources/env/notes/GREEN TECH AND GREEN CHEMISTRY-2023-2024.pdf" },
        { "name": "Hazardous Waste (2024-2025)", url: "/resources/env/notes/Hazardous waste-2024-2025.pdf" },
        { "name": "Hydrogen Energy", url: "/resources/env/notes/HYDROGEN ENERGY.pdf" },
        { "name": "Solid Waste Pollution (2024-2025)", url: "/resources/env/notes/Solid waste pollution-2024-2025.pdf" },
        { "name": "Water Chemistry (Solved & Unsolved Numericals)", url: "/resources/env/notes/Water Chemistry Solved Unsolved Numericals .pdf" },
        { "name": "Water Conservation & Rain Water Harvesting", url: "/resources/env/notes/Water Conservation and Rain water Harvesting .pdf" },
        { "name": "Water Pollution (2024-25, Final)", url: "/resources/env/notes/WATER POLLUTION-2024-25 final.pdf" },
        { "name": "Water Treatment Numericals (Unit 1)", url: "/resources/env/notes/Water Treatment Numericals Unit1.pdf" }
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
        { "name": "2021 Batch", url: "/resources/python/pyqs/2021 batch.pdf" },
        { "name": "2022 Batch", url: "/resources/python/pyqs/2022 batch.pdf" },
        { "name": "2023", url: "/resources/python/pyqs/2023.pdf" },
        { "name": "End Sem 2022", url: "/resources/python/pyqs/endsem_22.pdf" },
        { "name": "End Sem 2023", url: "/resources/python/pyqs/endsem_23.pdf" },
        { "name": "Mid Sem (1)", url: "/resources/python/pyqs/MIDSEM(1).pdf" },
        { "name": "Mid Sem", url: "/resources/python/pyqs/midsem.pdf" },
        { "name": "Mid Sem 2023", url: "/resources/python/pyqs/midsem_23.pdf" },
        { name: "End Term Dec 2024", url: "/resources/python/pyqs/endterm_dec24.pdf" },
        { name: "End Term Sem 1 Dec 2024", url: "/resources/python/pyqs/endterm_sem1_dec24.pdf" },
        { name: "Remid Sem 1 Nov 2024", url: "/resources/python/pyqs/remid_sem1_nov24.pdf" },

      ],

      books: [
        { name: "Intro to ML with Python", url: "/resources/python/books/Introduction to Machine Learning with Python ( PDFDrive.com )-min.pdf" },
      ],
      "tutorial sheets": [
        { name: "Python Exam Questions", url: "/resources/python/tutorial sheets/Python_Exam_Questions.pdf" },
        { name: "Python Question Bank (BTETPE405E)", url: "/resources/python/tutorial sheets/Python_Question_Bank-Python-Programming-BTETPE405E.pdf" },
        { name: "Python Question Bank (Unit 1 & 2)", url: "/resources/python/tutorial sheets/Question bank python ( unit 1 and 2).docx" },
      ],
      videos: [
        { name: "Code w Harry", url: "https://www.youtube.com/embed/videoseries?si=F9ux9fuwy_p7oeNk&amp;list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg" },
        { name: "w3school", url: "https://www.w3schools.com/python/" },
      ]
    },

    bee: {
      books: [
        { name: "BL Theraja BEE Vol1", url: "/resources/bee/books/BL_theraja_BEE_vol1.pdf" }
      ],
      pyqs: [
        { name: "BEE - Mid 2024", url: "/resources/bee/pyqs/Bee_mid_2024.pdf" },
        { name: "BEE - Reappear Mid 2024", url: "/resources/bee/pyqs/BEE_Reappear_Mid_2024.pdf" },
        { name: "BEE - 2025", url: "/resources/bee/pyqs/bee25.pdf" },
        { name: "BEE - Reappear Dec 2024", url: "/resources/bee/pyqs/reappear_dec24.pdf" },
        { name: "BEE - Remid 2024", url: "/resources/bee/pyqs/remid_bee_2024.pdf" }
      ],
      videos: [
        { name: "Umesh Dhandhe", url: "https://www.youtube.com/embed/videoseries?si=XaeVEpVuVj4jjJN2&amp;list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc" },
        { name: "Gautam varde", url: "https://www.youtube.com/embed/videoseries?si=UDDdrb-IpEPGJb5L&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5" },
        { name: "Neso Academy: Theories", url: "https://www.youtube.com/embed/videoseries?si=2i_hKOsh5Wu5H7PN&amp;list=PLBlnK6fEyqRg41HzkHScol5bdRebCDOAZ" }
      ]

    },

    communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
      books: [
        { "name": "Ashraf Rizvi", url: "/resources/communication/books/AshrafRizvi.pdf" },
        { "name": "Meenakshi Raman & Sangeeta Sharma", url: "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
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
        { id: "elecworkshop", name: "Electronics Workshop" },
        { id: "communication", name: "Communication Skills" },
      ],
      semester2: [],
    },

    communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
      books: [
        { "name": "Ashraf Rizvi", url: "/resources/communication/books/AshrafRizvi.pdf" },
        { "name": "Meenakshi Raman & Sangeeta Sharma", url: "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
      ],
    },

    signals: {
      notes: [
        { name: "Unit-2", url: "/resources/signals/notes/ch2_copy.pdf" },
        { name: "Unit-1", url: "/resources/signals/notes/https.pdf" },
        { name: "Signals and Systems (Slideshare PPT)", url: "/resources/signals/notes/slideshare_net_slideshow_signals_systems_ppt_75004666.pdf" },
        { name: "Signals and Systems Lecture ", url: "/resources/signals/notes/sysytem and signals lecture 1.pdf" }
      ],
      videos: [
        { name: "RK Classes", url: "https://www.youtube.com/embed/videoseries?si=E7G9m5Tl-cPYrv43&amp;list=PLc3zKsWdO93cdmOgATsErDKhOkneho_f_" },
        { name: "Topper's Secret", url: "https://www.youtube.com/embed/videoseries?si=9RDFAjPJSFPC3Gtr&amp;list=PLXnsjPD8-xuvq34afqKrJ2tJ-Ppj6BEfC" }
      ],
      pyqs: [
        { name: "Signals - Reappear Midterm March 2025", url: "/resources/signals/pyqs/reapeear_midterm_march25.pdf" }
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
      videos: [
        { name: "Pandas", url: "https://youtu.be/yFoVs3_wvPo?si=irpNxKn3WIfWeslj" },
        { name: "Numpy", url: "https://youtu.be/9DhZ-JCWvDw?si=-zmoDkzD3VyzzIS_" },
        { name: "Matplotlib", url: "https://www.youtube.com/embed/videoseries?si=K7N2spR30SASMVcK&amp;list=PLSwH4ViBDl2Tau2B--9cJB6P5394XN42O" }
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
      ],

      pyqs: [
        { name: "Applied Mathematics - 1st Sem", url: "/resources/math/pyq/am_1sem.pdf" },
        { name: "Applied Mathematics - Sem 1", url: "/resources/math/pyq/am_sem1.pdf" },
        { name: "Applied Mathematics - Sem 1 Offline", url: "/resources/math/pyq/AM_sem1_offline.pdf" },
        { name: "Applied Mathematics - Sem 1 Reappear End Sem", url: "/resources/math/pyq/am_sem1_reappear_endssm.pdf" },
        { name: "Applied Mathematics - Mid 2024", url: "/resources/math/pyq/Applied Mathematics_Mid_2024.pdf" },
        { name: "Applied Mathematics - 1st", url: "/resources/math/pyq/applied maths_1st.pdf" },
        { name: "Applied Mathematics - Mid Sem 2019", url: "/resources/math/pyq/MidSem_2019_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Jan 2021", url: "/resources/math/pyq/MidSem_Jan2021_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Jan 2023", url: "/resources/math/pyq/MidSem_Jan2023_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Oct 2023", url: "/resources/math/pyq/MidSem_Oct2023_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Oct 2024", url: "/resources/math/pyq/MidSem_Oct2024_AM.pdf" }
      ],
      video: [
        { name: "Differential Calc", url: "https://www.youtube.com/embed/videoseries?si=YKRJyvJ7P-8dem6S&amp;list=PLU6SqdYcYsfLlRGC9VM7bYVhXhxULZydQ" },
        { name: "Linear Algebra", url: "https://www.youtube.com/embed/videoseries?si=PR-G0y8VeCPdbGaN&amp;list=PLU6SqdYcYsfKV1QmzQNtzMuIH7mq5qb62" }
      ]
    },

    elecworkshop: {
      pyqs: [
        { name: "Electronic Workshop PYQ - 1st", url: "/resources/elecworkshop/pyqs/electronic workshop _1st.pdf" },
        { name: "Electronic Workshop PYQ - Mid 2024", url: "/resources/elecworkshop/pyqs/Electronics Workshop_1st sem_Mid_2024.pdf" },
        { name: "Electronic Workshop PYQ - Remid", url: "/resources/elecworkshop/pyqs/electronics_workshop_remid.pdf" }
      ]
    }
  },


  "ECE-AI": {
    subjects: {
      semester1: [
        { id: "math", name: "Applied Mathematics" },
        { id: "elec_sci", name: "Fundamentals of electrical  Sciences" },
        { id: "signals", name: "Systems & Signals" },
        { id: "ids", name: "Intro to Data Science" },
        { id: "elecworkshop", name: "Electronics Workshop" },
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
      ],

      pyqs: [
        { name: "Applied Mathematics - 1st Sem", url: "/resources/math/pyq/am_1sem.pdf" },
        { name: "Applied Mathematics - Sem 1", url: "/resources/math/pyq/am_sem1.pdf" },
        { name: "Applied Mathematics - Sem 1 Offline", url: "/resources/math/pyq/AM_sem1_offline.pdf" },
        { name: "Applied Mathematics - Sem 1 Reappear End Sem", url: "/resources/math/pyq/am_sem1_reappear_endssm.pdf" },
        { name: "Applied Mathematics - Mid 2024", url: "/resources/math/pyq/Applied Mathematics_Mid_2024.pdf" },
        { name: "Applied Mathematics - 1st", url: "/resources/math/pyq/applied maths_1st.pdf" },
        { name: "Applied Mathematics - Mid Sem 2019", url: "/resources/math/pyq/MidSem_2019_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Jan 2021", url: "/resources/math/pyq/MidSem_Jan2021_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Jan 2023", url: "/resources/math/pyq/MidSem_Jan2023_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Oct 2023", url: "/resources/math/pyq/MidSem_Oct2023_AM.pdf" },
        { name: "Applied Mathematics - Mid Sem Oct 2024", url: "/resources/math/pyq/MidSem_Oct2024_AM.pdf" }
      ],
      video: [
        { name: "Differential Calc", url: "https://www.youtube.com/embed/videoseries?si=YKRJyvJ7P-8dem6S&amp;list=PLU6SqdYcYsfLlRGC9VM7bYVhXhxULZydQ" },
        { name: "Linear Algebra", url: "https://www.youtube.com/embed/videoseries?si=PR-G0y8VeCPdbGaN&amp;list=PLU6SqdYcYsfKV1QmzQNtzMuIH7mq5qb62" }
      ]
    },

    signals: {
      notes: [
        { name: "Unit-2", url: "/resources/signals/notes/ch2_copy.pdf" },
        { name: "Unit-1", url: "/resources/signals/notes/https.pdf" },
        { name: "Signals and Systems (Slideshare PPT)", url: "/resources/signals/notes/slideshare_net_slideshow_signals_systems_ppt_75004666.pdf" },
        { name: "Signals and Systems Lecture ", url: "/resources/signals/notes/sysytem and signals lecture 1.pdf" }
      ],
      videos: [
        { name: "RK Classes", url: "https://www.youtube.com/embed/videoseries?si=E7G9m5Tl-cPYrv43&amp;list=PLc3zKsWdO93cdmOgATsErDKhOkneho_f_" },
        { name: "Topper's Secret", url: "https://www.youtube.com/embed/videoseries?si=9RDFAjPJSFPC3Gtr&amp;list=PLXnsjPD8-xuvq34afqKrJ2tJ-Ppj6BEfC" }
      ],
      pyqs: [
        { name: "Signals - Reappear Midterm March 2025", url: "/resources/signals/pyqs/reapeear_midterm_march25.pdf" }
      ]
    },

    communication: {
      notes: [
        { name: "CS Complete Notes", url: "/resources/communication/notes/CS complete notes.pdf" }
      ],
      books: [
        { "name": "Ashraf Rizvi", url: "/resources/communication/books/AshrafRizvi.pdf" },
        { "name": "Meenakshi Raman & Sangeeta Sharma", url: "/resources/communication/books/MeenakshiRaman-SangeetaSharma.pdf" }
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
      videos: [
        { name: "Pandas", url: "https://youtu.be/yFoVs3_wvPo?si=irpNxKn3WIfWeslj" },
        { name: "Numpy", url: "https://youtu.be/9DhZ-JCWvDw?si=-zmoDkzD3VyzzIS_" },
        { name: "Matplotlib", url: "https://www.youtube.com/embed/videoseries?si=K7N2spR30SASMVcK&amp;list=PLSwH4ViBDl2Tau2B--9cJB6P5394XN42O" }
      ]
    },

    elecworkshop: {
      pyqs: [
        { name: "Electronic Workshop PYQ - 1st", url: "/resources/elecworkshop/pyqs/electronic workshop _1st.pdf" },
        { name: "Electronic Workshop PYQ - Mid 2024", url: "/resources/elecworkshop/pyqs/Electronics Workshop_1st sem_Mid_2024.pdf" },
        { name: "Electronic Workshop PYQ - Remid", url: "/resources/elecworkshop/pyqs/electronics_workshop_remid.pdf" }
      ]
    }
  },
};
