---
title: Run iOS mobile client
description: 
category: DEMO
---

{% include header.md %}

## How To: Run the iOS mobile client app for local execution and debugging on the iOS simulator##

1. Use Visual Studio 2015 to open the **src/Cloud/ContosoInsurance-Mobile.sln** Visual Studio Solution file.
   1.Set up your Mac computer to act as a remote build machine.
   1.	Click the **Tools** menu and select **Options**.
       1.Click **Xamarin**.
       1.Click **iOS Settings**.
       1.Click **Find Xamarin Mac Agent** and follow the wizard to connect your Mac.
       1.Click **OK**.
2. Configure the debugging target device according to the screenshot below.

   ![]({{site.baseurl}}/img/deployment/VS-iOS-Deployment-Settings.png)
3. Press **F5**.
4. Observe the iOS Simulator start on the Mac Agent and load the Contoso Insurance mobile app.

> **Note:** If you do not set a location for the mobile app it will fail with an exception.
{: .blockquote .alert-info}

1.  In the Simulator menu, click **Debug**, **Location**, **Custom Location**.

    ![]({{site.baseurl}}/img/deployment/iOS-Simulator-Location.png)

    1.Enter a **latitude** and **longitude**.
    2.Click **OK**.

## How To: Test Notifications on iOS devices

> **Note:** You must use a physical iOS device test notifications because the iOS simulator does not support push notifications.

1. Run the **ContosoInsurance.iOS** app on an iOS device.
2. Step-by-Step, submit a claim successfully.

	![]({{site.baseurl}}/img/deployment/ios-submit-a-claim.png)

3. Go to the Contoso Insurance web site.
4. Search the claim that you just submitted above and go to the claim detail page.
5. **Approve** or **Reject** the claim.

	![]({{site.baseurl}}/img/deployment/approve-a-claim.png)	

6. The iOS device will display the notification.

	![]({{site.baseurl}}/img/deployment/ios-display-notification.png)	