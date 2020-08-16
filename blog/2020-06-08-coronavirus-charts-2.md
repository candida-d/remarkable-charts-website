---
id: coronavirus-charts-2
title: "Coronavirus Charts #2"
author: John Walley
author_title: CEO @ Mulberry House Software
author_url: https://www.linkedin.com/in/johnwalley
author_image_url: /img/profile-pic.jpg
tags: [coronavirus, development, charts]
---

The daily UK government Coronavirus briefings usually feature a set of slides. These slides and the datasets used to produce them are made [available to the public](https://www.gov.uk/government/collections/slides-and-datasets-to-accompany-coronavirus-press-conferences).

This will be our second look at reproducing a chart from the slides with Remarkable Charts. The chart shows the change in tranport use for motor vehicles in Great Britain. It's one of five charts on one slide showing various forms of transport. Thefore the original is quite small and makes for a pixelated screenshot.

![](/img/blog/change-in-transport-use.png)

## Annotations

We're currently working on adding annotations to our charts and this is a great example. Immediately we can see where lockdown started, as well as the start of the easing of restrictions (step 1 and step 2). We can also see additional infromation conveyed by the grey bands behind the chart. These represent weekends and we can see traffic dropping during some weekends.

Here is our reproduction.

![](/img/blog/remarkable-chart-change-in-tranport-use-before.png)

<!-- truncate-->

What jumps out at us, and what can we improve, with our annotations?

### Key events

The vertical lines showing us the key events stand-out more in the original. Depending on what you are aiming to get across it could be helpful to emphasise these.

### Weekend markers

In our chart we've used what we're calling our 'bounds' annotation. It lets us highlight a region of the chart when we select start and end points. Here we've used the Friday and Sunday of the week. You can see these days highlighted in the image below.

![](/img/blog/zoomed-bounds-annotation.png)

This isn't right. It suggests Fridays are included. We could go from Saturday to Sunday.

![](/img/blog/zoomed-bounds-annotation-2.png)

This is more accurate but it is still misleading. Now the annotation is only one day wide. When looked at in the whole it clearly only takes up 1/7 of the chart whereas we'd expect something representing weekends to take up 2/7 of the chart.

It's hard to see but in the original chart the weekend region starts and ends halfway between data points. In our chart this would look like this.

![](/img/blog/zoomed-bounds-annotation-3.png)

This feels like a sensible approach in this case. Is it always the best approach to take? Check back in a few days to see how we've tackled this problem.
