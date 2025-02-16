"use client";
import React, { useState } from "react";
import {
  Book,
  GraduationCap,
  Target,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

interface Subject {
  name: string;
  code: string;
}

interface Course {
  name: string;
  code: string;
  requiredSubjects: string[];
  careerProspects: string[];
  description: string;
}

interface Recommendation {
  course: Course;
  matchScore: number;
  matchedSubjects: string[];
  explanation: string;
}

const UTMERecommendationPage: React.FC = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([
    "English",
  ]);
  const [utmeScore, setUtmeScore] = useState<string>("");
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const allSubjects: Subject[] = [
    { name: "English", code: "ENG" },
    { name: "Mathematics", code: "MTH" },
    { name: "Physics", code: "PHY" },
    { name: "Chemistry", code: "CHM" },
    { name: "Biology", code: "BIO" },
    { name: "Economics", code: "ECN" },
    { name: "Government", code: "GVT" },
    { name: "Accounting", code: "ACC" },
    { name: "Commerce", code: "COM" },
  ];

  const courseCatalog: Course[] = [
    {
      name: "Medicine and Surgery",
      code: "MED",
      requiredSubjects: ["Biology", "Chemistry", "Physics"],
      careerProspects: ["Doctor", "Surgeon", "Medical Researcher"],
      description:
        "Comprehensive medical training covering human anatomy, pathology, and clinical practice.",
    },
    {
      name: "Law",
      code: "LAW",
      requiredSubjects: ["Government", "Economics"],
      careerProspects: ["Lawyer", "Legal Consultant"],
      description:
        "Rigorous legal education focusing on critical thinking and jurisprudence.",
    },
    {
      name: "Accounting",
      code: "ACC",
      requiredSubjects: ["Mathematics", "Economics"],
      careerProspects: ["Chartered Accountant", "Auditor", "Financial Analyst"],
      description:
        "Study of financial reporting, taxation, auditing, and business law.",
    },
    {
      name: "Computer Science",
      code: "CSC",
      requiredSubjects: ["Mathematics", "Physics"],
      careerProspects: ["Software Engineer", "Data Scientist", "IT Consultant"],
      description:
        "Covers programming, algorithms, artificial intelligence, and cybersecurity.",
    },
    {
      name: "Political Science",
      code: "POL",
      requiredSubjects: ["Government", "Economics"],
      careerProspects: ["Politician", "Policy Analyst", "Public Administrator"],
      description:
        "Study of political systems, governance, international relations, and public policy.",
    },
    {
      name: "Mass Communication",
      code: "MSC",
      requiredSubjects: ["English Language", "Literature"],
      careerProspects: [
        "Journalist",
        "Public Relations Officer",
        "Media Consultant",
      ],
      description:
        "Covers journalism, broadcasting, public relations, and media ethics.",
    },
    {
      name: "Business Administration",
      code: "BUS",
      requiredSubjects: ["Mathematics", "Economics"],
      careerProspects: ["Business Manager", "Entrepreneur", "Consultant"],
      description:
        "Focuses on management, marketing, finance, and strategic planning.",
    },
    {
      name: "Economics",
      code: "ECO",
      requiredSubjects: ["Mathematics", "Economics"],
      careerProspects: ["Economist", "Financial Analyst", "Banker"],
      description: "Analyzes economic trends, policies, and financial markets.",
    },
    {
      name: "Engineering (Civil)",
      code: "CVE",
      requiredSubjects: ["Mathematics", "Physics", "Chemistry"],
      careerProspects: [
        "Civil Engineer",
        "Structural Engineer",
        "Construction Manager",
      ],
      description:
        "Design and construction of infrastructure like roads, bridges, and buildings.",
    },
    {
      name: "Engineering (Electrical/Electronics)",
      code: "EEE",
      requiredSubjects: ["Mathematics", "Physics", "Chemistry"],
      careerProspects: [
        "Electrical Engineer",
        "Power Systems Engineer",
        "Robotics Specialist",
      ],
      description:
        "Studies electrical systems, circuits, and automation technologies.",
    },
    {
      name: "Mechanical Engineering",
      code: "MEE",
      requiredSubjects: ["Mathematics", "Physics", "Chemistry"],
      careerProspects: [
        "Mechanical Engineer",
        "Automobile Engineer",
        "Aerospace Engineer",
      ],
      description:
        "Design, analysis, and maintenance of mechanical systems and machines.",
    },
    {
      name: "Architecture",
      code: "ARC",
      requiredSubjects: ["Mathematics", "Physics"],
      careerProspects: ["Architect", "Urban Planner", "Interior Designer"],
      description:
        "Study of building design, structural planning, and sustainable architecture.",
    },
    {
      name: "Pharmacy",
      code: "PHA",
      requiredSubjects: ["Biology", "Chemistry", "Physics"],
      careerProspects: [
        "Pharmacist",
        "Clinical Researcher",
        "Regulatory Affairs Specialist",
      ],
      description:
        "Focuses on drug formulation, pharmacology, and patient care.",
    },
    {
      name: "Nursing Science",
      code: "NUR",
      requiredSubjects: ["Biology", "Chemistry", "Physics"],
      careerProspects: ["Registered Nurse", "Midwife", "Health Administrator"],
      description:
        "Training in patient care, clinical procedures, and healthcare management.",
    },
    {
      name: "Biochemistry",
      code: "BCH",
      requiredSubjects: ["Biology", "Chemistry", "Physics"],
      careerProspects: [
        "Biochemist",
        "Medical Scientist",
        "Pharmaceutical Researcher",
      ],
      description: "Studies the chemical processes in living organisms.",
    },
    {
      name: "Microbiology",
      code: "MCB",
      requiredSubjects: ["Biology", "Chemistry", "Physics"],
      careerProspects: ["Microbiologist", "Lab Scientist", "Epidemiologist"],
      description:
        "Explores microorganisms and their impact on health and the environment.",
    },
    {
      name: "Sociology",
      code: "SOC",
      requiredSubjects: ["Government", "Economics"],
      careerProspects: [
        "Sociologist",
        "Social Worker",
        "Human Resource Specialist",
      ],
      description:
        "Study of human societies, social behavior, and cultural dynamics.",
    },
    {
      name: "Psychology",
      code: "PSY",
      requiredSubjects: ["Biology", "Government"],
      careerProspects: [
        "Clinical Psychologist",
        "Counselor",
        "Behavioral Analyst",
      ],
      description:
        "Examines human behavior, mental health, and cognitive processes.",
    },
    {
      name: "Public Administration",
      code: "PAD",
      requiredSubjects: ["Government", "Economics"],
      careerProspects: [
        "Public Administrator",
        "Government Official",
        "NGO Manager",
      ],
      description:
        "Focuses on governance, policy-making, and administrative processes.",
    },
    {
      name: "International Relations",
      code: "INT",
      requiredSubjects: ["Government", "Economics"],
      careerProspects: [
        "Diplomat",
        "Foreign Service Officer",
        "International Consultant",
      ],
      description:
        "Explores global politics, diplomacy, and international policies.",
    },
    {
      name: "Estate Management",
      code: "EST",
      requiredSubjects: ["Mathematics", "Economics"],
      careerProspects: [
        "Real Estate Manager",
        "Property Developer",
        "Urban Planner",
      ],
      description:
        "Studies property valuation, investment, and land use planning.",
    },
    {
      name: "Agricultural Science",
      code: "AGR",
      requiredSubjects: ["Biology", "Chemistry"],
      careerProspects: [
        "Agricultural Scientist",
        "Farm Manager",
        "Agro-Entrepreneur",
      ],
      description:
        "Examines crop production, animal science, and agribusiness.",
    },
    {
      name: "Theatre Arts",
      code: "THA",
      requiredSubjects: ["Literature", "Government"],
      careerProspects: ["Actor", "Director", "Screenwriter"],
      description: "Studies dramatic arts, performance, and media production.",
    },
  ];

  const getGradeFromScore = (score: number): string => {
    if (score >= 280 && score < 400) return "A";
    if (score >= 240) return "B";
    if (score >= 200) return "C";
    if (score >= 180) return "D";
    return "F";
  };

  const generateRecommendations = () => {
    const score = parseInt(utmeScore);
    const grade = getGradeFromScore(score);

    const recommendations: Recommendation[] = courseCatalog
      .map((course) => {
        // Find matched subjects
        const matchedSubjects = course.requiredSubjects.filter((req) =>
          selectedSubjects.includes(req)
        );

        // Only proceed if at least one subject matches
        if (matchedSubjects.length === 0) return null;

        let matchScore = 0;

        // Score based on subject matching
        matchScore += matchedSubjects.length * 30;

        // Score based on grade
        switch (grade) {
          case "A":
            matchScore += 40;
            break;
          case "B":
            matchScore += 30;
            break;
          case "C":
            matchScore += 20;
            break;
          case "D":
            matchScore += 10;
            break;
        }

        // Generate explanation
        const explanation = `Match based on ${matchedSubjects.length} relevant subjects and ${grade} grade.`;

        return {
          course,
          matchScore,
          matchedSubjects,
          explanation,
        };
      })
      .filter((rec): rec is Recommendation => rec !== null) // Remove null recommendations
      .sort((a, b) => b.matchScore - a.matchScore);

    setRecommendations(recommendations);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            UTME Course Recommendation
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Select Subjects (English + 3 Others)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {allSubjects.map((subject) =>
                  subject.name === "English" ? (
                    <label
                      key={subject.name}
                      className="inline-flex items-center opacity-50"
                    >
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="form-checkbox"
                      />
                      <span className="ml-2">{subject.name} (Compulsory)</span>
                    </label>
                  ) : (
                    <label
                      key={subject.name}
                      className="inline-flex items-center"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSubjects.includes(subject.name)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            if (selectedSubjects.length < 4) {
                              setSelectedSubjects([
                                ...selectedSubjects,
                                subject.name,
                              ]);
                            }
                          } else {
                            setSelectedSubjects(
                              selectedSubjects.filter((s) => s !== subject.name)
                            );
                          }
                        }}
                        disabled={
                          selectedSubjects.length >= 4 &&
                          !selectedSubjects.includes(subject.name)
                        }
                        className="form-checkbox"
                      />
                      <span className="ml-2">{subject.name}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                UTME Total Score
              </label>
              <input
                type="number"
                value={utmeScore}
                onChange={(e) => setUtmeScore(e.target.value)}
                min="0"
                max="400"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your UTME total score"
              />
            </div>

            <button
              onClick={generateRecommendations}
              disabled={selectedSubjects.length !== 4 || !utmeScore}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              Get Recommendations
            </button>
          </div>

          {recommendations.length > 0 && (
            <div className="mt-8 space-y-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Recommended Courses
              </h2>
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <GraduationCap className="text-blue-600" size={32} />
                      <h3 className="text-xl font-semibold text-blue-700">
                        {rec.course.name}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="text-green-600" size={24} />
                      <span className="font-bold text-green-700">
                        Match Score: {rec.matchScore}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center space-x-4 mb-3">
                        <Book className="text-blue-600" size={24} />
                        <h4 className="font-semibold text-gray-700">
                          Required Subjects
                        </h4>
                      </div>
                      <ul className="list-disc list-inside text-gray-600">
                        <li className={"font-bold text-green-600"}>
                          Use Of English
                        </li>
                        {rec.course.requiredSubjects.map((subject, idx) => (
                          <li
                            key={idx}
                            className={
                              rec.matchedSubjects.includes(subject)
                                ? "font-bold text-green-600"
                                : ""
                            }
                          >
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center space-x-4 mb-3">
                        <Target className="text-blue-600" size={24} />
                        <h4 className="font-semibold text-gray-700">
                          Career Prospects
                        </h4>
                      </div>
                      <ul className="list-disc list-inside text-gray-600">
                        {rec.course.careerProspects.map((prospect, idx) => (
                          <li key={idx}>{prospect}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center space-x-4">
                    <AlertTriangle className="text-yellow-600" size={24} />
                    <p className="text-gray-700 italic">{rec.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UTMERecommendationPage;
