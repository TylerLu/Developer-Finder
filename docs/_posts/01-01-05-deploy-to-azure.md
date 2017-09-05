---
title: Deploy Contoso Insurance
description:
category: SETUP
---

{% include header.md %}

1. Check to ensure that the build is passing VSTS Build
1. Fork this repository to your GitHub account
1. Click the Deploy to Azure Button below

   [![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure-Samples%2FContosoInsurance%2Fmaster%2Fazuredeploy.json)

1. Fill in the values in the deployment page.
   ![]({{site.baseurl}}/img/deployment/azure-custom-deployment.png)

| Property | Description |
|---|---|
| Resource group | To reduce failures, please use a new Resource Group. |
| Sitename | Use the default value. The first 6 characters of the Resource Group Id will be appended to the site name to avoid name duplication errors. |
| SQLAdministratorLoginPassword | Use a strong password. |
| SourceCodeRepositoryURL | Use the repository you just forked. |
| SourceCodeManualIntegration | If deploying from the main repo, use true for ManualIntegration, otherwise use false. This parameter controls whether or not a webhook is created when you deploy. If you don't have permissions to the repo and it tries to create a webhook (i.e., ManualIntegration is false, then deployment will fail). |
| VisionServiceSubscriptionKey | Use one of the Computer Vision Services keys you just created. |
| MSAClientId | Microsoft Application ID (see [Setup Authentication Providers]({{ site.baseurl }}/setup/2001/01/02/setup-auth-providers.html) |
| MSAClientSecret | Client Secret (Application Secret) from the Application above |
| AADClientId | Azure Active Directory Client ID (see [Setup Authentication Providers]({{ site.baseurl }}/setup/2001/01/02/setup-auth-providers.html)) |
| AADClientSecret | Client Secret from the Azure Active Directory Application above |
| AADIssuerUrl | Issuer Url of the Azure Active Directory Application above |
| ClaimsAdjusterEmail | Use an Office 365 Organization Account email address for this setting value. |
{: .table .table-sm .table-striped}

> **Note:** There are a few requirements for **ClaimsAdjusterEmail** 
> 
> * This account must be a user in the Azure Active Directory associated with the Azure Subscription where you deploy the sample.  
> * This account must also have an Office 365 license granted to it and an Exchange mailbox created so it can send and receive emails.  
> * You will log into the web application with this account to play the role of the claims adjuster.
{: .blockquote .alert-warning}

1. Click **OK**.
1. Click **Review Legal terms**, then click **Purchase**.
1. Click **Create**.

> **Notes:** 
>- The deployment creates a Basic (B1) hosting plan in Azure where all of the components are deployed.
>- The deployment process takes about 8 minutes.
>- When the deployment steps complete, you will see the following Azure components in the Resource Group.
> ![]({{site.baseurl}}/img/deployment/azure-components.png)
{: .blockquote .alert-info}
