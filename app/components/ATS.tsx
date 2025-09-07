interface Suggestions {
  type: "good" | "improve";
  tip: string;
}

interface ATSProp {
  score: number;
  suggestions: Suggestions[];
}

const ATS = ({ score, suggestions }: ATSProp) => {
  const gradientClass =
    score > 69
      ? "from-green-100"
      : score > 49
        ? "form-yellow-100"
        : "from-red-100";

  const iconSrc =
    score > 69
      ? "/icons/ats-good.svg"
      : score > 49
        ? "icons/ats-warning.svg"
        : "icons/ats-bad.svg";
  const subtitle =
    score > 69 ? "Great Job!" : score > 49 ? "Good Start" : "Needs Improvement";

  return (
    <div className={`bg-gradient-to-b ${gradientClass}`}>
      {/*top section*/}
      <div className="flex items-center gap-4 mb-6">
        <img src={iconSrc} alt="ATS Score Icon" className="w-12 h-12" />
        <div>
          <h2 className="text-2xl font-bold">ATS Score - {score}/100</h2>
        </div>
      </div>
      {/*description section*/}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2"> {subtitle}</h3>
        <p className="text-gray-600 mb-4">
          This score represents how well your resume is likely to perform in
          Applicant Tracking System
        </p>
      </div>
      {/*suggestions section*/}
      <div className="space-y-3">
        {suggestions.map((suggestion, i) => (
          <div key={i} className="flex items-start gap-3">
            <img
              src={
                suggestion.type == "good"
                  ? "/icons/check.svg"
                  : "/icons/warning.svg"
              }
              alt={suggestion.type == "good" ? "Check" : "Warning"}
              className="w-5 h-5 mt-1"
            />
            <p
              className={
                suggestion.type === "good" ? "text-green-700" : "text-amber-700"
              }
              key={i}
            >
              {suggestion.tip}
            </p>
          </div>
        ))}
      </div>
      {/*closing encouragement*/}
      <p className="text-gray-700 italic mt-2">
        Keep refining your resume to improve your chance of getting past ATS
        filters and into the hands of recruiters
      </p>
    </div>
  );
};

export default ATS;
