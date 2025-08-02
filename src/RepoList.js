import React from "react";

const repositories = [
  {
    name: "1. Roadmap for React JS",
    user: "apni-coding",
    repo: "reactjstutorial",
    branch: "main",
    notesUrl:
      "https://d1m14n9wult4fq.cloudfront.net/partnerProfile/projectDetails/5551764/intro_to_react.pdf",
  },
  {
    name: "2. Introduction to React JS",
    user: "apni-coding",
    repo: "reactjstutorial",
    branch: null,
    notesUrl:
      "https://d1m14n9wult4fq.cloudfront.net/partnerProfile/projectDetails/5551764/intro_to_react.pdf",
  },
  {
    name: "3. SPA vs MPA",
    user: "apni-coding",
    repo: "reactjstutorial",
    branch: null,
    notesUrl:
      "https://d1m14n9wult4fq.cloudfront.net/partnerProfile/projectDetails/5551764/intro_to_react.pdf",
  },
  {
    name: "4. Declarative vs Imperative",
    user: "apni-coding",
    repo: "reactjstutorial",
    branch: null,
    notesUrl:
      "https://d1m14n9wult4fq.cloudfront.net/partnerProfile/projectDetails/5551764/intro_to_react.pdf",
  },
  {
    name: "5. Basic of VS Code",
    user: "apni-coding",
    repo: "reactjstutorial",
    branch: null,
    notesUrl:
      "https://d1m14n9wult4fq.cloudfront.net/partnerProfile/projectDetails/5551764/intro_to_react.pdf",
  },
  {
    name: "2. Creating an element in js",
    user: "apni-coding",
    repo: "reactjstutorial",
    branch: "create-element-in-javascript",
    notesUrl:
      "https://d1m14n9wult4fq.cloudfront.net/partnerProfile/projectDetails/5551764/intro_to_react.pdf",
  },
];

const RepoList = ({ setIsRepoShow }) => {
  const handleDownloadZip = (user, repo, branch) => {
    const url = `https://github.com/${user}/${repo}/archive/refs/heads/${branch}.zip`;
    triggerDownload(url, `${repo}-${branch}.zip`);
  };

  const handleDownloadNotes = (notesUrl, title) => {
    if (!notesUrl) {
      alert(`No PDF notes available for: ${title}`);
      return;
    }
    triggerDownload(notesUrl);
  };

  const triggerDownload = (url, filename = "notes.pdf") => {
    // const a = document.createElement("a");
    // a.href = url;
    // if (filename) a.download = filename;
    // a.style.display = "none";
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    window.open(url, "_blank");
  };

  return (
    <section className="repo‑wrapper">
      <h1 className="repo‑title">📦 Class-wise Code & Notes Downloader</h1>

      <ul className="repo‑list">
        {repositories.map((r, index) => (
          <li key={`${r.repo}-${r.branch}`} className="repo‑item">
            <div className="repo‑info">
              <p className="repo‑name">{r.name}</p>

              {r.branch && (
                <a
                  className="repo‑link"
                  href={`https://github.com/${r.user}/${r.repo}/tree/${r.branch}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code on GitHub →
                </a>
              )}
            </div>

            <div className="repo‑actions">
              {r.branch && (
                <button
                  className="download‑btn"
                  onClick={() => handleDownloadZip(r.user, r.repo, r.branch)}
                >
                  ⬇️ Download Code ZIP
                </button>
              )}

              <button
                className="download‑btn"
                onClick={() => handleDownloadNotes(r.notesUrl, r.name)}
              >
                📄 Download PDF Notes
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="center">
        <button className="home-cta" onClick={() => setIsRepoShow(true)}>
          Go to React Curriculum
        </button>
      </div>
    </section>
  );
};

export default RepoList;
