# App Service Demo Project

## TODO

1. Ensure that people who run the demo have name, company and location populated in their profile so we can get the data when we run a query.

## Deployment

### Choose a name for the app

The name of app is developer finder. We suggest use a name like below for you instance:

​	`developer-finder-<suffix>`

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

     [](Images/developer-finder.png)

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

### Deploy the Azure Components from GitHub

1. Fork this repository to your GitHub account.

2. Click the Deploy to Azure Button:

   [![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FTylerLu%2FDeveloper-Finder%2Fmaster%2Fazuredeploy.json)

3. Fill in the values in the deployment page and select the **I agree to the terms and conditions stated above** checkbox.

## ARM Template

This public preview is currently only available in the following regions:
West US
East US
West Europe
North Europe
South Central US
North Central US
Southeast Asia
East Asia
Australia East
Japan East
Brazil South
South India


### Let's Chat

1. Create a MongoDB.

2. Create a Web App on Linux

    App settings:

    * DOCKER_CUSTOM_IMAGE_NAME: tylerlu/lets-chat
    * LCB_DATABASE_URI: <MongoDB Connection String>

### Reset a demo user account

These steps delete all the data in the database for a user.  This allows you to log in with the user and do any demo steps entirely from scratch.

1. Browse to the profile page.

  http://< server >/profile

2. Copy the **ID** at the end of the URL, in this example the ID is 243.

  **Example:** http://< server >/profile/243

3. Replace the placeholder for the @user_id variable with the UserId you copied from the profile page URL.
4. Execute the following SQL statements:

  ```
  SET @user_id=<User Id you copied from profile page URL, for example: 243>;
  DELETE FROM `my_sql_db`.`friend` WHERE `user_id`=@user_id ;
  DELETE FROM `my_sql_db`.`friend` WHERE `friend_id`=@user_id;
  DELETE FROM `my_sql_db`.`position` WHERE `profile_id`=@user_id;
  DELETE FROM `my_sql_db`.`profile` WHERE `id`=@user_id;
  DELETE FROM `my_sql_db`.`usersocialauth` WHERE `user_id`=@user_id;
  DELETE FROM `my_sql_db`.`user` WHERE `id`=@user_id;
  ```
