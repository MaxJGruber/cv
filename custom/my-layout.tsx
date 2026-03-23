import type { CustomCVProps } from "cv-pdf-gen";

export default function MyLayoutCV({ content, photoUrl }: CustomCVProps) {
  const { name, title, summary, contact } = content.personal;
  const { email, phone, location } = contact;
  const experience = content.experience;

  return (
    <>
      <header className="my-layout-header">
        {photoUrl && <img className="my-layout-photo" src={photoUrl} alt={name} />}
        <div className="my-layout-header-text">
          <h1 className="my-layout-name">{name}</h1>
          <p className="my-layout-title">{title}</p>
          <div className="my-layout-contact">
            <span>{email}</span>
            <span>{phone}</span>
            <span>{location}</span>
          </div>
        </div>
      </header>

      {summary && <p className="my-layout-summary">{summary}</p>}

      {experience?.length > 0 && (
        <section className="my-layout-section">
          <h2 className="my-layout-section-title">Experience</h2>
          {experience.map((job, i) => (
            <div key={i} className="my-layout-job">
              <div className="my-layout-job-header">
                <strong>{job.role} — {job.company}</strong>
                <span className="my-layout-meta">{job.dates} · {job.location}</span>
              </div>
              <ul className="my-layout-list">
                {job.items?.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
