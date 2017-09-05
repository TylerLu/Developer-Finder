---
title: Create customer user accounts
description:
category: SETUP
---

{% include header.md %}

The customer user accounts used to sign into the mobile app are Microsoft Accounts.  Each time you sign into the mobile app, the system checks to see if you have previously signed in with the Microsoft Account and proceeds like this:

- If you **have not** signed in to the mobile app with the Microsoft Account before, the system creates records in the SQL databases associated with the account and uploads the customers sample vehicle images to blob storage.  Then, the mobile app displays the vehicles page in the mobile app.
- If you **have** signed in with the Microsoft Account before, the mobile app loads the vehicles page in the mobile app.

  >**Note:**  The following app setting in the api web app's web.config file controls if data is auto seeded for new users.  If you do not want to auto seed data for new users set this value to false.
  >
  >```xml
  > <add key="AutoSeedUserData" value="true"/>
  >```
  > If you change this app setting value after you deploy the web api app and you deploy again with the ARM template then you will have to manually change it again.
  {: .blockquote .alert-info }