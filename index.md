---

layout: default
title: Home
-----------

<section class="hero">
  <img class="avatar" src="/assets/img/avatar.jpg" alt="Shiyao Zhou">
  <div>
    <h1>Shiyao Zhou | 周诗耀</h1>
    <p class="subtitle">Sophomore Student at Sun Yat-sen University</p>
    <p class="links">
      <a href="mailto:zhoushy93@mail2.sysu.edu.cn">zhoushy93@mail2.sysu.edu.cn</a>
    </p>
  </div>
</section>

<section class="content-section">
  <div class="section-label">
    <h2>About</h2>
  </div>

  <div class="section-content">
    <p>
      I am a sophomore student at <strong>Sun Yat-sen University</strong>.
      My research interests include computer vision, robotics, machine learning,
      and embodied AI.
    </p>

```
<p>
  My research aims to develop intelligent robots that can seamlessly
  integrate into human society, assist people in meaningful ways, and
  ultimately enhance human freedom and quality of life.
</p>
```

  </div>
</section>

<section class="content-section">
  <div class="section-label">
    <h2>Achievements</h2>
  </div>

  <div class="section-content">
    <div class="news-item">
      <span>2025</span>
      <div>Ranked in the top 11.17% nationwide in the 40th CSP test.</div>
    </div>

```
<div class="news-item">
  <span>2025</span>
  <div>Won a Silver Medal in the Sun Yat-sen University Programming Contest.</div>
</div>

<div class="news-item">
  <span>2023</span>
  <div>Received a Second Prize at the provincial level in the NOI Spring Contest.</div>
</div>

<div class="news-item">
  <span>2022</span>
  <div>Ranked in the top 25% nationwide in the NOI Online Test.</div>
</div>
```

  </div>
</section>

<section class="content-section">
  <div class="section-label">
    <h2>Publications</h2>
  </div>

  <div class="section-content">
    <div class="section-heading publication-heading">
      <a href="/publications/">View all →</a>
    </div>

```
{% for paper in site.data.publications limit:4 %}
  {% include publication.html paper=paper %}
{% endfor %}
```

  </div>
</section>
