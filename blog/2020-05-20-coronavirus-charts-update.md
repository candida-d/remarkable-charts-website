---
id: coronavirus-charts-update
title: Coronavirus Charts Update
author: John Walley
author_title: CEO @ Mulberry House Software
author_url: https://github.com/johnwalley
author_image_url: /img/profile-pic.jpg
tags: [coronavirus, development, charts]
---

Last time we looked at [recreating a chart](/blog/coronavirus-charts) from the UK's daily coronavirus briefings. We identified a few issues with our recreation and now we can look at if we've been able to address them.

As a reminder here is the original chart.

![](/img/blog/cobr-chart-1.png)

<!-- truncate-->

Here is the first recreation.

![](/img/blog/remarkable-chart-1.png)

And here is the latest version.

![](/img/blog/remarkable-chart-1-update.png)

We identified these issues:

- Text is too thin, light and small
- Too few horizontal grid lines making it hard to pick out specific values
- No way of telling Driving and Walking lines apart

First up, we've made the axis label easier to read. It is bolder and bigger!

We've tweaked the algorithm which chooses the gridlines to give us more lines. This change also gives us a grid line above the data points so we can more easily estimate the peak of the lines.

Finally, we've colour-coded the line labels (as well as increasing their size). This does create a new issue which is if the text is still readable when using colours. In particular, the yellow could be challenging. Sounds like another good piece of feedback address in the product!
