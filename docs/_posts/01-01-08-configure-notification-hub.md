---
title: Configure Notification Hub
description:
category: SETUP
optional: true
---

{% include header.md %}

1. Open the Notification Hub.

   ![]({{site.baseurl}}/img/deployment/azure-notification-hub.png)

2. Click **All Settings**, then click **Notification Services**.

   ![]({{site.baseurl}}/img/deployment/configure-notification-hub.png)

3. Configure **Google (GCM)**.

   For this step, you need a [Google account](https://accounts.google.com/SignUp) with a verified email address.

   * Log in to the [Firebase console](https://firebase.google.com/console/). Create a new Firebase project if you don't already have one.

   * After your project is created click **Add Firebase to your Android app** and follow the instructions provided.

     ![]({{site.baseurl}}/img/deployment/firebase-app-overview.png)			

   * Click the **cog**, then click **Project Settings** -> **CLOUD MESSAGING**.

     ![]({{site.baseurl}}/img/deployment/firebase-app-web-api-key.png)

     If the page says "Your project doesn't have a server key", click **Regenerate Key**.

     Copy the **Server key (legacy token)**. 

     > **Note**: The **Sender ID** will be used on the **Settings** page of the Android App.
     {: .blockquote .alert-info }

     > ![]({{site.baseurl}}/img/deployment/android-app-settings.png)

   * Paste the server key to the **API Key** input box below.

     ![]({{site.baseurl}}/img/deployment/configure-notification-hub-gcm.png)

     Click **Save**.

4. Configure **Apple (APNS)**:

   The [iOS simulator does not support push notifications](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/iOS_Simulator_Guide/TestingontheiOSSimulator.html), so for this step, you need a physical iOS device and an [Apple Developer Program membership](https://developer.apple.com/programs/ios/).

   - [Register an App ID for your app](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/MaintainingProfiles/MaintainingProfiles.html#//apple_ref/doc/uid/TP40012582-CH30-SW991). Create an explicit App ID (not a wildcard App ID) and for Bundle ID, use the exact Bundle ID that is in your iOS project. It is also crucial that you check the Push Notifications option.

   - Next, [configure push notifications](https://developer.apple.com/library/ios/documentation/IDEs/Conceptual/AppDistributionGuide/AddingCapabilities/AddingCapabilities.html#//apple_ref/doc/uid/TP40012582-CH26-SW6). You may create either a "Development" or "Distribution" SSL certificate.

   - On your Mac, launch **Keychain Access**. Open **Category** > **My Certificates**. Find the SSL certificate to export (that you downloaded earlier) and disclose its contents. Select only the certificate without selecting the private key, and [export it](https://support.apple.com/kb/PH20122?locale=en_US).

   - Click **Upload Certificate**. Upload the .p12 push certificate file you exported earlier. 

     ![]({{site.baseurl}}/img/deployment/configure-notification-hub-apns.png)

     > **Note**: Make sure to select **Sandbox** if you created a development push certificate for development and testing. 	Otherwise, choose **Production**.
     {: .blockquote .alert-info }

   - Click **Save**.