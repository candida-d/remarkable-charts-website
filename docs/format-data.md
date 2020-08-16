---
id: format-data
title: Formatting data
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Remarkable Charts will use any formatting applied to the data in Excel.

Here are some common examples.

## Show or hide the thousands separator

[Microsoft documentation](https://support.microsoft.com/en-us/office/show-or-hide-the-thousands-separator-b9f8aee0-ef50-42e5-8fd7-6e3ab1493876)

1. [Select the cells](https://support.microsoft.com/en-us/office/select-cell-contents-in-excel-23f64223-2b6b-453a-8688-248355f10fa9) that you want to format.
1. On the **Home** tab, click the **Dialog Box Launcher** next to **Number**.

   <img alt="Select data" src={useBaseUrl('img/custom_format_dialog.jpg')}/>

1. On the **Number** tab, in the **Category** list, click **Number**.
1. To display or hide the thousands separator, select or clear the **Use 1000 Separator (,)** check box.

:::tip Tip
To quickly display the thousands separator, you can click **Comma Style** <img alt="Select data" src={useBaseUrl('img/comma-button-image.gif')}/> in the **Number** group on the **Home** tab.
:::

## Format a date the way you want

[Microsoft documentation](https://support.microsoft.com/en-us/office/format-a-date-the-way-you-want-8e10019e-d5d8-47a1-ba95-db95123d273e#ID0EAACAAA=Windows)

When you enter some text into a cell such as **"2/2"**, Excel assumes that this is a date and formats it according to the default date setting in Control Panel. Excel might format it as **"2-Feb"**. If you change your date setting in Control Panel, the default date format in Excel will change accordingly. If you don’t like the default date format, you can choose another date format in Excel, such as **"February 2, 2012"** or **"2/2/12"**. You can also create your own custom format in Excel desktop.

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
