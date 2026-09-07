@@ -7,5 +7,24 @@ title: Home
  <a href="mailto:zhoushy93@mail2.sysu.edu.cn">zhoushy93@mail2.sysu.edu.cn</a>
</p>
<section><h2>About</h2><p>I am a sophomore student at <strong>Sun Yat-sen University</strong>. My research interests include computer vision, robotics, machine learning, and embodied AI.</p><p>My research aims to develop intelligent robots that can seamlessly integrate into human society, assist people in meaningful ways, and ultimately enhance human freedom and quality of life.</p></section>
<section><h2>News</h2><div class="news-item"><span>2026.09</span> Welcome to my new personal website.</div><div class="news-item"><span>2026.08</span> Our paper has been accepted to a major conference.</div><div class="news-item"><span>2026.06</span> Started my Ph.D. at Your University.</div></section>
<section>
  <h2>Achievements</h2>

  <div class="news-item">
    <span>2025</span> Ranked in the top 11.17% nationwide in the 40th CSP test.
  </div>

  <div class="news-item">
    <span>2025</span> Won a Silver Medal in the Sun Yat-sen University Programming Contest.
  </div>

  <div class="news-item">
    <span>2023</span> Received a Second Prize at the provincial level in the NOI Spring Contest.
  </div>

  <div class="news-item">
    <span>2022</span> Ranked in the top 25% nationwide in the NOI Online Test.
  </div>
</section>

<section><div class="section-heading"><h2>Publications</h2><a href="/publications/">View all →</a></div>{% for paper in site.data.publications limit:4 %}{% include publication.html paper=paper %}{% endfor %}</section>
