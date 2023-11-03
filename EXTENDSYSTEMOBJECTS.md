# Extending System Objects in Business Manager

This document provides instructions on how to extend system objects in Business Manager. Extending system objects allows you to add custom attributes and functionalities to standard objects provided by the platform.

## Table of Contents

-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)
-   [Create a Custom Attribute](#create-a-custom-attribute)
-   [Create a New Attribute Group (Optional)](#create-a-new-attribute-group)
-   [Add your new created Custom Attribute to your Group (Optional)](#add-your-new-created-custom-attribute-to-your-group)
-   [Best Practices](#best-practices)
-   [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following:

-   Access to the Salesforce Commerce Cloud Business Manager (BM).
-   Basic understanding of JavaScript and Salesforce Commerce Cloud development.

## Getting Started

To start extending system objects, follow these steps:

1. Log in to the Salesforce Commerce Cloud Business Manager.

2. Navigate to the 'Administration' section.

3. Go to the 'Site Development' -> 'System Object Types'.

4. A list of System Object Types will be displayed on the page. Each Object type has an **ID**, a **Description**, **Groups** and **Attributes**.

## Create a Custom Attribute

-   Click on the System Object you want to extend.
-   Select **Attribute Definitions** tab.
-   Click the **New** button located on the bottom-right side of the page.
-   A new page will open named **Object Type 'Catalog Category' - Attribute Definition Details**.
-   Select preferred language or leave **Default**.
-   Complete the mandatory **ID** field.
-   Choose a **Value Type** depending on your needs. For more information click here [Supported Data Types ](https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/b2c-working-with-scripts.html#supported-data-types).
-   Check **Localizable** then click **Apply**. More options will be displayed.
-   After your configuration is done click **Apply** to save your changes.

## Create a New Attribute Group (Optional)

-   Select **Attribute Grouping** tab.
-   In the **New Attribute Group** box, type an **ID** and a **Name** then click **Add**.
-   Now the new group that you created should be displayed on the page.

## Add your new created Custom Attribute to your Group (Optional)

-   On the right side of your Group Description there is a **Number** that displayes how many
    attributes have been selected for this particular Attribute Group.
-   To add an attribute click **Edit**.
-   Enter an _ID_ in the **Assign Attribute Definition** or click the **...** button to manualy search for your Attribute.
-   After you selected one, click **Add** and your attribute should be displayed on the page.

## Best Practices

-   Use meaningful names for custom attributes to enhance code readability.

-   Document your customizations for future reference.

-   Test thoroughly in a staging environment before deploying to production.

## Troubleshooting

If you encounter any issues while extending system objects, refer to the [Salesforce Commerce Cloud documentation](https://help.salesforce.com/s/articleView?id=cc.b2c_getting_started.htm&type=5).
