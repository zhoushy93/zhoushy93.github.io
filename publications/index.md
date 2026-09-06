---
layout: default
title: Publications
---
<h1>Publications</h1>{% for paper in site.data.publications %}{% include publication.html paper=paper %}{% endfor %}
