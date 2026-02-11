'use client'

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mayank Yadav",
    "alternateName": "wolgwang",
    "url": "https://portfolio-wolgwang.vercel.app",
    "image": "https://portfolio-wolgwang.vercel.app/og-image.png",
    "sameAs": [
      "https://github.com/wolgwang1729",
      "https://linkedin.com/in/mayankyadav8",
      "https://x.com/wolgwang1729",
      "https://instagram.com/wolgwang1729",
      "https://codeforces.com/profile/wolgwang",
      "https://stackoverflow.com/users/14219194/wolgwang"
    ],
    "jobTitle": "Computer Science Student & AI/ML Researcher",
    "worksFor": {
      "@type": "Organization",
      "name": "Delhi Technological University"
    },
    "description": "Computer Science student at DTU specializing in Systems Engineering and Computer Vision. Research intern at ISRO working on Vision-Based Pose Estimation.",
    "knowsAbout": [
      "Computer Science",
      "Machine Learning",
      "Computer Vision",
      "Systems Engineering",
      "Mathematics",
      "Competitive Programming"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
