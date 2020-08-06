---
id: format-data
title: Formatting data
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Remarkable Charts will use any formatting applied to the data in Excel.

Here are some examples.

## Add comma separator

Coming soon.

## Formatting dates

Coming soon.

## Millions and billions

This requires you to [create a custom mumber format](https://support.office.com/en-us/article/create-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4).

:::important Compatibility
You **can't** create custom formats in Excel for the web but if you have the Excel desktop application, you can click the **Open in Excel** button to open the workbook and create them.
:::

Let's work with this data.

```
112145
319320
```

1. Select the numeric data
1. On the **Home** tab, in the **Number** group, click the Dialog launcher

   <img alt="Select data" src={useBaseUrl('img/custom_format_dialog.jpg')}/>

1. Select **Custom**
1. In the Type list, type a new format in the box.

```
#,##0,
```

Your numbers will now show in units of thousands.

```
112
319
```

You can indicate a number is measured in thousands by adding to the number syntax.

```
#,##0,"k"
```

Your numbers will now show as

```
112k
319k
```

Note that you must put double quotes around the letter(s) you use.
