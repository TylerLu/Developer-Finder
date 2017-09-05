---
title: Hockey App Integration
description:
author: Cory Fowler
category: RESOURCES
---

{% include header.md %}

## How To: Integrate Hockey App with the Xamarin App for deployment and logging ##

### Integrate Hockey App with the Xamarin App to iOS ###
1. Open the [Hockeyapp](https://www.hockeyapp.net/ "Hockeyapp") site, if you have not already created a Hockey App developer account, please sign up.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-SignUp.png)

2. Log in to Hockey App using the developer user that you registered above, and go to the [Hockey App dashboard](https://rink.hockeyapp.net/manage/dashboard "Hockey App dashboard").

3. Click the **New App** button.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-NewApp.png)

4. Click the create the App **manually** instead link.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-ManuallyCreate.png)

5. Enter your app information and click the **Save** button.

   ![]({{site.baseurl}}/img/deployment/HockeyApp-CreatDetail.png)

6. Copy the **App Id**, you will use it later.
   ![]({{site.baseurl}}/img/deployment/HockeyApp-CopyAppId.png)

7. Use Visual Studio 2015 to open the **ContosoInsurance-Mobile.sln** Visual Studio Solution.

8. Build the iOS project, and upload your iOS **.ipa** file to the iOS Hockey App that you created above.

   > **Note:** Be sure that tester's iOS UDID has been included in your Apple provision file before build.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-AddNewAppFile.png)

9. Enter the release notes for the build, then click **Next Step**

   ![]({{site.baseurl}}/img/deployment/HockeyApp-AddNewAppStep1.png)

10.  Configure the **Status** according to the screen shot below, then click **Next Step**.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-AddNewAppStep2.png)

11.  Configure **Notify** according to the screen shot below, then click **Send**.

   ![]({{site.baseurl}}/img/deployment/HockeyApp-AddNewAppStep3.png)

12.  The confirmation screen will look like this after you have uploaded the file and configured the App successfully.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-AddNewAppFileSuccessfully.png)

13.  Click the **Invite User** button to invite a test user to test the App.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-InviteUser.png)

14.  Enter the tester's email address and click **Save**.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-InviteUserTest.png)

### Integrate Hockey App with the Xamarin App to Android ###
1. Log in to Hockey App using the developer user that you registered above, and go to the [Hockey App dashboard](https://rink.hockeyapp.net/manage/dashboard "Hockey App dashboard").
2. Click the **New App** button.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-NewApp.png)

3. Click the create the App **manually** instead link.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-ManuallyCreate.png)

4. Enter your app information and click the **Save** button.

   ![]({{site.baseurl}}/img/deployment/HockeyApp-CreatDetailAndroid.png)

5. Copy the **App Id**, you will use it later.

   ![]({{site.baseurl}}/img/deployment/HockeyApp-CopyAppIdAndroid.png)

6. Use Visual Studio 2015 to open the **ContosoInsurance-Mobile.sln** Visual Studio Solution.

7. Build the Android project, and upload the Android **.apk** file to the Android Hockey App that you created above.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-AddNewAppFileAndroid.png)

8. Enter the release notes for the build, then click **Next Step**

   ![]({{site.baseurl}}/img/deployment/HockeyApp-AddNewAppStep1.png)

9. Configure the **Status** according to the screen shot below, then click **Next Step**.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-AddNewAppStep2.png)

10. Configure **Notify** according to the screen shot below, then click **Send**.

   ![]({{site.baseurl}}/img/deployment/HockeyApp-AddNewAppStep3.png)

11. The confirmation screen will look like this after you have uploaded the file and configured the App successfully.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-AddNewAppFileSuccessfullyAndroid.png)

12. Click the **Invite User** button to invite a test user to test the App.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-InviteUser.png)

13.  Enter the tester's email address and click **Save**.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-InviteUserTest.png)

### Download the iOS Hockey App to an iOS device and test it ###
1. Open the [Hockey App dashboard](https://rink.hockeyapp.net/manage/dashboard "Hockey App dashboard"), and log into Hockey App using the tester user you sent the email to.
2. Open the **ContosoInsurance.iOS** Hockey App, and Click **Download**.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-DownloadOS.png)

3. **Install** the app with iTunes.

   > **Note:** Be sure that your device UDID has been included in your Apple provision file.

4. Open the **Settings** page and enter the iOS App Id that you copied above.

	![]({{site.baseurl}}/img/deployment/HockeyApp-PastAppId.png)

5. Touch the **Save** button, and **restart** the app. 
	
   > **Note:** You must restart the App to enable the new Hockey App Id after saving the configuration value.

6. Test.

### Download the Android Hockey App to an Android device and test it ###
1. Open the [Hockey App dashboard](https://rink.hockeyapp.net/manage/dashboard "Hockey App dashboard"), and log into Hockey App using the tester user you sent the email to.
2. Open the **ContosoInsurance.Droid** Hockey App, and Click **Download**.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-DownloadAndroid.png)

3. Copy the .apk file to your Android device and install it.

4. Open the **Settings** page and enter the Android App Id that you copied above.

	![]({{site.baseurl}}/img/deployment/HockeyApp-PastAppIdAndroid.png)

5. Touch the **Save** button, and **restart** the app. 
	
   > **Note:** You must restart the App to enable the new Hockey App Id after saving the configuration value.

6. Test.

### Explore Hockey App Crashes/Events ###
1. Open the [Hockey App dashboard](https://rink.hockeyapp.net/manage/dashboard "Hockey App dashboard"), and log into Hockey App using the developer user that you created above.
2. Open the Hockey App you wish to explore and the click **Crashes/Events** tab to see the logs.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-events.png)

3. You can explore HockeyApp data in Application Insights!  To do this follow the steps in this [link](https://azure.microsoft.com/en-us/documentation/articles/app-insights-hockeyapp-bridge-app/ "Exploring HockeyApp data in Application Insights") to configure the Hockey App Bridge to Application Insights.

    ![]({{site.baseurl}}/img/deployment/HockeyApp-Insight.png)
