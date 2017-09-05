---
title: Manual GitHub Authentication
description: 
category: SETUP
optional: true
---

{% include header.md %}

## Generate Token

1. Open [GitHub Personal Access Token](https://github.com/settings/tokens) in your web browser.
1. Sign into your GitHub account where you forked this repository.
1. Click **Generate Token**
1. Enter a value in the **Token description** text box
1. Select all the **check boxes**
    ![image of GitHub Personal Access Tokens]({{site.baseurl}}/img/deployment/github-new-personal-access-token.png)
1. Click **Generate token**
1. Copy the token

## Add the GitHub Token to Azure in the Azure Resource Explorer

1. Open [Azure Resource Browser](https://resources.azure.com/providers/Microsoft.Web/sourcecontrols/GitHub) in your web browser.
1. Log in with your Azure account.
1. Selected the correct Azure subscription.
1. Select **Read/Write** mode.
1. Click **Edit**.
1. Paste the token into the **token parameter**.
    ![]({{site.baseurl}}/img/deployment/update-github-token-in-azure-resource-explorer.png)
1. Click **PUT** 