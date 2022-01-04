---
layout: publications
title: "Publications"
excerpt: "Publications."
sitemap: false
permalink: /publications/
---



### Publications

{% for publi in site.data.publications %}

  <b>{{ publi.ID }}. {{ publi.title }}</b><br />
  <em>{{ publi.authors }} </em><br />
  <a href="{{ publi.link.url }}">{{ publi.link.display }}: {{ publi.link.doi }}</a>

{% endfor %}


----
### Conferences/ Presentations 

{% for conf in site.data.conferences %}

  <b>{{ conf.ID }}. {{ conf.title }}</b><br />
  <em>{{ conf.authors }} </em><br />
  <a href="{{ conf.link.url }}">{{ conf.link.display }}</a>

{% endfor %}

----

### Book Chapters, etc. 

{% for chap in site.data.bookchapters %}

  <b>{{ chap.ID }}. {{ chap.title }}</b><br />
  <em>{{ chap.authors }} </em><br />
  <a href="{{ chap.link.url }}">{{ chap.link.display }}</a>

{% endfor %}

----

### Google Scholar Link
[Google Scholar](https://scholar.google.com/citations?user=m9R3lLMAAAAJ&hl=en)