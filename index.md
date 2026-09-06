---
layout: default
title: Home
---
<section class="hero"><img class="avatar" src="/assets/img/avatar.jpg" alt="Your Name"><div><h1>Your Name</h1><p class="subtitle">Ph.D. Student / Researcher at Your University</p><p class="links"><a href="mailto:you@example.com">Email</a><a href="https://github.com/yourusername">GitHub</a><a href="#">Google Scholar</a><a href="/files/cv.pdf">CV</a></p></div></section>
<section><h2>About</h2><p>I am a researcher at <strong>Your University</strong>. My research interests include computer vision, robotics, machine learning, and embodied AI.</p><p>This homepage collects my research, publications, projects, and updates.</p></section>
<section><h2>News</h2><div class="news-item"><span>2026.09</span> Welcome to my new personal website.</div><div class="news-item"><span>2026.08</span> Our paper has been accepted to a major conference.</div><div class="news-item"><span>2026.06</span> Started my Ph.D. at Your University.</div></section>
<section><div class="section-heading"><h2>Publications</h2><a href="/publications/">View all →</a></div>{% for paper in site.data.publications limit:4 %}{% include publication.html paper=paper %}{% endfor %}</section>
