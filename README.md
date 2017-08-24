# App Service Demo Project

Developer finder is ….

In this sample ….

**Table of contents**

* [Architecture](#architecture)
  * [Developer Finder App](#developer-finder-app)
  * [Chat App](#chat-app)
* [Deployment](#deployment)
  * [Choose a name for the app](#choose-a-name-for-the-app)
  * [Register OAuth applications](#register-oauth-applications)
  * [GitHub Authorization](#gitHub-authorization)
  * [Deploy the Azure Components](deploy-the-azure-components)
  * [Set up the CI/CD](#set-up-the-ci-cd)
  * [Validate deployment](#validate-deployment)
* [How to use](#how-to-use)



## Architecture 

![](Images/architecture.jpg)

### Developer Finder App



1. Backend - A Python App. 

   * It uses the [Flask framework](http://flask.pocoo.org/).
   * It uses [Python Social Auth](https://python-social-auth.readthedocs.io/en/latest/) library to enable GitHub/LinkedIn accounts login.
   * It uses [peewee](http://docs.peewee-orm.com/en/latest/) ORM to access the MySQL Database

   Web APIs:

   | Action | Path                    | Description |
   | ------ | ----------------------- | ----------- |
   | GET    | /api/me                 |             |
   | POST   | /api/me                 |             |
   | GET    | /api/connected-accounts |             |
   |        |                         |             |
   |        |                         |             |
   |        |                         |             |
   |        |                         |             |
   |        |                         |             |
   |        |                         |             |

2. Frontend - An AngularJSApp.

3. Nginx

   ​

### Chat App

This Chat App is not a real chat app. It is very simple, and is only for demo and internal use.

There is no authorization/authentication module, and no UI pages. 

The following Web APIs are exposed for the Developer Finder App:

| Action | Path                             | Description         |
| ------ | -------------------------------- | ------------------- |
| POST   | /api/messages                    | Send a new message  |
| GET    | /api/messages/summary?to=2       | Get message summary |
| GET    | /api/messages/unread?from=1&to=2 | Get unread messages |

It uses a PostgreSQL database.

### App Services

1. Function App
2. Logic App
3. Application Insight

### Databases

1. MySQL Database - developer_finder

   | Table          | Description |
   | -------------- | ----------- |
   | user           |             |
   | usersocialauth |             |
   | profile        |             |
   | position       |             |
   | Friend         |             |
   |                |             |

   ​

2. PostgreSQL Database - chat

   | Table                | Description |
   | -------------------- | ----------- |
   | messages             |             |
   | message_read_records |             |

   ​

## Deployment

### Choose a name for the app

The name of solution is Developer Finder. We suggest use a name like below for you instance:

​	**developer-finder-*\<suffix\>***

The suffix is used to avoid azure resource naming confiction. It is strongly recommand you only use  lowercase letters (a-z), numbers (0-9), and hyphen (-). 

Below are some examples:

* developer-finder-contoso (company name is used)
* developer-finder-0901-1200 (date and time are used)

We will use the first example to show you how to deploy the solution to Azure. In the end, you can visit it by:

​	https://developer-finder-contoso.azurewebsites.net

### Register OAuth applications

#### Register GitHub OAuth application

1. Open https://github.com/settings/applications/new

2. Fill the form:

   * Application name: **Developer Finder**
   * Homepage URL: **https://developer-finder-contoso.azurewebsites.net**
   * Authorization callback URL: **https://developer-finder-contoso.azurewebsites.net/complete/github/**

   Click **Register application**.

3. Copy aside the **ClientID** and **Client Secret**. 

   > Note: They will be used as **SOCIAL_AUTH_GITHUB_KEY** and **SOCIAL_AUTH_GITHUB_SECRET**.

#### Register LinkedIn OAuth application

1. Open https://www.linkedin.com/developer/apps/new

2. Fill the form:

   * Name: **Developer Finder**

   * Application Logo: download and use the image below

     ![](Images/developer-finder.png)

   * Website URL: **https://developer-finder-contoso.azurewebsites.net**

   Input other required fiedls, then click **Submit**.

3. Add OAuth 2 Authorized Redirect URL: **https://developer-finder-contoso.azurewebsites.net/complete/linkedin-oauth2/**

   Click **Upate**.

4. Copy aside the **ClientID** and **Client Secret**. 

   > Note: They will be used as **SOCIAL_AUTH_LINKEDIN_OAUTH2_KEY** and **SOCIAL_AUTH_LINKEDIN_OAUTH2_SECRET**.

### GitHub Authorization

1. Generate Token

   - Open https://github.com/settings/tokens in your web browser.

   - Sign into your GitHub account where you forked this repository.

   - Click **Generate Token**

   - Enter a value in the **Token description** text box

   - Select the following s (your selections should match the screenshot below):

     - repo (all) -> repo:status, repo_deployment, public_repo

     - admin:repo_hook -> read:repo_hook

       ![](Images/github-new-personal-access-token.png)

2. Add the GitHub Token to Azure in the Azure Resource Explorer

   * Open https://resources.azure.com/providers/Microsoft.Web/sourcecontrols/GitHub in your web browser.

   * Log in with your Azure account.

   * Selected the correct Azure subscription.

   * Select **Read/Write** mode.

   * Click **Edit**.

   * Paste the token into the **token parameter**.

     ![](Images/update-github-token-in-azure-resource-explorer.png)

   * Click **PUT**.

### Deploy the Azure Components

1. Fork this repository to your GitHub account.

2. Click the **Deploy to Azure** below:

   [![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FTylerLu%2FDeveloper-Finder%2Fmaster%2Fazuredeploy.json)

3. Fill in the values in the deployment page:

  ![](Images/azure-deploy-basic.png)

   * Resource group: 

     We suggest you to create a new group.

   * Location: 

     It will also be used for Web App on Linux which is currently (2017/08) only available in the following regions. So, please choose one of the below:

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

     Use the name you chose at the start of this chapter - **developer-finder-contoso**

   * Non Linux Web App Location: 

     Please DO choose a different region for non-Linux web apps, as they could not be created in the same region and the same resource group.

   * OAuth Git Hub Client Id & Secret: 

     Use the client id and secrect of the GitHub OAuth app.

   * OAuth LinkedIn Client Id & Secret: 

     Use the client id and secret of the LinkedIn OAuth app.

   * Database Admin Login Name: 

     It cannot be 'azure_superuser', 'admin', 'administrator', 'root', 'guest' or 'public'.

   * Database Admin Login Password: 

     This field should be between 8 and 128 characters long. Your password must contain characters from three of the following categories – English uppercase letters, English lowercase letters, numbers (0-9), and non-alphanumeric characters (!, $, #, %, etc.).

   * Ruby Chat Docker Image

   * Source Code Repository URL:

     Use the URL of the repository you just cloned.

4. Select the **I agree to the terms and conditions stated above** checkbox.

5. Click **Purchase**.

### Set up the CI/CD

1. Navigate to the resource group you just created and deployed, then click the developer-finder-contoso Web App:

![](Images/web-app.png)

2. Click **Continous Delivery**, then click **Configure**.

   ![](Images/web-app-cd.png)

3. Click **Choose container registry**, the preconfigured private registry will be loaded.

   [](Images/configure-cd-01.png)

   Click **Save** (the right one).

4. Click **Configure continuous delivery**:

   ![](Images/configure-cd-02.png)

   * Code repository: choose GitHub
   * Repository: choose the repositoy you just forked.
   * Branch: choose master
   * Dockerfile path: change it to **Dockerfile**

   Click **Save **(the right one).

5. Click **Select a Team Service account**:

   ![](Images/configure-cd-03.png)

   * Create a new account or using an existing one.
   * Create a new project or using an existing one.

   Click **Save **(the right one).

6. Click **Save**. 

   > Note: It takes a few minute to finish:
   >
   > ![](Images/configure-cd-done.png)

### Validate deployment

Open https://developer-finder-contoso.azurewebsites.net, you will see the login page:

![](Images/web-app-login.png)

> Note: If you got an "502 Bad Gateway" error, please wait for a few minute. 

## How to use



Ensure that people who run the demo have name, company and location populated in their profile so we can get the data when we run a query.



### Flow



### Reset a demo user account

These steps delete all the data in the database for a user.  This allows you to log in with the user and do any demo steps entirely from scratch.



### CI/CD ?