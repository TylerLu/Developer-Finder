---
title: Deploy the Azure Components
description: 
category: SETUP
---

{% include header.md %}

1. In your web browser, navigate to your fork of this repository.

2. Click the **Deploy to Azure** button below:

   [![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure-App-Service%2FDemoApp%2Fmaster%2Fazuredeploy.json)

3. Fill in the values in the deployment page:

  ![](Images/azure-deploy-basic.png)

   * Resource group: 

     We suggest you create a new resource group and name it **DeveloperFinderRG**.

   * Location: 

     Web Apps on Linux are currently (2017/08) only available in the following regions. So, you must choose one of the regions below:

     *TODO: link to the actual doc which has the list*

     * West US
     * East US
     * West Europe
     * North Europe
     * South Central US
     * North Central US
     * Southeast Asia
     * East Asia
     * Australia East
     * Japan East
     * Brazil South
     * South India

  ![](Images/azure-deploy-settings.png)

   * Web App Name: 

     Use the name you chose at the start of these instructions that follows the **developer-finder-[suffix]** naming convention.

   * No-Linux Web App Location: 

     You **MUST choose a different region for the non-Linux web apps**, because they cannot be created in the same region and the same resource group.

   * OAuth Git Hub Client Id & Secret: 

     Use the client id and secret of the GitHub OAuth app.

   * OAuth LinkedIn Client Id & Secret: 

     Use the client id and secret of the LinkedIn OAuth app.

   * Database Admin Login Name: 

     It cannot be 'azure_superuser', 'admin', 'administrator', 'root', 'guest' or 'public'.

   * Database Admin Login Password: 

     This field should be between 8 and 128 characters long. Your password must contain characters from three of the following categories – English uppercase letters, English lowercase letters, numbers (0-9), and non-alphanumeric characters (!, $, #, %, etc.).

   * Ruby Chat Docker Image:

     Please keep the default value: *appsvc/demoapp-rubychat*.


   * Twilio Account SID & Auth Token & From Phone Number.

     Use the values you got from you Twilio account.

   * Source Code Repository URL:

     Use the URL of the repository you just cloned.

4. Check **I agree to the terms and conditions stated above**.

5. Click **Purchase**.

6. Wait until the ARM template deployment process completes.

*TODO: fail*