import { hooks } from "cv-pdf-gen";
import type { CVData } from "cv-pdf-gen";

interface CVDataWithFootnote extends CVData {
  footnote?: string;
}

export default hooks<unknown, CVDataWithFootnote>("soft_skills", {
  after: ({ data }) =>
    data.footnote ? (
      <p style={{ fontSize: "7pt", color: "#888", marginTop: "8pt", fontStyle: "italic" }}>
        {data.footnote}
      </p>
    ) : null,
});
