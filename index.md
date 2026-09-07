---
layout: default
title: Home
---
<section class="hero"><img class="avatar" src="/assets/img/avatar.jpg" alt="Your Name"><div><h1>Shiyao Zhou|周诗耀</h1><p class="subtitle">Sophomore Student at Sun Yat-sen University</p><p class="links">
  ```html
<p class="links">
  <a href="mailto:you@example.com">you@example.com</a>
</p>
```
<a href="https://github.com/zhoushy93.github.io">GitHub</a><a href="/files/cv.pdf">CV</a></p></div></section>
<section><h2>About</h2><p>I am a sophomore student at <strong>Sun Yat-sen University</strong>. My research interests include computer vision, robotics, machine learning, and embodied AI.</p><p>My research aims to develop intelligent robots that can seamlessly integrate into human society, assist people in meaningful ways, and ultimately enhance human freedom and quality of life.</p></section>
<section><h2>News</h2><div class="news-item"><span>2026.09</span> Welcome to my new personal website.</div><div class="news-item"><span>2026.08</span> Our paper has been accepted to a major conference.</div><div class="news-item"><span>2026.06</span> Started my Ph.D. at Your University.</div></section>
<section><div class="section-heading"><h2>Publications</h2><a href="/publications/">View all →</a></div>{% for paper in site.data.publications limit:4 %}{% include publication.html paper=paper %}{% endfor %}</section>
