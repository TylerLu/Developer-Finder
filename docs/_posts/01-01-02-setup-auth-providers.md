---
title: Setup Authentication Providers
description:
category: SETUP
---

{% include header.md %}

## Register your app with Microsoft Account

> This topic is also available on [docs.microsoft.com](https://docs.microsoft.com/en-us/azure/app-service-mobile/app-service-mobile-how-to-configure-microsoft-authentication#a-nameregister-microsoft-account-aregister-your-app-with-microsoft-account)
{: .blockquote .alert-info }

1. Navigate to the [My Applications] page in the Microsoft Account Developer Center, and log on with your Microsoft account, if required.
1. Click **Add an app**, then type an application name, and click **Create application**.
1. Make a note of the **Application ID**, as you will need it later. 
1. Under "Platforms," click **Add Platform** and select "Web".
1. Under "Redirect URIs" supply the endpoint for your application, then click **Save**. 
   
   > **Note:**
   > Your redirect URI is the URL of your application appended with the path, */.auth/login/microsoftaccount/callback*. For example, `https://contoso.azurewebsites.net/.auth/login/microsoftaccount/callback`.   
   > Make sure that you are using the HTTPS scheme
   {: .blockquote .alert-info}

   > **Note:**
   > You will need to come back to this step after the deployment is completed to provide the Redirect URI
   {: .blockquote .alert-warning }

1. Under "Application Secrets", click **Generate New Password**. Make note of the value that appears. Once you leave the page, it will not be displayed again.

    > **Note:**
    > The password is an important security credential. Do not share the password with anyone or distribute it within a client application.
    {: .blockquote .alert-danger }

## Register your application with Azure Active Directory

> **Note:**
> This topic is also available on [docs.microsoft.com](https://docs.microsoft.com/en-us/azure/app-service-mobile/app-service-mobile-how-to-configure-active-directory-authentication#a-nameadvanced-aalternative-method-manually-configure-azure-active-directory-with-advanced-settings) 
{: .blockquote .alert-info}

2. Sign in to the [Azure classic portal] and navigate to **Active Directory**.
   
    ![]({{ site.baseurl }}/img/deployment/app-service-navigate-aad.png)
3. Select your directory, and then select the **Applications** tab at the top. Click **ADD** at the bottom to create a new app registration.
4. Click **Add an application my organization is developing**.
5. In the Add Application Wizard, enter a **Name** for your application and click the  **Web Application And/Or Web API** type. Then click to continue.
6. In the **SIGN-ON URL** box, paste the application URL you copied earlier. Enter that same URL in the **App ID URI** box. Then click to continue.
7. Once the application has been added, click the **Configure** tab. Edit the **Reply URL** under **Single Sign-on** to be the URL of your application appended with the path, */.auth/login/aad/callback*. For example, `https://contoso.azurewebsites.net/.auth/login/aad/callback`. Make sure that you are using the HTTPS scheme.
   
   > **Note:**
   > You will need to come back to this step after the deployment is completed to provide the Reply URL
   {: .blockquote .alert-warning }

    ![]({{ site.baseurl }}/img/deployment/app-service-aad-app-configure.png)

8. Click **Save**. Then copy the **Client ID** for the app. You will configure your application to use this later.
9. In the bottom command bar, click **View Endpoints**, and then copy the **Federation Metadata Document** URL and download that document or navigate to it in a browser.
10. Within the root **EntityDescriptor** element, there should be an **entityID** attribute of the form `https://sts.windows.net/` followed by a GUID specific to your tenant (called a "tenant ID"). Copy this value - it will serve as your **Issuer URL**. You will configure your application to use this later.

[Azure portal]: https://portal.azure.com
[My Applications]: http://go.microsoft.com/fwlink/p/?LinkId=262039
[Azure classic portal]: https://manage.windowsazure.com/