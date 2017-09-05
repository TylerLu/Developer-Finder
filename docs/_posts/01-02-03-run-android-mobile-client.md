---
title: Run android mobile client
description:
category: DEMO
---

{% include header.md %}

## How To: Run the Android mobile client app for local execution and debugging on the Android simulator

1. Use Visual Studio 2015 to open the **src/Cloud/ContosoInsurance-Mobile.sln** Visual Studio Solution file.
   
2. Configure the debugging target device according to the screenshot below.

   ![]({{site.baseurl}}/img/deployment/VS-Android-Deployment-Settings.png)
3. Press **F5**.
4. Observe the Android Simulator start and load the Contoso Insurance mobile app.

## How To: Test Notifications on the Android simulator/device

> **Note:** Make sure [Google Play Service](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en "Google Play Service") has been installed on your Android simulator/device before testing notifications.
{: .blockquote .alert-info}

1. Run the **ContosoInsurance.Droid** project on the Android simulator.
2. Step-by-Step, submit a claim successfully.

	![]({{site.baseurl}}/img/deployment/Android-submit-a-claim.png)

3. Go to the Contoso Insurance web site.
4. Search the claim that you just submitted above and go to the claim detail page.
5. **Approve** or **Reject** the claim.

	![]({{site.baseurl}}/img/deployment/approve-a-claim.png)	

6. The Android simulator will display the notification on the status bar.

    ![]({{site.baseurl}}/img/deployment/android-display-notification.png)

## How To: Take an new Picture on the Android simulator

If you want to print out the demo images for license plates, insurance cards, and driver's licenses and use the simulator to take a picture of them, here's how to do it.

>**Note:** Here, we use the **5" KitKat(4.4) XXHDPI Phone (Android 4.4 - API19)** simulator to demonstrate these steps.
{: .blockquote .alert-info}

>**Note:** You must configure your simulator to use a web cam attached to your computer to take a picture.  See these [instructions](https://developer.android.com/studio/run/managing-avds.html) to learn how to do this.
{: .blockquote .alert-warning}

1. Open the ContosoInsurance App in the Android simulator.

2. Click the **Camera** button.

	![]({{site.baseurl}}/img/deployment/Android-camerabuttonClick.png)

3. Click the **More** button on the bottom bar.

	![]({{site.baseurl}}/img/deployment/Android-galleryClickMenu.png)

4. Click the **Capture picture** button.

	![]({{site.baseurl}}/img/deployment/Android-galleryClickCapturePicture.png)

5. Take a new picture.

6. Select the new picture you just took.

	>**Note:** In this example there was no web cam attached to the Android Simulator, that's why you see the checkerboard image.  When you have a web cam attached to your simulator you will see the image of what the web cam is looking at.
	{: .blockquote .alert-info}

	![]({{site.baseurl}}/img/deployment/Android-gallerySelectPicture.png)