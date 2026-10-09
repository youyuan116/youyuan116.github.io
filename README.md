# Youyuan Zhang (张友媛) — Academic Homepage

A **ready-to-deploy bilingual academic homepage**, based on the open-source [Academic Pages](https://github.com/academicpages/academicpages.github.io) template.

## What is included

- `index.html`: About, Education, the fully expanded Tsinghua/Sony/undergraduate research experience, News, publications, and named awards.
- `publications/`: accepted conference papers plus clearly marked submissions.
- `research/`: research interests and Tsinghua, Sony, and undergraduate project experience.
- `awards/`: scholarships and selected honors.
- `cv/` and `files/Youyuan_Zhang_CV_Public.pdf`: view/download **phone-redacted** public CV.
- `assets/css/style.css` and `assets/js/main.js`: style and functional English/Chinese switch.
- `assets/images/`: your original uncropped photo including the mountain and lake background (resized proportionally), figures from your own manuscripts, including SAIL Figure 1 and ScopeEdit Figure 1 (also in the arXiv preprint).

## View locally

1. Unzip the archive.
2. Double-click `index.html`. The menu and language toggle work without a server.  
   Optional: `python -m http.server 8000` and open `http://localhost:8000`.

## Deploy free using GitHub Pages

1. Sign in to GitHub and create a **public** repository named `<your-username>.github.io`.
2. Upload **the unzipped files** to the root of the repository (not the ZIP file itself). This should include `index.html`, `assets/`, `publications/`, etc.
3. In repository **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. After GitHub builds the site, visit `https://<your-username>.github.io/`.

For a subpath repository `homepage`, it will also work at `https://<your-username>.github.io/homepage/` because all stylesheet, script, image and navigation URLs are relative.

## Things to update before making it public

- Your portrait is installed as `assets/images/profile-photo.jpg` as a proportional downsize of the original complete photograph (no crop). The original placeholder SVG is retained only as an unused icon asset.
- Add your **actual** GitHub, Google Scholar, or ORCID links if desired; they are intentionally omitted rather than invented.
- Review all publications and dates; acceptance, submission, and revision statuses must be kept accurate as papers evolve.
- The public CV has the **phone number physically removed** from its PDF text. You can replace it with your later CV as desired.
- SAIL is now illustrated by **Figure 1 on PDF page 1** of the uploaded ICLR 2027 manuscript (`sail-figure1.jpg`). ScopeEdit uses **Figure 1 on PDF page 2**, verified against [arXiv:2607.01978](https://arxiv.org/pdf/2607.01978) (`scopeedit-figure1.png`), extracted from the locally available author manuscript with the same figure.
- **Double-blind caution:** The uploaded SAIL manuscript says "Under review as a conference paper at ICLR 2027" and "Anonymous authors". Publishing its title and figure on a personally identified website can compromise anonymity; do not deploy this version publicly without reviewing the relevant policy.
- No private/unreleased manuscript PDFs are uploaded to the public site. All existing paper links refer to public preprints, proceedings, and public repositories.

## Website appearance and attribution

This package is a self-contained static HTML/CSS implementation reproducing the general **layout and navigation style**, not a copy of the original website's entire Jekyll source tree. The source reference uses Academic Pages, which is released under an MIT-based license. The footer credits the original template provider directly: [Academic Pages](https://github.com/academicpages/academicpages.github.io). This static build reproduces the general layout, while a separate Jekyll overlay is included for the theme-based deployment approach.

## Contact

The public site displays only `youyuanzhang@outlook.com`, not the phone number from the original CV.

## v5 editorial changes

- TPAMI paper status is **IEEE TPAMI — Submission** on all pages and in the public PDF CV.
- The web CV page and sidebar link use the short label **CV**.
- Research & Industry Experience entries are one bilingual technology-stack sentence each; no benchmark numbers or sample counts appear in those summaries.
- The footer attributes the upstream original template to **Academic Pages** only, rather than a demo site's author.
